import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Search, 
  Filter, 
  MapPin, 
  Building, 
  Calendar, 
  Star, 
  Bookmark,
  BookmarkCheck,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Heart,
  ExternalLink,
  ChevronDown,
  X,
  Bell,
  CheckCircle,
  Send,
  Loader2
} from 'lucide-react';

export function JobSearchEnhanced() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    company: '',
    experience: '',
    salary: [0, 200000],
    jobType: ''
  });
  const [savedJobs, setSavedJobs] = useState(new Set([1, 3]));
  const [showFilters, setShowFilters] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [appliedJobs, setAppliedJobs] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationData, setApplicationData] = useState({
    coverLetter: '',
    resumeFile: null,
    additionalInfo: ''
  });

  const jobs = [
    {
      id: 1,
      title: 'Software Development Engineer',
      company: 'Amazon',
      logo: '📦',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '$120k - $160k',
      posted: '2 days ago',
      applicants: 245,
      matchScore: 95,
      skills: ["Python", "AWS", "React", "System Design"],
      description: 'Join our team to build scalable systems serving millions of customers worldwide. We are looking for passionate engineers to work on cutting-edge technologies.',
      benefits: ["Health Insurance", "Stock Options", "Remote Work", "Learning Budget"],
      rating: 4.3,
      requirements: ["Bachelor's degree in Computer Science or related field", "Strong programming skills in Python or Java", "Experience with cloud technologies preferred"],
      // Enhanced job drive details
      companyLegalName: 'Amazon Development Centre India Private Limited',
      companyState: 'Karnataka',
      industryType: 'Information Technology',
      companyWebsite: 'https://amazon.com',
      hiringLocationAddress: 'Embassy Tech Village, Outer Ring Road, Bangalore, Karnataka 560103',
      isWFH: false,
      minTotalExperience: 0,
      maxTotalExperience: 2,
      minRelevantExperience: 0,
      maxRelevantExperience: 1,
      minCTC: 1200,
      maxCTC: 1600,
      variableCTC: 200,
      numberOfVacancies: 25,
      noticePeriod: 'Immediate',
      qualificationRequired: 'B.Tech/B.E in Computer Science or related field with minimum 7.0 CGPA',
      passOutBatch: '2024, 2025',
      recruitmentRounds: 3,
      round1Detail: 'Online Assessment - Data Structures, Algorithms, and System Design',
      round2Detail: 'Technical Interview - Coding and problem-solving with senior engineers',
      round3Detail: 'Bar Raiser Interview - Leadership principles and cultural fit',
      segment: 'IT Services',
      workShiftType: 'Day Shift',
      domain: 'Software Development',
      deadline: '2024-12-30'
    },
    {
      id: 2,
      title: 'Frontend Engineer',
      company: 'Google',
      logo: '🔍',
      location: 'Mountain View, CA',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '$130k - $180k',
      posted: '1 day ago',
      applicants: 189,
      matchScore: 88,
      skills: ["React", "TypeScript", "JavaScript", "CSS"],
      description: 'Build user interfaces that billions of people use every day. Work with cutting-edge technologies and collaborate with talented engineers.',
      benefits: ["Health Insurance", "Free Meals", "Gym Access", "Learning Budget"],
      rating: 4.5,
      requirements: ["3+ years of frontend development experience", "Proficiency in React and TypeScript", "Strong understanding of web technologies"],
      // Enhanced job drive details
      companyLegalName: 'Google India Private Limited',
      companyState: 'Karnataka',
      industryType: 'Information Technology',
      companyWebsite: 'https://google.com',
      hiringLocationAddress: 'Bagmane Constellation Business Park, Bangalore, Karnataka 560025',
      isWFH: false,
      minTotalExperience: 1,
      maxTotalExperience: 3,
      minRelevantExperience: 1,
      maxRelevantExperience: 2,
      minCTC: 1300,
      maxCTC: 1800,
      variableCTC: 300,
      numberOfVacancies: 15,
      noticePeriod: '1 month',
      qualificationRequired: 'B.Tech/B.E in Computer Science, IT, or related field with minimum 8.0 CGPA',
      passOutBatch: '2024, 2025',
      recruitmentRounds: 4,
      round1Detail: 'Online Coding Assessment - Frontend development challenges',
      round2Detail: 'Technical Interview - JavaScript, React, and system architecture',
      round3Detail: 'Design Interview - UI/UX design principles and implementation',
      round4Detail: 'Final Interview - Googleyness and leadership assessment',
      segment: 'Product',
      workShiftType: 'Flexible',
      domain: 'Frontend Development',
      deadline: '2024-12-28'
    },
    {
      id: 3,
      title: 'Product Manager Intern',
      company: 'Microsoft',
      logo: '🏢',
      location: 'Redmond, WA',
      type: 'Internship',
      experience: '0-1 years',
      salary: '$8k - $10k/month',
      posted: '3 days ago',
      applicants: 156,
      matchScore: 82,
      skills: ["Product Strategy", "Data Analysis", "User Research", "Agile"],
      description: 'Lead product initiatives and work with engineering teams to deliver innovative solutions. Perfect opportunity for students to gain real-world experience.',
      benefits: ["Housing Stipend", "Health Insurance", "Mentorship", "Return Offer"],
      rating: 4.2,
      requirements: ["Currently pursuing MBA or related degree", "Interest in product management", "Strong analytical skills"]
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Netflix',
      logo: '🎬',
      location: 'Los Gatos, CA',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '$140k - $190k',
      posted: '5 days ago',
      applicants: 203,
      matchScore: 76,
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      description: 'Use data to improve our recommendation algorithms and user experience. Work with large-scale data and machine learning models.',
      benefits: ["Unlimited PTO", "Stock Options", "Netflix Subscription", "Remote Work"],
      rating: 4.4,
      requirements: ["PhD or Master's in Data Science, Statistics, or related field", "Experience with machine learning frameworks", "Strong programming skills in Python"]
    },
    {
      id: 5,
      title: 'iOS Developer',
      company: 'Apple',
      logo: '🍎',
      location: 'Cupertino, CA',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '$125k - $170k',
      posted: '1 week ago',
      applicants: 178,
      matchScore: 74,
      skills: ["Swift", "iOS", "Xcode", "UI/UX"],
      description: 'Develop innovative iOS applications that delight millions of users. Work on next-generation mobile experiences.',
      benefits: ["Employee Discount", "Health Insurance", "Stock Options", "Gym Access"],
      rating: 4.1,
      requirements: ["3+ years of iOS development experience", "Proficiency in Swift and Objective-C", "Published apps on the App Store"]
    }
  ];

  const toggleSaveJob = (jobId) => {
    const newSavedJobs = new Set(savedJobs);
    if (newSavedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
    } else {
      newSavedJobs.add(jobId);
    }
    setSavedJobs(newSavedJobs);
  };

  const handleApplyToJob = (job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const submitApplication = () => {
    if (selectedJob) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setAppliedJobs(prev => new Set([...prev, selectedJob.id]));
        setShowApplicationModal(false);
        setIsLoading(false);
        setSelectedJob(null);
        setApplicationData({ coverLetter: '', resumeFile: null, additionalInfo: '' });
      }, 2000);
    }
  };

  const handleSearch = () => {
    let filtered = jobs;

    // Search query filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Location filter
    if (filters.location.trim()) {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Company filter
    if (filters.company.trim()) {
      filtered = filtered.filter(job => 
        job.company.toLowerCase().includes(filters.company.toLowerCase())
      );
    }

    // Experience filter
    if (filters.experience) {
      const expMap = {
        'entry': ["0-1 years", "0-2 years"],
        'mid': ["1-3 years", "2-4 years"],
        'senior': ["3+ years", "5+ years"]
      };
      if (expMap[filters.experience]) {
        filtered = filtered.filter(job => 
          expMap[filters.experience].some(exp => job.experience.includes(exp))
        );
      }
    }

    // Job type filter
    if (filters.jobType) {
      const typeMap = {
        'fulltime': 'Full-time',
        'internship': 'Internship',
        'contract': 'Contract',
        'remote': 'Remote'
      };
      filtered = filtered.filter(job => 
        job.type === typeMap[filters.jobType] || 
        (filters.jobType === 'remote' && job.location.includes('Remote'))
      );
    }

    // Salary filter
    const [minSalary, maxSalary] = filters.salary;
    if (minSalary > 0 || maxSalary < 200000) {
      filtered = filtered.filter(job => {
        const salaryMatch = job.salary.match(/\$(\d+)k?\s*-\s*\$(\d+)k?/);
        if (salaryMatch) {
          let jobMin = parseInt(salaryMatch[1]);
          let jobMax = parseInt(salaryMatch[2]);
          
          // Convert to full numbers if 'k' format
          if (job.salary.includes('k')) {
            jobMin *= 1000;
            jobMax *= 1000;
          }
          
          return jobMin >= minSalary && jobMax <= maxSalary;
        }
        return true;
      });
    }

    // Sort results
    switch (sortBy) {
      case 'recent':
        filtered.sort((a, b) => {
          const getTimeValue = (timeStr) => {
            if (timeStr.includes('day')) return parseInt(timeStr);
            if (timeStr.includes('week')) return parseInt(timeStr) * 7;
            return 999;
          };
          return getTimeValue(a.posted) - getTimeValue(b.posted);
        });
        break;
      case 'salary':
        filtered.sort((a, b) => {
          const getSalaryValue = (salaryStr) => {
            const match = salaryStr.match(/\$(\d+)k?/);
            if (match) {
              let value = parseInt(match[1]);
              return salaryStr.includes('k') ? value * 1000 : value;
            }
            return 0;
          };
          return getSalaryValue(b.salary) - getSalaryValue(a.salary);
        });
        break;
      case 'match':
        filtered.sort((a, b) => b.matchScore - a.matchScore);
        break;
      default: // relevance
        // Keep original order as it's already sorted by relevance
        break;
    }

    setFilteredJobs(filtered);
  };

  // Auto-search when query or filters change
  useEffect(() => {
    handleSearch();
  }, [searchQuery, filters, sortBy]);

  // Initialize with all jobs
  useEffect(() => {
    setFilteredJobs(jobs);
  }, []);

  const getMatchScoreColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      company: '',
      experience: '',
      salary: [0, 200000],
      jobType: ''
    });
    setSearchQuery('');
  };

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search for jobs, companies, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="h-12"
              >
                <Filter className="size-4 mr-2" />
                Filters
                {showFilters && <X className="size-4 ml-2" />}
              </Button>
              <Button 
                className="h-12"
                onClick={handleSearch}
              >
                <Search className="size-4 mr-2" />
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 p-4 bg-accent/50 rounded-lg space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input 
                    placeholder="e.g. San Francisco" 
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input 
                    placeholder="e.g. Google" 
                    value={filters.company}
                    onChange={(e) => setFilters({...filters, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Experience</label>
                  <Select 
                    value={filters.experience} 
                    onValueChange={(value) => setFilters({...filters, experience: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                      <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Job Type</label>
                  <Select 
                    value={filters.jobType} 
                    onValueChange={(value) => setFilters({...filters, jobType: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fulltime">Full-time</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Salary Range: ${filters.salary[0].toLocaleString()} - ${filters.salary[1].toLocaleString()}
                </label>
                <Slider
                  value={filters.salary}
                  onValueChange={(value) => setFilters({...filters, salary: value})}
                  max={200000}
                  min={0}
                  step={5000}
                  className="w-full"
                />
              </div>

              <div className="flex justify-end">
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Job Results */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">
              {filteredJobs.length} Jobs Found
            </h2>
            <Select 
              value={sortBy} 
              onValueChange={setSortBy}
            >
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="salary">Highest Salary</SelectItem>
                <SelectItem value="match">Best Match</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredJobs.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Search className="size-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </CardContent>
            </Card>
          ) : (
            filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="size-12 bg-accent rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                        {job.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-lg truncate">{job.title}</h3>
                          <Badge className={`${getMatchScoreColor(job.matchScore)} text-xs`}>
                            {job.matchScore}% match
                          </Badge>
                          {appliedJobs.has(job.id) && (
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              <CheckCircle className="size-3 mr-1" />
                              Applied
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Building className="size-4" />
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="size-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="size-4" />
                            {job.posted}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {job.skills.slice(0, 4).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {job.skills.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{job.skills.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSaveJob(job.id)}
                      >
                        {savedJobs.has(job.id) ? (
                          <BookmarkCheck className="size-4 text-blue-500" />
                        ) : (
                          <Bookmark className="size-4" />
                        )}
                      </Button>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{job.salary}</p>
                        <p className="text-xs text-muted-foreground">{job.type}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="size-4" />
                        {job.applicants} applicants
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="size-4" />
                        {job.rating}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                              <span className="text-2xl">{job.logo}</span>
                              <div>
                                <h3>{job.title}</h3>
                                <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                                {job.deadline && (
                                  <p className="text-xs text-red-600 font-medium">Application Deadline: {job.deadline}</p>
                                )}
                              </div>
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-medium mb-2">About the Role</h4>
                              <p className="text-sm text-muted-foreground">{job.description}</p>
                            </div>

                            {/* Company Details */}
                            {job.companyLegalName && (
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-medium mb-3">Company Information</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="font-medium">Legal Name:</span>
                                    <p className="text-muted-foreground">{job.companyLegalName}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium">Industry:</span>
                                    <p className="text-muted-foreground">{job.industryType}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium">State:</span>
                                    <p className="text-muted-foreground">{job.companyState}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium">Website:</span>
                                    <a href={job.companyWebsite} target="_blank" rel="noopener noreferrer" 
                                       className="text-blue-600 hover:underline flex items-center gap-1">
                                      Visit Website
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Job Details */}
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="font-medium mb-3">Position Details</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="font-medium">Job Type:</span>
                                  <p className="text-muted-foreground">{job.type}</p>
                                </div>
                                {job.workShiftType && (
                                  <div>
                                    <span className="font-medium">Work Shift:</span>
                                    <p className="text-muted-foreground">{job.workShiftType}</p>
                                  </div>
                                )}
                                {job.numberOfVacancies && (
                                  <div>
                                    <span className="font-medium">Vacancies:</span>
                                    <p className="text-muted-foreground">{job.numberOfVacancies} positions</p>
                                  </div>
                                )}
                                {job.noticePeriod && (
                                  <div>
                                    <span className="font-medium">Notice Period:</span>
                                    <p className="text-muted-foreground">{job.noticePeriod}</p>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Address */}
                            {job.hiringLocationAddress && (
                              <div>
                                <h4 className="font-medium mb-2">Work Location</h4>
                                <p className="text-sm text-muted-foreground">{job.hiringLocationAddress}</p>
                                {job.isWFH && (
                                  <Badge className="bg-blue-100 text-blue-700 mt-2">
                                    Work From Home Available
                                  </Badge>
                                )}
                              </div>
                            )}

                            {/* Experience & Qualifications */}
                            <div>
                              <h4 className="font-medium mb-2">Experience & Qualifications</h4>
                              <div className="space-y-3 text-sm">
                                {job.qualificationRequired && (
                                  <div>
                                    <span className="font-medium">Education:</span>
                                    <p className="text-muted-foreground mt-1">{job.qualificationRequired}</p>
                                  </div>
                                )}
                                {job.passOutBatch && (
                                  <div>
                                    <span className="font-medium">Eligible Batches:</span>
                                    <p className="text-muted-foreground mt-1">{job.passOutBatch}</p>
                                  </div>
                                )}
                                <div className="grid grid-cols-2 gap-4">
                                  {job.minTotalExperience !== undefined && (
                                    <div>
                                      <span className="font-medium">Total Experience:</span>
                                      <p className="text-muted-foreground">{job.minTotalExperience}-{job.maxTotalExperience} years</p>
                                    </div>
                                  )}
                                  {job.minRelevantExperience !== undefined && (
                                    <div>
                                      <span className="font-medium">Relevant Experience:</span>
                                      <p className="text-muted-foreground">{job.minRelevantExperience}-{job.maxRelevantExperience} years</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Recruitment Process */}
                            {job.recruitmentRounds && (
                              <div>
                                <h4 className="font-medium mb-3">Recruitment Process ({job.recruitmentRounds} Rounds)</h4>
                                <div className="space-y-3">
                                  {job.round1Detail && (
                                    <div className="flex gap-3">
                                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">1</div>
                                      <div className="flex-1">
                                        <p className="text-sm font-medium">Round 1</p>
                                        <p className="text-xs text-muted-foreground">{job.round1Detail}</p>
                                      </div>
                                    </div>
                                  )}
                                  {job.round2Detail && (
                                    <div className="flex gap-3">
                                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">2</div>
                                      <div className="flex-1">
                                        <p className="text-sm font-medium">Round 2</p>
                                        <p className="text-xs text-muted-foreground">{job.round2Detail}</p>
                                      </div>
                                    </div>
                                  )}
                                  {job.round3Detail && (
                                    <div className="flex gap-3">
                                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">3</div>
                                      <div className="flex-1">
                                        <p className="text-sm font-medium">Round 3</p>
                                        <p className="text-xs text-muted-foreground">{job.round3Detail}</p>
                                      </div>
                                    </div>
                                  )}
                                  {job.round4Detail && (
                                    <div className="flex gap-3">
                                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">4</div>
                                      <div className="flex-1">
                                        <p className="text-sm font-medium">Round 4</p>
                                        <p className="text-xs text-muted-foreground">{job.round4Detail}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Compensation Details */}
                            <div className="bg-green-50 p-4 rounded-lg">
                              <h4 className="font-medium mb-3">Compensation Package</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                {job.minCTC && (
                                  <div>
                                    <span className="font-medium">Base CTC:</span>
                                    <p className="text-green-600 font-medium">₹{job.minCTC/100}L - ₹{job.maxCTC/100}L</p>
                                  </div>
                                )}
                                {job.variableCTC && (
                                  <div>
                                    <span className="font-medium">Variable Component:</span>
                                    <p className="text-green-600">₹{job.variableCTC/100}L</p>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium mb-2">Skills Required</h4>
                              <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, index) => (
                                  <Badge key={index} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Benefits</h4>
                              <div className="flex flex-wrap gap-2">
                                {job.benefits.map((benefit, index) => (
                                  <Badge key={index} variant="outline">
                                    {benefit}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button 
                        size="sm"
                        onClick={() => handleApplyToJob(job)}
                        disabled={appliedJobs.has(job.id)}
                      >
                        {appliedJobs.has(job.id) ? 'Applied' : 'Apply Now'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}

          {/* Load More */}
          {filteredJobs.length > 0 && (
            <div className="text-center pt-4">
              <Button variant="outline">
                Load More Jobs
                <ChevronDown className="size-4 ml-2" />
              </Button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="size-5" />
                AI Recommendations
              </CardTitle>
              <CardDescription>Personalized for your profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-sm">Trending Skills</h4>
                <p className="text-xs text-muted-foreground mb-2">In your field</p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">React</Badge>
                  <Badge variant="secondary" className="text-xs">Python</Badge>
                  <Badge variant="secondary" className="text-xs">AWS</Badge>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-medium text-sm">Hot Companies</h4>
                <p className="text-xs text-muted-foreground mb-2">Hiring now</p>
                <div className="space-y-1">
                  <p className="text-xs">• Stripe - 15 openings</p>
                  <p className="text-xs">• Airbnb - 23 openings</p>
                  <p className="text-xs">• Uber - 31 openings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Saved Jobs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bookmark className="size-5" />
                Saved Jobs
                <Badge variant="secondary">{savedJobs.size}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {savedJobs.size > 0 ? (
                <div className="space-y-3">
                  {jobs.filter(job => savedJobs.has(job.id)).map((job) => (
                    <div key={job.id} className="p-3 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm">{job.logo}</span>
                        <p className="font-medium text-sm truncate">{job.title}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{job.company}</p>
                      <p className="text-xs text-green-600">{job.salary}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">No saved jobs yet</p>
              )}
            </CardContent>
          </Card>

          {/* Job Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="size-5" />
                Job Alerts
              </CardTitle>
              <CardDescription>Get notified about new opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">Software Engineer</h4>
                    <Badge className="bg-green-100 text-green-800 text-xs">Active</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Remote • $100k+ • Full-time</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">Product Manager</h4>
                    <Badge variant="secondary" className="text-xs">Paused</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">San Francisco • $150k+ • Full-time</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3">
                <Bell className="size-4 mr-2" />
                Create New Alert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Application Modal */}
      <Dialog open={showApplicationModal} onOpenChange={setShowApplicationModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <span className="text-2xl">{selectedJob?.logo}</span>
              <div>
                <h3>Apply to {selectedJob?.title}</h3>
                <p className="text-sm text-muted-foreground">{selectedJob?.company}</p>
              </div>
            </DialogTitle>
            <DialogDescription>
              Complete your application for this position. Make sure to highlight your relevant experience and skills.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="coverLetter">Cover Letter *</Label>
              <Textarea
                id="coverLetter"
                placeholder="Write a compelling cover letter that highlights why you're perfect for this role..."
                value={applicationData.coverLetter}
                onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                className="min-h-[120px] mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="resume">Resume *</Label>
              <div className="mt-1 flex items-center gap-2">
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setApplicationData({...applicationData, resumeFile: e.target.files[0]})}
                />
                <Button variant="outline" size="sm">
                  Upload Resume
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>
            
            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Any additional information you'd like to share..."
                value={applicationData.additionalInfo}
                onChange={(e) => setApplicationData({...applicationData, additionalInfo: e.target.value})}
                className="mt-1"
              />
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowApplicationModal(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button 
              onClick={submitApplication}
              disabled={isLoading || !applicationData.coverLetter.trim()}
              className="min-w-[120px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="size-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="size-4 mr-2" />
                  Submit Application
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}