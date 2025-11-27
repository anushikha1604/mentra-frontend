import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Users, 
  BookOpen, 
  Trophy, 
  Clock,
  ArrowRight,
  Star,
  MapPin,
  Briefcase
} from 'lucide-react';

export function Dashboard() {
  const recentActivities = [
    {
      type: 'application',
      company: 'Google',
      role: 'Software Engineer',
      time: '2 hours ago',
      status: 'Applied'
    },
    {
      type: 'interview',
      company: 'Microsoft',
      role: 'Product Manager',
      time: '1 day ago',
      status: 'Scheduled'
    },
    {
      type: 'offer',
      company: 'Amazon',
      role: 'SDE I',
      time: '3 days ago',
      status: 'Received'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Microsoft Interview',
      time: 'Today, 2:00 PM',
      type: 'Technical Round',
      color: 'blue'
    },
    {
      title: 'Google Info Session',
      time: 'Tomorrow, 10:00 AM',
      type: 'Company Event',
      color: 'green'
    },
    {
      title: 'Resume Workshop',
      time: 'Dec 30, 3:00 PM',
      type: 'Career Development',
      color: 'purple'
    }
  ];

  const recommendations = [
    {
      title: 'Complete JavaScript Assessment',
      description: 'Boost your profile score by 15%',
      action: 'Start Now',
      priority: 'high'
    },
    {
      title: 'Update Dream Company Roadmap',
      description: 'New milestones available for Google',
      action: 'View Roadmap',
      priority: 'medium'
    },
    {
      title: 'Practice Mock Interview',
      description: 'Improve your interview success rate',
      action: 'Schedule',
      priority: 'medium'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-xl font-medium mb-2">Good morning, Alex! 🌟</h2>
              <p className="text-muted-foreground">
                You have 3 upcoming interviews and 2 new job recommendations waiting for you.
              </p>
            </div>
            <Button className="self-start">
              View All Updates
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Applications</p>
                <p className="text-2xl font-medium">12</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="size-3 mr-1" />
                  +3 this week
                </p>
              </div>
              <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="size-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Interview Rate</p>
                <p className="text-2xl font-medium">25%</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="size-3 mr-1" />
                  +5% improvement
                </p>
              </div>
              <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="size-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Profile Score</p>
                <p className="text-2xl font-medium">85%</p>
                <Progress value={85} className="mt-2" />
              </div>
              <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Star className="size-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Dream Progress</p>
                <p className="text-2xl font-medium">60%</p>
                <p className="text-xs text-orange-600 flex items-center mt-1">
                  <Target className="size-3 mr-1" />
                  Google roadmap
                </p>
              </div>
              <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Target className="size-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="size-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest placement activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="size-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase className="size-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{activity.role} at {activity.company}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant={activity.status === 'Received' ? 'default' : 'secondary'}>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">
              View All Activities
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="size-5" />
              Upcoming Events
            </CardTitle>
            <CardDescription>Don't miss these important events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-border/50">
                  <div className={`size-3 rounded-full flex-shrink-0 mt-2 ${
                    event.color === 'blue' ? 'bg-blue-500' :
                    event.color === 'green' ? 'bg-green-500' : 'bg-purple-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {event.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4">
              View Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="size-5" />
            AI Recommendations
          </CardTitle>
          <CardDescription>Personalized actions to boost your placement success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 border border-border rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium">{rec.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{rec.description}</p>
                  </div>
                  <Badge 
                    variant={rec.priority === 'high' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {rec.priority}
                  </Badge>
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  {rec.action}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used features for faster access</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <BookOpen className="size-5" />
              Practice Tests
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Users className="size-5" />
              Mock Interview
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Target className="size-5" />
              Update Roadmap
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Trophy className="size-5" />
              View Achievements
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}