import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Users, 
  Search, 
  MapPin, 
  Building, 
  Calendar, 
  MessageSquare,
  UserPlus,
  Star,
  Filter,
  ExternalLink,
  Coffee,
  Video,
  Phone,
  Mail,
  Linkedin,
  Github,
  Trophy,
  Clock,
  Target,
  Heart
} from 'lucide-react';

export function NetworkingHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCompany, setFilterCompany] = useState('all');
  const [filterExperience, setFilterExperience] = useState('all');
  const [connectedAlumni, setConnectedAlumni] = useState(new Set([1, 3, 5]));

  const alumniData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/60/60',
      currentRole: 'Senior Software Engineer',
      company: 'Google',
      graduationYear: '2019',
      experience: '4 years',
      location: 'Mountain View, CA',
      skills: ['React', 'Python', 'System Design', 'Leadership'],
      bio: 'Passionate about building scalable web applications and mentoring junior developers.',
      achievements: ['Tech Lead', 'Google Cloud Certified', 'Published Author'],
      mentorshipAvailable: true,
      responseRate: '95%',
      rating: 4.9,
      reviews: 23,
      linkedIn: 'linkedin.com/in/sarahjohnson',
      github: 'github.com/sarahjohnson',
      specialties: ['Career Guidance', 'Technical Interviews', 'System Design']
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: '/api/placeholder/60/60',
      currentRole: 'Product Manager',
      company: 'Microsoft',
      graduationYear: '2018',
      experience: '5 years',
      location: 'Seattle, WA',
      skills: ['Product Strategy', 'Data Analysis', 'User Research', 'Agile'],
      bio: 'Experienced PM who loves solving complex problems and building user-centric products.',
      achievements: ['PM of the Year', 'MBA from Wharton', 'TEDx Speaker'],
      mentorshipAvailable: true,
      responseRate: '88%',
      rating: 4.7,
      reviews: 18,
      linkedIn: 'linkedin.com/in/michaelchen',
      github: null,
      specialties: ['Product Management', 'Career Transition', 'MBA Guidance']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: '/api/placeholder/60/60',
      currentRole: 'Data Scientist',
      company: 'Netflix',
      graduationYear: '2020',
      experience: '3 years',
      location: 'Los Gatos, CA',
      skills: ['Machine Learning', 'Python', 'Statistics', 'Deep Learning'],
      bio: 'ML enthusiast working on recommendation systems. Love helping students break into data science.',
      achievements: ['Kaggle Expert', 'Published Research', 'Data Science Bootcamp Instructor'],
      mentorshipAvailable: true,
      responseRate: '92%',
      rating: 4.8,
      reviews: 31,
      linkedIn: 'linkedin.com/in/emilyrodriguez',
      github: 'github.com/emilyrodriguez',
      specialties: ['Data Science', 'Machine Learning', 'Research']
    },
    {
      id: 4,
      name: 'David Park',
      avatar: '/api/placeholder/60/60',
      currentRole: 'Engineering Manager',
      company: 'Apple',
      graduationYear: '2016',
      experience: '7 years',
      location: 'Cupertino, CA',
      skills: ['iOS Development', 'Team Leadership', 'Swift', 'Architecture'],
      bio: 'Leading mobile engineering teams. Passionate about iOS development and team building.',
      achievements: ['Engineering Excellence Award', 'Patent Holder', 'Conference Speaker'],
      mentorshipAvailable: false,
      responseRate: '78%',
      rating: 4.6,
      reviews: 12,
      linkedIn: 'linkedin.com/in/davidpark',
      github: 'github.com/davidpark',
      specialties: ['iOS Development', 'Engineering Leadership', 'Mobile Architecture']
    },
    {
      id: 5,
      name: 'Lisa Wang',
      avatar: '/api/placeholder/60/60',
      currentRole: 'UX Designer',
      company: 'Airbnb',
      graduationYear: '2021',
      experience: '2 years',
      location: 'San Francisco, CA',
      skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
      bio: 'Recent grad passionate about creating delightful user experiences. Happy to help new designers.',
      achievements: ['Design Award Winner', 'Portfolio Featured', 'Design Thinking Workshop Leader'],
      mentorshipAvailable: true,
      responseRate: '96%',
      rating: 4.9,
      reviews: 27,
      linkedIn: 'linkedin.com/in/lisawang',
      github: null,
      specialties: ['UX Design', 'Portfolio Review', 'Design Process']
    }
  ];

  const networkingEvents = [
    {
      id: 1,
      title: 'Tech Career Fair 2025',
      type: 'Career Fair',
      date: '2025-01-15',
      time: '10:00 AM - 4:00 PM',
      location: 'University Campus',
      attendees: 250,
      companies: ['Google', 'Microsoft', 'Amazon', 'Apple'],
      description: 'Annual tech career fair with top companies recruiting for internships and full-time roles.',
      registrationRequired: true,
      virtual: false
    },
    {
      id: 2,
      title: 'Alumni Networking Mixer',
      type: 'Mixer',
      date: '2025-01-08',
      time: '6:00 PM - 8:00 PM',
      location: 'Downtown Conference Center',
      attendees: 80,
      companies: ['Various'],
      description: 'Informal networking event with recent alumni from various tech companies.',
      registrationRequired: true,
      virtual: false
    },
    {
      id: 3,
      title: 'Data Science Workshop Series',
      type: 'Workshop',
      date: '2025-01-12',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual',
      attendees: 150,
      companies: ['Netflix', 'Spotify', 'Uber'],
      description: 'Interactive workshop on breaking into data science, led by industry professionals.',
      registrationRequired: true,
      virtual: true
    }
  ];

  const mentorshipRequests = [
    {
      id: 1,
      mentor: 'Sarah Johnson',
      company: 'Google',
      topic: 'System Design Interview Prep',
      status: 'accepted',
      scheduledDate: '2025-01-05',
      duration: '1 hour'
    },
    {
      id: 2,
      mentor: 'Emily Rodriguez',
      company: 'Netflix',
      topic: 'Data Science Career Path',
      status: 'pending',
      scheduledDate: null,
      duration: '45 minutes'
    }
  ];

  const connectWithAlumni = (alumniId) => {
    setConnectedAlumni(prev => {
      const newSet = new Set(prev);
      if (newSet.has(alumniId)) {
        newSet.delete(alumniId);
      } else {
        newSet.add(alumniId);
      }
      return newSet;
    });
  };

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = searchQuery === '' || 
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.currentRole.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCompany = filterCompany === 'all' || alumni.company === filterCompany;
    const matchesExperience = filterExperience === 'all' || 
      (filterExperience === 'junior' && parseInt(alumni.experience) <= 3) ||
      (filterExperience === 'senior' && parseInt(alumni.experience) > 3);
    
    return matchesSearch && matchesCompany && matchesExperience;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Users className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Networking & Alumni Hub</h1>
              <p className="text-muted-foreground">Connect with alumni and industry professionals to advance your career</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border">
              <Users className="size-8 text-blue-500 mx-auto mb-2" />
              <p className="font-medium">{alumniData.length}+ Alumni</p>
              <p className="text-sm text-muted-foreground">Ready to help</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <Calendar className="size-8 text-green-500 mx-auto mb-2" />
              <p className="font-medium">{networkingEvents.length} Events</p>
              <p className="text-sm text-muted-foreground">This month</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <Coffee className="size-8 text-purple-500 mx-auto mb-2" />
              <p className="font-medium">95% Response Rate</p>
              <p className="text-sm text-muted-foreground">From mentors</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="alumni" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="alumni">Alumni Directory</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
          <TabsTrigger value="events">Networking Events</TabsTrigger>
          <TabsTrigger value="connections">My Connections</TabsTrigger>
        </TabsList>

        <TabsContent value="alumni">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                      placeholder="Search alumni by name, company, or role..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={filterCompany} onValueChange={setFilterCompany}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Companies</SelectItem>
                    <SelectItem value="Google">Google</SelectItem>
                    <SelectItem value="Microsoft">Microsoft</SelectItem>
                    <SelectItem value="Netflix">Netflix</SelectItem>
                    <SelectItem value="Apple">Apple</SelectItem>
                    <SelectItem value="Airbnb">Airbnb</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterExperience} onValueChange={setFilterExperience}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Experience</SelectItem>
                    <SelectItem value="junior">Junior (0-3 years)</SelectItem>
                    <SelectItem value="senior">Senior (3+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Alumni Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map((alumni) => (
              <Card key={alumni.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="size-16">
                      <AvatarImage src={alumni.avatar} />
                      <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{alumni.name}</h3>
                      <p className="text-sm text-muted-foreground truncate">{alumni.currentRole}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Building className="size-3" />
                        <span className="text-xs text-muted-foreground">{alumni.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="size-3" />
                        <span className="text-xs text-muted-foreground">{alumni.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {alumni.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {alumni.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {alumni.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{alumni.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="size-3 fill-yellow-400 text-yellow-400" />
                      <span>{alumni.rating}</span>
                    </div>
                    <span>{alumni.reviews} reviews</span>
                    <span>{alumni.responseRate} response rate</span>
                  </div>

                  {alumni.mentorshipAvailable && (
                    <Badge className="mb-4 bg-green-100 text-green-700">
                      <Heart className="size-3 mr-1" />
                      Available for Mentorship
                    </Badge>
                  )}

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={connectedAlumni.has(alumni.id) ? "secondary" : "outline"}
                      className="flex-1"
                      onClick={() => connectWithAlumni(alumni.id)}
                    >
                      {connectedAlumni.has(alumni.id) ? (
                        <>
                          <MessageSquare className="size-4 mr-1" />
                          Message
                        </>
                      ) : (
                        <>
                          <UserPlus className="size-4 mr-1" />
                          Connect
                        </>
                      )}
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="size-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mentorship">
          <div className="space-y-6">
            {/* Active Mentorship */}
            <Card>
              <CardHeader>
                <CardTitle>My Mentorship Requests</CardTitle>
                <CardDescription>Track your mentorship sessions and requests</CardDescription>
              </CardHeader>
              <CardContent>
                {mentorshipRequests.length > 0 ? (
                  <div className="space-y-4">
                    {mentorshipRequests.map((request) => (
                      <div key={request.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-medium">{request.mentor}</h4>
                            <p className="text-sm text-muted-foreground">{request.company}</p>
                          </div>
                          <Badge 
                            variant={request.status === 'accepted' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {request.status}
                          </Badge>
                        </div>
                        <p className="text-sm mb-2">
                          <span className="font-medium">Topic: </span>
                          {request.topic}
                        </p>
                        {request.scheduledDate && (
                          <p className="text-sm text-muted-foreground">
                            <Calendar className="inline size-4 mr-1" />
                            {new Date(request.scheduledDate).toLocaleDateString()} • {request.duration}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Coffee className="size-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">No active mentorship requests</p>
                    <Button className="mt-4">Find a Mentor</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Available Mentors */}
            <Card>
              <CardHeader>
                <CardTitle>Available Mentors</CardTitle>
                <CardDescription>Alumni ready to provide mentorship and guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {alumniData.filter(alumni => alumni.mentorshipAvailable).map((mentor) => (
                    <div key={mentor.id} className="border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar>
                          <AvatarImage src={mentor.avatar} />
                          <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{mentor.name}</h4>
                          <p className="text-sm text-muted-foreground">{mentor.currentRole} at {mentor.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {mentor.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="size-3 fill-yellow-400 text-yellow-400" />
                          <span>{mentor.rating}</span>
                        </div>
                        <span>{mentor.responseRate} response rate</span>
                      </div>
                      
                      <Button size="sm" className="w-full">
                        Request Mentorship
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="events">
          <div className="space-y-4">
            {networkingEvents.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                        {event.virtual && (
                          <Badge variant="secondary" className="text-xs">
                            Virtual
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="size-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="size-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{event.attendees} attendees</span>
                        <span>{event.companies.length} companies</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Button>
                        {event.registrationRequired ? 'Register' : 'Learn More'}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {event.companies.slice(0, 5).map((company, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {company}
                      </Badge>
                    ))}
                    {event.companies.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{event.companies.length - 5} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="connections">
          <Card>
            <CardHeader>
              <CardTitle>My Network</CardTitle>
              <CardDescription>Your connections and networking progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/50 rounded-lg">
                  <div className="text-2xl font-bold">{connectedAlumni.size}</div>
                  <p className="text-sm text-muted-foreground">Connections</p>
                </div>
                <div className="text-center p-4 bg-accent/50 rounded-lg">
                  <div className="text-2xl font-bold">{mentorshipRequests.length}</div>
                  <p className="text-sm text-muted-foreground">Mentorship Sessions</p>
                </div>
                <div className="text-center p-4 bg-accent/50 rounded-lg">
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-sm text-muted-foreground">Events Attended</p>
                </div>
              </div>
              
              {connectedAlumni.size > 0 ? (
                <div className="space-y-4">
                  {alumniData.filter(alumni => connectedAlumni.has(alumni.id)).map((connection) => (
                    <div key={connection.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <Avatar>
                        <AvatarImage src={connection.avatar} />
                        <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium">{connection.name}</h4>
                        <p className="text-sm text-muted-foreground">{connection.currentRole} at {connection.company}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="size-4 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline">
                          <Video className="size-4 mr-1" />
                          Meet
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Users className="size-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Start building your network by connecting with alumni</p>
                  <Button className="mt-4">Explore Alumni</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}