import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Checkbox } from './ui/checkbox';
import { JobDriveManager } from './JobDriveManager';
import { 
  BarChart3, 
  Users, 
  Building2, 
  Briefcase, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Upload, 
  Download, 
  Edit, 
  Trash2, 
  Eye, 
  Search, 
  Filter, 
  Plus, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Shield, 
  Settings, 
  Target, 
  Award, 
  GraduationCap, 
  DollarSign,
  Send,
  Bell,
  Activity,
  UserCheck,
  UserX,
  Building,
  CalendarDays,
  PieChart,
  MoreHorizontal,
  RefreshCw,
  Save,
  X,
  ChevronRight,
  Database,
  Key,
  Globe,
  Zap,
  LineChart,
  Users2,
  ClipboardList,
  Megaphone,
  FileSpreadsheet,
  UserCog,
  BookOpen,
  Palette,
  Link,
  ShieldCheck,
  HardDrive,
  ArrowUpDown,
  ExternalLink,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  Loader2,
  Copy,
  Bookmark,
  Archive,
  MessageCircle,
  Video,
  Headphones,
  Share2,
  FileDown,
  Folder,
  CreditCard,
  Wifi,
  Monitor,
  Smartphone,
  Lock,
  Unlock,
  UserPlus,
  Crown,
  CheckCheck,
  AlertOctagon
} from 'lucide-react';

