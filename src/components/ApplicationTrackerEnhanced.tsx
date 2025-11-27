import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Checkbox } from './ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Calendar, 
  Building, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  Eye,
  ExternalLink,
  Filter,
  Plus,
  TrendingUp,
  Users,
  Target,
  Award,
  Download,
  Check,
  Square,
  MoreHorizontal,
  Trash2,
  Edit,
  Send,
  ChevronDown,
  GripVertical,
  RotateCcw,
  ArrowUpDown,
  Search,
  Loader2,
  FileText,
  Star,
  Bookmark
} from 'lucide-react';

export function ApplicationTrackerEnhanced() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [bulkAction, setBulkAction] = useState('');
  const [draggedItem, setDraggedItem] = useState(null);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isLoading, setIsLoading] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [applications, setApplications] = useState([
    {
      id: 1,
      company: 'Google',
      role: 'Software Engineer',
      logo: '🔍',
      location: 'Mountain View, CA',
      appliedDate: '2024-12-20',
      status: 'interview_scheduled',
      statusText: 'Interview Scheduled',
      nextStep: 'Technical Interview on Dec 28, 2:00 PM',
      interviewDate: '2024-12-28T14:00:00',
      salary: '$130k - $180k',
      progress: 75,
      notes: 'Recruiter mentioned strong interest in my projects.',
      companySize: 'Large',
      matchPercentage: 95,
      priority: 'high',
      jobUrl: 'https://careers.google.com/jobs/...',
      contactPerson: 'Sarah Johnson',
      contactEmail: 'sarah.j@google.com',
      // Enhanced job drive details
      companyLegalName: 'Google India Private Limited',
      industryType: 'Information Technology',
      hiringLocationAddress: 'Bagmane Constellation Business Park, Bangalore, Karnataka 560025',
      jobType: 'Full-time',
      workShiftType: 'Flexible',
      recruitmentRounds: 4,
      round1Detail: 'Online Coding Assessment',
      round2Detail: 'Technical Interview - System Design',
      round3Detail: 'Behavioral Interview',
      round4Detail: 'Final Interview with Director',
      qualificationRequired: 'B.Tech/B.E in CS/IT with 8.0+ CGPA',
      requiredSkillset: 'Java, Python, System Design, Data Structures',
      timeline: [
        { stage: 'Applied', date: '2024-12-20', completed: true, description: 'Application submitted successfully' },
        { stage: 'Resume Review', date: '2024-12-21', completed: true, description: 'Resume reviewed by hiring team' },
        { stage: 'Phone Screen', date: '2024-12-23', completed: true, description: 'Initial phone screening completed' },
        { stage: 'Technical Interview', date: '2024-12-28', completed: false, description: 'Scheduled for Dec 28, 2:00 PM' },
        { stage: 'Final Interview', date: 'TBD', completed: false, description: 'Pending technical interview' },
        { stage: 'Offer', date: 'TBD', completed: false, description: 'Final decision pending' }
      ]
    },
    {
      id: 2,
      company: 'Microsoft',
      role: 'Product Manager Intern',
      logo: '🏢',
      location: 'Seattle, WA',
      appliedDate: '2024-12-18',
      status: 'under_review',
      statusText: 'Under Review',
      nextStep: 'Waiting for recruiter response',
      salary: '$8k - $10k/month',
      progress: 25,
      notes: 'Applied through university portal.',
      companySize: 'Large',
      matchPercentage: 87,
      priority: 'medium',
      jobUrl: 'https://careers.microsoft.com/...',
      contactPerson: 'Mike Chen',
      contactEmail: 'mike.chen@microsoft.com',
      timeline: [
        { stage: 'Applied', date: '2024-12-18', completed: true, description: 'Application submitted via university portal' },
        { stage: 'Resume Review', date: '2024-12-19', completed: true, description: 'Application under review' },
        { stage: 'Phone Screen', date: 'TBD', completed: false, description: 'Awaiting scheduling' },
        { stage: 'Case Study', date: 'TBD', completed: false, description: 'Product case study presentation' },
        { stage: 'Final Interview', date: 'TBD', completed: false, description: 'On-site or virtual final round' },
        { stage: 'Offer', date: 'TBD', completed: false, description: 'Final decision' }
      ]
    },
    {
      id: 3,
      company: 'Amazon',
      role: 'SDE I',
      logo: '📦',
      location: 'Seattle, WA',
      appliedDate: '2024-12-15',
      status: 'offer_received',
      statusText: 'Offer Received',
      nextStep: 'Decision deadline: Jan 5, 2025',
      salary: '$125k - $165k',
      progress: 100,
      notes: 'Great team culture, competitive package.',
      companySize: 'Large',
      matchPercentage: 92,
      priority: 'high',
      jobUrl: 'https://amazon.jobs/...',
      contactPerson: 'Lisa Wong',
      contactEmail: 'lisa.wong@amazon.com',
      offerDetails: {
        baseSalary: '$145,000',
        bonus: '$25,000',
        equity: '$50,000 RSU',
        benefits: 'Full health coverage, 401k matching, unlimited PTO',
        startDate: 'July 1, 2025',
        offerExpiry: 'January 5, 2025'
      },
      timeline: [
        { stage: 'Applied', date: '2024-12-15', completed: true, description: 'Online application submitted' },
        { stage: 'Resume Review', date: '2024-12-16', completed: true, description: 'Application screened' },
        { stage: 'Phone Screen', date: '2024-12-18', completed: true, description: 'Phone interview with recruiter' },
        { stage: 'Technical Interview', date: '2024-12-20', completed: true, description: 'Coding interview completed' },
        { stage: 'Final Interview', date: '2024-12-22', completed: true, description: 'Behavioral and system design' },
        { stage: 'Offer', date: '2024-12-24', completed: true, description: 'Offer extended' }
      ]
    },
    {
      id: 4,
      company: 'Apple',
      role: 'iOS Developer',
      logo: '🍎',
      location: 'Cupertino, CA',
      appliedDate: '2024-12-10',
      status: 'rejected',
      statusText: 'Not Selected',
      nextStep: 'Application closed',
      salary: '$120k - $160k',
      progress: 50,
      notes: 'Feedback: Need more iOS experience.',
      companySize: 'Large',
      matchPercentage: 78,
      priority: 'medium',
      jobUrl: 'https://jobs.apple.com/...',
      contactPerson: 'David Kim',
      contactEmail: 'david.kim@apple.com',
      rejectionFeedback: 'While your background is impressive, we are looking for candidates with more specific iOS development experience and published apps.',
      timeline: [
        { stage: 'Applied', date: '2024-12-10', completed: true, description: 'Application submitted' },
        { stage: 'Resume Review', date: '2024-12-11', completed: true, description: 'Initial screening passed' },
        { stage: 'Phone Screen', date: '2024-12-13', completed: true, description: 'Technical phone interview' },
        { stage: 'Technical Interview', date: '2024-12-15', completed: true, description: 'On-site technical assessment' },
        { stage: 'Rejected', date: '2024-12-17', completed: true, description: 'Decision communicated' }
      ]
    },
    {
      id: 5,
      company: 'Netflix',
      role: 'Data Scientist',
      logo: '🎬',
      location: 'Los Gatos, CA',
      appliedDate: '2024-12-12',
      status: 'applied',
      statusText: 'Application Submitted',
      nextStep: 'Waiting for initial review',
      salary: '$140k - $190k',
      progress: 15,
      notes: 'Excited about their ML initiatives.',
      companySize: 'Large',
      matchPercentage: 83,
      priority: 'high',
      jobUrl: 'https://jobs.netflix.com/...',
      contactPerson: 'Emily Zhang',
      contactEmail: 'emily.zhang@netflix.com',
      timeline: [
        { stage: 'Applied', date: '2024-12-12', completed: true, description: 'Application submitted online' },
        { stage: 'Resume Review', date: 'TBD', completed: false, description: 'Pending initial review' },
        { stage: 'Phone Screen', date: 'TBD', completed: false, description: 'Technical phone screening' },
        { stage: 'Technical Interview', date: 'TBD', completed: false, description: 'Data science technical round' },
        { stage: 'Final Interview', date: 'TBD', completed: false, description: 'Final interview with team' },
        { stage: 'Offer', date: 'TBD', completed: false, description: 'Offer negotiation' }
      ]
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'applied':
        return 'bg-blue-100 text-blue-700';
      case 'under_review':
        return 'bg-yellow-100 text-yellow-700';
      case 'interview_scheduled':
        return 'bg-purple-100 text-purple-700';
      case 'offer_received':
        return 'bg-green-100 text-green-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'applied':
        return <Clock className="size-4" />;
      case 'under_review':
        return <AlertCircle className="size-4" />;
      case 'interview_scheduled':
        return <Calendar className="size-4" />;
      case 'offer_received':
        return <CheckCircle2 className="size-4" />;
      case 'rejected':
        return <XCircle className="size-4" />;
      default:
        return <Clock className="size-4" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = searchQuery === '' || 
      app.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || app.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const sortedApplications = [...filteredApplications].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return sortOrder === 'desc' 
          ? new Date(b.appliedDate) - new Date(a.appliedDate)
          : new Date(a.appliedDate) - new Date(b.appliedDate);
      case 'company':
        return sortOrder === 'desc' 
          ? b.company.localeCompare(a.company)
          : a.company.localeCompare(b.company);
      case 'status':
        return sortOrder === 'desc' 
          ? b.status.localeCompare(a.status)
          : a.status.localeCompare(b.status);
      case 'progress':
        return sortOrder === 'desc' 
          ? b.progress - a.progress
          : a.progress - b.progress;
      default:
        return 0;
    }
  });

  const stats = {
    total: applications.length,
    pending: applications.filter(app => ['applied', 'under_review', 'interview_scheduled'].includes(app.status)).length,
    offers: applications.filter(app => app.status === 'offer_received').length,
    rejected: applications.filter(app => app.status === 'rejected').length
  };

  const handleSelectAll = () => {
    if (selectedApplications.length === sortedApplications.length) {
      setSelectedApplications([]);
    } else {
      setSelectedApplications(sortedApplications.map(app => app.id));
    }
  };

  const handleSelectApplication = (id) => {
    setSelectedApplications(prev => 
      prev.includes(id) 
        ? prev.filter(appId => appId !== id)
        : [...prev, id]
    );
  };

  const handleBulkAction = () => {
    setIsLoading(true);
    setTimeout(() => {
      switch(bulkAction) {
        case 'delete':
          setApplications(prev => prev.filter(app => !selectedApplications.includes(app.id)));
          break;
        case 'export':
          const selectedData = applications.filter(app => selectedApplications.includes(app.id));
          const csv = selectedData.map(app => 
            `${app.company},${app.role},${app.status},${app.appliedDate},${app.salary}`
          ).join('\n');
          const blob = new Blob([csv], { type: 'text/csv' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'applications.csv';
          a.click();
          break;
        case 'update_status':
          // Would open a modal to select new status
          console.log('Update status for:', selectedApplications);
          break;
      }
      setSelectedApplications([]);
      setBulkAction('');
      setIsLoading(false);
    }, 1000);
  };

  const updateApplicationStatus = (id, newStatus) => {
    setApplications(prev => prev.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  const handleDragStart = (app) => {
    setDraggedItem(app);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (draggedItem) {
      updateApplicationStatus(draggedItem.id, newStatus);
      setDraggedItem(null);
    }
  };

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const addNote = (id, note) => {
    setApplications(prev => prev.map(app => 
      app.id === id ? { ...app, notes: note } : app
    ));
  };

  const kanbanColumns = [
    { key: 'applied', title: 'Applied', status: 'applied' },
    { key: 'under_review', title: 'Under Review', status: 'under_review' },
    { key: 'interview', title: 'Interview', status: 'interview_scheduled' },
    { key: 'offer', title: 'Offer', status: 'offer_received' },
    { key: 'rejected', title: 'Rejected', status: 'rejected' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Target className="size-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-sm text-muted-foreground">Total Applications</p>
            <div className="flex items-center justify-center mt-2 text-xs text-green-600">
              <TrendingUp className="size-3 mr-1" />
              +2 this week
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="size-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Clock className="size-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold">{stats.pending}</div>
            <p className="text-sm text-muted-foreground">In Progress</p>
            <div className="flex items-center justify-center mt-2 text-xs text-blue-600">
              <Calendar className="size-3 mr-1" />
              2 interviews this week
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="size-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold">{stats.offers}</div>
            <p className="text-sm text-muted-foreground">Offers Received</p>
            <div className="flex items-center justify-center mt-2 text-xs text-green-600">
              <CheckCircle2 className="size-3 mr-1" />
              1 pending decision
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="size-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold">{Math.round((stats.offers / stats.total) * 100)}%</div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
            <div className="flex items-center justify-center mt-2 text-xs text-purple-600">
              <Target className="size-3 mr-1" />
              Above average
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters & Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Status Filter Dropdown */}
            <div className="relative">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-48">
                  <Filter className="size-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications ({applications.length})</SelectItem>
                  <SelectItem value="applied">Applied ({applications.filter(a => a.status === 'applied').length})</SelectItem>
                  <SelectItem value="under_review">Under Review ({applications.filter(a => a.status === 'under_review').length})</SelectItem>
                  <SelectItem value="interview_scheduled">Interview Scheduled ({applications.filter(a => a.status === 'interview_scheduled').length})</SelectItem>
                  <SelectItem value="offer_received">Offer Received ({applications.filter(a => a.status === 'offer_received').length})</SelectItem>
                  <SelectItem value="rejected">Rejected ({applications.filter(a => a.status === 'rejected').length})</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <ArrowUpDown className="size-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Sort by Date</SelectItem>
                <SelectItem value="company">Sort by Company</SelectItem>
                <SelectItem value="status">Sort by Status</SelectItem>
                <SelectItem value="progress">Sort by Progress</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
            >
              {sortOrder === 'desc' ? '↓' : '↑'}
            </Button>

            <Button variant="outline" onClick={refreshData} disabled={isLoading}>
              <RotateCcw className={`size-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            
            <Button>
              <Plus className="size-4 mr-2" />
              Add Application
            </Button>
          </div>

          {/* Bulk Actions */}
          {selectedApplications.length > 0 && (
            <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <span className="text-sm font-medium text-blue-700">
                {selectedApplications.length} selected
              </span>
              <div className="flex items-center gap-2">
                <Select value={bulkAction} onValueChange={setBulkAction}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Bulk actions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="export">
                      <div className="flex items-center">
                        <Download className="size-4 mr-2" />
                        Export Selected
                      </div>
                    </SelectItem>
                    <SelectItem value="delete">
                      <div className="flex items-center">
                        <Trash2 className="size-4 mr-2" />
                        Delete Selected
                      </div>
                    </SelectItem>
                    <SelectItem value="update_status">
                      <div className="flex items-center">
                        <Edit className="size-4 mr-2" />
                        Update Status
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  size="sm" 
                  onClick={handleBulkAction}
                  disabled={!bulkAction || isLoading}
                >
                  {isLoading ? <Loader2 className="size-4 animate-spin mr-2" /> : null}
                  {isLoading ? 'Processing...' : 'Apply'}
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedApplications([])}
                >
                  Clear
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="list" className="space-y-6">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          {/* List Header with Bulk Select */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox
                  checked={selectedApplications.length === sortedApplications.length && sortedApplications.length > 0}
                  onCheckedChange={handleSelectAll}
                />
                <span className="text-sm font-medium">
                  {selectedApplications.length > 0 
                    ? `${selectedApplications.length} of ${sortedApplications.length} selected`
                    : `${sortedApplications.length} applications`
                  }
                </span>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {sortedApplications.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Target className="size-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
                  <p className="text-gray-600 mb-4">
                    {searchQuery || filterStatus !== 'all' 
                      ? 'Try adjusting your search or filter criteria'
                      : 'Start by adding your first job application'
                    }
                  </p>
                  <Button>
                    <Plus className="size-4 mr-2" />
                    Add Application
                  </Button>
                </CardContent>
              </Card>
            ) : (
              sortedApplications.map((app) => (
                <Card key={app.id} className="hover:shadow-md transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        <Checkbox
                          checked={selectedApplications.includes(app.id)}
                          onCheckedChange={() => handleSelectApplication(app.id)}
                          className="mt-1"
                        />
                        <div 
                          className="size-12 bg-accent rounded-lg flex items-center justify-center text-xl flex-shrink-0 cursor-pointer hover:bg-accent/80 transition-colors"
                          title={`View ${app.company} details`}
                        >
                          {app.logo}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="font-medium text-lg">{app.role}</h3>
                            <Badge className={`${getStatusColor(app.status)} text-xs`}>
                              {getStatusIcon(app.status)}
                              <span className="ml-1">{app.statusText}</span>
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {app.matchPercentage}% match
                            </Badge>
                            <Badge className={`${getPriorityColor(app.priority)} text-xs`}>
                              {app.priority} priority
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2 flex-wrap">
                            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                              <Building className="size-4" />
                              {app.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="size-4" />
                              {app.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="size-4" />
                              Applied {new Date(app.appliedDate).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm mb-2 font-medium">{app.nextStep}</p>
                          {app.notes && (
                            <p className="text-sm text-muted-foreground italic">{app.notes}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-right">
                          <p className="font-medium text-green-600">{app.salary}</p>
                          <p className="text-xs text-muted-foreground">{app.companySize}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setSelectedApp(app);
                              setShowDetailModal(true);
                            }}
                          >
                            <Eye className="size-4 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                          >
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Application Progress</span>
                        <span className="text-sm text-muted-foreground">{app.progress}%</span>
                      </div>
                      <Progress value={app.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="kanban">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {kanbanColumns.map((column) => (
              <div
                key={column.key}
                className="bg-gray-50 rounded-lg p-4 min-h-[500px]"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, column.status)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">{column.title}</h3>
                  <Badge variant="secondary">
                    {applications.filter(app => app.status === column.status).length}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  {applications
                    .filter(app => app.status === column.status)
                    .map((app) => (
                      <div
                        key={app.id}
                        draggable
                        onDragStart={() => handleDragStart(app)}
                        className="bg-white p-3 rounded-lg shadow-sm cursor-move hover:shadow-md transition-shadow border"
                      >
                        <div className="flex items-start gap-2 mb-2">
                          <span className="text-lg">{app.logo}</span>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{app.role}</h4>
                            <p className="text-xs text-muted-foreground">{app.company}</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{app.nextStep}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {app.matchPercentage}% match
                          </Badge>
                          <span className="text-xs text-green-600">{app.salary}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardContent className="p-8 text-center">
              <Calendar className="size-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Calendar View</h3>
              <p className="text-gray-600 mb-4">
                Calendar view would show interview dates and deadlines
              </p>
              <Button variant="outline">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Application Detail Modal */}
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <span className="text-2xl">{selectedApp?.logo}</span>
              <div>
                <h3>{selectedApp?.role}</h3>
                <p className="text-sm text-muted-foreground">{selectedApp?.company} • {selectedApp?.location}</p>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          {selectedApp && (
            <div className="space-y-6">
              {/* Status and Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Status</Label>
                  <div className="mt-1">
                    <Badge className={`${getStatusColor(selectedApp.status)}`}>
                      {getStatusIcon(selectedApp.status)}
                      <span className="ml-1">{selectedApp.statusText}</span>
                    </Badge>
                  </div>
                </div>
                <div>
                  <Label>Next Step</Label>
                  <p className="text-sm mt-1">{selectedApp.nextStep}</p>
                </div>
                <div>
                  <Label>Salary Range</Label>
                  <p className="text-sm mt-1 text-green-600 font-medium">{selectedApp.salary}</p>
                </div>
                <div>
                  <Label>Match Percentage</Label>
                  <p className="text-sm mt-1">{selectedApp.matchPercentage}%</p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <Label>Application Timeline</Label>
                <div className="mt-3 space-y-3">
                  {selectedApp.timeline?.map((stage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        stage.completed ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        {stage.completed ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">{stage.stage}</p>
                          {stage.date !== 'TBD' && (
                            <span className="text-xs text-muted-foreground">
                              {new Date(stage.date).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <Label>Notes</Label>
                <Textarea
                  value={selectedApp.notes || ''}
                  onChange={(e) => addNote(selectedApp.id, e.target.value)}
                  placeholder="Add your notes about this application..."
                  className="mt-1"
                />
              </div>

              {/* Offer Details */}
              {selectedApp.offerDetails && (
                <div>
                  <Label>Offer Details</Label>
                  <div className="mt-3 bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Base Salary:</span> {selectedApp.offerDetails.baseSalary}
                      </div>
                      <div>
                        <span className="font-medium">Bonus:</span> {selectedApp.offerDetails.bonus}
                      </div>
                      <div>
                        <span className="font-medium">Equity:</span> {selectedApp.offerDetails.equity}
                      </div>
                      <div>
                        <span className="font-medium">Start Date:</span> {selectedApp.offerDetails.startDate}
                      </div>
                      <div className="col-span-2">
                        <span className="font-medium">Benefits:</span> {selectedApp.offerDetails.benefits}
                      </div>
                      <div className="col-span-2">
                        <span className="font-medium text-red-600">Offer Expires:</span> {selectedApp.offerDetails.offerExpiry}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Rejection Feedback */}
              {selectedApp.rejectionFeedback && (
                <div>
                  <Label>Feedback</Label>
                  <div className="mt-3 bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="text-sm text-red-800">{selectedApp.rejectionFeedback}</p>
                  </div>
                </div>
              )}

              {/* Job Drive Details */}
              {selectedApp.companyLegalName && (
                <div>
                  <Label>Job Drive Details</Label>
                  <div className="mt-3 bg-gray-50 p-4 rounded-lg space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Company Legal Name:</span>
                        <p className="text-gray-600">{selectedApp.companyLegalName}</p>
                      </div>
                      <div>
                        <span className="font-medium">Industry:</span>
                        <p className="text-gray-600">{selectedApp.industryType}</p>
                      </div>
                      {selectedApp.numberOfVacancies && (
                        <div>
                          <span className="font-medium">Total Vacancies:</span>
                          <p className="text-gray-600">{selectedApp.numberOfVacancies}</p>
                        </div>
                      )}
                      {selectedApp.workShiftType && (
                        <div>
                          <span className="font-medium">Work Shift:</span>
                          <p className="text-gray-600">{selectedApp.workShiftType}</p>
                        </div>
                      )}
                    </div>
                    
                    {selectedApp.hiringLocationAddress && (
                      <div>
                        <span className="font-medium">Complete Address:</span>
                        <p className="text-gray-600 text-sm">{selectedApp.hiringLocationAddress}</p>
                      </div>
                    )}
                    
                    {selectedApp.qualificationRequired && (
                      <div>
                        <span className="font-medium">Qualification Required:</span>
                        <p className="text-gray-600 text-sm">{selectedApp.qualificationRequired}</p>
                      </div>
                    )}
                    
                    {selectedApp.requiredSkillset && (
                      <div>
                        <span className="font-medium">Required Skills:</span>
                        <p className="text-gray-600 text-sm">{selectedApp.requiredSkillset}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Recruitment Rounds Details */}
              {selectedApp.recruitmentRounds && (
                <div>
                  <Label>Recruitment Process ({selectedApp.recruitmentRounds} Rounds)</Label>
                  <div className="mt-3 space-y-3">
                    {selectedApp.round1Detail && (
                      <div className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">1</div>
                        <div>
                          <p className="text-sm font-medium">Round 1</p>
                          <p className="text-xs text-gray-600">{selectedApp.round1Detail}</p>
                        </div>
                      </div>
                    )}
                    {selectedApp.round2Detail && (
                      <div className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">2</div>
                        <div>
                          <p className="text-sm font-medium">Round 2</p>
                          <p className="text-xs text-gray-600">{selectedApp.round2Detail}</p>
                        </div>
                      </div>
                    )}
                    {selectedApp.round3Detail && (
                      <div className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">3</div>
                        <div>
                          <p className="text-sm font-medium">Round 3</p>
                          <p className="text-xs text-gray-600">{selectedApp.round3Detail}</p>
                        </div>
                      </div>
                    )}
                    {selectedApp.round4Detail && (
                      <div className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">4</div>
                        <div>
                          <p className="text-sm font-medium">Round 4</p>
                          <p className="text-xs text-gray-600">{selectedApp.round4Detail}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div>
                <Label>Contact Information</Label>
                <div className="mt-3 space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Contact Person:</span> {selectedApp.contactPerson}
                  </div>
                  <div>
                    <span className="font-medium">Email:</span> {selectedApp.contactEmail}
                  </div>
                  <div>
                    <span className="font-medium">Job URL:</span>{' '}
                    <a href={selectedApp.jobUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Job Posting <ExternalLink className="inline w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDetailModal(false)}>
              Close
            </Button>
            <Button>
              <Edit className="size-4 mr-2" />
              Edit Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}