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

export function Companies() {
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [newItem, setNewItem] = useState<any>({});

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
                      <p className="text-sm text-gray-500">
                        {company.industry}
                      </p>
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
                    <span className="font-medium">
                      {company.upcomingDrives}
                    </span>
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
