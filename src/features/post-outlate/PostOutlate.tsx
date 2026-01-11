import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import {
  BarChart3,
  Search,
  BookOpen,
  MessageSquare,
  FolderOpen,
  FileText,
  Settings,
  GraduationCap,
  Briefcase,
  Target,
  Bell,
  User,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  LogOut,
  Home,
  AlertCircle,
  Info,
  Users,
  Building2,
  Calendar,
  FileSpreadsheet,
} from 'lucide-react';

import { Outlet, useNavigate, NavLink } from 'react-router';
import SessionProvider from '../../utils/SessionProvider';
import { ROLES } from '../../constants/APP';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../login/userSlice';
import { group } from 'console';

const studentNavItems = [
  // Core Features - Level 1
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: BarChart3,
    description: 'Overview of your placement journey',
    category: 'main',
    path: '/student',
  },
  {
    id: 'profile',
    label: 'My Profile',
    icon: User,
    description: 'Manage your academic and professional details',
    category: 'main',
    path: '/student/profile',
  },
  {
    id: 'jobs',
    label: 'Find Jobs',
    icon: Search,
    description: 'Discover opportunities that match your skills',
    category: 'main',
    path: '/student/jobs',
  },
  {
    id: 'applications',
    label: 'My Applications',
    icon: FileText,
    description: 'Track your job application progress',
    category: 'main',
    path: '/student/applications',
  },

  // Career Tools - Level 2
  {
    id: 'resume',
    label: 'Resume Builder',
    icon: FileText,
    description: 'Create professional resumes',
    category: 'tools',
    path: '/student/resume',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    icon: FolderOpen,
    description: 'Showcase your projects and achievements',
    category: 'tools',
    path: '/student/portfolio',
  },
  {
    id: 'roadmap',
    label: 'Career Roadmap',
    icon: Target,
    description: 'Plan your path to dream companies',
    category: 'tools',
    path: '/student/roadmap',
  },

  // Resources & Communication - Level 3
  {
    id: 'resources',
    label: 'Career Resources',
    icon: BookOpen,
    description: 'Learning materials and career guidance',
    category: 'support',
    path: '/student/resources',
  },
  {
    id: 'communications',
    label: 'Messages',
    icon: MessageSquare,
    description: 'Connect with recruiters and peers',
    category: 'support',
    badge: 3,
    path: '/student/communications',
  },
  {
    id: 'analytics',
    label: 'My Analytics',
    icon: TrendingUp,
    description: 'Track your placement performance',
    category: 'support',
    path: '/student/analytics',
  },
];

// Navigation items for the admin panel
const instituteNavItems = [
  {
    id: 'dashboard',
    label: 'Dashboard & Analytics',
    icon: BarChart3,
    description: 'Overview, KPIs, and trends',
    category: 'main',
    path: '/institute',
  },
  {
    id: 'students',
    label: 'Student Management',
    icon: Users,
    description: 'Profiles, bulk operations, approvals',
    category: 'main',
    path: '/institute/students',
  },
  {
    id: 'companies',
    label: 'Company Management',
    icon: Building2,
    description: 'Recruiters, partnerships, job postings',
    category: 'main',
    path: '/institute/companies',
  },
  {
    id: 'drives',
    label: 'Job Drive Management',
    icon: Calendar,
    description: 'Create, manage, and track job drives',
    category: 'main',
    path: '/institute/jobs',
  },
  {
    id: 'communications',
    label: 'Communications',
    icon: MessageSquare,
    description: 'Notifications, messaging, announcements',
    category: 'main',
    path: '/institute/communications',
  },
  {
    id: 'reports',
    label: 'Reports & Export',
    icon: FileSpreadsheet,
    description: 'Analytics, data export, insights',
    category: 'main',
    path: '/institute/reports',
  },
  {
    id: 'settings',
    label: 'System Settings',
    icon: Settings,
    description: 'Configuration, APIs, branding',
    category: 'main',
    path: '/institute/settings',
  },
];

