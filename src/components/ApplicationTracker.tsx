import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Checkbox } from './ui/checkbox';
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
  Search
} from 'lucide-react';

export function ApplicationTracker() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [bulkAction, setBulkAction] = useState('');
  const [draggedItem, setDraggedItem] = useState(null);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isLoading, setIsLoading] = useState(false);

  const applications = [
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
      timeline: [
        { stage: 'Applied', date: '2024-12-20', completed: true },
        { stage: 'Resume Review', date: '2024-12-21', completed: true },
        { stage: 'Phone Screen', date: '2024-12-23', completed: true },
        { stage: 'Technical Interview', date: '2024-12-28', completed: false },
        { stage: 'Final Interview', date: 'TBD', completed: false },
        { stage: 'Offer', date: 'TBD', completed: false }
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
      timeline: [
        { stage: 'Applied', date: '2024-12-18', completed: true },
        { stage: 'Resume Review', date: '2024-12-19', completed: true },
        { stage: 'Phone Screen', date: 'TBD', completed: false },
        { stage: 'Case Study', date: 'TBD', completed: false },
        { stage: 'Final Interview', date: 'TBD', completed: false },
        { stage: 'Offer', date: 'TBD', completed: false }
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
      offerDetails: {
        baseSalary: '$145,000',
        bonus: '$25,000',
        equity: '$50,000 RSU',
        benefits: 'Full health coverage, 401k matching'
      },
      timeline: [
        { stage: 'Applied', date: '2024-12-15', completed: true },
        { stage: 'Resume Review', date: '2024-12-16', completed: true },
        { stage: 'Phone Screen', date: '2024-12-18', completed: true },
        { stage: 'Technical Interview', date: '2024-12-20', completed: true },
        { stage: 'Final Interview', date: '2024-12-22', completed: true },
        { stage: 'Offer', date: '2024-12-24', completed: true }
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
      timeline: [
        { stage: 'Applied', date: '2024-12-10', completed: true },
        { stage: 'Resume Review', date: '2024-12-11', completed: true },
        { stage: 'Phone Screen', date: '2024-12-13', completed: true },
        { stage: 'Technical Interview', date: '2024-12-15', completed: true },
        { stage: 'Rejected', date: '2024-12-17', completed: true }
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
      timeline: [
        { stage: 'Applied', date: '2024-12-12', completed: true },
        { stage: 'Resume Review', date: 'TBD', completed: false },
        { stage: 'Phone Screen', date: 'TBD', completed: false },
        { stage: 'Technical Interview', date: 'TBD', completed: false },
        { stage: 'Final Interview', date: 'TBD', completed: false },
        { stage: 'Offer', date: 'TBD', completed: false }
      ]
    }
  ];

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

  const filteredApplications = applications.filter(app => {
    const matchesSearch = searchQuery === '' || 
      app.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.role.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || app.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: applications.length,
    pending: applications.filter(app => ['applied', 'under_review', 'interview_scheduled'].includes(app.status)).length,
    offers: applications.filter(app => app.status === 'offer_received').length,
    rejected: applications.filter(app => app.status === 'rejected').length
  };

  const handleSelectAll = () => {
    if (selectedApplications.length === filteredApplications.length) {
      setSelectedApplications([]);
    } else {
      setSelectedApplications(filteredApplications.map(app => app.id));
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
          console.log('Deleting applications:', selectedApplications);
          break;
        case 'export':
          // Simulate export
          const selectedData = applications.filter(app => selectedApplications.includes(app.id));
          console.log('Exporting applications:', selectedData);
          break;
        case 'update_status':
          console.log('Updating status for:', selectedApplications);
          break;
      }
      setSelectedApplications([]);
      setBulkAction('');
      setIsLoading(false);
    }, 1000);
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
      console.log(`Moving ${draggedItem.company} to ${newStatus}`);
      setDraggedItem(null);
    }
  };

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
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
                    <SelectItem value="send_reminder">
                      <div className="flex items-center">
                        <Send className="size-4 mr-2" />
                        Send Reminder
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  size="sm" 
                  onClick={handleBulkAction}
                  disabled={!bulkAction || isLoading}
                >
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
                  checked={selectedApplications.length === filteredApplications.length && filteredApplications.length > 0}
                  onCheckedChange={handleSelectAll}
                />
                <span className="text-sm font-medium">
                  {selectedApplications.length > 0 
                    ? `${selectedApplications.length} of ${filteredApplications.length} selected`
                    : `${filteredApplications.length} applications`
                  }
                </span>
                <div className="ml-auto flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <ArrowUpDown className="size-4 mr-2" />
                    Sort
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {filteredApplications.length === 0 ? (
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
              filteredApplications.map((app) => (
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
                          onClick={() => {
                            // Navigate to company details
                            console.log(`Viewing ${app.company} details`);
                          }}
                          title={`View ${app.company} details`}
                        >
                          {app.logo}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-lg">{app.role}</h3>
                            <Badge className={`${getStatusColor(app.status)} text-xs`}>
                              {getStatusIcon(app.status)}
                              <span className="ml-1">{app.statusText}</span>
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {app.matchPercentage}% match
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
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
                          <p className="text-xs text-muted-foreground">{app.progress}% complete</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="size-4 mr-1" />
                            Details
                          </Button>
                          {app.status === 'offer_received' && (
                            <Button size="sm">
                              View Offer
                            </Button>
                          )}
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Progress */}
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Application Progress</span>
                        <span className="text-sm text-muted-foreground">{app.progress}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {app.timeline.slice(0, 5).map((stage, index) => (
                          <React.Fragment key={index}>
                            <div className={`size-3 rounded-full ${
                              stage.completed ? 'bg-green-500' : 'bg-gray-300'
                            }`} />
                            {index < 4 && (
                              <div className={`flex-1 h-0.5 ${
                                app.timeline[index + 1]?.completed ? 'bg-green-500' : 'bg-gray-300'
                              }`} />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        {app.timeline.slice(0, 5).map((stage, index) => (
                          <span key={index} className={stage.completed ? 'text-green-600' : ''}>
                            {stage.stage}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Offer Details */}
                    {app.status === 'offer_received' && app.offerDetails && (
                      <div className="mt-4 p-4 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-green-800 mb-2">Offer Details</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Base Salary</p>
                            <p className="font-medium">{app.offerDetails.baseSalary}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Signing Bonus</p>
                            <p className="font-medium">{app.offerDetails.bonus}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Equity</p>
                            <p className="font-medium">{app.offerDetails.equity}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Benefits</p>
                            <p className="font-medium text-xs">{app.offerDetails.benefits}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="kanban">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {kanbanColumns.map((column) => (
              <Card 
                key={column.key}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, column.status)}
                className="min-h-[400px]"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm flex items-center gap-2">
                      {column.title}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-1 h-6 w-6"
                        onClick={() => {
                          // Add new application to this column
                          console.log(`Adding new application to ${column.title}`);
                        }}
                      >
                        <Plus className="size-3" />
                      </Button>
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xs">
                    {applications.filter(app => app.status === column.status).length} applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {applications
                    .filter(app => app.status === column.status)
                    .map((app) => (
                      <div 
                        key={app.id} 
                        className="p-3 bg-accent/50 rounded-lg cursor-grab hover:bg-accent transition-colors border border-transparent hover:border-blue-200"
                        draggable
                        onDragStart={() => handleDragStart(app)}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <GripVertical className="size-3 text-gray-400" />
                          <span className="text-lg">{app.logo}</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{app.role}</p>
                            <p className="text-xs text-muted-foreground truncate">{app.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{new Date(app.appliedDate).toLocaleDateString()}</span>
                          <Badge variant="outline" className="text-xs">
                            {app.matchPercentage}%
                          </Badge>
                        </div>
                        {app.interviewDate && (
                          <div className="mt-2 p-2 bg-blue-50 rounded text-xs">
                            <Calendar className="size-3 inline mr-1" />
                            {new Date(app.interviewDate).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Interviews & Deadlines</CardTitle>
              <CardDescription>Your placement calendar at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              {applications.filter(app => app.interviewDate || app.status === 'offer_received').length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="size-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming events</h3>
                  <p className="text-gray-600">Your interviews and deadlines will appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {applications
                    .filter(app => app.interviewDate || app.status === 'offer_received')
                    .map((app) => (
                      <div key={app.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="size-2 bg-blue-500 rounded-full" />
                        <div className="flex-1">
                          <p className="font-medium">{app.company} - {app.role}</p>
                          <p className="text-sm text-muted-foreground">
                            {app.interviewDate 
                              ? `Interview: ${new Date(app.interviewDate).toLocaleDateString()} at ${new Date(app.interviewDate).toLocaleTimeString()}`
                              : app.status === 'offer_received' 
                                ? 'Offer deadline: Jan 5, 2025'
                                : app.nextStep
                            }
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {app.status === 'offer_received' ? 'Decision Due' : 'Interview'}
                        </Badge>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}