export function AdminPanelEnhanced() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [newItem, setNewItem] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  // Comprehensive Dashboard Analytics Data
  const dashboardStats = [
    {
      title: 'Total Students',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-600',
      description: 'Active registrations',
      details: 'Monthly growth rate'
    },
    {
      title: 'Placed Students',
      value: '1,892',
      change: '+18%',
      trend: 'up',
      icon: UserCheck,
      color: 'bg-green-500',
      description: 'Successfully placed',
      details: 'This academic year'
    },
    {
      title: 'Active Companies',
      value: '156',
      change: '+8%',
      trend: 'up',
      icon: Building2,
      color: 'bg-orange-500',
      description: 'Recruiting partners',
      details: 'Currently hiring'
    },
    {
      title: 'Placement Rate',
      value: '78.5%',
      change: '+5.2%',
      trend: 'up',
      icon: Target,
      color: 'bg-purple-500',
      description: 'Overall success rate',
      details: 'Above industry average'
    }
  ];

  // Enhanced Sample Data
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Alex Thompson',
      email: 'alex.thompson@university.edu',
      department: 'Computer Science',
      batch: '2024',
      cgpa: 8.7,
      skills: ['React', 'Node.js', 'Python'],
      status: 'Active',
      placementStatus: 'Placed',
      company: 'Google',
      package: '₹45L',
      phone: '+1-555-0123',
      address: '123 University Ave, City, State',
      registrationDate: '2024-01-15',
      lastUpdated: '2024-02-20',
      resumeUploaded: true,
      profileComplete: 95
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@university.edu',
      department: 'Information Technology',
      batch: '2024',
      cgpa: 9.1,
      skills: ['Java', 'Spring Boot', 'AWS'],
      status: 'Active',
      placementStatus: 'Interviewing',
      company: 'Microsoft',
      package: null,
      phone: '+1-555-0124',
      address: '456 Campus Dr, City, State',
      registrationDate: '2024-01-12',
      lastUpdated: '2024-02-18',
      resumeUploaded: true,
      profileComplete: 88
    },
    {
      id: 3,
      name: 'Raj Patel',
      email: 'raj.patel@university.edu',
      department: 'Electronics',
      batch: '2024',
      cgpa: 8.2,
      skills: ['Python', 'Machine Learning', 'TensorFlow'],
      status: 'Active',
      placementStatus: 'Applied',
      company: 'Amazon',
      package: null,
      phone: '+91-9876543210',
      address: '789 College Road, Mumbai, Maharashtra',
      registrationDate: '2024-01-20',
      lastUpdated: '2024-02-15',
      resumeUploaded: false,
      profileComplete: 72
    }
  ]);

  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'Google',
      industry: 'Technology',
      size: '100,000+',
      headquarters: 'Mountain View, CA',
      contactPerson: 'John Smith',
      email: 'john.smith@google.com',
      phone: '+1-650-253-0000',
      status: 'Active',
      registrationDate: '2024-01-05',
      upcomingDrives: 2,
      totalHires: 45,
      avgPackage: '₹52L',
      website: 'https://google.com',
      tier: 'Tier 1',
      jobTypes: ['Full-time', 'Internship']
    },
    {
      id: 2,
      name: 'Microsoft',
      industry: 'Technology',
      size: '200,000+',
      headquarters: 'Redmond, WA',
      contactPerson: 'Jane Doe',
      email: 'jane.doe@microsoft.com',
      phone: '+1-425-882-8080',
      status: 'Active',
      registrationDate: '2024-01-10',
      upcomingDrives: 1,
      totalHires: 38,
      avgPackage: '₹48L',
      website: 'https://microsoft.com',
      tier: 'Tier 1',
      jobTypes: ['Full-time']
    },
    {
      id: 3,
      name: 'Infosys',
      industry: 'Technology Services',
      size: '250,000+',
      headquarters: 'Bangalore, India',
      contactPerson: 'Ravi Kumar',
      email: 'ravi.kumar@infosys.com',
      phone: '+91-80-2852-0261',
      status: 'Active',
      registrationDate: '2024-02-01',
      upcomingDrives: 3,
      totalHires: 156,
      avgPackage: '₹7.5L',
      website: 'https://infosys.com',
      tier: 'Tier 2',
      jobTypes: ['Full-time', 'Internship']
    }
  ]);

  const [communications, setCommunications] = useState([
    {
      id: 1,
      type: 'Notification',
      title: 'Google Campus Drive - Application Deadline',
      message: 'Applications for Google campus drive close on March 25, 2024. Apply now!',
      recipients: 234,
      sentDate: '2024-03-15',
      status: 'Sent',
      priority: 'High'
    },
    {
      id: 2,
      type: 'Announcement',
      title: 'Microsoft Interview Schedule Update',
      message: 'Microsoft technical interviews have been rescheduled to March 30, 2024.',
      recipients: 45,
      sentDate: '2024-03-18',
      status: 'Sent',
      priority: 'Medium'
    },
    {
      id: 3,
      type: 'Email Campaign',
      title: 'Placement Preparation Workshop',
      message: 'Join our comprehensive placement preparation workshop this weekend.',
      recipients: 0,
      sentDate: null,
      status: 'Draft',
      priority: 'Low'
    }
  ]);

  // Navigation items for the admin panel
  const adminNavItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard & Analytics', 
      icon: BarChart3,
      description: 'Overview, KPIs, and trends'
    },
    { 
      id: 'students', 
      label: 'Student Management', 
      icon: Users,
      description: 'Profiles, bulk operations, approvals'
    },
    { 
      id: 'companies', 
      label: 'Company Management', 
      icon: Building2,
      description: 'Recruiters, partnerships, job postings'
    },
    { 
      id: 'drives', 
      label: 'Job Drive Management', 
      icon: Calendar,
      description: 'Create, manage, and track job drives'
    },
    { 
      id: 'communications', 
      label: 'Communications', 
      icon: MessageSquare,
      description: 'Notifications, messaging, announcements'
    },
    { 
      id: 'reports', 
      label: 'Reports & Export', 
      icon: FileSpreadsheet,
      description: 'Analytics, data export, insights'
    },
    { 
      id: 'settings', 
      label: 'System Settings', 
      icon: Settings,
      description: 'Configuration, APIs, branding'
    }
  ];

  const handleBulkImport = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert('Bulk import completed! 45 student records have been imported successfully.');
      setIsLoading(false);
    }, 2000);
  };

  const handleExportData = (format: string) => {
    setIsLoading(true);
    setTimeout(() => {
      alert(`Data exported successfully in ${format.toUpperCase()} format! Check your downloads folder.`);
      setIsLoading(false);
    }, 1500);
  };

  const handleAddItem = (type: string) => {
    setModalType(type);
    setNewItem({});
    setIsAddModalOpen(true);
  };

  const handleEditItem = (item: any) => {
    setEditingItem(item);
    setIsEditModalOpen(true);
  };

  const handleDeleteItem = (id: number, type: string) => {
    if (confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
      switch (type) {
        case 'student':
          setStudents(students.filter(s => s.id !== id));
          alert('Student record deleted successfully.');
          break;
        case 'company':
          setCompanies(companies.filter(c => c.id !== id));
          alert('Company record deleted successfully.');
          break;
        default:
          break;
      }
    }
  };

  const handleSendCommunication = () => {
    alert('Communication system: Send notifications, emails, and announcements to students and faculty!');
  };

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color} shadow-sm`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                    stat.trend === 'up' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span className="font-body">{stat.change}</span>
                  </div>
                </div>
                
                <div>
                  <div className="font-heading text-2xl font-bold text-primary-strong mb-1">
                    {stat.value}
                  </div>
                  <div className="font-heading font-semibold text-sm text-primary-strong mb-1">
                    {stat.title}
                  </div>
                  <div className="font-body text-xs text-secondary-medium">
                    {stat.description}
                  </div>
                  <div className="font-body text-xs text-muted-light mt-1">
                    {stat.details}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading text-lg font-semibold text-primary-strong flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Quick Actions
            </CardTitle>
            <CardDescription className="font-body text-sm text-secondary-medium">
              Frequently used administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                className="bg-brand-primary hover:bg-blue-700 text-white p-4 h-auto flex-col gap-2 font-body"
                onClick={() => handleAddItem('student')}
              >
                <UserPlus className="w-5 h-5" />
                Add Student
              </Button>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white p-4 h-auto flex-col gap-2 font-body"
                onClick={() => handleAddItem('company')}
              >
                <Building2 className="w-5 h-5" />
                Add Company
              </Button>
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white p-4 h-auto flex-col gap-2 font-body"
                onClick={handleSendCommunication}
              >
                <Send className="w-5 h-5" />
                Send Notice
              </Button>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white p-4 h-auto flex-col gap-2 font-body"
                onClick={() => handleExportData('excel')}
              >
                <Download className="w-5 h-5" />
                Export Data
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading text-lg font-semibold text-primary-strong flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription className="font-body text-sm text-secondary-medium">
              Latest placement activities and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-body text-sm font-medium text-primary-strong">New placement at Google</p>
                  <p className="font-body text-xs text-secondary-medium">Alex Thompson selected for SDE role • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-body text-sm font-medium text-primary-strong">New job drive created</p>
                  <p className="font-body text-xs text-secondary-medium">Microsoft SDE position • 4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-body text-sm font-medium text-primary-strong">Interview scheduled</p>
                  <p className="font-body text-xs text-secondary-medium">Amazon technical round for 15 candidates • 6 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-body text-sm font-medium text-primary-strong">New company registered</p>
                  <p className="font-body text-xs text-secondary-medium">Infosys partnership approved • 8 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Placement Statistics Chart */}
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading text-lg font-semibold text-primary-strong">Placement Statistics Overview</CardTitle>
          <CardDescription className="font-body text-sm text-secondary-medium">
            Monthly placement trends and performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-16 h-16 text-brand-primary mx-auto mb-4" />
              <p className="font-body text-secondary-medium">Advanced analytics charts coming soon!</p>
              <p className="font-body text-sm text-muted-light">Interactive placement statistics and trends</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStudentManagement = () => (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-light" />
            <Input 
              placeholder="Search students..." 
              className="pl-10 w-80 font-body"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-40 font-body">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Students</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="placed">Placed</SelectItem>
              <SelectItem value="searching">Searching</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            onClick={handleBulkImport} 
            className="gap-2 font-body"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            Bulk Import
          </Button>
          <Button 
            onClick={() => handleExportData('excel')} 
            className="gap-2 font-body"
            disabled={isLoading}
          >
            <Download className="w-4 h-4" />
            Export Data
          </Button>
          <Button 
            onClick={() => handleAddItem('student')} 
            className="gap-2 bg-brand-primary hover:bg-blue-700 font-body"
          >
            <Plus className="w-4 h-4" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Students Table */}
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="font-heading text-lg font-semibold text-primary-strong">Student Database</CardTitle>
          <CardDescription className="font-body text-sm text-secondary-medium">
            Comprehensive student profile management and placement tracking
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-heading font-semibold text-primary-strong">Student</th>
                  <th className="text-left p-4 font-heading font-semibold text-primary-strong">Department</th>
                  <th className="text-left p-4 font-heading font-semibold text-primary-strong">CGPA</th>
                  <th className="text-left p-4 font-heading font-semibold text-primary-strong">Status</th>
                  <th className="text-left p-4 font-heading font-semibold text-primary-strong">Placement</th>
                  <th className="text-left p-4 font-heading font-semibold text-primary-strong">Profile</th>
                  <th className="text-left p-4 font-heading font-semibold text-primary-strong">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students
                  .filter(student => 
                    (selectedFilter === 'all' || student.status.toLowerCase() === selectedFilter) &&
                    (searchQuery === '' || 
                     student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                     student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                     student.department.toLowerCase().includes(searchQuery.toLowerCase()))
                  )
                  .map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-brand-primary text-white text-sm">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-body font-medium text-primary-strong">{student.name}</div>
                            <div className="font-body text-sm text-secondary-medium">{student.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-body font-medium text-primary-strong">{student.department}</div>
                        <div className="font-body text-sm text-secondary-medium">Batch {student.batch}</div>
                      </td>
                      <td className="p-4">
                        <Badge className="bg-blue-100 text-blue-700 font-body">
                          {student.cgpa}/10
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge className={`font-body ${
                          student.status === 'Active' 
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {student.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        {student.placementStatus === 'Placed' ? (
                          <div>
                            <div className="font-body font-medium text-green-600">{student.company}</div>
                            <div className="font-body text-sm text-secondary-medium">{student.package}</div>
                          </div>
                        ) : (
                          <Badge className="bg-yellow-100 text-yellow-700 font-body">
                            {student.placementStatus}
                          </Badge>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="font-body text-xs text-secondary-medium">{student.profileComplete}%</span>
                          </div>
                          {student.resumeUploaded ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-orange-500" />
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEditItem(student)}
                            className="font-body"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="font-body"
                            onClick={() => alert(`Viewing detailed profile for ${student.name}`)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDeleteItem(student.id, 'student')}
                            className="text-red-600 hover:text-red-700 font-body"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCompanyManagement = () => (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-light" />
            <Input 
              placeholder="Search companies..." 
              className="pl-10 w-80 font-body"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            onClick={() => handleAddItem('company')} 
            className="gap-2 bg-brand-primary hover:bg-blue-700 font-body"
          >
            <Plus className="w-4 h-4" />
            Add Company
          </Button>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies
          .filter(company => 
            searchQuery === '' || 
            company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            company.industry.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((company) => (
            <Card key={company.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary-strong">{company.name}</h3>
                      <p className="font-body text-sm text-secondary-medium">{company.industry}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge className={`font-body ${
                      company.tier === 'Tier 1' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {company.tier}
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 font-body">
                      {company.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-body text-secondary-medium">Total Hires:</span>
                    <span className="font-body font-medium text-primary-strong">{company.totalHires}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-body text-secondary-medium">Avg Package:</span>
                    <span className="font-body font-medium text-green-600">{company.avgPackage}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-body text-secondary-medium">Upcoming Drives:</span>
                    <span className="font-body font-medium text-primary-strong">{company.upcomingDrives}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-body text-secondary-medium">Job Types:</span>
                    <div className="flex gap-1">
                      {company.jobTypes.map((type, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs font-body">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 font-body"
                    onClick={() => alert(`Viewing detailed profile for ${company.name}`)}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEditItem(company)}
                    className="font-body"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => alert(`Additional options for ${company.name}`)}
                    className="font-body"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );

  const renderCommunications = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-primary-strong">Communication Center</CardTitle>
          <CardDescription className="font-body text-secondary-medium">
            Manage notifications and announcements for students and faculty
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="border-2 border-blue-100">
              <CardContent className="p-4 text-center">
                <Bell className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-heading font-semibold text-primary-strong">Push Notifications</h3>
                <p className="font-body text-sm text-secondary-medium mb-3">Send instant alerts to students</p>
                <Button 
                  size="sm" 
                  className="bg-brand-primary hover:bg-blue-700 font-body"
                  onClick={() => alert('Push notification feature: Send instant alerts about placement drives, interviews, and deadlines!')}
                >
                  Send Notification
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100">
              <CardContent className="p-4 text-center">
                <Megaphone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-heading font-semibold text-primary-strong">Announcements</h3>
                <p className="font-body text-sm text-secondary-medium mb-3">Create campus-wide announcements</p>
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700 font-body"
                  onClick={() => alert('Announcement system: Create and schedule important campus announcements!')}
                >
                  New Announcement
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-100">
              <CardContent className="p-4 text-center">
                <Mail className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-heading font-semibold text-primary-strong">Email Campaigns</h3>
                <p className="font-body text-sm text-secondary-medium mb-3">Send targeted email campaigns</p>
                <Button 
                  size="sm" 
                  className="bg-orange-600 hover:bg-orange-700 font-body"
                  onClick={() => alert('Email campaigns: Send newsletters, placement updates, and targeted communications!')}
                >
                  Create Campaign
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-heading font-semibold text-primary-strong mb-4">Recent Communications</h4>
            <div className="space-y-3">
              {communications.map((comm) => (
                <div key={comm.id} className="flex items-center justify-between p-3 bg-white rounded border">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-body text-sm font-medium text-primary-strong">{comm.title}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs font-body ${
                          comm.priority === 'High' ? 'border-red-200 text-red-700' :
                          comm.priority === 'Medium' ? 'border-yellow-200 text-yellow-700' :
                          'border-gray-200 text-gray-700'
                        }`}
                      >
                        {comm.priority}
                      </Badge>
                    </div>
                    <p className="font-body text-xs text-secondary-medium">{comm.message}</p>
                  </div>
                  <div className="text-right ml-4">
                    <Badge 
                      className={`font-body ${
                        comm.status === 'Sent' ? 'bg-green-100 text-green-700' :
                        comm.status === 'Draft' ? 'bg-gray-100 text-gray-700' :
                        'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {comm.status === 'Sent' ? `Sent to ${comm.recipients}` : comm.status}
                    </Badge>
                    {comm.sentDate && (
                      <div className="font-body text-xs text-muted-light mt-1">{comm.sentDate}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-primary-strong">Reports & Analytics</CardTitle>
          <CardDescription className="font-body text-secondary-medium">
            Generate comprehensive placement reports and export data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="border-2 border-blue-100">
              <CardContent className="p-4 text-center">
                <FileSpreadsheet className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-heading font-semibold text-primary-strong">Student Reports</h3>
                <p className="font-body text-sm text-secondary-medium mb-3">Export student data and analytics</p>
                <Button 
                  size="sm" 
                  className="bg-brand-primary hover:bg-blue-700 font-body"
                  onClick={() => handleExportData('student')}
                >
                  Generate Report
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-100">
              <CardContent className="p-4 text-center">
                <PieChart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-heading font-semibold text-primary-strong">Placement Analytics</h3>
                <p className="font-body text-sm text-secondary-medium mb-3">Detailed placement statistics</p>
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700 font-body"
                  onClick={() => handleExportData('placement')}
                >
                  View Analytics
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-100">
              <CardContent className="p-4 text-center">
                <Building2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-heading font-semibold text-primary-strong">Company Reports</h3>
                <p className="font-body text-sm text-secondary-medium mb-3">Recruiting partner analytics</p>
                <Button 
                  size="sm" 
                  className="bg-purple-600 hover:bg-purple-700 font-body"
                  onClick={() => handleExportData('company')}
                >
                  Export Data
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-heading font-semibold text-primary-strong mb-4">Quick Export Options</h4>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="font-body"
                onClick={() => handleExportData('excel')}
              >
                <Download className="w-4 h-4 mr-2" />
                Excel Report
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="font-body"
                onClick={() => handleExportData('pdf')}
              >
                <FileDown className="w-4 h-4 mr-2" />
                PDF Summary
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="font-body"
                onClick={() => handleExportData('csv')}
              >
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                CSV Data
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-primary-strong">System Settings</CardTitle>
          <CardDescription className="font-body text-secondary-medium">
            Configure system preferences and integrations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-100">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-blue-600" />
                  <h3 className="font-heading font-semibold text-primary-strong">General Settings</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-secondary-medium">Email Notifications</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-secondary-medium">Auto Backup</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-secondary-medium">Maintenance Mode</span>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-green-100">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="font-heading font-semibold text-primary-strong">Security Settings</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-secondary-medium">Two-Factor Auth</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-secondary-medium">Session Timeout</span>
                    <span className="font-body text-sm text-primary-strong">30 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-secondary-medium">Login Monitoring</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6">
            <Button 
              className="bg-brand-primary hover:bg-blue-700 font-body"
              onClick={() => alert('Settings saved successfully!')}
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-heading text-3xl font-bold text-primary-strong">Admin Panel</h1>
        <p className="font-body text-secondary-medium">Comprehensive management dashboard for student placements</p>
      </div>

      {/* Navigation Tabs */}
      <div className="space-y-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-2 overflow-x-auto mobile-scroll">
            {adminNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors font-body ${
                    isActive 
                      ? 'bg-blue-100 text-brand-primary border-b-2 border-brand-primary' 
                      : 'text-secondary-medium hover:text-primary-strong hover:bg-gray-100'
                  }`}
                  title={item.description}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'students' && renderStudentManagement()}
          {activeTab === 'companies' && renderCompanyManagement()}
          {activeTab === 'drives' && (
            <div className="space-y-6">
              <JobDriveManager />
            </div>
          )}
          {activeTab === 'communications' && renderCommunications()}
          {activeTab === 'reports' && renderReports()}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>

      {/* Edit Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-primary-strong">Edit {editingItem?.name || 'Item'}</DialogTitle>
            <DialogDescription className="font-body text-secondary-medium">
              Update the information for this item
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="font-body text-primary-strong">Name</Label>
              <Input
                id="name"
                className="font-body"
                value={editingItem?.name || ''}
                onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-body text-primary-strong">Email</Label>
              <Input
                id="email"
                type="email"
                className="font-body"
                value={editingItem?.email || ''}
                onChange={(e) => setEditingItem({...editingItem, email: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsEditModalOpen(false)}
              className="font-body"
            >
              Cancel
            </Button>
            <Button 
              onClick={() => {
                alert('Changes saved successfully!');
                setIsEditModalOpen(false);
              }}
              className="bg-brand-primary hover:bg-blue-700 font-body"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}