export function PostOutlate() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      type: 'info',
      message: 'New placement drive from TechCorp starting Monday!',
      dismissible: true,
    },
  ]);

  const dismissAnnouncement = (id) => {
    setAnnouncements((prev) =>
      prev.filter((announcement) => announcement.id !== id)
    );
  };

  const renderAnnouncements = () => {
    if (announcements.length === 0) return null;

    return (
      <div className="space-y-2 mb-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-blue-50 border border-blue-200 rounded-lg p-3"
          >
            <div className="flex items-start space-x-2">
              <Info className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-body text-sm text-primary-strong">
                  {announcement.message}
                </p>
              </div>
              {announcement.dismissible && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => dismissAnnouncement(announcement.id)}
                  className="text-brand-primary hover:text-blue-700 p-1"
                  aria-label="Dismiss announcement"
                >
                  <X className="w-3 h-3" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const navigationItems =
    SessionProvider.getRole() === ROLES.INSTITUTE
      ? instituteNavItems
      : studentNavItems;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogOut());
    navigate('/login');
  };

  const renderNavigationItems = (category: string, label: string) => (
    <div>
      <h3 className="font-heading text-xs font-semibold text-blue-200 uppercase tracking-wider mb-3 px-3">
        {label}
      </h3>
      <div className="space-y-1">
        {navigationItems
          .filter((item) => item.category === category)
          .map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                to={item.path}
                key={item.id}
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? 'pending' : '',
                    isActive
                      ? ' bg-brand-orange text-white shadow-lg'
                      : ' text-blue-100 hover:bg-blue-700 hover:text-white',
                    isTransitioning ? 'transitioning' : '',
                  ].join(
                    ' group w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200'
                  )
                }
                aria-label={item.description}
                title={item.description}
                end
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="font-body font-medium block truncate">
                    {item.label}
                  </span>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Enhanced Responsive Sidebar */}
      <div
        className={`
            fixed inset-y-0 left-0 z-50 w-72 md:w-64 bg-mentra-blue transform transition-transform duration-300 ease-in-out
            md:relative md:transform-none md:translate-x-0
            ${
              sidebarOpen
                ? 'translate-x-0'
                : '-translate-x-full md:translate-x-0'
            }
            shadow-2xl md:shadow-none
          `}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-blue-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-brand-primary" />
            </div>
            <span className="font-heading text-white font-semibold text-lg">
              Mentra
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-blue-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
          {renderNavigationItems('main', 'Main')}
          {renderNavigationItems('tools', 'Career Tools')}
          {renderNavigationItems('support', 'Support')}
        </nav>

        {/* Settings and Logout at bottom */}
        <div className="p-4 border-t border-blue-700 space-y-2">
          <button
            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors text-blue-100 hover:bg-red-600 hover:text-white font-body"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Enhanced Top Header */}
        <header className="h-16 md:h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-40 shadow-sm">
          <div className="flex items-center space-x-2 md:space-x-4 flex-1">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden min-h-[44px] min-w-[44px] p-2"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </Button>

            {/* Search - Hidden on mobile, shown on tablet+ */}
            <div className="relative hidden sm:block flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-light" />
              <Input
                type="text"
                placeholder="Search jobs, companies, resources..."
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white min-h-[40px] font-body"
                aria-label="Search jobs, companies, and resources"
              />
            </div>

            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="sm:hidden min-h-[44px] min-w-[44px] p-2"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Quick Action Buttons - Responsive */}
            <div className="hidden lg:flex items-center space-x-2">
              <NavLink
                to="/student/profile"
                aria-label="Browse available jobs"
                className="font-body"
              >
                Update Profile
              </NavLink>
            </div>

            {/* Mobile Quick Actions */}
            <div className="lg:hidden flex items-center space-x-1">
              <NavLink
                to="/student/jobs"
                aria-label="Browse available jobs"
                className="min-h-[44px] min-w-[44px] p-2"
              >
                <Briefcase className="w-5 h-5" />
              </NavLink>
            </div>

            {/* Notification Bell with Count */}
            <NavLink
              to="/student/communications"
              aria-label="Browse available jobs"
              className="relative min-h-[44px] min-w-[44px] p-2"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                7
              </div>
            </NavLink>

            {/* User Profile Section */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <Avatar className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:ring-2 hover:ring-blue-200 transition-all">
                <AvatarFallback className="bg-brand-primary text-white text-sm font-semibold">
                  {SessionProvider.getFullName()
                    .split(' ')
                    .map((n: string) => n[0])
                    .join('')
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>

              {/* User Info - Hidden on mobile */}
              <div className="hidden md:block">
                <div className="font-body text-sm font-semibold text-primary-strong">
                  {SessionProvider.getFullName()}
                </div>
                <div className="font-body text-xs text-muted-light text-uppercase">
                  {SessionProvider.getRole()}
                </div>
              </div>

              {/* Logout Button */}
              <Button
                variant="ghost"
                size="sm"
                className="text-faded-subtle hover:text-red-500 min-h-[44px] min-w-[44px] p-2"
                aria-label="Logout"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Enhanced Main Content Area */}
        <main className="flex-1 p-4 md:p-6 overflow-auto" role="main">
          <div className="max-w-7xl mx-auto">
            {/* System Status & Announcements */}
            {renderAnnouncements()}

            {/* Skip NavLink for Accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-primary text-white px-4 py-2 rounded-lg z-50 font-body"
            >
              Skip to main content
            </a>

            <div id="main-content">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
