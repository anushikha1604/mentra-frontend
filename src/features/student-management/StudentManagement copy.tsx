import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Progress } from '../../components/ui/progress';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog';
import { Label } from '../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Switch } from '../../components/ui/switch';
import { Checkbox } from '../../components/ui/checkbox';
import { JobDriveManager } from '../../components/JobDriveManager';
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
  AlertOctagon,
} from 'lucide-react';

export function StudentManagement() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [newItem, setNewItem] = useState<any>({});

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
    },
    {
      title: 'Placed Students',
      value: '1,892',
      change: '+18%',
      trend: 'up',
      icon: UserCheck,
      color: 'bg-green-500',
      description: 'Successfully placed',
    },
    {
      title: 'Active Companies',
      value: '156',
      change: '+8%',
      trend: 'up',
      icon: Building2,
      color: 'bg-orange-500',
      description: 'Recruiting partners',
    },
    {
      title: 'Placement Rate',
      value: '78.5%',
      change: '+5.2%',
      trend: 'up',
      icon: Target,
      color: 'bg-purple-500',
      description: 'Overall success rate',
    },
  ];

  // Sample Data States
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
    },
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
    },
  ]);

  // Navigation items for the admin panel
  const adminNavItems = [
    {
      id: 'dashboard',
      label: 'Dashboard & Analytics',
      icon: BarChart3,
      description: 'Overview, KPIs, and trends',
    },
    {
      id: 'students',
      label: 'Student Management',
      icon: Users,
      description: 'Profiles, bulk operations, approvals',
    },
    {
      id: 'companies',
      label: 'Company Management',
      icon: Building2,
      description: 'Recruiters, partnerships, job postings',
    },
    {
      id: 'drives',
      label: 'Job Drive Management',
      icon: Calendar,
      description: 'Create, manage, and track job drives',
    },
    {
      id: 'communications',
      label: 'Communications',
      icon: MessageSquare,
      description: 'Notifications, messaging, announcements',
    },
    {
      id: 'reports',
      label: 'Reports & Export',
      icon: FileSpreadsheet,
      description: 'Analytics, data export, insights',
    },
    {
      id: 'settings',
      label: 'System Settings',
      icon: Settings,
      description: 'Configuration, APIs, branding',
    },
  ];

  const handleBulkImport = () => {
    console.log('Bulk import initiated');
  };

  const handleExportData = (format: string) => {
    console.log(`Exporting data in ${format} format`);
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
    if (confirm('Are you sure you want to delete this item?')) {
      switch (type) {
        case 'student':
          setStudents(students.filter((s) => s.id !== id));
          break;
        case 'company':
          setCompanies(companies.filter((c) => c.id !== id));
          break;
        default:
          break;
      }
    }
  };

  const renderDashboardContent = () => (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color} shadow-sm`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      stat.trend === 'up'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-sm text-gray-900 mb-1">
                    {stat.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Recent Activity
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Latest placement activities and updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  New placement at Google
                </p>
                <p className="text-xs text-gray-600">
                  Alex Thompson was selected for SDE role • 2 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  New job drive created
                </p>
                <p className="text-xs text-gray-600">
                  Microsoft SDE position • 4 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Interview scheduled
                </p>
                <p className="text-xs text-gray-600">
                  Amazon technical round for 15 candidates • 6 hours ago
                </p>
              </div>
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
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search students..."
              className="pl-10 w-80"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-40">
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
            className="gap-2"
          >
            <Upload className="w-4 h-4" />
            Bulk Import
          </Button>
          <Button onClick={() => handleExportData('excel')} className="gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </Button>
          <Button onClick={() => handleAddItem('student')} className="gap-2">
            <Plus className="w-4 h-4" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Students Table */}
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">
            Student Database
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Comprehensive student profile management and placement tracking
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-900">
                    Student
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900">
                    Department
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900">
                    CGPA
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900">
                    Placement
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-blue-600 text-white text-sm">
                            {student.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900">
                            {student.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {student.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-gray-900">
                        {student.department}
                      </div>
                      <div className="text-sm text-gray-500">
                        Batch {student.batch}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className="bg-blue-100 text-blue-700">
                        {student.cgpa}/10
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={
                          student.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }
                      >
                        {student.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      {student.placementStatus === 'Placed' ? (
                        <div>
                          <div className="font-medium text-green-600">
                            {student.company}
                          </div>
                          <div className="text-sm text-gray-500">
                            {student.package}
                          </div>
                        </div>
                      ) : (
                        <Badge className="bg-yellow-100 text-yellow-700">
                          {student.placementStatus}
                        </Badge>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditItem(student)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleDeleteItem(student.id, 'student')
                          }
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
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input placeholder="Search companies..." className="pl-10 w-80" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button onClick={() => handleAddItem('company')} className="gap-2">
            <Plus className="w-4 h-4" />
            Add Company
          </Button>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <Card
            key={company.id}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {company.name}
                    </h3>
                    <p className="text-sm text-gray-500">{company.industry}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700">
                  {company.status}
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Total Hires:</span>
                  <span className="font-medium">{company.totalHires}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Avg Package:</span>
                  <span className="font-medium text-green-600">
                    {company.avgPackage}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Upcoming Drives:</span>
                  <span className="font-medium">{company.upcomingDrives}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditItem(company)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600">
          Comprehensive management dashboard for student placements
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="space-y-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-2 overflow-x-auto">
            {adminNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">{renderDashboardContent()}</div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-6">{renderStudentManagement()}</div>
          )}

          {activeTab === 'companies' && (
            <div className="space-y-6">{renderCompanyManagement()}</div>
          )}

          {activeTab === 'drives' && (
            <div className="space-y-6">
              <JobDriveManager />
            </div>
          )}

          {activeTab === 'communications' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Communication Center</CardTitle>
                  <CardDescription>
                    Manage notifications and announcements
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Communication Management
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Send notifications and manage announcements
                  </p>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Announcement
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reports & Analytics</CardTitle>
                  <CardDescription>
                    Generate and export placement reports
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <FileSpreadsheet className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Report Generation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Generate comprehensive placement reports
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Student Data
                    </Button>
                    <Button>
                      <FileSpreadsheet className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>
                    Configure system preferences and integrations
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    System Configuration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Manage system settings and preferences
                  </p>
                  <Button>
                    <Settings className="w-4 h-4 mr-2" />
                    Configure Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit {editingItem?.name || 'Item'}</DialogTitle>
            <DialogDescription>
              Update the information for this item
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={editingItem?.name || ''}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, name: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={editingItem?.email || ''}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, email: e.target.value })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsEditModalOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
