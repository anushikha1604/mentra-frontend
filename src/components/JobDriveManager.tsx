import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Checkbox } from './ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog';
import { Alert, AlertDescription } from './ui/alert';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { 
  Plus, 
  Upload, 
  FileText, 
  Building2, 
  MapPin, 
  DollarSign, 
  Clock, 
  Users, 
  Calendar, 
  Target, 
  Award, 
  Edit, 
  Trash2, 
  Eye, 
  Download, 
  Search, 
  Filter, 
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  Info,
  Save,
  Send,
  RefreshCw,
  Copy,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Globe,
  Phone,
  Mail,
  X
} from 'lucide-react';

interface JobDrive {
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
  jdDocument?: File;
  createdDate: string;
  status: 'draft' | 'active' | 'closed' | 'paused';
  applicationsCount: number;
  deadline?: string;
}

export function JobDriveManager() {
  const [jobDrives, setJobDrives] = useState<JobDrive[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingDrive, setEditingDrive] = useState<JobDrive | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<Partial<JobDrive>>({
    companyBrandName: '',
    companyLegalName: '',
    jobTitle: '',
    companyState: '',
    industryType: '',
    companyWebsite: '',
    hiringLocation: '',
    hiringLocationAddress: '',
    isWFH: false,
    minTotalExperience: 0,
    maxTotalExperience: 0,
    minRelevantExperience: 0,
    maxRelevantExperience: 0,
    minCTC: 0,
    maxCTC: 0,
    minStipend: 0,
    maxStipend: 0,
    variableCTC: 0,
    internshipDuration: 0,
    numberOfVacancies: 1,
    noticePeriod: '',
    qualificationRequired: '',
    passOutBatch: '',
    recruitmentRounds: 1,
    round1Detail: '',
    round2Detail: '',
    round3Detail: '',
    round4Detail: '',
    additionalRemarks: '',
    segment: '',
    jobType: '',
    workShiftType: '',
    requiredSkillset: '',
    domain: '',
    status: 'draft'
  });

  // Sample data
  useEffect(() => {
    const sampleJobDrives: JobDrive[] = [
      {
        id: '1',
        companyBrandName: 'TechCorp',
        companyLegalName: 'TechCorp Private Limited',
        jobTitle: 'Software Development Engineer',
        companyState: 'Karnataka',
        industryType: 'Information Technology',
        companyWebsite: 'https://techcorp.com',
        hiringLocation: 'Bangalore',
        hiringLocationAddress: 'Koramangala, Bangalore, Karnataka 560034',
        isWFH: false,
        minTotalExperience: 0,
        maxTotalExperience: 2,
        minRelevantExperience: 0,
        maxRelevantExperience: 1,
        minCTC: 800,
        maxCTC: 1200,
        minStipend: 0,
        maxStipend: 0,
        variableCTC: 100,
        internshipDuration: 0,
        numberOfVacancies: 5,
        noticePeriod: 'Immediate',
        qualificationRequired: 'B.Tech/B.E in Computer Science or related field',
        passOutBatch: '2024, 2025',
        recruitmentRounds: 3,
        round1Detail: 'Online Assessment - DSA and System Design',
        round2Detail: 'Technical Interview - Coding and Problem Solving',
        round3Detail: 'HR Interview - Cultural Fit and Salary Discussion',
        round4Detail: '',
        additionalRemarks: 'Candidates with strong coding skills preferred',
        segment: 'IT Services',
        jobType: 'Full-time',
        workShiftType: 'Day Shift',
        requiredSkillset: 'Java, Python, React, Node.js, MySQL',
        domain: 'Software Development',
        createdDate: '2024-12-20',
        status: 'active',
        applicationsCount: 45,
        deadline: '2024-12-30'
      },
      {
        id: '2',
        companyBrandName: 'DataSoft',
        companyLegalName: 'DataSoft Solutions India Pvt Ltd',
        jobTitle: 'Data Science Intern',
        companyState: 'Maharashtra',
        industryType: 'Analytics',
        companyWebsite: 'https://datasoft.com',
        hiringLocation: 'Mumbai',
        hiringLocationAddress: 'Bandra Kurla Complex, Mumbai, Maharashtra 400051',
        isWFH: true,
        minTotalExperience: 0,
        maxTotalExperience: 0,
        minRelevantExperience: 0,
        maxRelevantExperience: 0,
        minCTC: 0,
        maxCTC: 0,
        minStipend: 25,
        maxStipend: 35,
        variableCTC: 0,
        internshipDuration: 6,
        numberOfVacancies: 3,
        noticePeriod: 'Immediate',
        qualificationRequired: 'B.Tech/M.Tech in Computer Science, Statistics, or Mathematics',
        passOutBatch: '2024, 2025',
        recruitmentRounds: 2,
        round1Detail: 'Technical Assessment - Python, SQL, Statistics',
        round2Detail: 'Project Discussion and HR Interview',
        round3Detail: '',
        round4Detail: '',
        additionalRemarks: 'Portfolio of data science projects required',
        segment: 'Analytics',
        jobType: 'Internship',
        workShiftType: 'Flexible',
        requiredSkillset: 'Python, SQL, Pandas, NumPy, Machine Learning, Tableau',
        domain: 'Data Science',
        createdDate: '2024-12-18',
        status: 'active',
        applicationsCount: 28,
        deadline: '2024-12-28'
      }
    ];
    setJobDrives(sampleJobDrives);
  }, []);

  const validateForm = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.companyBrandName?.trim()) newErrors.companyBrandName = 'Company brand name is required';
      if (!formData.companyLegalName?.trim()) newErrors.companyLegalName = 'Company legal name is required';
      if (!formData.jobTitle?.trim()) newErrors.jobTitle = 'Job title is required';
      if (!formData.companyState?.trim()) newErrors.companyState = 'Company state is required';
      if (!formData.industryType?.trim()) newErrors.industryType = 'Industry type is required';
    } else if (step === 2) {
      if (!formData.hiringLocation?.trim()) newErrors.hiringLocation = 'Hiring location is required';
      if (!formData.hiringLocationAddress?.trim()) newErrors.hiringLocationAddress = 'Complete address is required';
      if (!formData.jobType?.trim()) newErrors.jobType = 'Job type is required';
      if (!formData.workShiftType?.trim()) newErrors.workShiftType = 'Work shift type is required';
    } else if (step === 3) {
      if (formData.numberOfVacancies! < 1) newErrors.numberOfVacancies = 'Number of vacancies must be at least 1';
      if (!formData.qualificationRequired?.trim()) newErrors.qualificationRequired = 'Qualification is required';
      if (!formData.passOutBatch?.trim()) newErrors.passOutBatch = 'Pass out batch is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof JobDrive, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleFileUpload = (file: File) => {
    setFormData(prev => ({
      ...prev,
      jdDocument: file
    }));
  };

  const handleSaveDraft = async () => {
    setIsLoading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newJobDrive: JobDrive = {
        id: Date.now().toString(),
        ...formData as JobDrive,
        createdDate: new Date().toISOString().split('T')[0],
        applicationsCount: 0,
        status: 'draft'
      };

      setJobDrives(prev => [newJobDrive, ...prev]);
      setUploadProgress(100);
      
      setTimeout(() => {
        setShowCreateForm(false);
        setFormData({});
        setCurrentStep(1);
        setIsLoading(false);
        setUploadProgress(0);
      }, 500);
      
    } catch (error) {
      console.error('Failed to save draft:', error);
      setIsLoading(false);
      setUploadProgress(0);
    } finally {
      clearInterval(interval);
    }
  };

  const handlePublish = async () => {
    if (!validateForm(1) || !validateForm(2) || !validateForm(3)) {
      return;
    }

    setIsLoading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newJobDrive: JobDrive = {
        id: Date.now().toString(),
        ...formData as JobDrive,
        createdDate: new Date().toISOString().split('T')[0],
        applicationsCount: 0,
        status: 'active'
      };

      setJobDrives(prev => [newJobDrive, ...prev]);
      setUploadProgress(100);
      
      setTimeout(() => {
        setShowCreateForm(false);
        setFormData({});
        setCurrentStep(1);
        setIsLoading(false);
        setUploadProgress(0);
      }, 500);
      
    } catch (error) {
      console.error('Failed to publish job drive:', error);
      setIsLoading(false);
      setUploadProgress(0);
    } finally {
      clearInterval(interval);
    }
  };

  const filteredJobDrives = jobDrives.filter(drive => {
    const matchesSearch = searchQuery === '' || 
      drive.companyBrandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drive.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drive.domain.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || drive.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'draft': return 'bg-gray-100 text-gray-700';
      case 'closed': return 'bg-red-100 text-red-700';
      case 'paused': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyBrandName">Company Brand Name *</Label>
                  <Input
                    id="companyBrandName"
                    value={formData.companyBrandName || ''}
                    onChange={(e) => handleInputChange('companyBrandName', e.target.value)}
                    placeholder="e.g., TechCorp"
                    className={errors.companyBrandName ? 'border-red-500' : ''}
                  />
                  {errors.companyBrandName && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyBrandName}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="companyLegalName">Company Legal Name *</Label>
                  <Input
                    id="companyLegalName"
                    value={formData.companyLegalName || ''}
                    onChange={(e) => handleInputChange('companyLegalName', e.target.value)}
                    placeholder="e.g., TechCorp Private Limited"
                    className={errors.companyLegalName ? 'border-red-500' : ''}
                  />
                  {errors.companyLegalName && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyLegalName}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle || ''}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    placeholder="e.g., Software Development Engineer"
                    className={errors.jobTitle ? 'border-red-500' : ''}
                  />
                  {errors.jobTitle && (
                    <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="companyState">Company State/UT *</Label>
                  <Select 
                    value={formData.companyState || ''} 
                    onValueChange={(value) => handleInputChange('companyState', value)}
                  >
                    <SelectTrigger className={errors.companyState ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Karnataka">Karnataka</SelectItem>
                      <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="Gujarat">Gujarat</SelectItem>
                      <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="West Bengal">West Bengal</SelectItem>
                      <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                      <SelectItem value="Telangana">Telangana</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.companyState && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyState}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="industryType">Industry Type *</Label>
                  <Select 
                    value={formData.industryType || ''} 
                    onValueChange={(value) => handleInputChange('industryType', value)}
                  >
                    <SelectTrigger className={errors.industryType ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Information Technology">Information Technology</SelectItem>
                      <SelectItem value="Banking & Financial Services">Banking & Financial Services</SelectItem>
                      <SelectItem value="Consulting">Consulting</SelectItem>
                      <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="E-commerce">E-commerce</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                      <SelectItem value="Telecommunications">Telecommunications</SelectItem>
                      <SelectItem value="Automotive">Automotive</SelectItem>
                      <SelectItem value="Media & Entertainment">Media & Entertainment</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.industryType && (
                    <p className="text-red-500 text-sm mt-1">{errors.industryType}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="companyWebsite">Company Website</Label>
                  <Input
                    id="companyWebsite"
                    type="url"
                    value={formData.companyWebsite || ''}
                    onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                    placeholder="https://company.com"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Hiring Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hiringLocation">Hiring Location *</Label>
                  <Input
                    id="hiringLocation"
                    value={formData.hiringLocation || ''}
                    onChange={(e) => handleInputChange('hiringLocation', e.target.value)}
                    placeholder="e.g., Bangalore, Mumbai, Remote"
                    className={errors.hiringLocation ? 'border-red-500' : ''}
                  />
                  {errors.hiringLocation && (
                    <p className="text-red-500 text-sm mt-1">{errors.hiringLocation}</p>
                  )}
                </div>
                
                <div className="flex items-center space-x-2 pt-6">
                  <Checkbox
                    id="isWFH"
                    checked={formData.isWFH || false}
                    onCheckedChange={(checked) => handleInputChange('isWFH', checked)}
                  />
                  <Label htmlFor="isWFH">This is a Work From Home opportunity</Label>
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="hiringLocationAddress">Complete Hiring Address *</Label>
                  <Textarea
                    id="hiringLocationAddress"
                    value={formData.hiringLocationAddress || ''}
                    onChange={(e) => handleInputChange('hiringLocationAddress', e.target.value)}
                    placeholder="Write 'Remote' if WFH, otherwise provide complete address"
                    className={errors.hiringLocationAddress ? 'border-red-500' : ''}
                  />
                  {errors.hiringLocationAddress && (
                    <p className="text-red-500 text-sm mt-1">{errors.hiringLocationAddress}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="jobType">Job Type *</Label>
                  <Select 
                    value={formData.jobType || ''} 
                    onValueChange={(value) => handleInputChange('jobType', value)}
                  >
                    <SelectTrigger className={errors.jobType ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.jobType && (
                    <p className="text-red-500 text-sm mt-1">{errors.jobType}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="workShiftType">Work Shift Type *</Label>
                  <Select 
                    value={formData.workShiftType || ''} 
                    onValueChange={(value) => handleInputChange('workShiftType', value)}
                  >
                    <SelectTrigger className={errors.workShiftType ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Select shift type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Day Shift">Day Shift</SelectItem>
                      <SelectItem value="Night Shift">Night Shift</SelectItem>
                      <SelectItem value="Rotational Shift">Rotational Shift</SelectItem>
                      <SelectItem value="Flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.workShiftType && (
                    <p className="text-red-500 text-sm mt-1">{errors.workShiftType}</p>
                  )}
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Experience & Compensation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="minTotalExperience">Min Total Experience (years)</Label>
                  <Input
                    id="minTotalExperience"
                    type="number"
                    min="0"
                    value={formData.minTotalExperience || 0}
                    onChange={(e) => handleInputChange('minTotalExperience', parseInt(e.target.value) || 0)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="maxTotalExperience">Max Total Experience (years)</Label>
                  <Input
                    id="maxTotalExperience"
                    type="number"
                    min="0"
                    value={formData.maxTotalExperience || 0}
                    onChange={(e) => handleInputChange('maxTotalExperience', parseInt(e.target.value) || 0)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="minRelevantExperience">Min Relevant Experience (years)</Label>
                  <Input
                    id="minRelevantExperience"
                    type="number"
                    min="0"
                    value={formData.minRelevantExperience || 0}
                    onChange={(e) => handleInputChange('minRelevantExperience', parseInt(e.target.value) || 0)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="maxRelevantExperience">Max Relevant Experience (years)</Label>
                  <Input
                    id="maxRelevantExperience"
                    type="number"
                    min="0"
                    value={formData.maxRelevantExperience || 0}
                    onChange={(e) => handleInputChange('maxRelevantExperience', parseInt(e.target.value) || 0)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="minCTC">Min CTC (thousands)</Label>
                  <Input
                    id="minCTC"
                    type="number"
                    min="0"
                    value={formData.minCTC || 0}
                    onChange={(e) => handleInputChange('minCTC', parseInt(e.target.value) || 0)}
                    placeholder="e.g., 600 for 6 LPA"
                  />
                </div>
                
                <div>
                  <Label htmlFor="maxCTC">Max CTC (thousands)</Label>
                  <Input
                    id="maxCTC"
                    type="number"
                    min="0"
                    value={formData.maxCTC || 0}
                    onChange={(e) => handleInputChange('maxCTC', parseInt(e.target.value) || 0)}
                    placeholder="e.g., 1200 for 12 LPA"
                  />
                </div>
                
                <div>
                  <Label htmlFor="minStipend">Min Stipend (thousands)</Label>
                  <Input
                    id="minStipend"
                    type="number"
                    min="0"
                    value={formData.minStipend || 0}
                    onChange={(e) => handleInputChange('minStipend', parseInt(e.target.value) || 0)}
                    placeholder="For internships"
                  />
                </div>
                
                <div>
                  <Label htmlFor="maxStipend">Max Stipend (thousands)</Label>
                  <Input
                    id="maxStipend"
                    type="number"
                    min="0"
                    value={formData.maxStipend || 0}
                    onChange={(e) => handleInputChange('maxStipend', parseInt(e.target.value) || 0)}
                    placeholder="For internships"
                  />
                </div>
                
                <div>
                  <Label htmlFor="variableCTC">Variable CTC (thousands)</Label>
                  <Input
                    id="variableCTC"
                    type="number"
                    min="0"
                    value={formData.variableCTC || 0}
                    onChange={(e) => handleInputChange('variableCTC', parseInt(e.target.value) || 0)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="internshipDuration">Internship Duration (months)</Label>
                  <Input
                    id="internshipDuration"
                    type="number"
                    min="0"
                    value={formData.internshipDuration || 0}
                    onChange={(e) => handleInputChange('internshipDuration', parseInt(e.target.value) || 0)}
                    placeholder="0 if not internship"
                  />
                </div>
                
                <div>
                  <Label htmlFor="numberOfVacancies">Number of Vacancies *</Label>
                  <Input
                    id="numberOfVacancies"
                    type="number"
                    min="1"
                    value={formData.numberOfVacancies || 1}
                    onChange={(e) => handleInputChange('numberOfVacancies', parseInt(e.target.value) || 1)}
                    className={errors.numberOfVacancies ? 'border-red-500' : ''}
                  />
                  {errors.numberOfVacancies && (
                    <p className="text-red-500 text-sm mt-1">{errors.numberOfVacancies}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="noticePeriod">Notice Period</Label>
                  <Select 
                    value={formData.noticePeriod || ''} 
                    onValueChange={(value) => handleInputChange('noticePeriod', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select notice period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Immediate">Immediate</SelectItem>
                      <SelectItem value="15 days">15 days</SelectItem>
                      <SelectItem value="1 month">1 month</SelectItem>
                      <SelectItem value="2 months">2 months</SelectItem>
                      <SelectItem value="3 months">3 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Requirements & Process</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="qualificationRequired">Qualification Required *</Label>
                  <Textarea
                    id="qualificationRequired"
                    value={formData.qualificationRequired || ''}
                    onChange={(e) => handleInputChange('qualificationRequired', e.target.value)}
                    placeholder="e.g., B.Tech/B.E in Computer Science or related field, Minimum 70% marks"
                    className={errors.qualificationRequired ? 'border-red-500' : ''}
                  />
                  {errors.qualificationRequired && (
                    <p className="text-red-500 text-sm mt-1">{errors.qualificationRequired}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="passOutBatch">Pass Out Batch *</Label>
                  <Input
                    id="passOutBatch"
                    value={formData.passOutBatch || ''}
                    onChange={(e) => handleInputChange('passOutBatch', e.target.value)}
                    placeholder="e.g., 2024, 2025"
                    className={errors.passOutBatch ? 'border-red-500' : ''}
                  />
                  {errors.passOutBatch && (
                    <p className="text-red-500 text-sm mt-1">{errors.passOutBatch}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="requiredSkillset">Required Skillset</Label>
                  <Textarea
                    id="requiredSkillset"
                    value={formData.requiredSkillset || ''}
                    onChange={(e) => handleInputChange('requiredSkillset', e.target.value)}
                    placeholder="e.g., Java, Python, React, Node.js, MySQL, Problem Solving"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="segment">Segment</Label>
                    <Select 
                      value={formData.segment || ''} 
                      onValueChange={(value) => handleInputChange('segment', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select segment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="IT Services">IT Services</SelectItem>
                        <SelectItem value="Product">Product</SelectItem>
                        <SelectItem value="Consulting">Consulting</SelectItem>
                        <SelectItem value="Analytics">Analytics</SelectItem>
                        <SelectItem value="Core Engineering">Core Engineering</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="domain">Domain/Role</Label>
                    <Input
                      id="domain"
                      value={formData.domain || ''}
                      onChange={(e) => handleInputChange('domain', e.target.value)}
                      placeholder="e.g., Software Development, Data Science"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Recruitment Process</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="recruitmentRounds">Number of Recruitment Rounds</Label>
                  <Select 
                    value={formData.recruitmentRounds?.toString() || '1'} 
                    onValueChange={(value) => handleInputChange('recruitmentRounds', parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Round</SelectItem>
                      <SelectItem value="2">2 Rounds</SelectItem>
                      <SelectItem value="3">3 Rounds</SelectItem>
                      <SelectItem value="4">4 Rounds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="round1Detail">Round 1 Detail</Label>
                  <Textarea
                    id="round1Detail"
                    value={formData.round1Detail || ''}
                    onChange={(e) => handleInputChange('round1Detail', e.target.value)}
                    placeholder="Describe the first round process"
                  />
                </div>
                
                {(formData.recruitmentRounds || 1) >= 2 && (
                  <div>
                    <Label htmlFor="round2Detail">Round 2 Detail</Label>
                    <Textarea
                      id="round2Detail"
                      value={formData.round2Detail || ''}
                      onChange={(e) => handleInputChange('round2Detail', e.target.value)}
                      placeholder="Describe the second round process"
                    />
                  </div>
                )}
                
                {(formData.recruitmentRounds || 1) >= 3 && (
                  <div>
                    <Label htmlFor="round3Detail">Round 3 Detail</Label>
                    <Textarea
                      id="round3Detail"
                      value={formData.round3Detail || ''}
                      onChange={(e) => handleInputChange('round3Detail', e.target.value)}
                      placeholder="Describe the third round process"
                    />
                  </div>
                )}
                
                {(formData.recruitmentRounds || 1) >= 4 && (
                  <div>
                    <Label htmlFor="round4Detail">Round 4 Detail</Label>
                    <Textarea
                      id="round4Detail"
                      value={formData.round4Detail || ''}
                      onChange={(e) => handleInputChange('round4Detail', e.target.value)}
                      placeholder="Describe the fourth round process"
                    />
                  </div>
                )}
                
                <div>
                  <Label htmlFor="additionalRemarks">Additional Remarks</Label>
                  <Textarea
                    id="additionalRemarks"
                    value={formData.additionalRemarks || ''}
                    onChange={(e) => handleInputChange('additionalRemarks', e.target.value)}
                    placeholder="Any additional information for candidates"
                  />
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Job Description Document</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <div>
                  <Label htmlFor="jd-upload" className="cursor-pointer">
                    <span className="text-blue-600 hover:text-blue-700 font-medium">Click to upload</span>
                    <span className="text-gray-600"> or drag and drop JD document</span>
                  </Label>
                  <Input
                    id="jd-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(file);
                    }}
                    className="hidden"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX up to 10MB</p>
                
                {formData.jdDocument && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-green-800">
                          {formData.jdDocument.name}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleInputChange('jdDocument', undefined)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Job Drive Management</h1>
          <p className="text-gray-600 mt-1">Create and manage job drives for student placements</p>
        </div>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Create Job Drive
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{jobDrives.length}</div>
            <p className="text-sm text-gray-600">Total Job Drives</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {jobDrives.filter(d => d.status === 'active').length}
            </div>
            <p className="text-sm text-gray-600">Active Drives</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {jobDrives.reduce((sum, d) => sum + d.applicationsCount, 0)}
            </div>
            <p className="text-sm text-gray-600">Total Applications</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {jobDrives.reduce((sum, d) => sum + d.numberOfVacancies, 0)}
            </div>
            <p className="text-sm text-gray-600">Total Vacancies</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search job drives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Job Drives List */}
      <div className="space-y-4">
        {filteredJobDrives.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No job drives found</h3>
              <p className="text-gray-600 mb-4">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filter criteria'
                  : 'Start by creating your first job drive'
                }
              </p>
              <Button onClick={() => setShowCreateForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Job Drive
              </Button>
            </CardContent>
          </Card>
        ) : (
          filteredJobDrives.map((drive) => (
            <Card key={drive.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{drive.jobTitle}</h3>
                      <Badge className={getStatusColor(drive.status)}>
                        {drive.status.charAt(0).toUpperCase() + drive.status.slice(1)}
                      </Badge>
                      {drive.isWFH && (
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                          Remote
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {drive.companyBrandName}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {drive.hiringLocation}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {drive.minCTC}-{drive.maxCTC}k
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {drive.numberOfVacancies} vacancies
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {drive.createdDate}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View ({drive.applicationsCount})
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Experience:</span>
                    <span className="ml-2 text-gray-600">
                      {drive.minTotalExperience}-{drive.maxTotalExperience} years
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Job Type:</span>
                    <span className="ml-2 text-gray-600">{drive.jobType}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Domain:</span>
                    <span className="ml-2 text-gray-600">{drive.domain}</span>
                  </div>
                </div>
                
                {drive.deadline && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-800">
                        Application Deadline: {drive.deadline}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Create Job Drive Modal */}
      <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Create New Job Drive</DialogTitle>
            <DialogDescription>
              Fill in the details to create a comprehensive job drive for student placements
            </DialogDescription>
          </DialogHeader>

          {/* Progress Indicator */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step {currentStep} of 3</span>
              <span className="text-sm text-gray-500">
                {currentStep === 1 && "Company Information"}
                {currentStep === 2 && "Hiring Details & Compensation"}
                {currentStep === 3 && "Requirements & Process"}
              </span>
            </div>
            <Progress value={(currentStep / 3) * 100} className="h-2" />
          </div>

          {/* Upload Progress */}
          {isLoading && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">
                  {uploadProgress < 100 ? 'Uploading...' : 'Complete!'}
                </span>
                <span className="text-sm text-gray-500">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}

          {/* Form Content */}
          <div className="space-y-6">
            {renderFormStep()}
          </div>

          <DialogFooter className="flex justify-between pt-6 border-t">
            <div className="flex space-x-2">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  disabled={isLoading}
                >
                  Previous
                </Button>
              )}
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={handleSaveDraft}
                disabled={isLoading}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              
              {currentStep < 3 ? (
                <Button
                  onClick={() => {
                    if (validateForm(currentStep)) {
                      setCurrentStep(prev => prev + 1);
                    }
                  }}
                  disabled={isLoading}
                >
                  Next
                </Button>
              ) : (
                <Button onClick={handlePublish} disabled={isLoading}>
                  <Send className="w-4 h-4 mr-2" />
                  {isLoading ? 'Publishing...' : 'Publish Job Drive'}
                </Button>
              )}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}