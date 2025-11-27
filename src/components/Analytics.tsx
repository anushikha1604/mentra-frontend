import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Users, 
  Clock, 
  Award,
  Calendar,
  Building,
  Briefcase
} from 'lucide-react';

export function Analytics() {
  const performanceMetrics = {
    applicationSuccess: {
      current: 25,
      previous: 20,
      trend: 'up'
    },
    interviewConversion: {
      current: 60,
      previous: 45,
      trend: 'up'
    },
    responseTime: {
      current: 3.2,
      previous: 4.1,
      trend: 'down'
    },
    profileViews: {
      current: 156,
      previous: 142,
      trend: 'up'
    }
  };

  const monthlyData = [
    { month: 'Aug', applications: 8, interviews: 2, offers: 0 },
    { month: 'Sep', applications: 12, interviews: 3, offers: 1 },
    { month: 'Oct', applications: 15, interviews: 4, offers: 1 },
    { month: 'Nov', applications: 18, interviews: 5, offers: 2 },
    { month: 'Dec', applications: 22, interviews: 6, offers: 3 }
  ];

  const skillGaps = [
    { skill: 'System Design', current: 60, target: 85, priority: 'high' },
    { skill: 'Machine Learning', current: 45, target: 75, priority: 'high' },
    { skill: 'Communication', current: 70, target: 90, priority: 'medium' },
    { skill: 'Leadership', current: 65, target: 80, priority: 'medium' },
    { skill: 'Data Structures', current: 85, target: 90, priority: 'low' }
  ];

  const peerComparison = {
    applications: { you: 22, average: 18, percentile: 75 },
    interviews: { you: 6, average: 4, percentile: 80 },
    offers: { you: 3, average: 2, percentile: 85 },
    profileScore: { you: 85, average: 72, percentile: 90 }
  };

  const companyInsights = [
    {
      company: 'Google',
      applications: 1,
      success: 'In Progress',
      avgTime: '21 days',
      difficulty: 'Very High',
      tips: 'Focus on system design and coding practice'
    },
    {
      company: 'Microsoft',
      applications: 1,
      success: 'In Progress',
      avgTime: '18 days',
      difficulty: 'High',
      tips: 'Prepare for behavioral questions'
    },
    {
      company: 'Amazon',
      applications: 1,
      success: 'Offer Received',
      avgTime: '14 days',
      difficulty: 'High',
      tips: 'Leadership principles are crucial'
    }
  ];

  const getTrendIcon = (trend) => {
    return trend === 'up' ? 
      <TrendingUp className="size-4 text-green-500" /> : 
      <TrendingDown className="size-4 text-red-500" />;
  };

  const getTrendColor = (trend) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="size-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="size-5 text-blue-600" />
              </div>
              {getTrendIcon(performanceMetrics.applicationSuccess.trend)}
            </div>
            <div className="text-2xl font-bold mb-1">
              {performanceMetrics.applicationSuccess.current}%
            </div>
            <p className="text-sm text-muted-foreground mb-2">Application Success Rate</p>
            <p className={`text-xs ${getTrendColor(performanceMetrics.applicationSuccess.trend)}`}>
              {performanceMetrics.applicationSuccess.trend === 'up' ? '+' : ''}
              {performanceMetrics.applicationSuccess.current - performanceMetrics.applicationSuccess.previous}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="size-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="size-5 text-green-600" />
              </div>
              {getTrendIcon(performanceMetrics.interviewConversion.trend)}
            </div>
            <div className="text-2xl font-bold mb-1">
              {performanceMetrics.interviewConversion.current}%
            </div>
            <p className="text-sm text-muted-foreground mb-2">Interview Conversion</p>
            <p className={`text-xs ${getTrendColor(performanceMetrics.interviewConversion.trend)}`}>
              +{performanceMetrics.interviewConversion.current - performanceMetrics.interviewConversion.previous}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="size-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="size-5 text-purple-600" />
              </div>
              {getTrendIcon(performanceMetrics.responseTime.trend)}
            </div>
            <div className="text-2xl font-bold mb-1">
              {performanceMetrics.responseTime.current} days
            </div>
            <p className="text-sm text-muted-foreground mb-2">Avg Response Time</p>
            <p className="text-xs text-green-600">
              -{(performanceMetrics.responseTime.previous - performanceMetrics.responseTime.current).toFixed(1)} days faster
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="size-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Award className="size-5 text-orange-600" />
              </div>
              {getTrendIcon(performanceMetrics.profileViews.trend)}
            </div>
            <div className="text-2xl font-bold mb-1">
              {performanceMetrics.profileViews.current}
            </div>
            <p className="text-sm text-muted-foreground mb-2">Profile Views</p>
            <p className="text-xs text-green-600">
              +{performanceMetrics.profileViews.current - performanceMetrics.profileViews.previous} this month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="comparison">Peer Comparison</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Application Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Application Trends</CardTitle>
                <CardDescription>Your placement activity over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {monthlyData.map((data, index) => (
                    <div key={data.month} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{data.month}</span>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>{data.applications} applied</span>
                          <span>{data.interviews} interviews</span>
                          <span>{data.offers} offers</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div 
                          className="bg-blue-500 h-2 rounded-sm"
                          style={{ width: `${(data.applications / 25) * 100}%` }}
                        />
                        <div 
                          className="bg-green-500 h-2 rounded-sm"
                          style={{ width: `${(data.interviews / 25) * 100}%` }}
                        />
                        <div 
                          className="bg-yellow-500 h-2 rounded-sm"
                          style={{ width: `${(data.offers / 25) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t">
                  <div className="flex justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-blue-500 rounded-sm" />
                      <span>Applications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-green-500 rounded-sm" />
                      <span>Interviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 bg-yellow-500 rounded-sm" />
                      <span>Offers</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Funnel */}
            <Card>
              <CardHeader>
                <CardTitle>Application Funnel</CardTitle>
                <CardDescription>Your placement success pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Applications Submitted</span>
                      <span className="font-medium">22</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Initial Responses</span>
                      <span className="font-medium">14 (64%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '64%' }} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Interviews Scheduled</span>
                      <span className="font-medium">8 (36%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '36%' }} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Final Rounds</span>
                      <span className="font-medium">5 (23%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-purple-500 h-3 rounded-full" style={{ width: '23%' }} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Offers Received</span>
                      <span className="font-medium">3 (14%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{ width: '14%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skill Gap Analysis</CardTitle>
              <CardDescription>Areas for improvement based on job requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillGaps.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.skill}</span>
                        <Badge 
                          variant={
                            skill.priority === 'high' ? 'destructive' :
                            skill.priority === 'medium' ? 'default' : 'secondary'
                          }
                          className="text-xs"
                        >
                          {skill.priority} priority
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.current}% / {skill.target}%
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Current Level</span>
                        <span>Target Level</span>
                      </div>
                      <div className="relative">
                        <Progress value={(skill.current / skill.target) * 100} className="h-2" />
                        <div 
                          className="absolute top-0 h-2 w-1 bg-red-500 rounded"
                          style={{ left: `${(skill.target / 100) * 100}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Gap: {skill.target - skill.current} points to reach target level
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Peer Benchmarking</CardTitle>
                <CardDescription>How you compare to other students in your department</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(peerComparison).map(([metric, data]) => (
                  <div key={metric} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium capitalize">
                        {metric.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </span>
                      <Badge variant="default" className="text-xs">
                        Top {100 - data.percentile}%
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">You: </span>
                        <span className="font-medium">{data.you}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Average: </span>
                        <span>{data.average}</span>
                      </div>
                    </div>
                    <Progress value={data.percentile} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Ranking</CardTitle>
                <CardDescription>Your position among peers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="size-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <div className="text-white">
                      <div className="text-2xl font-bold">#8</div>
                      <div className="text-xs">out of 156</div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Top 5% Performer</p>
                    <p className="text-sm text-muted-foreground">Computer Science Department</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-medium text-green-600">Applications</div>
                      <div className="text-muted-foreground">#12</div>
                    </div>
                    <div>
                      <div className="font-medium text-blue-600">Success Rate</div>
                      <div className="text-muted-foreground">#5</div>
                    </div>
                    <div>
                      <div className="font-medium text-purple-600">Profile Score</div>
                      <div className="text-muted-foreground">#3</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="companies">
          <Card>
            <CardHeader>
              <CardTitle>Company Performance Insights</CardTitle>
              <CardDescription>Your success with different companies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {companyInsights.map((company, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium">{company.company}</h3>
                        <p className="text-sm text-muted-foreground">
                          {company.applications} application{company.applications > 1 ? 's' : ''}
                        </p>
                      </div>
                      <Badge 
                        variant={company.success === 'Offer Received' ? 'default' : 'outline'}
                        className="text-xs"
                      >
                        {company.success}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Avg Process Time</p>
                        <p className="font-medium">{company.avgTime}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Difficulty</p>
                        <p className="font-medium">{company.difficulty}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Status</p>
                        <p className={`font-medium ${
                          company.success === 'Offer Received' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {company.success}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm">
                        <span className="font-medium">AI Tip: </span>
                        {company.tips}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}