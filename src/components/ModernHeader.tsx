import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { 
  Bell, 
  Search, 
  Menu, 
  X, 
  Settings, 
  User, 
  LogOut, 
  Moon, 
  Sun, 
  Globe, 
  Shield, 
  HelpCircle,
  ChevronDown,
  GraduationCap,
  Zap,
  Target,
  BarChart3,
  MessageSquare,
  Calendar,
  BookOpen,
  Users,
  Heart,
  FolderOpen,
  FileText,
  Settings as SettingsIcon
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface ModernHeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function ModernHeader({ 
  activeSection, 
  setActiveSection, 
  sidebarOpen, 
  setSidebarOpen 
}: ModernHeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [profileOpen, setProfileOpen] = useState(false);

  const quickActions = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'jobs', label: 'Find Jobs', icon: Search },
    { id: 'applications', label: 'Track Applications', icon: Calendar },
    { id: 'roadmap', label: 'AI Roadmap', icon: Target },
    { id: 'resume', label: 'Resume Builder', icon: FileText },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
  ];

  const notifications = [
    {
      id: 1,
      title: 'New job alert: Google Software Engineer',
      message: 'A new position matching your profile is available',
      time: '2 min ago',
      type: 'job',
      unread: true
    },
    {
      id: 2,
      title: 'Interview scheduled with Microsoft',
      message: 'Your interview is scheduled for tomorrow at 2 PM',
      time: '1 hour ago',
      type: 'interview',
      unread: true
    },
    {
      id: 3,
      title: 'Profile strength increased to 95%',
      message: 'Great work! Your profile is now 95% complete',
      time: '3 hours ago',
      type: 'achievement',
      unread: false
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="sticky-header-main">
      {/* Primary Header Row */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3" data-sticky-header="true">
        {/* Left Section - Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden min-h-[44px] min-w-[44px] p-2 mobile-tap"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? (
              <X className="size-5 icon-enhanced" />
            ) : (
              <Menu className="size-5 icon-enhanced" />
            )}
          </Button>

          {/* Brand Logo - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <div className="size-8 bg-mentra-blue rounded-lg flex items-center justify-center shadow-sm">
              <GraduationCap className="size-5 text-white icon-enhanced" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-mentra-blue font-heading">Mentra</h1>
            </div>
          </div>

          {/* Mobile Brand */}
          <div className="md:hidden flex items-center gap-2">
            <div className="size-8 bg-mentra-blue rounded-lg flex items-center justify-center shadow-sm">
              <GraduationCap className="size-5 text-white icon-enhanced" />
            </div>
            <span className="font-bold text-lg text-mentra-blue font-heading">Mentra</span>
          </div>
        </div>

        {/* Center Section - Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground icon-enhanced" />
            <Input
              type="text"
              placeholder="Search jobs, companies, resources..."
              className="pl-10 bg-background/80 backdrop-blur-sm border-border/50 font-body"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Right Section - Actions & Profile */}
        <div className="flex items-center gap-2">
          {/* Search Button (Mobile) */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden min-h-[44px] min-w-[44px] p-2 mobile-tap"
            aria-label="Search"
          >
            <Search className="size-5 icon-enhanced" />
          </Button>

          {/* Quick Actions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex min-h-[44px] gap-2 mobile-tap font-body font-medium"
              >
                <Zap className="size-4 icon-enhanced" />
                Quick Actions
                <ChevronDown className="size-3 icon-enhanced" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-heading text-mentra-primary">Quick Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <DropdownMenuItem
                    key={action.id}
                    onClick={() => setActiveSection(action.id)}
                    className="gap-2 font-body cursor-pointer"
                  >
                    <Icon className="size-4 icon-enhanced" />
                    {action.label}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <DropdownMenu open={notificationsOpen} onOpenChange={setNotificationsOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="relative min-h-[44px] min-w-[44px] p-2 mobile-tap"
                aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
              >
                <Bell className="size-5 icon-enhanced" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 size-5 p-0 flex items-center justify-center bg-destructive text-white text-xs font-bold animate-pulse">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="font-heading text-mentra-primary">
                Notifications
                {unreadCount > 0 && (
                  <Badge className="ml-2 bg-mentra-orange text-white text-xs font-semibold">
                    {unreadCount} new
                  </Badge>
                )}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 border-b last:border-b-0 hover:bg-accent/50 cursor-pointer transition-colors ${
                      notification.unread ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`size-2 rounded-full mt-2 shrink-0 ${
                        notification.unread ? 'bg-mentra-orange' : 'bg-muted'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-mentra-primary font-body line-clamp-1">
                          {notification.title}
                        </p>
                        <p className="text-xs text-mentra-secondary font-body line-clamp-2 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-mentra-secondary font-body mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <DropdownMenuSeparator />
              <div className="p-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-center font-body font-medium hover:bg-mentra-orange hover:text-white transition-all duration-200"
                  onClick={() => setActiveSection('communications')}
                >
                  View All Notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Menu */}
          <DropdownMenu open={profileOpen} onOpenChange={setProfileOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 h-10 px-3 mobile-tap"
                aria-label="Profile menu"
              >
                <Avatar className="size-8">
                  <AvatarFallback className="bg-mentra-blue text-white text-sm font-body font-semibold">
                    <User className="size-4 icon-enhanced" />
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-semibold text-mentra-primary font-body">Student</div>
                  <div className="text-xs text-mentra-secondary font-body">Account</div>
                </div>
                <ChevronDown className="size-4 icon-enhanced hidden md:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel className="font-heading text-mentra-primary">
                Student Account
              </DropdownMenuLabel>
              <div className="px-2 py-1">
                <div className="flex items-center gap-2 text-xs text-mentra-secondary font-body">
                  <Shield className="size-3 text-green-600 icon-enhanced" />
                  Verified Student Account
                </div>
              </div>
              <DropdownMenuSeparator />
              
              {/* Quick Settings */}
              <div className="p-2 space-y-2">
                <div className="text-xs font-semibold text-mentra-primary font-body mb-2">Quick Settings</div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-xs font-body font-medium hover:bg-mentra-orange hover:text-white hover:border-mentra-orange transition-all duration-200"
                    onClick={() => setActiveSection('profile')}
                  >
                    <User className="size-3 icon-enhanced" />
                    Profile
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-xs font-body font-medium hover:bg-mentra-blue hover:text-white hover:border-mentra-blue transition-all duration-200"
                    onClick={() => setActiveSection('settings')}
                  >
                    <Settings className="size-3 icon-enhanced" />
                    Settings
                  </Button>
                </div>
              </div>

              <DropdownMenuSeparator />
              
              <DropdownMenuItem 
                onClick={() => setActiveSection('profile')}
                className="gap-2 font-body cursor-pointer"
              >
                <User className="size-4 icon-enhanced" />
                Manage Profile
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={() => setActiveSection('settings')}
                className="gap-2 font-body cursor-pointer"
              >
                <Settings className="size-4 icon-enhanced" />
                Account Settings
              </DropdownMenuItem>
              
              <DropdownMenuItem className="gap-2 font-body cursor-pointer">
                <Moon className="size-4 icon-enhanced" />
                Dark Mode
              </DropdownMenuItem>
              
              <DropdownMenuItem className="gap-2 font-body cursor-pointer">
                <Globe className="size-4 icon-enhanced" />
                Language
              </DropdownMenuItem>
              
              <DropdownMenuItem className="gap-2 font-body cursor-pointer">
                <HelpCircle className="size-4 icon-enhanced" />
                Help & Support
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem className="gap-2 text-destructive font-body cursor-pointer">
                <LogOut className="size-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground icon-enhanced" />
          <Input
            type="text"
            placeholder="Search jobs, companies, resources..."
            className="pl-10 bg-background/80 backdrop-blur-sm border-border/50 font-body"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}