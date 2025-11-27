import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Briefcase, 
  Calendar, 
  TrendingUp, 
  Users, 
  Building2, 
  Star, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Target, 
  Zap, 
  MessageSquare,
  Heart,
  FileText,
  Award,
  BookOpen,
  BarChart3,
  ArrowRight,
  Plus,
  Bell,
  Search,
  Filter,
  ChevronRight,
  Sparkles,
  Trophy,
  GraduationCap,
  MapPin,
  DollarSign,
  Calendar as CalendarIcon,
  ExternalLink,
  Bookmark
} from 'lucide-react';

export function EnhancedDashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('this-week');

  // Enhanced data with better contrast and visibility
  const stats = [
    {
      title: 'Applications Sent',
      value: '28',
      change: '+6 this week',
      trend: 'up',
      icon: Briefcase,
      color: 'bg-mentra-blue',
      progress: 75
    },
    {
      title: 'Interviews Scheduled',
      value: '7',
      change: '+2 this week',
      trend: 'up',
      icon: Calendar,
      color: 'bg-mentra-orange',
      progress: 60
    },
    {
      title: 'Job Offers',
      value: '4',
      change: '+1 this week',
      trend: 'up',
      icon: Trophy,
      color: 'bg-green-500',
      progress: 100
    },
    {
      title: 'Profile Views',
      value: '156',
      change: '+23 this week',
      trend: 'up',
      icon: Users,
      color: 'bg-purple-500',
      progress: 85
    }
  ];

  const recentApplications = [
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineer',
      appliedDate: '2024-02-20',
      status: 'Under Review',
      logo: '🔍',
      package: '₹45L - ₹65L',
      location: 'Bangalore',
      type: 'Full-time'
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Full Stack Developer',
      appliedDate: '2024-02-18',
      status: 'Interview Scheduled',
      logo: '🔷',
      package: '₹40L - ₹60L',
      location: 'Hyderabad',
      type: 'Full-time'
    },
    {
      id: 3,
      company: 'Amazon',
      position: 'SDE I',
      appliedDate: '2024-02-15',
      status: 'Offer Received',
      logo: '📦',
      package: '₹42L - ₹58L',
      location: 'Chennai',
      type: 'Full-time'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Google Technical Interview',
      date: '2024-02-25',
      time: '2:00 PM',
      type: 'Interview',
      location: 'Video Call',
      company: 'Google'
    },
    {
      id: 2,
      title: 'Microsoft Assessment Test',
      date: '2024-02-26',
      time: '10:00 AM',
      type: 'Assessment',
      location: 'Online',
      company: 'Microsoft'
    },
    {
      id: 3,
      title: 'Career Fair - Tech Companies',
      date: '2024-02-28',
      time: '11:00 AM',
      type: 'Event',
      location: 'Campus Auditorium',
      company: 'Multiple'
    }
  ];

  const recommendedJobs = [
    {
      id: 1,
      company: 'Meta',
      position: 'Frontend Developer',
      match: 95,
      package: '₹50L - ₹70L',
      location: 'Remote',
      postedDate: '2 days ago',
      applicants: '45 applicants'
    },
    {
      id: 2,
      company: 'Apple',
      position: 'iOS Developer',
      match: 90,
      package: '₹55L - ₹75L',
      location: 'Bangalore',
      postedDate: '3 days ago',
      applicants: '32 applicants'
    },
    {
      id: 3,
      company: 'Netflix',
      position: 'Software Engineer',
      match: 88,
      package: '₹48L - ₹68L',
      location: 'Mumbai',
      postedDate: '1 week ago',
      applicants: '67 applicants'
    }
  ];

  const quickActions = [
    {
      title: 'Search Jobs',
      description: 'Find your dream job',
      icon: Search,
      color: 'bg-mentra-blue',
      action: 'jobs'
    },
    {
      title: 'AI Roadmap',
      description: 'Get personalized guidance',
      icon: Target,
      color: 'bg-mentra-orange',
      action: 'roadmap'
    },
    {
      title: 'Resume Builder',
      description: 'Create perfect resume',
      icon: FileText,
      color: 'bg-green-500',
      action: 'resume'
    },
    {
      title: 'Check Messages',
      description: 'View notifications',
      icon: MessageSquare,
      color: 'bg-purple-500',
      action: 'communications'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Interview Scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Offer Received':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-mentra-blue to-mentra-orange rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-heading mb-2">
              Welcome back, Alex! 👋
            </h1>
            <p className="text-white/90 font-body font-medium">
              You have 3 new job matches and 2 upcoming interviews this week.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button 
              className="bg-white text-mentra-blue hover:bg-white/90 font-body font-semibold btn-hover-lift"
            >
              <Target className="size-4 mr-2 icon-enhanced" />
              View Roadmap
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-mentra-blue font-body font-semibold btn-hover-lift"
            >
              <MessageSquare className="size-4 mr-2 icon-enhanced" />
              Check Messages
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-mentra btn-hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color} shadow-sm`}>
                    <Icon className="size-6 text-white icon-enhanced" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-heading text-mentra-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-green-600 font-body font-bold">
                      {stat.change}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm font-body text-mentra-primary">
                      {stat.title}
                    </span>
                    <span className="text-xs font-body font-bold text-mentra-primary">
                      {stat.progress}%
                    </span>
                  </div>
                  <Progress value={stat.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2">
          <Card className="card-mentra">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-heading text-mentra-primary">Recent Applications</CardTitle>
                <CardDescription className="font-body text-mentra-secondary font-medium">
                  Track your latest job applications and their status
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2 btn-hover-lift font-body font-medium">
                <Plus className="size-4 icon-enhanced" />
                Apply More
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-accent rounded-lg flex items-center justify-center text-2xl">
                      {app.logo}
                    </div>
                    <div>
                      <h4 className="font-semibold font-body text-mentra-primary">{app.position}</h4>
                      <p className="text-sm font-body font-bold text-mentra-primary">{app.company}</p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-mentra-secondary font-body font-medium">
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3 icon-enhanced" />
                          {app.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="size-3 icon-enhanced" />
                          {app.package}
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="size-3 icon-enhanced" />
                          {app.appliedDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={`${getStatusColor(app.status)} font-body font-semibold`}>
                      {app.status}
                    </Badge>
                    <Button variant="ghost" size="sm" className="btn-hover-lift">
                      <ChevronRight className="size-4 icon-enhanced" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div>
          <Card className="card-mentra">
            <CardHeader>
              <CardTitle className="font-heading text-mentra-primary">Upcoming Events</CardTitle>
              <CardDescription className="font-body text-mentra-secondary font-medium">
                Important dates and deadlines
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-3 border border-border rounded-lg hover:bg-accent/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm font-body text-mentra-primary line-clamp-2">
                      {event.title}
                    </h4>
                    <Badge variant="outline" className="ml-2 shrink-0 font-body font-semibold">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-xs text-mentra-secondary font-body font-medium">
                    <div className="flex items-center gap-1">
                      <Clock className="size-3 icon-enhanced" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="size-3 icon-enhanced" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Building2 className="size-3 icon-enhanced" />
                      {event.company}
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full gap-2 btn-hover-lift font-body font-medium">
                <Calendar className="size-4 icon-enhanced" />
                View Full Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="card-mentra">
        <CardHeader>
          <CardTitle className="font-heading text-mentra-primary">Quick Actions</CardTitle>
          <CardDescription className="font-body text-mentra-secondary font-medium">
            Fast access to key features and tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-3 hover:bg-accent/50 btn-hover-lift group"
                >
                  <div className={`p-3 rounded-lg ${action.color} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="size-6 text-white icon-enhanced" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold font-body text-mentra-primary">{action.title}</div>
                    <div className="text-xs text-mentra-secondary font-body font-medium">{action.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Jobs */}
      <Card className="card-mentra">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="font-heading text-mentra-primary flex items-center gap-2">
              <Sparkles className="size-5 text-mentra-orange icon-enhanced" />
              AI Recommended Jobs
            </CardTitle>
            <CardDescription className="font-body text-mentra-secondary font-medium">
              Personalized job matches based on your profile
            </CardDescription>
          </div>
          <Button className="gap-2 btn-hover-lift font-body font-medium">
            <Search className="size-4 icon-enhanced" />
            Find More Jobs
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedJobs.map((job) => (
              <div key={job.id} className="p-4 border border-border rounded-lg hover:bg-accent/30 transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold font-body text-mentra-primary">{job.position}</h4>
                    <p className="text-sm font-body font-bold text-mentra-primary">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity btn-hover-lift">
                      <Bookmark className="size-4 icon-enhanced" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-100 text-green-700 font-body font-semibold">
                      {job.match}% Match
                    </Badge>
                    <span className="text-sm font-body font-bold text-mentra-primary">{job.package}</span>
                  </div>
                  
                  <div className="text-xs text-mentra-secondary space-y-1 font-body font-medium">
                    <div className="flex items-center gap-1">
                      <MapPin className="size-3 icon-enhanced" />
                      {job.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{job.postedDate}</span>
                      <span>{job.applicants}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-3 btn-hover-lift font-body font-medium">
                    <ExternalLink className="size-4 mr-2 icon-enhanced" />
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}