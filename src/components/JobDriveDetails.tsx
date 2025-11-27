import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { Label } from './ui/label';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Users, 
  DollarSign, 
  Calendar, 
  FileText, 
  ExternalLink,
  Download,
  Share,
  Bell,
  CheckCircle,
  AlertCircle,
  Globe,
  Phone,
  Mail,
  Target,
  Award,
  BookOpen,
  GraduationCap,
  Briefcase,
  Star,
  TrendingUp,
  Eye,
  Send
} from 'lucide-react';

interface JobDriveDetailsProps {
  jobDrive: {
    id: string;
    companyBrandName: string;
    companyLegalName: string;
    jobTitle: string;
    companyState: string;
    industryType: string;
    companyWebsite: string;
    hiringLocation: string;
    hiringLocationAddress: string;
    isWFH: boolean;
    minTotalExperience: number;
    maxTotalExperience: number;
    minRelevantExperience: number;
    maxRelevantExperience: number;
    minCTC: number;
    maxCTC: number;
    minStipend: number;
    maxStipend: number;
    variableCTC: number;
    internshipDuration: number;
    numberOfVacancies: number;
    noticePeriod: string;
    qualificationRequired: string;
    passOutBatch: string;
    recruitmentRounds: number;
    round1Detail: string;
    round2Detail: string;
    round3Detail: string;
    round4Detail: string;
    additionalRemarks: string;
    segment: string;
    jobType: string;
    workShiftType: string;
    requiredSkillset: string;
    domain: string;
    createdDate: string;
    status: 'draft' | 'active' | 'closed' | 'paused';
    applicationsCount: number;
    deadline?: string;
  };
  onApply?: () => void;
  onSave?: () => void;
}

