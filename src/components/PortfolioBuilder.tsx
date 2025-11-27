import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  FolderOpen, 
  Plus, 
  Edit3, 
  Eye, 
  Share, 
  Download, 
  Upload,
  ExternalLink,
  Github,
  Link,
  Image,
  Video,
  Code,
  Palette,
  Globe,
  Star,
  Trophy,
  Award,
  Calendar,
  MapPin,
  Users,
  Zap,
  Target,
  Settings,
  Copy,
  CheckCircle2
} from 'lucide-react';

export function PortfolioBuilder() {
  const [activeTemplate, setActiveTemplate] = useState('modern');
  const [portfolioPublished, setPortfolioPublished] = useState(true);
  const [shareLink, setShareLink] = useState('placemate.edu/portfolio/alex-kumar');

  const portfolioData = {
    personalInfo: {
      name: 'Alex Kumar',
      title: 'Full-Stack Developer & Computer Science Student',
      bio: 'Passionate developer with expertise in modern web technologies. I love building scalable applications and solving complex problems.',
      location: 'San Francisco, CA',
      email: 'alex.kumar@university.edu',
      phone: '+1 (555) 123-4567',
      website: 'alexkumar.dev',
      linkedin: 'linkedin.com/in/alexkumar',
      github: 'github.com/alexkumar',
      avatar: '/api/placeholder/120/120'
    },
    projects: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux', 'Express'],
        category: 'Web Development',
        status: 'completed',
        demoUrl: 'https://ecommerce-demo.alexkumar.dev',
        githubUrl: 'https://github.com/alexkumar/ecommerce-platform',
        features: [
          'User authentication and authorization',
          'Product catalog with search and filtering',
          'Shopping cart and checkout process',
          'Payment integration with Stripe',
          'Admin dashboard for inventory management',
          'Real-time order tracking'
        ],
        challenges: 'Implementing secure payment processing and handling high traffic loads',
        learnings: 'Gained deep understanding of full-stack architecture and payment systems',
        dateCompleted: '2024-11-15',
        duration: '3 months'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Mobile-first task management application built with React Native. Includes collaboration features, due date reminders, and offline functionality.',
        image: '/api/placeholder/400/250',
        technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'AsyncStorage'],
        category: 'Mobile Development',
        status: 'completed',
        demoUrl: null,
        githubUrl: 'https://github.com/alexkumar/task-manager',
        features: [
          'Cross-platform mobile application',
          'Real-time collaboration',
          'Push notifications for reminders',
          'Offline functionality',
          'Dark/light theme support',
          'Data synchronization'
        ],
        challenges: 'Implementing offline functionality and data synchronization',
        learnings: 'Mastered React Native development and mobile app optimization',
        dateCompleted: '2024-09-30',
        duration: '2 months'
      },
      {
        id: 3,
        title: 'AI-Powered Resume Analyzer',
        description: 'Machine learning application that analyzes resumes and provides improvement suggestions. Built with Python, Flask, and scikit-learn.',
        image: '/api/placeholder/400/250',
        technologies: ['Python', 'Flask', 'scikit-learn', 'NLP', 'TensorFlow', 'React'],
        category: 'Machine Learning',
        status: 'in-progress',
        demoUrl: 'https://resume-analyzer.alexkumar.dev',
        githubUrl: 'https://github.com/alexkumar/resume-analyzer',
        features: [
          'PDF resume parsing and analysis',
          'Keyword optimization suggestions',
          'ATS compatibility scoring',
          'Industry-specific recommendations',
          'Skill gap identification',
          'Comparative analysis'
        ],
        challenges: 'Training accurate NLP models for resume content analysis',
        learnings: 'Developed expertise in NLP and machine learning model deployment',
        dateCompleted: null,
        duration: 'In progress (2 months so far)'
      }
    ],
    skills: {
      programming: [
        { name: 'JavaScript', level: 90, projects: 8 },
        { name: 'Python', level: 85, projects: 6 },
        { name: 'TypeScript', level: 80, projects: 5 },
        { name: 'Java', level: 75, projects: 4 },
        { name: 'Go', level: 60, projects: 2 }
      ],
      frameworks: [
        { name: 'React', level: 90, projects: 7 },
        { name: 'Node.js', level: 85, projects: 6 },
        { name: 'Express', level: 80, projects: 5 },
        { name: 'React Native', level: 75, projects: 3 },
        { name: 'Flask', level: 70, projects: 3 }
      ],
      tools: [
        { name: 'Git', level: 90, projects: 12 },
        { name: 'Docker', level: 75, projects: 4 },
        { name: 'AWS', level: 70, projects: 3 },
        { name: 'MongoDB', level: 80, projects: 5 },
        { name: 'PostgreSQL', level: 75, projects: 4 }
      ]
    },
    achievements: [
      {
        title: 'Hackathon Winner',
        description: 'First place at University Tech Hackathon 2024',
        date: '2024-10-15',
        icon: 'trophy'
      },
      {
        title: 'Google Cloud Certified',
        description: 'Google Cloud Professional Developer Certification',
        date: '2024-08-20',
        icon: 'award'
      },
      {
        title: 'Open Source Contributor',
        description: 'Active contributor to React ecosystem projects',
        date: '2024-06-01',
        icon: 'star'
      }
    ],
    analytics: {
      views: 1247,
      uniqueVisitors: 892,
      projectClicks: 156,
      contactClicks: 89,
      downloadClicks: 34
    }
  };

  const templates = [
    {
      id: 'modern',
      name: 'Modern Tech',
      description: 'Clean, minimalist design perfect for developers',
      preview: '/api/placeholder/300/200',
      color: 'blue'
    },
    {
      id: 'creative',
      name: 'Creative Pro',
      description: 'Bold design for designers and creative professionals',
      preview: '/api/placeholder/300/200',
      color: 'purple'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Traditional layout for business and consulting',
      preview: '/api/placeholder/300/200',
      color: 'gray'
    }
  ];

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // Show success toast (in real app)
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getAchievementIcon = (iconType) => {
    switch (iconType) {
      case 'trophy':
        return <Trophy className="size-5 text-yellow-500" />;
      case 'award':
        return <Award className="size-5 text-blue-500" />;
      case 'star':
        return <Star className="size-5 text-purple-500" />;
      default:
        return <Target className="size-5 text-green-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-200">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="size-16 bg-purple-500 rounded-lg flex items-center justify-center">
                <FolderOpen className="size-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-medium">Portfolio Builder</h1>
                <p className="text-muted-foreground">Showcase your projects and skills professionally</p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Eye className="size-4" />
                    {portfolioData.analytics.views} views
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    {portfolioData.analytics.uniqueVisitors} unique visitors
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline">
                <Eye className="size-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline">
                <Download className="size-4 mr-2" />
                Export PDF
              </Button>
              <Button>
                <Share className="size-4 mr-2" />
                Share Portfolio
              </Button>
            </div>
          </div>
          
          {/* Share Link */}
          <div className="mt-6 p-4 bg-white rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="size-4 text-green-500" />
              <span className="text-sm font-medium">Your Portfolio URL</span>
              {portfolioPublished && (
                <Badge className="bg-green-100 text-green-700 text-xs">Published</Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Input value={shareLink} readOnly className="flex-1" />
              <Button size="sm" variant="outline" onClick={() => copyToClipboard(`https://${shareLink}`)}>
                <Copy className="size-4" />
              </Button>
              <Button size="sm" variant="outline">
                <ExternalLink className="size-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Personal Info */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Personal Information</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Edit3 className="size-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="size-20">
                    <AvatarImage src={portfolioData.personalInfo.avatar} />
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{portfolioData.personalInfo.name}</h3>
                    <p className="text-muted-foreground">{portfolioData.personalInfo.title}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="size-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{portfolioData.personalInfo.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {portfolioData.personalInfo.bio}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Email: </span>
                    <span>{portfolioData.personalInfo.email}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Phone: </span>
                    <span>{portfolioData.personalInfo.phone}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Website: </span>
                    <span>{portfolioData.personalInfo.website}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">GitHub: </span>
                    <span>{portfolioData.personalInfo.github}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Projects</span>
                    <span className="font-medium">{portfolioData.projects.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Technologies</span>
                    <span className="font-medium">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Achievements</span>
                    <span className="font-medium">{portfolioData.achievements.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Profile Views</span>
                    <span className="font-medium">{portfolioData.analytics.views}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">Recent Activity</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p>• Portfolio viewed 23 times today</p>
                    <p>• Project demo clicked 5 times</p>
                    <p>• Contact info accessed 3 times</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">My Projects</h2>
              <Button>
                <Plus className="size-4 mr-2" />
                Add Project
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {portfolioData.projects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-accent/50 rounded-t-lg flex items-center justify-center">
                    <Image className="size-12 text-muted-foreground" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-medium">{project.title}</h3>
                        <Badge variant="outline" className="text-xs mt-1">
                          {project.category}
                        </Badge>
                      </div>
                      <Badge 
                        variant={project.status === 'completed' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit3 className="size-4 mr-1" />
                        Edit
                      </Button>
                      {project.demoUrl && (
                        <Button size="sm" variant="outline">
                          <ExternalLink className="size-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        <Github className="size-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="skills">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Skills & Technologies</h2>
              <Button variant="outline">
                <Edit3 className="size-4 mr-2" />
                Edit Skills
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="size-5 text-blue-500" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {portfolioData.skills.programming.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{skill.projects} projects</span>
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-accent/50 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="size-5 text-green-500" />
                    Frameworks & Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {portfolioData.skills.frameworks.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{skill.projects} projects</span>
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-accent/50 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="size-5 text-purple-500" />
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {portfolioData.skills.tools.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{skill.projects} projects</span>
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-accent/50 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Achievements & Certifications</h2>
              <Button>
                <Plus className="size-4 mr-2" />
                Add Achievement
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.achievements.map((achievement, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="size-16 bg-accent/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      {getAchievementIcon(achievement.icon)}
                    </div>
                    <h3 className="font-medium mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="size-3" />
                      {new Date(achievement.date).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="templates">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">Choose Portfolio Template</h2>
              <p className="text-sm text-muted-foreground">
                Select a template that best represents your professional style
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card 
                  key={template.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    activeTemplate === template.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setActiveTemplate(template.id)}
                >
                  <div className="aspect-video bg-accent/50 rounded-t-lg flex items-center justify-center">
                    <Palette className="size-12 text-muted-foreground" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{template.name}</h3>
                      {activeTemplate === template.id && (
                        <CheckCircle2 className="size-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {template.description}
                    </p>
                    <Button 
                      size="sm" 
                      variant={activeTemplate === template.id ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {activeTemplate === template.id ? 'Selected' : 'Select Template'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Portfolio Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Eye className="size-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{portfolioData.analytics.views}</div>
                  <p className="text-sm text-muted-foreground">Total Views</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="size-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{portfolioData.analytics.uniqueVisitors}</div>
                  <p className="text-sm text-muted-foreground">Unique Visitors</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <ExternalLink className="size-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{portfolioData.analytics.projectClicks}</div>
                  <p className="text-sm text-muted-foreground">Project Clicks</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Download className="size-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{portfolioData.analytics.downloadClicks}</div>
                  <p className="text-sm text-muted-foreground">Download Clicks</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Visitor Insights</CardTitle>
                <CardDescription>Understanding your portfolio audience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <h4 className="font-medium mb-2">Top Referral Sources</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>LinkedIn</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GitHub</span>
                        <span className="font-medium">32%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Direct Traffic</span>
                        <span className="font-medium">23%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <h4 className="font-medium mb-2">Most Popular Projects</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>E-commerce Platform</span>
                        <span className="font-medium">68 views</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AI Resume Analyzer</span>
                        <span className="font-medium">52 views</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Task Management App</span>
                        <span className="font-medium">36 views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}