import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BookOpen, 
  Video, 
  Users, 
  Award, 
  Calendar, 
  ExternalLink, 
  Clock, 
  Star, 
  Play, 
  Download, 
  Search, 
  Filter, 
  TrendingUp, 
  Globe, 
  Lightbulb, 
  Target, 
  CheckCircle,
  ArrowRight,
  Bookmark,
  Share2,
  GraduationCap,
  Briefcase,
  MessageSquare,
  Zap,
  Trophy,
  Code,
  PenTool,
  Mic,
  Brain,
  Eye,
  AlertCircle,
  HelpCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export function CareerResources() {
  const [activeTab, setActiveTab] = useState('courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);
  const [showSupportModal, setShowSupportModal] = useState(false);

  const handleBookmark = (id: number) => {
    setBookmarkedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleEnrollment = (courseTitle: string) => {
    alert(`Great choice! You're being redirected to enroll in "${courseTitle}". This feature will integrate with payment processing in the full version.`);
  };

  const handleWebinarAction = (action: string, title: string) => {
    switch(action) {
      case 'join':
        alert(`Joining live webinar: "${title}". In the full version, this would open the video conference platform.`);
        break;
      case 'register':
        alert(`Successfully registered for: "${title}". You'll receive a confirmation email with joining details.`);
        break;
      case 'watch':
        alert(`Loading recorded webinar: "${title}". This would play the recorded session.`);
        break;
    }
  };

  const handleCertificationClick = (certName: string) => {
    alert(`Redirecting to certification provider for: "${certName}". This would open the official certification page.`);
  };

  const handleSupportRequest = () => {
    setShowSupportModal(true);
  };

  const onlineCourses = [
    {
      id: 1,
      title: 'Advanced React Development',
      provider: 'TechAcademy',
      category: 'Programming',
      level: 'Advanced',
      duration: '40 hours',
      rating: 4.8,
      students: 15420,
      price: 'Free',
      description: 'Master advanced React patterns and build scalable applications',
      skills: ['React', 'Redux', 'TypeScript'],
      certified: true
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      provider: 'DataLearn',
      category: 'Data Science',
      level: 'Beginner',
      duration: '60 hours',
      rating: 4.7,
      students: 23150,
      price: '₹2,999',
      description: 'Complete introduction to data science and machine learning',
      skills: ['Python', 'Pandas', 'Scikit-learn'],
      certified: true
    },
    {
      id: 3,
      title: 'UI/UX Design Mastery',
      provider: 'DesignPro',
      category: 'Design',
      level: 'Intermediate',
      duration: '35 hours',
      rating: 4.9,
      students: 8750,
      price: '₹1,999',
      description: 'Learn modern UI/UX design principles and tools',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      certified: true
    },
    {
      id: 4,
      title: 'Cloud Computing with AWS',
      provider: 'CloudAcademy',
      category: 'Cloud',
      level: 'Intermediate',
      duration: '50 hours',
      rating: 4.6,
      students: 19200,
      price: 'Free',
      description: 'Comprehensive AWS cloud computing course',
      skills: ['AWS', 'EC2', 'Lambda'],
      certified: true
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      provider: 'MarketPro',
      category: 'Marketing',
      level: 'Beginner',
      duration: '25 hours',
      rating: 4.5,
      students: 12300,
      price: '₹1,499',
      description: 'Master digital marketing and grow your online presence',
      skills: ['SEO', 'Social Media', 'Analytics'],
      certified: true
    },
    {
      id: 6,
      title: 'Cybersecurity Fundamentals',
      provider: 'SecureLearn',
      category: 'Security',
      level: 'Beginner',
      duration: '45 hours',
      rating: 4.7,
      students: 9850,
      price: '₹3,499',
      description: 'Learn cybersecurity basics and best practices',
      skills: ['Network Security', 'Ethical Hacking', 'Cryptography'],
      certified: true
    }
  ];

  const webinars = [
    {
      id: 1,
      title: 'Career Growth in Tech Industry',
      speaker: 'Sarah Johnson',
      company: 'Google',
      date: '2024-03-20',
      time: '7:00 PM IST',
      duration: '1 hour',
      attendees: 1250,
      type: 'Live',
      description: 'Learn how to accelerate your career in the tech industry',
      topics: ['Career Planning', 'Skill Development', 'Leadership']
    },
    {
      id: 2,
      title: 'Building Your Personal Brand',
      speaker: 'Michael Chen',
      company: 'LinkedIn',
      date: '2024-03-18',
      time: '6:00 PM IST',
      duration: '45 minutes',
      attendees: 890,
      type: 'Upcoming',
      description: 'Strategies to build and maintain your professional brand',
      topics: ['Personal Branding', 'LinkedIn', 'Networking']
    },
    {
      id: 3,
      title: 'Startup Funding Essentials',
      speaker: 'Priya Sharma',
      company: 'Sequoia Capital',
      date: '2024-03-15',
      time: '8:00 PM IST',
      duration: '1.5 hours',
      attendees: 2100,
      type: 'Recorded',
      description: 'Understanding the startup funding landscape',
      topics: ['Venture Capital', 'Pitch Deck', 'Valuation']
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      provider: 'Amazon Web Services',
      category: 'Cloud Computing',
      difficulty: 'Advanced',
      duration: '3-6 months prep',
      cost: '$150',
      popularity: 95,
      description: 'Validate technical skills and cloud expertise',
      benefits: ['High salary potential', 'Industry recognition', 'Global validity']
    },
    {
      id: 2,
      name: 'Google Data Analytics Certificate',
      provider: 'Google',
      category: 'Data Analytics',
      difficulty: 'Beginner',
      duration: '3-6 months',
      cost: '$49/month',
      popularity: 88,
      description: 'Learn data analytics skills for entry-level roles',
      benefits: ['Job-ready skills', 'Portfolio projects', 'Career support']
    },
    {
      id: 3,
      name: 'Certified Ethical Hacker (CEH)',
      provider: 'EC-Council',
      category: 'Cybersecurity',
      difficulty: 'Intermediate',
      duration: '6-12 months prep',
      cost: '$1,199',
      popularity: 78,
      description: 'Ethical hacking and penetration testing certification',
      benefits: ['Security expertise', 'High demand', 'Premium salaries']
    },
    {
      id: 4,
      name: 'PMP Certification',
      provider: 'PMI',
      category: 'Project Management',
      difficulty: 'Advanced',
      duration: '6-12 months prep',
      cost: '$555',
      popularity: 92,
      description: 'Global standard for project management professionals',
      benefits: ['Leadership skills', 'Higher earning potential', 'Global recognition']
    }
  ];

  const careerGuides = [
    {
      id: 1,
      title: 'Software Engineer Career Path',
      category: 'Technology',
      readTime: '15 min read',
      views: 45200,
      rating: 4.8,
      description: 'Complete roadmap to becoming a successful software engineer',
      topics: ['Career Progression', 'Skills Development', 'Salary Expectations'],
      author: 'Tech Career Experts'
    },
    {
      id: 2,
      title: 'Data Scientist Career Guide',
      category: 'Data Science',
      readTime: '20 min read',
      views: 32100,
      rating: 4.7,
      description: 'Everything you need to know about data science careers',
      topics: ['Required Skills', 'Tools & Technologies', 'Career Growth'],
      author: 'Data Science Team'
    },
    {
      id: 3,
      title: 'Product Manager Path',
      category: 'Product Management',
      readTime: '18 min read',
      views: 28900,
      rating: 4.6,
      description: 'How to break into product management role',
      topics: ['PM Skills', 'Portfolio Building', 'Interview Tips'],
      author: 'Product Experts'
    },
    {
      id: 4,
      title: 'UX Designer Career Journey',
      category: 'Design',
      readTime: '12 min read',
      views: 19800,
      rating: 4.9,
      description: 'Step-by-step guide to becoming a UX designer',
      topics: ['Design Thinking', 'Portfolio Tips', 'Industry Trends'],
      author: 'Design Guild'
    }
  ];

  const skillDevelopment = [
    {
      category: 'Technical Skills',
      icon: Code,
      color: 'bg-blue-500',
      skills: [
        { name: 'JavaScript', level: 85, trending: true },
        { name: 'Python', level: 78, trending: true },
        { name: 'React', level: 72, trending: true },
        { name: 'Node.js', level: 68, trending: false },
        { name: 'SQL', level: 82, trending: false }
      ]
    },
    {
      category: 'Soft Skills',
      icon: Brain,
      color: 'bg-green-500',
      skills: [
        { name: 'Communication', level: 88, trending: true },
        { name: 'Leadership', level: 65, trending: true },
        { name: 'Problem Solving', level: 75, trending: false },
        { name: 'Time Management', level: 70, trending: false },
        { name: 'Teamwork', level: 80, trending: true }
      ]
    },
    {
      category: 'Creative Skills',
      icon: PenTool,
      color: 'bg-purple-500',
      skills: [
        { name: 'UI/UX Design', level: 72, trending: true },
        { name: 'Graphic Design', level: 68, trending: false },
        { name: 'Video Editing', level: 55, trending: true },
        { name: 'Content Writing', level: 78, trending: true },
        { name: 'Photography', level: 62, trending: false }
      ]
    }
  ];

  const supportOptions = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our career counselors',
      icon: MessageSquare,
      action: () => alert('Live chat feature: Connect with our career counselors for personalized guidance!')
    },
    {
      title: 'Email Support',
      description: 'Send us your questions and get detailed responses',
      icon: Mail,
      action: () => alert('Email support: Send your questions to support@mentra.com for detailed assistance!')
    },
    {
      title: 'Phone Consultation',
      description: 'Schedule a call with our experts',
      icon: Phone,
      action: () => alert('Phone consultation: Book a 30-minute session with our career experts!')
    },
    {
      title: 'Resource Center',
      description: 'Browse our comprehensive help articles',
      icon: BookOpen,
      action: () => alert('Resource center: Access our knowledge base with hundreds of helpful articles!')
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-primary-strong mb-2">
            Career Resources
          </h1>
          <p className="font-body text-secondary-medium">
            Explore courses, webinars, certifications, and career guides to accelerate your professional growth
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="gap-2 font-body"
            onClick={() => {
              if (bookmarkedItems.length === 0) {
                alert('No bookmarks yet! Start bookmarking your favorite resources.');
              } else {
                alert(`You have ${bookmarkedItems.length} bookmarked items. Feature coming soon to view them all!`);
              }
            }}
          >
            <Bookmark className="size-4" />
            My Bookmarks ({bookmarkedItems.length})
          </Button>
          <Button 
            className="bg-brand-primary hover:bg-blue-700 text-white gap-2 font-body"
            onClick={handleSupportRequest}
          >
            <HelpCircle className="size-4" />
            Get Support
          </Button>
        </div>
      </div>

      {/* Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="font-heading text-primary-strong">Career Support Center</CardTitle>
              <CardDescription className="font-body text-secondary-medium">
                Choose how you'd like to get help with your career journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {supportOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="p-4 h-auto flex flex-col items-start gap-2 hover:bg-blue-50 hover:border-blue-200"
                      onClick={option.action}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-brand-primary" />
                        <span className="font-body font-medium text-primary-strong">{option.title}</span>
                      </div>
                      <p className="font-body text-sm text-secondary-medium text-left">{option.description}</p>
                    </Button>
                  );
                })}
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-brand-primary mt-0.5" />
                  <div>
                    <h4 className="font-body font-medium text-primary-strong mb-1">Quick Help</h4>
                    <p className="font-body text-sm text-secondary-medium">
                      For immediate assistance, browse our FAQ section or use the search function above to find relevant resources.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setShowSupportModal(false)}
                  className="font-body"
                >
                  Close
                </Button>
                <Button 
                  className="bg-brand-primary hover:bg-blue-700 font-body"
                  onClick={() => {
                    alert('Opening comprehensive help center with FAQs, tutorials, and documentation!');
                    setShowSupportModal(false);
                  }}
                >
                  Browse Help Center
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
          <TabsTrigger value="courses" className="gap-2 font-body">
            <BookOpen className="size-4" />
            <span className="hidden sm:inline">Courses</span>
          </TabsTrigger>
          <TabsTrigger value="webinars" className="gap-2 font-body">
            <Video className="size-4" />
            <span className="hidden sm:inline">Webinars</span>
          </TabsTrigger>
          <TabsTrigger value="certifications" className="gap-2 font-body">
            <Award className="size-4" />
            <span className="hidden sm:inline">Certifications</span>
          </TabsTrigger>
          <TabsTrigger value="guides" className="gap-2 font-body">
            <Target className="size-4" />
            <span className="hidden sm:inline">Guides</span>
          </TabsTrigger>
          <TabsTrigger value="skills" className="gap-2 font-body">
            <Zap className="size-4" />
            <span className="hidden sm:inline">Skills</span>
          </TabsTrigger>
        </TabsList>

        {/* Online Courses Tab */}
        <TabsContent value="courses" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 size-4 text-muted-light" />
                <Input 
                  placeholder="Search courses..." 
                  className="pl-10 w-80 font-body"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => alert('Advanced filters: Filter by category, level, price, and more!')}
              >
                <Filter className="size-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-body">{onlineCourses.length} Courses</Badge>
              <Badge variant="secondary" className="font-body">Free & Paid</Badge>
              <Badge className="bg-green-500 text-white font-body">Certified</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineCourses
              .filter(course => 
                searchQuery === '' || 
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.category.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-lg flex items-center justify-center">
                      <Play className="size-12 text-brand-primary" />
                    </div>
                    {course.certified && (
                      <Badge className="absolute top-3 right-3 bg-green-500 text-white font-body">
                        <Award className="size-3 mr-1" />
                        Certified
                      </Badge>
                    )}
                    <Badge 
                      variant={course.price === 'Free' ? 'default' : 'secondary'}
                      className={`absolute top-3 left-3 font-body ${course.price === 'Free' ? 'bg-green-500 text-white' : ''}`}
                    >
                      {course.price}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-heading font-semibold text-primary-strong line-clamp-2">{course.title}</h3>
                        <p className="font-body text-sm text-secondary-medium">{course.provider}</p>
                      </div>
                      
                      <p className="font-body text-sm text-secondary-medium line-clamp-2">{course.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="size-3 fill-current text-yellow-500" />
                          <span className="font-body text-secondary-medium">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="size-3 text-muted-light" />
                          <span className="font-body text-secondary-medium">{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="size-3 text-muted-light" />
                          <span className="font-body text-secondary-medium">{course.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-1 flex-wrap">
                        {course.skills.slice(0, 3).map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs font-body">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-brand-primary hover:bg-blue-700 text-white font-body"
                          onClick={() => handleEnrollment(course.title)}
                        >
                          Enroll Now
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleBookmark(course.id)}
                          className={bookmarkedItems.includes(course.id) ? 'bg-blue-50 border-blue-200' : ''}
                        >
                          <Bookmark className={`size-3 ${bookmarkedItems.includes(course.id) ? 'fill-blue-500 text-blue-500' : ''}`} />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => alert('Share feature: Copy link or share on social media!')}
                        >
                          <Share2 className="size-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        {/* Webinars Tab */}
        <TabsContent value="webinars" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-heading text-xl font-semibold text-primary-strong">Upcoming & Recorded Webinars</h2>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                className="gap-2 font-body"
                onClick={() => alert('Calendar integration: Sync webinars with your personal calendar!')}
              >
                <Calendar className="size-4" />
                Schedule
              </Button>
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white gap-2 font-body"
                onClick={() => handleWebinarAction('join', 'Live Session')}
              >
                <Video className="size-4" />
                Join Live
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant={webinar.type === 'Live' ? 'destructive' : 
                              webinar.type === 'Upcoming' ? 'default' : 'secondary'}
                      className={`font-body ${
                        webinar.type === 'Live' ? 'bg-red-500 text-white animate-pulse' :
                        webinar.type === 'Upcoming' ? 'bg-brand-primary text-white' : ''
                      }`}
                    >
                      {webinar.type}
                    </Badge>
                    
                    <div className="flex items-center gap-4 text-sm text-secondary-medium">
                      <span className="flex items-center gap-1 font-body">
                        <Calendar className="size-3" />
                        {webinar.date}
                      </span>
                      <span className="flex items-center gap-1 font-body">
                        <Clock className="size-3" />
                        {webinar.time}
                      </span>
                      <span className="flex items-center gap-1 font-body">
                        <Users className="size-3" />
                        {webinar.attendees} attending
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                      <h3 className="font-heading text-xl font-semibold text-primary-strong mb-2">{webinar.title}</h3>
                      <p className="font-body text-secondary-medium mb-4">{webinar.description}</p>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="size-8 bg-brand-primary rounded-full flex items-center justify-center">
                            <Mic className="size-4 text-white" />
                          </div>
                          <div>
                            <div className="font-body font-medium text-primary-strong">{webinar.speaker}</div>
                            <div className="font-body text-sm text-secondary-medium">{webinar.company}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-1 flex-wrap">
                        {webinar.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs font-body">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-center gap-3">
                      {webinar.type === 'Live' && (
                        <Button 
                          className="bg-red-500 hover:bg-red-600 text-white gap-2 font-body"
                          onClick={() => handleWebinarAction('join', webinar.title)}
                        >
                          <Video className="size-4" />
                          Join Live
                        </Button>
                      )}
                      {webinar.type === 'Upcoming' && (
                        <Button 
                          className="bg-brand-primary hover:bg-blue-700 text-white gap-2 font-body"
                          onClick={() => handleWebinarAction('register', webinar.title)}
                        >
                          <Calendar className="size-4" />
                          Register
                        </Button>
                      )}
                      {webinar.type === 'Recorded' && (
                        <Button 
                          variant="outline" 
                          className="gap-2 font-body"
                          onClick={() => handleWebinarAction('watch', webinar.title)}
                        >
                          <Play className="size-4" />
                          Watch Recording
                        </Button>
                      )}
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 font-body"
                        onClick={() => handleBookmark(webinar.id + 100)}
                      >
                        <Bookmark className="size-3" />
                        Save
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Certifications Tab */}
        <TabsContent value="certifications" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-heading text-xl font-semibold text-primary-strong">Professional Certifications</h2>
              <Badge variant="outline" className="font-body">Industry Recognized</Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                className="gap-2 font-body"
                onClick={() => alert('Filter options: Category, difficulty level, cost range, and more!')}
              >
                <Filter className="size-4" />
                Filter by Category
              </Button>
              <Button 
                className="bg-brand-primary hover:bg-blue-700 text-white gap-2 font-body"
                onClick={() => alert('View all certifications with detailed comparison!')}
              >
                <Trophy className="size-4" />
                View All
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="size-12 bg-brand-primary rounded-xl flex items-center justify-center">
                        <Award className="size-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-primary-strong">{cert.name}</h3>
                        <p className="font-body text-sm text-secondary-medium">{cert.provider}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-heading text-lg font-bold text-brand-primary">{cert.popularity}%</div>
                      <div className="font-body text-xs text-muted-light">Popular</div>
                    </div>
                  </div>

                  <p className="font-body text-secondary-medium mb-4">{cert.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="font-body text-sm font-medium text-primary-strong">Category</div>
                      <Badge variant="outline" className="mt-1 font-body">{cert.category}</Badge>
                    </div>
                    <div>
                      <div className="font-body text-sm font-medium text-primary-strong">Difficulty</div>
                      <Badge 
                        variant={cert.difficulty === 'Beginner' ? 'secondary' : 
                                cert.difficulty === 'Intermediate' ? 'default' : 'destructive'}
                        className="mt-1 font-body"
                      >
                        {cert.difficulty}
                      </Badge>
                    </div>
                    <div>
                      <div className="font-body text-sm font-medium text-primary-strong">Duration</div>
                      <div className="font-body text-sm text-secondary-medium">{cert.duration}</div>
                    </div>
                    <div>
                      <div className="font-body text-sm font-medium text-primary-strong">Cost</div>
                      <div className="font-body text-sm font-semibold text-green-600">{cert.cost}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="font-body text-sm font-medium text-primary-strong">Key Benefits:</div>
                    <ul className="font-body text-sm text-secondary-medium space-y-1">
                      {cert.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="size-3 text-green-600 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-brand-primary hover:bg-blue-700 text-white gap-2 font-body"
                      onClick={() => handleCertificationClick(cert.name)}
                    >
                      <ExternalLink className="size-4" />
                      Learn More
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleBookmark(cert.id + 200)}
                    >
                      <Bookmark className="size-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Career Guides Tab */}
        <TabsContent value="guides" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-heading text-xl font-semibold text-primary-strong">Career Path Guides</h2>
              <Badge variant="outline" className="font-body">Expert Insights</Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                className="gap-2 font-body"
                onClick={() => alert('Search guides by career path, industry, or skill!')}
              >
                <Search className="size-4" />
                Search Guides
              </Button>
              <Button 
                className="bg-brand-primary hover:bg-blue-700 text-white gap-2 font-body"
                onClick={() => alert('Explore all career paths with detailed roadmaps!')}
              >
                <Target className="size-4" />
                Explore Paths
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerGuides.map((guide) => (
              <Card key={guide.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 rounded-t-lg flex items-center justify-center">
                  <BookOpen className="size-12 text-purple-600" />
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-primary-strong line-clamp-2">{guide.title}</h3>
                      <p className="font-body text-sm text-secondary-medium">{guide.author}</p>
                    </div>
                    
                    <p className="font-body text-secondary-medium line-clamp-2">{guide.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="size-3 fill-current text-yellow-500" />
                        <span className="font-body text-secondary-medium">{guide.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="size-3 text-muted-light" />
                        <span className="font-body text-secondary-medium">{guide.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3 text-muted-light" />
                        <span className="font-body text-secondary-medium">{guide.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 flex-wrap">
                      {guide.topics.slice(0, 3).map((topic, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs font-body">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-brand-primary hover:bg-blue-700 text-white gap-2 font-body"
                        onClick={() => alert(`Opening career guide: "${guide.title}". This would display the full guide.`)}
                      >
                        <BookOpen className="size-4" />
                        Read Guide
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleBookmark(guide.id + 300)}
                      >
                        <Bookmark className="size-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => alert('Download PDF version of this guide!')}
                      >
                        <Download className="size-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Skills Development Tab */}
        <TabsContent value="skills" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
            <div>
              <h2 className="font-heading text-xl font-semibold text-primary-strong">Skill Development Tracker</h2>
              <p className="font-body text-secondary-medium">Track your progress and discover trending skills in your field</p>
            </div>
            
            <Button 
              className="bg-brand-primary hover:bg-blue-700 text-white gap-2 font-body"
              onClick={() => alert('Skill assessment: Take our comprehensive skill evaluation!')}
            >
              <Zap className="size-4" />
              Take Assessment
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillDevelopment.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center gap-2 text-primary-strong">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <Icon className="size-5 text-white" />
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-body text-sm font-medium text-primary-strong">{skill.name}</span>
                              {skill.trending && (
                                <Badge variant="outline" className="text-xs font-body bg-orange-50 text-orange-700 border-orange-200">
                                  <TrendingUp className="size-2 mr-1" />
                                  Trending
                                </Badge>
                              )}
                            </div>
                            <span className="font-body text-xs text-muted-light">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${category.color}`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                      
                      <Button 
                        variant="outline" 
                        className="w-full mt-4 font-body"
                        onClick={() => alert(`Skill development plan for ${category.category} skills coming soon!`)}
                      >
                        <Target className="size-4 mr-2" />
                        Create Learning Path
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}