export function JobDriveDetails({ jobDrive, onApply, onSave }: JobDriveDetailsProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'draft': return 'bg-gray-100 text-gray-700';
      case 'closed': return 'bg-red-100 text-red-700';
      case 'paused': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const skillsArray = jobDrive.requiredSkillset ? jobDrive.requiredSkillset.split(',').map(s => s.trim()) : [];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                  🏢
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{jobDrive.jobTitle}</h1>
                  <p className="text-blue-100">{jobDrive.companyBrandName} • {jobDrive.hiringLocation}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-blue-100">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {jobDrive.jobType}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {jobDrive.workShiftType}
                    </span>
                    {jobDrive.isWFH && (
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        Remote Available
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold">₹{jobDrive.minCTC/100}L - ₹{jobDrive.maxCTC/100}L</div>
                  <div className="text-blue-100">Annual CTC</div>
                  {jobDrive.variableCTC > 0 && (
                    <div className="text-sm text-blue-200">+ ₹{jobDrive.variableCTC/100}L Variable</div>
                  )}
                </div>
                <div>
                  <div className="text-2xl font-bold">{jobDrive.numberOfVacancies}</div>
                  <div className="text-blue-100">Open Positions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{jobDrive.applicationsCount}</div>
                  <div className="text-blue-100">Applications Received</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Badge className={getStatusColor(jobDrive.status)}>
                {jobDrive.status.charAt(0).toUpperCase() + jobDrive.status.slice(1)}
              </Badge>
              {jobDrive.deadline && (
                <div className="text-right text-sm">
                  <div className="text-blue-100">Application Deadline</div>
                  <div className="font-medium">{jobDrive.deadline}</div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3 mt-6">
            <Button className="bg-white text-blue-600 hover:bg-blue-50" onClick={onApply}>
              <Send className="w-4 h-4 mr-2" />
              Apply Now
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Star className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
              {isBookmarked ? 'Saved' : 'Save'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Information Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="process">Process</TabsTrigger>
          <TabsTrigger value="compensation">Compensation</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Legal Name</Label>
                  <p className="text-sm text-gray-600">{jobDrive.companyLegalName}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Industry</Label>
                  <p className="text-sm text-gray-600">{jobDrive.industryType}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">State</Label>
                  <p className="text-sm text-gray-600">{jobDrive.companyState}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Segment</Label>
                  <p className="text-sm text-gray-600">{jobDrive.segment}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Website</Label>
                  <a 
                    href={jobDrive.companyWebsite} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Visit Company Website <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Job Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Position Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Role</Label>
                  <p className="text-sm text-gray-600">{jobDrive.jobTitle}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Domain</Label>
                  <p className="text-sm text-gray-600">{jobDrive.domain}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Job Type</Label>
                  <p className="text-sm text-gray-600">{jobDrive.jobType}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Work Shift</Label>
                  <p className="text-sm text-gray-600">{jobDrive.workShiftType}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Notice Period</Label>
                  <p className="text-sm text-gray-600">{jobDrive.noticePeriod}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Work Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">{jobDrive.hiringLocation}</p>
                <p className="text-sm text-gray-600">{jobDrive.hiringLocationAddress}</p>
                {jobDrive.isWFH && (
                  <Badge className="bg-green-100 text-green-700">
                    Work From Home Available
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          {jobDrive.additionalRemarks && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{jobDrive.additionalRemarks}</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="process" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Recruitment Process ({jobDrive.recruitmentRounds} Rounds)
              </CardTitle>
              <CardDescription>
                Complete overview of the selection process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {jobDrive.round1Detail && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">1</div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Round 1</h4>
                    <p className="text-sm text-gray-600">{jobDrive.round1Detail}</p>
                  </div>
                </div>
              )}
              
              {jobDrive.round2Detail && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">2</div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Round 2</h4>
                    <p className="text-sm text-gray-600">{jobDrive.round2Detail}</p>
                  </div>
                </div>
              )}
              
              {jobDrive.round3Detail && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">3</div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Round 3</h4>
                    <p className="text-sm text-gray-600">{jobDrive.round3Detail}</p>
                  </div>
                </div>
              )}
              
              {jobDrive.round4Detail && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">4</div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Round 4</h4>
                    <p className="text-sm text-gray-600">{jobDrive.round4Detail}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compensation" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Salary Package
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">
                    ₹{jobDrive.minCTC/100}L - ₹{jobDrive.maxCTC/100}L
                  </div>
                  <p className="text-sm text-green-600">Annual CTC</p>
                </div>
                
                {jobDrive.variableCTC > 0 && (
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Variable Component:</span>
                    <span className="font-bold text-blue-700">₹{jobDrive.variableCTC/100}L</span>
                  </div>
                )}
                
                {jobDrive.minStipend > 0 && (
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Stipend Range:</span>
                    <span className="font-bold text-purple-700">
                      ₹{jobDrive.minStipend}k - ₹{jobDrive.maxStipend}k/month
                    </span>
                  </div>
                )}
                
                {jobDrive.internshipDuration > 0 && (
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">Duration:</span>
                    <span className="font-bold text-orange-700">{jobDrive.internshipDuration} months</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Key Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Total Vacancies:</span>
                  <span className="font-bold">{jobDrive.numberOfVacancies}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Experience Required:</span>
                  <span className="font-bold">{jobDrive.minTotalExperience}-{jobDrive.maxTotalExperience} years</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Relevant Experience:</span>
                  <span className="font-bold">{jobDrive.minRelevantExperience}-{jobDrive.maxRelevantExperience} years</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Recruitment Rounds:</span>
                  <span className="font-bold">{jobDrive.recruitmentRounds}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="requirements" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Qualifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Educational Requirement</Label>
                  <p className="text-sm text-gray-600 mt-1">{jobDrive.qualificationRequired}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Eligible Batches</Label>
                  <p className="text-sm text-gray-600 mt-1">{jobDrive.passOutBatch}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Experience Range</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="p-3 bg-blue-50 rounded-lg text-center">
                      <div className="font-bold text-blue-700">{jobDrive.minTotalExperience}-{jobDrive.maxTotalExperience}</div>
                      <div className="text-xs text-blue-600">Total Years</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg text-center">
                      <div className="font-bold text-purple-700">{jobDrive.minRelevantExperience}-{jobDrive.maxRelevantExperience}</div>
                      <div className="text-xs text-purple-600">Relevant Years</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Required Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsArray.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-4" />
                <div>
                  <Label className="text-sm font-medium">Domain Focus</Label>
                  <p className="text-sm text-gray-600 mt-1">{jobDrive.domain}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Application Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Application Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">{jobDrive.applicationsCount}</div>
              <p className="text-sm text-blue-600">Total Applications</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">{Math.round(jobDrive.applicationsCount * 0.3)}</div>
              <p className="text-sm text-green-600">Shortlisted</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-700">{Math.round(jobDrive.applicationsCount * 0.1)}</div>
              <p className="text-sm text-yellow-600">In Interview</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-700">{Math.round(jobDrive.applicationsCount * 0.05)}</div>
              <p className="text-sm text-purple-600">Selected</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="flex items-center justify-center gap-4 pt-4">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Send className="w-5 h-5 mr-2" />
          Apply for This Position
        </Button>
        <Button variant="outline" size="lg">
          <Download className="w-5 h-5 mr-2" />
          Download JD
        </Button>
        <Button variant="outline" size="lg">
          <Bell className="w-5 h-5 mr-2" />
          Set Alert
        </Button>
      </div>
    </div>
  );
}