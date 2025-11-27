import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Target, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Calendar, 
  BookOpen, 
  Award, 
  Users, 
  TrendingUp,
  Clock,
  Star,
  MapPin,
  Building,
  Code,
  Brain,
  Lightbulb
} from 'lucide-react';

export function DreamCompanyRoadmap() {
  const [selectedCompany, setSelectedCompany] = useState('Google');
  const [selectedRole, setSelectedRole] = useState('Software Engineer');
  const [showRoadmap, setShowRoadmap] = useState(true);

  const dreamCompanies = [
    { name: 'Google', logo: '🔍', roles: ['Software Engineer', 'Product Manager', 'UX Designer'] },
    { name: 'Microsoft', logo: '🏢', roles: ['Software Developer', 'Cloud Architect', 'AI Engineer'] },
    { name: 'Amazon', logo: '📦', roles: ['SDE', 'Product Manager', 'Data Scientist'] },
    { name: 'Apple', logo: '🍎', roles: ['iOS Developer', 'Hardware Engineer', 'Design Engineer'] },
    { name: 'Meta', logo: '👥', roles: ['Frontend Engineer', 'ML Engineer', 'Product Designer'] }
  ];

  const roadmapData = {
    'Google': {
      'Software Engineer': {
        overview: {
          difficulty: 'High',
          timeline: '6-12 months',
          competition: '95% competitive',
          avgSalary: '$130k - $180k'
        },
        skillsRequired: [
          { skill: 'Data Structures & Algorithms', progress: 75, priority: 'critical' },
          { skill: 'System Design', progress: 40, priority: 'high' },
          { skill: 'Programming (Python/Java/C++)', progress: 85, priority: 'critical' },
          { skill: 'Problem Solving', progress: 70, priority: 'high' },
          { skill: 'Communication Skills', progress: 60, priority: 'medium' },
          { skill: 'Computer Networks', progress: 50, priority: 'medium' }
        ],
        milestones: [
          {
            id: 1,
            title: 'Master Data Structures & Algorithms',
            completed: true,
            dueDate: 'Dec 2024',
            tasks: [
              { task: 'Complete 200 LeetCode problems', completed: true },
              { task: 'Study common algorithms', completed: true },
              { task: 'Practice time complexity analysis', completed: false }
            ]
          },
          {
            id: 2,
            title: 'Build Strong Programming Foundation',
            completed: false,
            dueDate: 'Jan 2025',
            tasks: [
              { task: 'Master one programming language', completed: true },
              { task: 'Complete 3 significant projects', completed: false },
              { task: 'Contribute to open source', completed: false }
            ]
          },
          {
            id: 3,
            title: 'System Design Mastery',
            completed: false,
            dueDate: 'Feb 2025',
            tasks: [
              { task: 'Study distributed systems', completed: false },
              { task: 'Design 5 scalable systems', completed: false },
              { task: 'Understand microservices', completed: false }
            ]
          },
          {
            id: 4,
            title: 'Interview Preparation',
            completed: false,
            dueDate: 'Mar 2025',
            tasks: [
              { task: 'Practice mock interviews', completed: false },
              { task: 'Study Google\'s culture', completed: false },
              { task: 'Prepare behavioral stories', completed: false }
            ]
          }
        ],
        recommendations: [
          {
            type: 'course',
            title: 'Advanced Algorithms Specialization',
            provider: 'Coursera - Stanford',
            duration: '3 months',
            priority: 'high'
          },
          {
            type: 'project',
            title: 'Build a Distributed Chat Application',
            description: 'Demonstrate system design skills',
            duration: '1 month',
            priority: 'high'
          },
          {
            type: 'certification',
            title: 'Google Cloud Professional Developer',
            provider: 'Google Cloud',
            duration: '2 months',
            priority: 'medium'
          }
        ]
      }
    }
  };

  const currentRoadmap = roadmapData[selectedCompany]?.[selectedRole];
  const overallProgress = currentRoadmap ? 
    Math.round(currentRoadmap.milestones.filter(m => m.completed).length / currentRoadmap.milestones.length * 100) : 0;

  if (!showRoadmap) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Target className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-medium">Dream Company Roadmap Generator</h1>
                <p className="text-muted-foreground">Transform your career aspirations into actionable plans</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-white rounded-lg border">
                <Building className="size-8 text-blue-500 mx-auto mb-2" />
                <p className="font-medium">500+ Companies</p>
                <p className="text-sm text-muted-foreground">Top tech companies</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <Brain className="size-8 text-green-500 mx-auto mb-2" />
                <p className="font-medium">AI-Powered</p>
                <p className="text-sm text-muted-foreground">Personalized roadmaps</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <TrendingUp className="size-8 text-purple-500 mx-auto mb-2" />
                <p className="font-medium">85% Success Rate</p>
                <p className="text-sm text-muted-foreground">Students placed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Choose Your Dream Company</CardTitle>
            <CardDescription>Select the company you want to work for</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dreamCompanies.map((company) => (
                <div 
                  key={company.name}
                  className={`p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${
                    selectedCompany === company.name ? 'border-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setSelectedCompany(company.name)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{company.logo}</span>
                    <h3 className="font-medium">{company.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {company.roles.map((role, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Role Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Select Your Target Role</CardTitle>
            <CardDescription>Choose the specific position you're aiming for at {selectedCompany}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {dreamCompanies.find(c => c.name === selectedCompany)?.roles.map((role) => (
                <Button
                  key={role}
                  variant={selectedRole === role ? 'default' : 'outline'}
                  className="p-6 h-auto flex-col"
                  onClick={() => setSelectedRole(role)}
                >
                  <Code className="size-5 mb-2" />
                  {role}
                </Button>
              ))}
            </div>
            
            <Button 
              onClick={() => setShowRoadmap(true)}
              className="w-full mt-6"
              disabled={!selectedCompany || !selectedRole}
            >
              Generate My Roadmap
              <ChevronRight className="size-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Roadmap Header */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="size-16 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <div>
                <h1 className="text-xl font-medium">{selectedRole} at {selectedCompany}</h1>
                <p className="text-muted-foreground">Your personalized career roadmap</p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    {currentRoadmap?.overview.timeline}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="size-4" />
                    {currentRoadmap?.overview.difficulty} Difficulty
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-medium">{overallProgress}%</div>
              <p className="text-sm text-muted-foreground">Complete</p>
              <Progress value={overallProgress} className="w-32 mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="size-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-medium">Competition Level</h3>
                <p className="text-2xl font-bold text-red-500 mt-2">95%</p>
                <p className="text-sm text-muted-foreground">Highly competitive</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="size-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-medium">Timeline</h3>
                <p className="text-2xl font-bold text-green-500 mt-2">6-12</p>
                <p className="text-sm text-muted-foreground">Months needed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="size-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-medium">Avg Salary</h3>
                <p className="text-2xl font-bold text-yellow-500 mt-2">$155k</p>
                <p className="text-sm text-muted-foreground">Starting range</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="size-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-medium">Success Rate</h3>
                <p className="text-2xl font-bold text-purple-500 mt-2">12%</p>
                <p className="text-sm text-muted-foreground">With preparation</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Required Skills Assessment</CardTitle>
              <CardDescription>Track your progress on essential skills for this role</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {currentRoadmap?.skillsRequired.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{skill.skill}</h4>
                        <Badge 
                          variant={
                            skill.priority === 'critical' ? 'destructive' :
                            skill.priority === 'high' ? 'default' : 'secondary'
                          }
                          className="text-xs"
                        >
                          {skill.priority}
                        </Badge>
                      </div>
                      <span className="text-sm font-medium">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Current Level</span>
                      <span>
                        {skill.progress < 50 ? 'Beginner' : 
                         skill.progress < 80 ? 'Intermediate' : 'Advanced'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones">
          <Card>
            <CardHeader>
              <CardTitle>Career Milestones</CardTitle>
              <CardDescription>Step-by-step progression towards your goal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {currentRoadmap?.milestones.map((milestone, index) => (
                  <div key={milestone.id} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {milestone.completed ? (
                          <CheckCircle2 className="size-6 text-green-500" />
                        ) : (
                          <Circle className="size-6 text-muted-foreground" />
                        )}
                        <div>
                          <h3 className="font-medium">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">Due: {milestone.dueDate}</p>
                        </div>
                      </div>
                      <Badge variant={milestone.completed ? 'default' : 'outline'}>
                        {milestone.completed ? 'Completed' : 'In Progress'}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 ml-9">
                      {milestone.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center gap-2 text-sm">
                          {task.completed ? (
                            <CheckCircle2 className="size-4 text-green-500" />
                          ) : (
                            <Circle className="size-4 text-muted-foreground" />
                          )}
                          <span className={task.completed ? 'line-through text-muted-foreground' : ''}>
                            {task.task}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentRoadmap?.recommendations.map((resource, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {resource.type === 'course' && <BookOpen className="size-5 text-blue-500" />}
                    {resource.type === 'project' && <Code className="size-5 text-green-500" />}
                    {resource.type === 'certification' && <Award className="size-5 text-purple-500" />}
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                  </div>
                  
                  <h3 className="font-medium mb-2">{resource.title}</h3>
                  {resource.provider && (
                    <p className="text-sm text-muted-foreground mb-2">by {resource.provider}</p>
                  )}
                  {resource.description && (
                    <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                  )}
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-muted-foreground">{resource.duration}</span>
                    <Badge variant={resource.priority === 'high' ? 'destructive' : 'secondary'}>
                      {resource.priority}
                    </Badge>
                  </div>
                  
                  <Button size="sm" className="w-full mt-4">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => setShowRoadmap(false)} variant="outline" className="flex-1">
          Change Company/Role
        </Button>
        <Button className="flex-1">
          Update Progress
        </Button>
        <Button variant="outline" className="flex-1">
          Share Roadmap
        </Button>
      </div>
    </div>
  );
}