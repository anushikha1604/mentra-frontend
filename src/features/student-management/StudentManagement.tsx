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
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [newItem, setNewItem] = useState<any>({});

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
        default:
          break;
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
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
