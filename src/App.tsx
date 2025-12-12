import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import {
  BarChart3,
  Users,
  Search,
  Calendar,
  BookOpen,
  MessageSquare,
  Trophy,
  Heart,
  FolderOpen,
  FileText,
  Settings,
  GraduationCap,
  Building2,
  Briefcase,
  Target,
  Bell,
  User,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Award,
  MapPin,
  DollarSign,
  Clock,
  Plus,
  ExternalLink,
  LogOut,
  Home,
  ChevronDown,
  Download,
  RotateCcw,
  Filter,
  Star,
  Edit,
  Camera,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
} from 'lucide-react';
import { ProfileManagement } from './components/ProfileManagement';
import { JobSearchEnhanced } from './components/JobSearchEnhanced';
import { DreamCompanyRoadmap } from './components/DreamCompanyRoadmap';
import { ApplicationTrackerEnhanced } from './components/ApplicationTrackerEnhanced';
import { Analytics } from './components/Analytics';
import { CommunicationCenter } from './components/CommunicationCenter';
import { CareerResources } from './components/CareerResources';
import { PortfolioBuilder } from './components/PortfolioBuilder';
import { ResumeBuilder } from './components/ResumeBuilder';
import { AdminPanelEnhanced } from './components/AdminPanelEnhanced';
import { Settings as SettingsComponent } from './components/Settings';
import { LandingPage } from './components/LandingPage';
import { SignUpPage } from './components/SignUpPage';
import { LoginPage } from './components/LoginPage';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [error, setError] = useState(null);
  const [networkStatus, setNetworkStatus] = useState('online');
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      type: 'info',
      message: 'New placement drive from TechCorp starting Monday!',
      dismissible: true,
    },
  ]);

  useEffect(() => {
    const updateMobileState = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Network status monitoring
    const updateNetworkStatus = () => {
      setNetworkStatus(navigator.onLine ? 'online' : 'offline');
    };

    // Keyboard navigation
    const handleKeyDown = (event) => {
      // Alt + M to toggle mobile menu
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        setSidebarOpen(!sidebarOpen);
      }

      // Alt + S to focus search
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        const searchInput = document.querySelector(
          'input[placeholder*="Search"]'
        );
        if (searchInput) {
          searchInput.focus();
        }
      }

      // Escape to close sidebar on mobile
      if (event.key === 'Escape' && sidebarOpen && isMobile) {
        setSidebarOpen(false);
      }
    };

    updateMobileState();
    updateNetworkStatus();

    window.addEventListener('resize', updateMobileState);
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', updateMobileState);
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [sidebarOpen, isMobile]);

  const handleNavigation = (page) => {
    try {
      setError(null);
      setIsLoading(true);

      // Small delay to show loading state
      setTimeout(() => {
        if (page === 'dashboard') {
          setIsAuthenticated(true);
          setCurrentPage('dashboard');
          setActiveSection('dashboard');
          updateBreadcrumbs('dashboard');
        } else if (page === 'logout') {
          // Simulate logout process
          setTimeout(() => {
            setIsAuthenticated(false);
            setCurrentPage('landing');
            setActiveSection('dashboard');
            setBreadcrumbs([]);
            setIsLoading(false);
          }, 500);
          return; // Exit early for logout
        } else {
          setCurrentPage(page);
        }
        setIsLoading(false);
      }, 300);
    } catch (err) {
      setError('Navigation failed. Please try again.');
      console.error('Navigation error:', err);
      setIsLoading(false);
    }
  };

  const dismissAnnouncement = (id) => {
    setAnnouncements((prev) =>
      prev.filter((announcement) => announcement.id !== id)
    );
  };

  const renderError = () => {
    if (!error) return null;

    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <div>
            <h3 className="font-heading text-sm font-medium text-red-800">
              Error
            </h3>
            <p className="font-body text-sm text-red-700">{error}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setError(null)}
            className="ml-auto text-red-600 hover:text-red-700"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
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

  const renderNetworkStatus = () => {
    if (networkStatus === 'online') return null;

    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-yellow-600" />
          <p className="font-body text-sm text-yellow-800">
            You're currently offline. Some features may not be available.
          </p>
        </div>
      </div>
    );
  };

  const updateBreadcrumbs = (section: string) => {
    const breadcrumbMap = {
      dashboard: [],
      profile: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Profile Management', path: 'profile' },
      ],
      applications: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Application Tracker', path: 'applications' },
      ],
      jobs: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Job Search', path: 'jobs' },
      ],
      roadmap: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Career Roadmap', path: 'roadmap' },
      ],
      resume: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Resume Builder', path: 'resume' },
      ],
      portfolio: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Portfolio', path: 'portfolio' },
      ],
      resources: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Career Resources', path: 'resources' },
      ],
      communications: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Messages', path: 'communications' },
      ],
      analytics: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Analytics', path: 'analytics' },
      ],
      admin: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Admin Panel', path: 'admin' },
      ],
      settings: [
        { label: 'Dashboard', path: 'dashboard' },
        { label: 'Settings', path: 'settings' },
      ],
    };
    setBreadcrumbs(breadcrumbMap[section] || []);
  };

  const renderBreadcrumbs = () => {
    if (activeSection === 'dashboard' || breadcrumbs.length === 0) return null;

    return (
      <nav
        className="flex items-center space-x-1 md:space-x-2 text-sm text-muted-light mb-4 md:mb-6 px-1 overflow-x-auto mobile-scroll"
        aria-label="Breadcrumb navigation"
      >
        <button
          onClick={() => {
            setActiveSection('dashboard');
            updateBreadcrumbs('dashboard');
          }}
          className="flex items-center space-x-1 text-faded-subtle hover:text-brand-primary transition-colors min-w-fit p-1 rounded"
          aria-label="Go to dashboard"
        >
          <Home className="w-4 h-4 flex-shrink-0" />
          <span className="hidden sm:inline font-body">Home</span>
        </button>

        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <ChevronRight
              className="w-4 h-4 text-faded-subtle flex-shrink-0"
              aria-hidden="true"
            />
            <button
              onClick={() => {
                setActiveSection(crumb.path);
                updateBreadcrumbs(crumb.path);
              }}
              className={`min-w-fit p-1 rounded transition-colors truncate max-w-[120px] md:max-w-none font-body ${
                index === breadcrumbs.length - 1
                  ? 'text-primary-strong font-medium cursor-default'
                  : 'text-secondary-medium hover:text-brand-primary hover:underline'
              }`}
              aria-label={
                index === breadcrumbs.length - 1
                  ? `Current page: ${crumb.label}`
                  : `Go to ${crumb.label}`
              }
              disabled={index === breadcrumbs.length - 1}
              aria-current={
                index === breadcrumbs.length - 1 ? 'page' : undefined
              }
            >
              {crumb.label}
            </button>
          </React.Fragment>
        ))}
      </nav>
    );
  };

  const navigationItems = [
    // Core Features - Level 1
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: BarChart3,
      description: 'Overview of your placement journey',
      category: 'main',
    },
    {
      id: 'profile',
      label: 'My Profile',
      icon: User,
      description: 'Manage your academic and professional details',
      category: 'main',
    },
    {
      id: 'jobs',
      label: 'Find Jobs',
      icon: Search,
      description: 'Discover opportunities that match your skills',
      category: 'main',
    },
    {
      id: 'applications',
      label: 'My Applications',
      icon: FileText,
      description: 'Track your job application progress',
      category: 'main',
    },

    // Career Tools - Level 2
    {
      id: 'resume',
      label: 'Resume Builder',
      icon: FileText,
      description: 'Create professional resumes',
      category: 'tools',
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      icon: FolderOpen,
      description: 'Showcase your projects and achievements',
      category: 'tools',
    },
    {
      id: 'roadmap',
      label: 'Career Roadmap',
      icon: Target,
      description: 'Plan your path to dream companies',
      category: 'tools',
    },

    // Resources & Communication - Level 3
    {
      id: 'resources',
      label: 'Career Resources',
      icon: BookOpen,
      description: 'Learning materials and career guidance',
      category: 'support',
    },
    {
      id: 'communications',
      label: 'Messages',
      icon: MessageSquare,
      description: 'Connect with recruiters and peers',
      category: 'support',
      badge: 3,
    },
    {
      id: 'analytics',
      label: 'My Analytics',
      icon: TrendingUp,
      description: 'Track your placement performance',
      category: 'support',
    },
  ];

  const adminNavigation = [
    {
      id: 'admin',
      label: 'Admin Panel',
      icon: Settings,
      description: 'Manage students and placement activities',
      category: 'admin',
    },
  ];

  // Dashboard data with consistent branding
  const stats = [
    {
      title: 'Total Applications',
      value: '28',
      subtitle: 'Applied this month',
      color: 'text-brand-primary',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Interviews Scheduled',
      value: '7',
      subtitle: 'Upcoming this week',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Offers Received',
      value: '4',
      subtitle: 'Total job offers',
      color: 'text-brand-orange',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Profile Views',
      value: '156',
      subtitle: 'Views this month',
      color: 'text-brand-orange',
      bgColor: 'bg-orange-50',
    },
  ];

  const applicationData = [
    { company: 'Google', progress: 85, status: 'Interview' },
    { company: 'Microsoft', progress: 65, status: 'Applied' },
    { company: 'Amazon', progress: 90, status: 'Final Round' },
    { company: 'Meta', progress: 45, status: 'Review' },
    { company: 'Apple', progress: 75, status: 'Technical' },
    { company: 'Netflix', progress: 55, status: 'Applied' },
    { company: 'Tesla', progress: 95, status: 'Offer' },
    { company: 'Adobe', progress: 35, status: 'Applied' },
  ];

  const skillsData = [
    { skill: 'React', level: 90 },
    { skill: 'Node.js', level: 85 },
    { skill: 'Python', level: 80 },
    { skill: 'Java', level: 75 },
    { skill: 'AWS', level: 70 },
    { skill: 'MongoDB', level: 65 },
  ];

  const usefulLinks = [
    { name: 'LinkedIn Profile', url: '#', icon: '💼' },
    { name: 'GitHub Portfolio', url: '#', icon: '🐙' },
    { name: 'Resume Builder', url: '#', icon: '📄' },
    { name: 'Job Portal', url: '#', icon: '🎯' },
    { name: 'Career Resources', url: '#', icon: '📚' },
    { name: 'Mock Interviews', url: '#', icon: '🎤' },
  ];

  const renderDashboard = () => (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Banner with Profile Completion */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white overflow-hidden">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex-1">
              <h1 className="font-heading text-xl md:text-2xl font-semibold mb-2">
                Welcome back, Alex! 👋
              </h1>
              <p className="font-body text-blue-100 text-sm md:text-base">
                Continue building your career profile and explore new
                opportunities
              </p>

              {/* Quick Stats */}
              <div className="flex items-center space-x-4 mt-3 text-sm">
                <div className="flex items-center space-x-1">
                  <FileText className="w-4 h-4" />
                  <span className="font-body">5 applications this week</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span className="font-body">2 interviews scheduled</span>
                </div>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white/30 flex items-center justify-center mb-2 cursor-pointer hover:bg-white/10 transition-all duration-200 mx-auto sm:mx-0 hover:scale-105"
                onClick={() => {
                  setActiveSection('profile');
                  updateBreadcrumbs('profile');
                }}
                role="button"
                aria-label="Complete your profile (78% done)"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveSection('profile');
                    updateBreadcrumbs('profile');
                  }
                }}
              >
                <span className="font-heading text-lg md:text-xl font-bold">
                  78%
                </span>
              </div>
              <p className="font-body text-xs text-blue-100">
                Profile Complete
              </p>
              <button
                className="font-body text-xs text-white underline hover:no-underline mt-1 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
                onClick={() => {
                  setActiveSection('profile');
                  updateBreadcrumbs('profile');
                }}
                aria-label="Go to profile to complete remaining sections"
              >
                Complete Profile
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group focus-within:ring-2 focus-within:ring-blue-500/20"
            role="button"
            tabIndex={0}
            aria-label={`${stat.title}: ${stat.value}. ${stat.subtitle}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Handle card click navigation
                if (stat.title.includes('Applications')) {
                  setActiveSection('applications');
                  updateBreadcrumbs('applications');
                } else if (stat.title.includes('Interviews')) {
                  setActiveSection('applications');
                  updateBreadcrumbs('applications');
                }
              }
            }}
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div
                  className={`p-2 md:p-3 rounded-lg ${stat.bgColor} group-hover:scale-105 transition-transform duration-200`}
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    {stat.title.includes('Applications') && (
                      <FileText className={`w-full h-full ${stat.color}`} />
                    )}
                    {stat.title.includes('Interviews') && (
                      <Calendar className={`w-full h-full ${stat.color}`} />
                    )}
                    {stat.title.includes('Offers') && (
                      <Award className={`w-full h-full ${stat.color}`} />
                    )}
                    {stat.title.includes('Profile') && (
                      <TrendingUp className={`w-full h-full ${stat.color}`} />
                    )}
                  </div>
                </div>
                <div className="text-faded-subtle group-hover:text-muted-light transition-colors">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="font-heading text-xl md:text-2xl font-bold text-primary-strong mb-1 flex items-center gap-2">
                  {stat.value}
                  <span className="font-body text-xs md:text-sm text-green-600 flex items-center font-medium">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12%
                  </span>
                </div>
                <div className="font-heading text-sm font-medium text-primary-strong mb-1 leading-tight">
                  {stat.title}
                </div>
                <div className="font-body text-xs text-muted-light leading-relaxed">
                  {stat.subtitle}
                </div>
              </div>

              {/* Progress indicator for relevant cards */}
              {stat.title.includes('Profile') && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-muted-light mb-1">
                    <span className="font-body">Completion</span>
                    <span className="font-body">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-brand-primary h-1.5 rounded-full transition-all duration-300"
                      style={{ width: '78%' }}
                    ></div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
        {/* Application Progress Chart */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3 md:pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="font-heading text-lg font-semibold text-primary-strong">
                  Application Progress
                </CardTitle>
                <CardDescription className="font-body text-sm text-secondary-medium">
                  Track your job application status
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveSection('applications');
                  updateBreadcrumbs('applications');
                }}
                className="hidden sm:flex font-body"
                aria-label="View all applications"
              >
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3 md:space-y-4">
              {applicationData.slice(0, 6).map((app, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => {
                    setActiveSection('applications');
                    updateBreadcrumbs('applications');
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`${app.company} application, ${app.progress}% complete, status: ${app.status}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveSection('applications');
                      updateBreadcrumbs('applications');
                    }
                  }}
                >
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        app.progress >= 80
                          ? 'bg-green-100'
                          : app.progress >= 50
                          ? 'bg-yellow-100'
                          : 'bg-blue-100'
                      }`}
                    >
                      <Building2
                        className={`w-4 h-4 ${
                          app.progress >= 80
                            ? 'text-green-600'
                            : app.progress >= 50
                            ? 'text-yellow-600'
                            : 'text-brand-primary'
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-body text-sm font-medium text-primary-strong truncate">
                        {app.company}
                      </div>
                      <div className="font-body text-xs text-muted-light">
                        {app.status}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <div className="w-16 md:w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          app.progress >= 80
                            ? 'bg-green-500'
                            : app.progress >= 50
                            ? 'bg-yellow-500'
                            : 'bg-brand-primary'
                        }`}
                        style={{ width: `${app.progress}%` }}
                        role="progressbar"
                        aria-valuenow={app.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`Application progress: ${app.progress}%`}
                      ></div>
                    </div>
                    <span className="font-body text-xs text-muted-light w-8 text-right">
                      {app.progress}%
                    </span>
                  </div>
                </div>
              ))}

              {applicationData.length > 6 && (
                <button
                  onClick={() => {
                    setActiveSection('applications');
                    updateBreadcrumbs('applications');
                  }}
                  className="w-full py-2 font-body text-sm text-brand-primary hover:text-blue-700 font-medium transition-colors"
                >
                  View {applicationData.length - 6} more applications
                </button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Student Profile Info */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading text-lg font-semibold text-primary-strong">
              Student Profile
            </CardTitle>
            <CardDescription className="font-body text-sm text-secondary-medium">
              Your academic and professional details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4 mb-6">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-brand-primary text-white text-lg font-semibold">
                  AN
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold text-primary-strong">
                  Alex Thompson
                </h3>
                <p className="font-body text-sm text-secondary-medium">
                  Computer Science Engineering
                </p>
                <p className="font-body text-sm text-secondary-medium">
                  Batch: 2024
                </p>
                <p className="font-body text-sm text-secondary-medium">
                  CGPA: 8.7/10
                </p>
                <p className="font-body text-sm text-secondary-medium">
                  📱 +91 9876543210
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading text-sm font-semibold text-primary-strong">
                Skills Progress
              </h4>
              {skillsData.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-body text-secondary-medium font-medium">
                      {skill.skill}
                    </span>
                    <span className="font-body text-muted-light">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Useful Links */}
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader className="pb-3 md:pb-4">
          <CardTitle className="font-heading text-lg font-semibold text-primary-strong">
            Quick Actions
          </CardTitle>
          <CardDescription className="font-body text-sm text-secondary-medium">
            Fast access to important features and resources
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {usefulLinks.map((link, index) => (
              <button
                key={index}
                className="flex flex-col items-center p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[80px] md:min-h-[90px]"
                onClick={() => {
                  if (link.name === 'Resume Builder') {
                    setActiveSection('resume');
                    updateBreadcrumbs('resume');
                  } else if (link.name === 'Job Portal') {
                    setActiveSection('jobs');
                    updateBreadcrumbs('jobs');
                  } else if (link.name === 'Career Resources') {
                    setActiveSection('resources');
                    updateBreadcrumbs('resources');
                  } else if (link.name === 'LinkedIn Profile') {
                    window.open('https://linkedin.com', '_blank');
                  } else if (link.name === 'GitHub Portfolio') {
                    window.open('https://github.com', '_blank');
                  } else if (link.name === 'Mock Interviews') {
                    setActiveSection('resources');
                    updateBreadcrumbs('resources');
                  }
                }}
                aria-label={`Access ${link.name}`}
              >
                <div className="text-xl md:text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </div>
                <span className="font-body text-xs md:text-sm text-secondary-medium text-center font-medium leading-tight group-hover:text-brand-primary transition-colors">
                  {link.name}
                </span>
              </button>
            ))}
          </div>

          {/* Additional Mobile Quick Actions */}
          <div className="mt-4 pt-4 border-t border-gray-100 lg:hidden">
            <div className="flex space-x-2">
              <Button
                size="sm"
                className="flex-1 bg-brand-primary hover:bg-blue-700 font-body"
                onClick={() => {
                  setActiveSection('jobs');
                  updateBreadcrumbs('jobs');
                }}
              >
                <Search className="w-4 h-4 mr-2" />
                Find Jobs
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 font-body"
                onClick={() => {
                  setActiveSection('profile');
                  updateBreadcrumbs('profile');
                }}
              >
                <User className="w-4 h-4 mr-2" />
                Update Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderActiveSection = () => {
    try {
      switch (activeSection) {
        case 'dashboard':
          return renderDashboard();
        case 'profile':
          return (
            <ErrorBoundary>
              <ProfileManagement />
            </ErrorBoundary>
          );
        case 'jobs':
          return (
            <ErrorBoundary>
              <JobSearchEnhanced />
            </ErrorBoundary>
          );
        case 'applications':
          return (
            <ErrorBoundary>
              <ApplicationTrackerEnhanced />
            </ErrorBoundary>
          );
        case 'roadmap':
          return (
            <ErrorBoundary>
              <DreamCompanyRoadmap />
            </ErrorBoundary>
          );
        case 'portfolio':
          return (
            <ErrorBoundary>
              <PortfolioBuilder />
            </ErrorBoundary>
          );
        case 'resume':
          return (
            <ErrorBoundary>
              <ResumeBuilder />
            </ErrorBoundary>
          );
        case 'resources':
          return (
            <ErrorBoundary>
              <CareerResources />
            </ErrorBoundary>
          );
        case 'communications':
          return (
            <ErrorBoundary>
              <CommunicationCenter />
            </ErrorBoundary>
          );
        case 'analytics':
          return (
            <ErrorBoundary>
              <Analytics />
            </ErrorBoundary>
          );
        case 'admin':
          return (
            <ErrorBoundary>
              <AdminPanelEnhanced />
            </ErrorBoundary>
          );
        case 'settings':
          return (
            <ErrorBoundary>
              <SettingsComponent />
            </ErrorBoundary>
          );
        default:
          return renderDashboard();
      }
    } catch (error) {
      setError('Failed to load section. Please try again.');
      console.error('Section rendering error:', error);
      return (
        <div className="text-center py-12">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="font-heading text-lg font-medium text-primary-strong mb-2">
            Something went wrong
          </h3>
          <p className="font-body text-secondary-medium mb-4">
            We're having trouble loading this section.
          </p>
          <Button
            onClick={() => setActiveSection('dashboard')}
            className="font-body"
          >
            Go to Dashboard
          </Button>
        </div>
      );
    }
  };

  // Render different pages based on current page state
  if (currentPage === 'landing') {
    return <LandingPage onNavigate={handleNavigation} />;
  }

  if (currentPage === 'signup') {
    return <SignUpPage onNavigate={handleNavigation} />;
  }

  if (currentPage === 'login') {
    return <LoginPage onNavigate={handleNavigation} />;
  }

  // Dashboard/Main Application (only accessible when authenticated)
  if (currentPage === 'dashboard' && isAuthenticated) {
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
            {/* Main Features */}
            <div>
              <h3 className="font-heading text-xs font-semibold text-blue-200 uppercase tracking-wider mb-3 px-3">
                Main
              </h3>
              <div className="space-y-1">
                {navigationItems
                  .filter((item) => item.category === 'main')
                  .map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          try {
                            setActiveSection(item.id);
                            setSidebarOpen(false);
                            updateBreadcrumbs(item.id);
                            setError(null);
                          } catch (error) {
                            console.error('Navigation error:', error);
                            setError(`Failed to navigate to ${item.label}`);
                          }
                        }}
                        className={`
                        group w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200
                        ${
                          isActive
                            ? 'bg-brand-orange text-white shadow-lg'
                            : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                        }
                      `}
                        aria-label={item.description}
                        title={item.description}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <span className="font-body font-medium block truncate">
                            {item.label}
                          </span>
                          {!isActive && (
                            <span className="font-body text-xs text-blue-200 group-hover:text-blue-100 block truncate">
                              {item.description}
                            </span>
                          )}
                        </div>
                        {item.badge && (
                          <span className="bg-red-500 text-white font-body text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Career Tools */}
            <div>
              <h3 className="font-heading text-xs font-semibold text-blue-200 uppercase tracking-wider mb-3 px-3">
                Career Tools
              </h3>
              <div className="space-y-1">
                {navigationItems
                  .filter((item) => item.category === 'tools')
                  .map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          try {
                            setActiveSection(item.id);
                            setSidebarOpen(false);
                            updateBreadcrumbs(item.id);
                            setError(null);
                          } catch (error) {
                            console.error('Navigation error:', error);
                            setError(`Failed to navigate to ${item.label}`);
                          }
                        }}
                        className={`
                        group w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200
                        ${
                          isActive
                            ? 'bg-brand-orange text-white shadow-lg'
                            : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                        }
                      `}
                        aria-label={item.description}
                        title={item.description}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <span className="font-body font-medium block truncate">
                            {item.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Support & Analytics */}
            <div>
              <h3 className="font-heading text-xs font-semibold text-blue-200 uppercase tracking-wider mb-3 px-3">
                Support
              </h3>
              <div className="space-y-1">
                {navigationItems
                  .filter((item) => item.category === 'support')
                  .map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          try {
                            setActiveSection(item.id);
                            setSidebarOpen(false);
                            updateBreadcrumbs(item.id);
                            setError(null);
                          } catch (error) {
                            console.error('Navigation error:', error);
                            setError(`Failed to navigate to ${item.label}`);
                          }
                        }}
                        className={`
                        group w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200
                        ${
                          isActive
                            ? 'bg-brand-orange text-white shadow-lg'
                            : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                        }
                      `}
                        aria-label={item.description}
                        title={item.description}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <span className="font-body font-medium block truncate">
                            {item.label}
                          </span>
                        </div>
                        {item.badge && (
                          <span className="bg-red-500 text-white font-body text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Admin Section */}
            <div>
              <h3 className="font-heading text-xs font-semibold text-blue-200 uppercase tracking-wider mb-3 px-3">
                Admin
              </h3>
              <div className="space-y-1">
                {adminNavigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        try {
                          setActiveSection(item.id);
                          setSidebarOpen(false);
                          updateBreadcrumbs(item.id);
                        } catch (error) {
                          console.error('Navigation error:', error);
                          setError('Failed to navigate to admin panel');
                        }
                      }}
                      className={`
                        group w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200
                        ${
                          isActive
                            ? 'bg-brand-orange text-white shadow-lg'
                            : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                        }
                      `}
                      aria-label={item.description}
                      title={item.description}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="font-body font-medium block truncate">
                          {item.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Settings and Logout at bottom */}
          <div className="p-4 border-t border-blue-700 space-y-2">
            <button
              onClick={() => {
                try {
                  setActiveSection('settings');
                  setSidebarOpen(false);
                  updateBreadcrumbs('settings');
                  setError(null);
                } catch (error) {
                  console.error('Navigation error:', error);
                  setError('Failed to navigate to settings');
                }
              }}
              className={`
                w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors font-body
                ${
                  activeSection === 'settings'
                    ? 'bg-brand-orange text-white'
                    : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                }
              `}
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
            <button
              onClick={() => handleNavigation('logout')}
              className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors text-blue-100 hover:bg-red-600 hover:text-white font-body"
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
                <Button
                  size="sm"
                  className="bg-brand-primary hover:bg-blue-700 font-body font-medium"
                  onClick={() => {
                    setActiveSection('jobs');
                    updateBreadcrumbs('jobs');
                  }}
                  aria-label="Start applying to jobs"
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-body"
                  onClick={() => {
                    setActiveSection('profile');
                    updateBreadcrumbs('profile');
                  }}
                  aria-label="Update your profile"
                >
                  Update Profile
                </Button>
              </div>

              {/* Mobile Quick Actions */}
              <div className="lg:hidden flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="min-h-[44px] min-w-[44px] p-2"
                  onClick={() => {
                    setActiveSection('jobs');
                    updateBreadcrumbs('jobs');
                  }}
                  aria-label="Find jobs"
                >
                  <Briefcase className="w-5 h-5" />
                </Button>
              </div>

              {/* Notification Bell with Count */}
              <Button
                variant="ghost"
                size="sm"
                className="relative min-h-[44px] min-w-[44px] p-2"
                aria-label="View notifications (7 unread)"
                onClick={() => {
                  setActiveSection('communications');
                  updateBreadcrumbs('communications');
                }}
              >
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  7
                </div>
              </Button>

              {/* User Profile Section */}
              <div className="flex items-center space-x-2 md:space-x-3">
                <Avatar className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:ring-2 hover:ring-blue-200 transition-all">
                  <AvatarFallback className="bg-brand-primary text-white text-sm font-semibold">
                    AT
                  </AvatarFallback>
                </Avatar>

                {/* User Info - Hidden on mobile */}
                <div className="hidden md:block">
                  <div className="font-body text-sm font-semibold text-primary-strong">
                    Alex Thompson
                  </div>
                  <div className="font-body text-xs text-muted-light">
                    Student
                  </div>
                  <div className="font-body text-xs text-faded-subtle">
                    Last login: 2 hours ago
                  </div>
                </div>

                {/* Logout Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavigation('logout')}
                  className="text-faded-subtle hover:text-red-500 min-h-[44px] min-w-[44px] p-2"
                  aria-label="Logout"
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
              {renderNetworkStatus()}
              {renderAnnouncements()}
              {renderError()}

              {/* Breadcrumb Navigation */}
              {renderBreadcrumbs()}

              {/* Skip Link for Accessibility */}
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-primary text-white px-4 py-2 rounded-lg z-50 font-body"
              >
                Skip to main content
              </a>

              {/* Loading State */}
              {isLoading ? (
                <div
                  className="flex items-center justify-center min-h-[60vh]"
                  role="status"
                  aria-live="polite"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h3 className="font-heading text-lg font-medium text-primary-strong mb-2">
                      Loading...
                    </h3>
                    <p className="font-body text-secondary-medium mb-4">
                      Please wait while we prepare your content
                    </p>
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"
                        style={{ animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div id="main-content">{renderActiveSection()}</div>
              )}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Default fallback to landing page
  return <LandingPage onNavigate={handleNavigation} />;
}
