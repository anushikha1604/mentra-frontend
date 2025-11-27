import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  User, 
  Upload, 
  FileText, 
  Star, 
  Award, 
  BookOpen, 
  Edit3, 
  Download, 
  Eye,
  Plus,
  X,
  CheckCircle2,
  Camera,
  ThumbsUp,
  Globe,
  Lock,
  Users,
  TrendingUp,
  HelpCircle,
  Zap,
  Target,
  BarChart3,
  GripVertical,
  ExternalLink,
  Calendar,
  MapPin,
  Shield,
  Briefcase,
  Switch
} from 'lucide-react';

export function ProfileManagement() {
  const [profileScore, setProfileScore] = useState(85);
  const [editingSection, setEditingSection] = useState(null);
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [draggedExperience, setDraggedExperience] = useState(null);

  const profileData = {
    personal: {
      name: 'Alex Kumar',
      email: 'alex.kumar@university.edu',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      university: 'Stanford University',
      degree: 'Computer Science',
      graduationYear: '2025',
      gpa: '3.8/4.0'
    },
    summary: "Passionate Computer Science student with strong foundation in software development, algorithms, and system design. Experienced in full-stack development with modern technologies. Seeking opportunities in software engineering at innovative tech companies.",
    skills: {
      technical: [
        { name: 'Python', level: 90, verified: true, endorsements: 12, category: 'Programming' },
        { name: 'JavaScript', level: 85, verified: true, endorsements: 8, category: 'Programming' },
        { name: 'React', level: 80, verified: false, endorsements: 5, category: 'Frontend' },
        { name: 'Node.js', level: 75, verified: false, endorsements: 3, category: 'Backend' },
        { name: 'SQL', level: 70, verified: true, endorsements: 6, category: 'Database' },
        { name: 'AWS', level: 60, verified: false, endorsements: 2, category: 'Cloud' }
      ],
      soft: [
        { name: 'Communication', level: 85 },
        { name: 'Leadership', level: 80 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Work', level: 85 }
      ]
    },
    experience: [
      {
        title: 'Software Engineering Intern',
        company: 'TechStart Inc.',
        duration: 'Jun 2024 - Aug 2024',
        current: false,
        description: 'Developed and maintained web applications using React and Node.js. Improved application performance by 30% through code optimization.',
        skills: ['React', 'Node.js', 'MongoDB', 'Git'],
        media: ['project-screenshot.png']
      },
      {
        title: 'Teaching Assistant',
        company: 'Stanford University',
        duration: 'Jan 2024 - Present',
        current: true,
        description: 'Assist students in Data Structures and Algorithms course. Hold office hours and grade assignments for 150+ students.',
        skills: ['Teaching', 'Python', 'Algorithms', 'Mentoring'],
        media: []
      }
    ],
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'Full-stack web application with payment integration and admin dashboard.',
        technologies: ['React', 'Express', 'MongoDB', 'Stripe API'],
        github: 'github.com/alexkumar/ecommerce',
        live: 'ecommerce-demo.netlify.app'
      },
      {
        name: 'Task Management App',
        description: 'Mobile-first task management application with real-time collaboration.',
        technologies: ['React Native', 'Firebase', 'Redux'],
        github: 'github.com/alexkumar/taskapp',
        live: null
      }
    ],
    documents: [
      { name: 'Resume_AlexKumar_2024.pdf', size: '245 KB', uploadDate: 'Dec 15, 2024', type: 'resume' },
      { name: 'Transcript_Official.pdf', size: '180 KB', uploadDate: 'Dec 10, 2024', type: 'transcript' },
      { name: 'CoverLetter_Template.pdf', size: '120 KB', uploadDate: 'Dec 8, 2024', type: 'cover_letter' }
    ]
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCompletionItems = () => [
    { item: 'Profile Photo', completed: true, points: 5, action: 'uploadPhoto', icon: Camera },
    { item: 'Contact Information', completed: true, points: 10, action: 'editPersonal', icon: User },
    { item: 'Professional Summary', completed: true, points: 15, action: 'editSummary', icon: FileText },
    { item: 'Skills Assessment', completed: false, points: 20, action: 'takeAssessment', icon: Award },
    { item: 'Work Experience', completed: true, points: 25, action: 'addExperience', icon: Briefcase },
    { item: 'Projects Portfolio', completed: true, points: 20, action: 'addProject', icon: Target },
    { item: 'Resume Upload', completed: true, points: 5, action: 'uploadResume', icon: Upload }
  ];

  const handleCompletionAction = (action) => {
    switch(action) {
      case 'uploadPhoto':
        setShowUploadModal(true);
        break;
      case 'editPersonal':
        setEditingSection('personal');
        break;
      case 'editSummary':
        setEditingSection('summary');
        break;
      case 'takeAssessment':
        // Navigate to skills assessment
        break;
      case 'addExperience':
        setEditingSection('newExperience');
        break;
      case 'addProject':
        setEditingSection('newProject');
        break;
      case 'uploadResume':
        setShowUploadModal(true);
        break;
    }
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="size-24">
                  <AvatarImage src="/api/placeholder/96/96" />
                  <AvatarFallback className="text-xl">AK</AvatarFallback>
                </Avatar>
                <Button size="sm" variant="secondary" className="absolute -bottom-1 -right-1 rounded-full size-8 p-0">
                  <Edit3 className="size-3" />
                </Button>
              </div>
              <div>
                <h1 className="text-2xl font-medium">{profileData.personal.name}</h1>
                <p className="text-muted-foreground">{profileData.personal.degree} • {profileData.personal.graduationYear}</p>
                <p className="text-sm text-muted-foreground">{profileData.personal.university}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline">{profileData.personal.location}</Badge>
                  <Badge variant="outline">GPA: {profileData.personal.gpa}</Badge>
                </div>
              </div>
            </div>
            
            <div className="lg:ml-auto space-y-4">
              <div className="text-center">
                <div className={`text-3xl font-bold ${getScoreColor(profileScore)}`}>
                  {profileScore}%
                </div>
                <p className="text-sm text-muted-foreground">Profile Score</p>
                <Progress value={profileScore} className="w-32 mt-2" />
              </div>
              <Button className="w-full lg:w-auto">
                <Eye className="size-4 mr-2" />
                Preview Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
                <CardDescription>Complete these items to boost your profile score</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {getCompletionItems().map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {item.completed ? (
                          <CheckCircle2 className="size-5 text-green-500" />
                        ) : (
                          <div className="size-5 border-2 border-muted-foreground rounded-full" />
                        )}
                        <span className={item.completed ? 'text-muted-foreground' : ''}>{item.item}</span>
                      </div>
                      <Badge variant="outline">+{item.points}%</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Enhance your profile with these actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Award className="size-4 mr-2" />
                  Take Skills Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="size-4 mr-2" />
                  Upload New Resume
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="size-4 mr-2" />
                  Add Project
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="size-4 mr-2" />
                  Complete Certification
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Professional Summary */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Professional Summary</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setEditingSection('summary')}>
                  <Edit3 className="size-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {editingSection === 'summary' ? (
                <div className="space-y-4">
                  <Textarea 
                    defaultValue={profileData.summary}
                    className="min-h-[100px]"
                  />
                  <div className="flex gap-2">
                    <Button size="sm">Save</Button>
                    <Button size="sm" variant="outline" onClick={() => setEditingSection(null)}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">{profileData.summary}</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Personal Information</CardTitle>
                <Button variant="ghost" size="sm">
                  <Edit3 className="size-4 mr-2" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <Input value={profileData.personal.name} readOnly />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input value={profileData.personal.email} readOnly />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <Input value={profileData.personal.phone} readOnly />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <Input value={profileData.personal.location} readOnly />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">University</label>
                    <Input value={profileData.personal.university} readOnly />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Degree</label>
                    <Input value={profileData.personal.degree} readOnly />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Graduation Year</label>
                    <Input value={profileData.personal.graduationYear} readOnly />
                  </div>
                  <div>
                    <label className="text-sm font-medium">GPA</label>
                    <Input value={profileData.personal.gpa} readOnly />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <div className="space-y-6">
            {/* Technical Skills */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Technical Skills</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Plus className="size-4 mr-2" />
                    Add Skill
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profileData.skills.technical.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          {skill.verified && (
                            <Badge variant="default" className="text-xs">
                              <CheckCircle2 className="size-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profileData.skills.soft.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="experience">
          <div className="space-y-6">
            {/* Work Experience */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Work Experience</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Plus className="size-4 mr-2" />
                    Add Experience
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {profileData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4 pb-6 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.duration}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="size-4" />
                      </Button>
                    </div>
                    <p className="text-sm mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Projects</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Plus className="size-4 mr-2" />
                    Add Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {profileData.projects.map((project, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium">{project.name}</h3>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="size-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="size-4 mr-1" />
                        GitHub
                      </Button>
                      {project.live && (
                        <Button variant="outline" size="sm">
                          <Eye className="size-4 mr-1" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Document Management</CardTitle>
                <Button>
                  <Upload className="size-4 mr-2" />
                  Upload Document
                </Button>
              </div>
              <CardDescription>
                Upload and manage your resumes, transcripts, and other documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profileData.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="size-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <FileText className="size-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">{doc.size} • Uploaded {doc.uploadDate}</p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {doc.type.replace('_', ' ')}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <X className="size-4" />
                      </Button>
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