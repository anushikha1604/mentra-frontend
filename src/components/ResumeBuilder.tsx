import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  FileText, 
  Download, 
  Upload, 
  Eye, 
  Edit, 
  Trash2, 
  Copy, 
  Share2, 
  Star, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Sparkles, 
  Target, 
  TrendingUp,
  Search,
  Filter,
  BarChart3,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Plus,
  Zap,
  Shield
} from 'lucide-react';

export function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState('templates');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const resumeTemplates = [
    {
      id: 'modern-tech',
      name: 'Modern Tech',
      category: 'Technology',
      description: 'Clean, modern design perfect for tech roles',
      image: '/api/placeholder/300/400',
      premium: false,
      rating: 4.8,
      downloads: 2847
    },
    {
      id: 'executive-pro',
      name: 'Executive Pro',
      category: 'Business',
      description: 'Professional layout for senior positions',
      image: '/api/placeholder/300/400',
      premium: true,
      rating: 4.9,
      downloads: 1923
    },
    {
      id: 'creative-portfolio',
      name: 'Creative Portfolio',
      category: 'Design',
      description: 'Showcase your creative work effectively',
      image: '/api/placeholder/300/400',
      premium: false,
      rating: 4.7,
      downloads: 3156
    },
    {
      id: 'academic-scholar',
      name: 'Academic Scholar',
      category: 'Education',
      description: 'Ideal for academic and research positions',
      image: '/api/placeholder/300/400',
      premium: false,
      rating: 4.6,
      downloads: 1456
    },
    {
      id: 'startup-founder',
      name: 'Startup Founder',
      category: 'Entrepreneurship',
      description: 'Bold design for innovative leaders',
      image: '/api/placeholder/300/400',
      premium: true,
      rating: 4.8,
      downloads: 987
    },
    {
      id: 'minimalist-clean',
      name: 'Minimalist Clean',
      category: 'General',
      description: 'Simple, elegant design for any industry',
      image: '/api/placeholder/300/400',
      premium: false,
      rating: 4.9,
      downloads: 4521
    }
  ];

  const userResumes = [
    {
      id: 1,
      name: 'Software Engineer Resume',
      template: 'Modern Tech',
      lastModified: '2 hours ago',
      status: 'Published',
      atsScore: 92,
      views: 23,
      downloads: 5
    },
    {
      id: 2,
      name: 'Full-Stack Developer',
      template: 'Creative Portfolio',
      lastModified: '1 day ago',
      status: 'Draft',
      atsScore: 87,
      views: 8,
      downloads: 2
    },
    {
      id: 3,
      name: 'Product Manager Role',
      template: 'Executive Pro',
      lastModified: '3 days ago',
      status: 'Published',
      atsScore: 95,
      views: 45,
      downloads: 12
    }
  ];

  const atsCheckerResults = {
    score: 87,
    improvements: [
      {
        category: 'Keywords',
        status: 'good',
        message: 'Good keyword density for target role',
        suggestions: ['Add more industry-specific terms', 'Include programming languages']
      },
      {
        category: 'Format',
        status: 'excellent',
        message: 'ATS-friendly format detected',
        suggestions: []
      },
      {
        category: 'Contact Info',
        status: 'warning',
        message: 'Missing LinkedIn profile',
        suggestions: ['Add LinkedIn URL', 'Include professional email']
      },
      {
        category: 'Skills',
        status: 'good',
        message: 'Relevant skills identified',
        suggestions: ['Add more technical skills', 'Include soft skills']
      }
    ]
  };

  const resumeCheckerMetrics = {
    readabilityScore: 78,
    grammarIssues: 3,
    formatConsistency: 95,
    lengthOptimization: 82,
    impactStatements: 67
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume Builder
          </h1>
          <p className="text-muted-foreground mt-2">
            Create, optimize, and manage your professional resumes
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Upload className="size-4" />
            Import Resume
          </Button>
          <Button className="bg-gradient-primary text-white gap-2">
            <Plus className="size-4" />
            Create New Resume
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="templates" className="gap-2">
            <FileText className="size-4" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="my-resumes" className="gap-2">
            <Edit className="size-4" />
            My Resumes
          </TabsTrigger>
          <TabsTrigger value="ats-checker" className="gap-2">
            <Target className="size-4" />
            ATS Checker
          </TabsTrigger>
          <TabsTrigger value="resume-review" className="gap-2">
            <Sparkles className="size-4" />
            Resume Review
          </TabsTrigger>
        </TabsList>

        {/* Resume Templates Tab */}
        <TabsContent value="templates" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
                <Input placeholder="Search templates..." className="pl-10 w-80" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="size-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline">6 Templates</Badge>
              <Badge variant="secondary">4 Free</Badge>
              <Badge className="bg-gradient-primary text-white">2 Premium</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeTemplates.map((template) => (
              <Card 
                key={template.id} 
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  selectedTemplate === template.id ? 'ring-2 ring-primary border-primary' : ''
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="relative">
                  <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 rounded-t-lg flex items-center justify-center">
                    <FileText className="size-16 text-muted-foreground" />
                  </div>
                  {template.premium && (
                    <Badge className="absolute top-3 right-3 bg-gradient-warning text-white">
                      <Star className="size-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.category}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="size-3 fill-current text-yellow-500" />
                      {template.rating}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {template.downloads.toLocaleString()} downloads
                    </span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="size-3 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm" className="bg-gradient-primary text-white">
                        Use Template
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* My Resumes Tab */}
        <TabsContent value="my-resumes" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold">My Resumes ({userResumes.length})</h2>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <Upload className="size-4" />
                Import
              </Button>
              <Button className="bg-gradient-primary text-white gap-2">
                <Plus className="size-4" />
                Create New
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {userResumes.map((resume) => (
              <Card key={resume.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="size-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <FileText className="size-6 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">{resume.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>Template: {resume.template}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="size-3" />
                            {resume.lastModified}
                          </span>
                          <span>•</span>
                          <Badge 
                            variant={resume.status === 'Published' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {resume.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{resume.atsScore}%</div>
                        <div className="text-xs text-muted-foreground">ATS Score</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-lg font-bold">{resume.views}</div>
                        <div className="text-xs text-muted-foreground">Views</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-lg font-bold">{resume.downloads}</div>
                        <div className="text-xs text-muted-foreground">Downloads</div>
                      </div>

                      <div className="flex items-center gap-2 ml-4">
                        <Button size="sm" variant="outline">
                          <Eye className="size-3 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="size-3 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="size-3 mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="size-3 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ATS Checker Tab */}
        <TabsContent value="ats-checker" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upload Section */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="size-5" />
                  ATS Checker
                </CardTitle>
                <CardDescription>
                  Upload your resume to check ATS compatibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="size-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag & drop your resume here
                  </p>
                  <Button variant="outline" size="sm">
                    Browse Files
                  </Button>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Supported formats: PDF, DOC, DOCX (Max 5MB)
                </div>
                
                <Button className="w-full bg-gradient-primary text-white">
                  <Zap className="size-4 mr-2" />
                  Analyze Resume
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>ATS Compatibility Score</span>
                    <Badge className="bg-gradient-success text-white text-lg px-3 py-1">
                      {atsCheckerResults.score}%
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={atsCheckerResults.score} className="h-3 mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Your resume has a good ATS compatibility score. Here are some areas for improvement:
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-4">
                {atsCheckerResults.improvements.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{item.category}</h3>
                        <Badge 
                          variant={item.status === 'excellent' ? 'default' : 
                                  item.status === 'good' ? 'secondary' : 'destructive'}
                          className={
                            item.status === 'excellent' ? 'bg-green-500 text-white' :
                            item.status === 'good' ? 'bg-blue-500 text-white' : ''
                          }
                        >
                          {item.status === 'excellent' ? <CheckCircle className="size-3 mr-1" /> :
                           item.status === 'good' ? <CheckCircle className="size-3 mr-1" /> :
                           <AlertTriangle className="size-3 mr-1" />}
                          {item.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">{item.message}</p>
                      
                      {item.suggestions.length > 0 && (
                        <div>
                          <p className="text-sm font-medium mb-2">Suggestions:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {item.suggestions.map((suggestion, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Resume Review Tab */}
        <TabsContent value="resume-review" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Review Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="size-5" />
                  Resume Quality Metrics
                </CardTitle>
                <CardDescription>
                  Comprehensive analysis of your resume quality
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Readability Score</span>
                      <span className="font-medium">{resumeCheckerMetrics.readabilityScore}%</span>
                    </div>
                    <Progress value={resumeCheckerMetrics.readabilityScore} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Format Consistency</span>
                      <span className="font-medium">{resumeCheckerMetrics.formatConsistency}%</span>
                    </div>
                    <Progress value={resumeCheckerMetrics.formatConsistency} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Length Optimization</span>
                      <span className="font-medium">{resumeCheckerMetrics.lengthOptimization}%</span>
                    </div>
                    <Progress value={resumeCheckerMetrics.lengthOptimization} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Impact Statements</span>
                      <span className="font-medium">{resumeCheckerMetrics.impactStatements}%</span>
                    </div>
                    <Progress value={resumeCheckerMetrics.impactStatements} className="h-2" />
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="size-4 text-orange-600" />
                    <span className="font-medium text-orange-800 dark:text-orange-300">
                      {resumeCheckerMetrics.grammarIssues} Grammar Issues Found
                    </span>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-400">
                    Review and fix grammar issues to improve professional presentation
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Action Items */}
            <Card>
              <CardHeader>
                <CardTitle>Improvement Recommendations</CardTitle>
                <CardDescription>
                  Priority actions to enhance your resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <AlertTriangle className="size-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-800 dark:text-red-300">High Priority</h4>
                      <p className="text-sm text-red-700 dark:text-red-400">
                        Fix grammar and spelling errors
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <TrendingUp className="size-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-300">Medium Priority</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-400">
                        Add more quantified achievements
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <Sparkles className="size-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-300">Enhancement</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-400">
                        Optimize keyword density for target roles
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <CheckCircle className="size-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800 dark:text-green-300">Strength</h4>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        Strong technical skills section
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-gradient-primary text-white">
                  <Zap className="size-4 mr-2" />
                  Get Detailed Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}