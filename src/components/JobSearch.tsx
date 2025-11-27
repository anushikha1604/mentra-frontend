import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
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
  Bell
} from 'lucide-react';

export function JobSearch() {
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
      skills: ['Python', 'AWS', 'React', 'System Design'],
      description: 'Join our team to build scalable systems serving millions of customers worldwide.',
      benefits: ['Health Insurance', 'Stock Options', 'Remote Work', 'Learning Budget'],
      rating: 4.3
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
      skills: ['React', 'TypeScript', 'JavaScript', 'CSS'],
      description: 'Build user interfaces that billions of people use every day.',
      benefits: ['Health Insurance', 'Free Meals', 'Gym Access', 'Learning Budget'],
      rating: 4.5
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
      skills: ['Product Strategy', 'Data Analysis', 'User Research', 'Agile'],
      description: 'Lead product initiatives and work with engineering teams to deliver innovative solutions.',
      benefits: ['Housing Stipend', 'Health Insurance', 'Mentorship', 'Return Offer'],
      rating: 4.2
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
      skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      description: 'Use data to improve our recommendation algorithms and user experience.',
      benefits: ['Unlimited PTO', 'Stock Options', 'Netflix Subscription', 'Remote Work'],
      rating: 4.4
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
      skills: ['Swift', 'iOS', 'Xcode', 'UI/UX'],
      description: 'Develop innovative iOS applications that delight millions of users.',
      benefits: ['Employee Discount', 'Health Insurance', 'Stock Options', 'Gym Access'],
      rating: 4.1
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
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
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
        'entry': ['0-1 years', '0-2 years'],
        'mid': ['1-3 years', '2-4 years'],
        'senior': ['3+ years', '5+ years']
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
  React.useEffect(() => {
    handleSearch();
  }, [searchQuery, filters, sortBy]);

  const getMatchScoreColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
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
              <Button className="h-12">
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
                  <Input placeholder="e.g. San Francisco" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input placeholder="e.g. Google" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Experience</label>
                  <Select>
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
                  <Select>
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
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Job Results */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">
              {jobs.length} Jobs Found
            </h2>
            <Select defaultValue="relevance">
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

          {jobs.map((job) => (
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
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Load More */}
          <div className="text-center pt-4">
            <Button variant="outline">
              Load More Jobs
              <ChevronDown className="size-4 ml-2" />
            </Button>
          </div>
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
                    <div key={job.id} className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm">{job.logo}</span>
                        <p className="font-medium text-sm truncate">{job.title}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{job.company}</p>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    View All Saved
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No saved jobs yet
                </p>
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
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-accent/50 rounded-lg">
                  <p className="font-medium text-sm">Software Engineer</p>
                  <p className="text-xs text-muted-foreground">at FAANG companies</p>
                  <p className="text-xs text-green-600">3 new jobs today</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Create New Alert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}