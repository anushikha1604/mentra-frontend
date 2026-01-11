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

export function InstituteDashboard() {
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div>
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
