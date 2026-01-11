import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import {
  Calendar,
  FileText,
  TrendingUp,
  Award,
  Building2,
  Search,
  User,
} from 'lucide-react';
import SessionProvider from '../../utils/SessionProvider';

export function StudentDashboard() {
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

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Welcome Banner with Profile Completion */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white overflow-hidden">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex-1">
              <h1 className="font-heading text-xl md:text-2xl font-semibold mb-2">
                Welcome back, {SessionProvider.getFullName()}! 👋
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
                  role="button"
                  tabIndex={0}
                  aria-label={`${app.company} application, ${app.progress}% complete, status: ${app.status}`}
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
                <button className="w-full py-2 font-body text-sm text-brand-primary hover:text-blue-700 font-medium transition-colors">
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
              >
                <Search className="w-4 h-4 mr-2" />
                Find Jobs
              </Button>
              <Button variant="outline" size="sm" className="flex-1 font-body">
                <User className="w-4 h-4 mr-2" />
                Update Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
