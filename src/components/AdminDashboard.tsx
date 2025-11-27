import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Users,
  Building2,
  Briefcase,
  BarChart3,
  FileText,
  Settings,
  Shield,
  Bell,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  AlertTriangle,
  UserCheck,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Globe,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  RefreshCw,
  Activity,
  Server,
  Database,
  Wifi,
  HardDrive,
  Cpu,
  Monitor,
  Star,
  MessageSquare,
  Target,
  Award,
  Zap,
  PieChart
} from 'lucide-react';

export function AdminDashboard() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  const keyMetrics = [
    {
      id: 'total-students',
      title: 'Total Students',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500',
      description: 'Active registered students'
    },
    {
      id: 'active-companies',
      title: 'Active Companies',
      value: '156',
      change: '+8%',
      trend: 'up',
      icon: Building2,
      color: 'bg-green-500',
      description: 'Companies actively recruiting'
    },
    {
      id: 'open-positions',
      title: 'Open Positions',
      value: '342',
      change: '+23%',
      trend: 'up',
      icon: Briefcase,
      color: 'bg-purple-500',
      description: 'Available job openings'
    },
    {
      id: 'placement-rate',
      title: 'Placement Rate',
      value: '78.5%',
      change: '+5.2%',
      trend: 'up',
      icon: Target,
      color: 'bg-orange-500',
      description: 'Students successfully placed'
    },
    {
      id: 'avg-salary',
      title: 'Avg. Salary',
      value: '$85,400',
      change: '+15%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-teal-500',
      description: 'Average placement salary'
    },
    {
      id: 'satisfaction',
      title: 'Satisfaction Score',
      value: '4.8/5',
      change: '+0.3',
      trend: 'up',
      icon: Star,
      color: 'bg-pink-500',
      description: 'Overall platform rating'
    }
  ];

  const managementSections = [
    {
      id: 'user-management',
      title: 'User Management',
      description: 'Manage students, recruiters, and administrators',
      icon: Users,
      stats: '2,847 users',
      actions: ['View All', 'Add User', 'Bulk Actions'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'company-management',
      title: 'Company Management',
      description: 'Oversee company profiles and partnerships',
      icon: Building2,
      stats: '156 companies',
      actions: ['View Companies', 'Add Company', 'Partnerships'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'job-management',
      title: 'Job Management',
      description: 'Monitor job postings and applications',
      icon: Briefcase,
      stats: '342 active jobs',
      actions: ['View Jobs', 'Create Job', 'Applications'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'analytics-reports',
      title: 'Analytics & Reports',
      description: 'Comprehensive insights and data analysis',
      icon: BarChart3,
      stats: '24 reports',
      actions: ['View Analytics', 'Generate Report', 'Export Data'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'communication',
      title: 'Communication Hub',
      description: 'Manage notifications and messaging',
      icon: MessageSquare,
      stats: '1,234 messages',
      actions: ['View Messages', 'Send Notice', 'Templates'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'system-admin',
      title: 'System Administration',
      description: 'Platform settings and configurations',
      icon: Settings,
      stats: 'All systems active',
      actions: ['System Status', 'Configure', 'Maintenance'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user',
      message: 'New student registered: Sarah Johnson',
      time: '2 minutes ago',
      icon: UserCheck,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'company',
      message: 'Google updated their job posting',
      time: '15 minutes ago',
      icon: Building2,
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'application',
      message: '12 new applications submitted',
      time: '1 hour ago',
      icon: FileText,
      color: 'text-purple-600'
    },
    {
      id: 4,
      type: 'system',
      message: 'System backup completed successfully',
      time: '2 hours ago',
      icon: Shield,
      color: 'text-teal-600'
    }
  ];

  const systemStatus = [
    {
      name: 'API Server',
      status: 'Operational',
      uptime: '99.9%',
      icon: Server,
      color: 'text-green-600'
    },
    {
      name: 'Database',
      status: 'Operational',
      uptime: '99.8%',
      icon: Database,
      color: 'text-green-600'
    },
    {
      name: 'CDN',
      status: 'Operational',
      uptime: '100%',
      icon: Wifi,
      color: 'text-green-600'
    },
    {
      name: 'Storage',
      status: 'Warning',
      uptime: '98.5%',
      icon: HardDrive,
      color: 'text-yellow-600'
    }
  ];

  const quickActions = [
    {
      id: 'add-user',
      label: 'Add New User',
      icon: Plus,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'create-job',
      label: 'Create Job Post',
      icon: Briefcase,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'send-notification',
      label: 'Send Notification',
      icon: Bell,
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      id: 'generate-report',
      label: 'Generate Report',
      icon: FileText,
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <div className="space-y-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div
          className="transition-all duration-300 hover:translate-x-1"
          onMouseEnter={() => setHoveredCard('header')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h1 className={`text-3xl font-bold transition-all duration-300 ${
            hoveredCard === 'header' 
              ? 'text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
              : 'text-foreground'
          }`}>
            Placement Admin Dashboard
          </h1>
          <p className={`text-muted-foreground mt-2 transition-all duration-300 ${
            hoveredCard === 'header' ? 'font-semibold text-foreground' : ''
          }`}>
            Comprehensive management and analytics platform
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.id}
              className={`${action.color} text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              onMouseEnter={() => setHoveredAction(action.id)}
              onMouseLeave={() => setHoveredAction(null)}
            >
              <action.icon className={`size-4 mr-2 transition-transform duration-300 ${
                hoveredAction === action.id ? 'rotate-12 scale-110' : ''
              }`} />
              <span className={`transition-all duration-300 ${
                hoveredAction === action.id ? 'font-bold' : ''
              }`}>
                {action.label}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {keyMetrics.map((metric) => {
          const Icon = metric.icon;
          const isHovered = hoveredMetric === metric.id;
          
          return (
            <div
              key={metric.id}
              className={`transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                isHovered ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredMetric(metric.id)}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <Card className={`transition-all duration-300 ${
                isHovered 
                  ? 'shadow-2xl ring-2 ring-primary border-primary/50 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-blue-900' 
                  : 'hover:shadow-lg'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${metric.color} transition-all duration-300 ${
                      isHovered ? 'scale-110 rotate-3' : ''
                    }`}>
                      <Icon className="size-6 text-white" />
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                      metric.trend === 'up' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                        : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {metric.trend === 'up' ? (
                        <TrendingUp className="size-3" />
                      ) : (
                        <TrendingDown className="size-3" />
                      )}
                      <span className={`transition-all duration-300 ${isHovered ? 'font-bold' : ''}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className={`text-2xl font-bold transition-all duration-300 ${
                      isHovered ? 'text-3xl text-primary' : 'text-foreground'
                    }`}>
                      {metric.value}
                    </div>
                    <div className={`text-sm text-muted-foreground mt-1 transition-all duration-300 ${
                      isHovered ? 'font-semibold text-foreground' : ''
                    }`}>
                      {metric.title}
                    </div>
                    <div className={`text-xs text-muted-foreground mt-2 transition-all duration-300 ${
                      isHovered ? 'font-medium opacity-100' : 'opacity-0'
                    }`}>
                      {metric.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Management Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {managementSections.map((section) => {
          const Icon = section.icon;
          const isHovered = hoveredCard === section.id;
          
          return (
            <div
              key={section.id}
              className={`transition-all duration-500 cursor-pointer transform ${
                isHovered ? 'scale-105' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredCard(section.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className={`transition-all duration-500 ${
                isHovered 
                  ? 'shadow-2xl ring-2 ring-primary border-primary/50 bg-gradient-to-br from-white to-primary/5 dark:from-slate-800 dark:to-primary/10' 
                  : 'hover:shadow-lg'
              }`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${section.color} transition-all duration-300 ${
                      isHovered ? 'scale-110 rotate-6 shadow-lg' : ''
                    }`}>
                      <Icon className="size-8 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`transition-all duration-300 ${
                        isHovered ? 'bg-primary text-primary-foreground font-bold scale-105' : ''
                      }`}
                    >
                      {section.stats}
                    </Badge>
                  </div>
                  
                  <CardTitle className={`text-xl transition-all duration-300 ${
                    isHovered ? 'text-2xl font-bold text-primary' : ''
                  }`}>
                    {section.title}
                  </CardTitle>
                  
                  <CardDescription className={`transition-all duration-300 ${
                    isHovered ? 'font-semibold text-foreground' : ''
                  }`}>
                    {section.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {section.actions.map((action, index) => (
                      <Button
                        key={index}
                        variant={isHovered ? 'default' : 'outline'}
                        className={`w-full justify-start transition-all duration-300 transform ${
                          isHovered 
                            ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold hover:scale-105 shadow-md' 
                            : 'hover:bg-accent'
                        }`}
                      >
                        <span className={`transition-all duration-300 ${
                          isHovered ? 'ml-2' : ''
                        }`}>
                          {action}
                        </span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Bottom Grid - Recent Activities & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <Card
          className={`transition-all duration-300 ${
            hoveredCard === 'activities' 
              ? 'shadow-2xl ring-2 ring-primary border-primary/50 bg-gradient-to-br from-white to-green-50 dark:from-slate-800 dark:to-green-900' 
              : ''
          }`}
          onMouseEnter={() => setHoveredCard('activities')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className={`transition-all duration-300 ${
                hoveredCard === 'activities' ? 'text-xl font-bold text-primary' : ''
              }`}>
                Recent Activities
              </CardTitle>
              <CardDescription className={`transition-all duration-300 ${
                hoveredCard === 'activities' ? 'font-semibold text-foreground' : ''
              }`}>
                Latest platform activities and updates
              </CardDescription>
            </div>
            <Activity className={`size-6 text-muted-foreground transition-all duration-300 ${
              hoveredCard === 'activities' ? 'text-primary scale-125 rotate-12' : ''
            }`} />
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-accent/50 cursor-pointer ${
                      hoveredCard === 'activities' ? 'hover:scale-105 hover:shadow-md' : ''
                    }`}
                  >
                    <div className={`p-2 rounded-lg bg-accent transition-all duration-300 ${
                      hoveredCard === 'activities' ? 'scale-110' : ''
                    }`}>
                      <Icon className={`size-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm transition-all duration-300 ${
                        hoveredCard === 'activities' ? 'font-semibold' : ''
                      }`}>
                        {activity.message}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card
          className={`transition-all duration-300 ${
            hoveredCard === 'system' 
              ? 'shadow-2xl ring-2 ring-primary border-primary/50 bg-gradient-to-br from-white to-teal-50 dark:from-slate-800 dark:to-teal-900' 
              : ''
          }`}
          onMouseEnter={() => setHoveredCard('system')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className={`transition-all duration-300 ${
                hoveredCard === 'system' ? 'text-xl font-bold text-primary' : ''
              }`}>
                System Status
              </CardTitle>
              <CardDescription className={`transition-all duration-300 ${
                hoveredCard === 'system' ? 'font-semibold text-foreground' : ''
              }`}>
                Real-time system health monitoring
              </CardDescription>
            </div>
            <Monitor className={`size-6 text-muted-foreground transition-all duration-300 ${
              hoveredCard === 'system' ? 'text-primary scale-125 rotate-12' : ''
            }`} />
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {systemStatus.map((system, index) => {
                const Icon = system.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 hover:bg-accent/50 cursor-pointer ${
                      hoveredCard === 'system' ? 'hover:scale-105 hover:shadow-md' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-accent transition-all duration-300 ${
                        hoveredCard === 'system' ? 'scale-110' : ''
                      }`}>
                        <Icon className={`size-4 ${system.color}`} />
                      </div>
                      <div>
                        <p className={`font-medium transition-all duration-300 ${
                          hoveredCard === 'system' ? 'font-bold' : ''
                        }`}>
                          {system.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{system.status}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`transition-all duration-300 ${
                        hoveredCard === 'system' ? 'bg-primary text-primary-foreground font-bold' : ''
                      }`}
                    >
                      {system.uptime}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}