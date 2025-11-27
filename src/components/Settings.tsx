import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Alert, AlertDescription } from './ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import {
  User,
  Shield,
  Bell,
  Lock,
  Link,
  Palette,
  Accessibility,
  HelpCircle,
  FileText,
  Settings as SettingsIcon,
  Mail,
  Phone,
  Camera,
  Eye,
  EyeOff,
  Trash2,
  Calendar,
  Linkedin,
  Chrome,
  Save,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink,
  Download,
  Upload,
  Sun,
  Moon,
  Monitor,
  VolumeX,
  Edit,
  GraduationCap,
  MapPin,
  Globe,
  Briefcase
} from 'lucide-react';

interface SettingsData {
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    avatar: string;
    university: string;
    major: string;
    graduationYear: string;
    location: string;
    website: string;
    linkedinUrl: string;
  };
  security: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    twoFactorEnabled: boolean;
    loginNotifications: boolean;
  };
  notifications: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    inAppNotifications: boolean;
    jobAlerts: boolean;
    applicationUpdates: boolean;
    networkingRequests: boolean;
    weeklyDigest: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'employers' | 'private';
    resumeSharing: boolean;
    certificateSharing: boolean;
    contactInfoVisible: boolean;
  };
  integrations: {
    googleCalendar: boolean;
    outlookCalendar: boolean;
    linkedinConnected: boolean;
  };
  personalization: {
    theme: 'light' | 'dark' | 'system';
    language: string;
    timezone: string;
    dashboardLayout: 'compact' | 'comfortable' | 'spacious';
  };
  accessibility: {
    highContrast: boolean;
    reduceMotion: boolean;
    screenReader: boolean;
    fontSize: 'small' | 'medium' | 'large';
  };
}

export function Settings() {
  const [settings, setSettings] = useState<SettingsData>({
    profile: {
      firstName: 'Alex',
      lastName: 'Kumar',
      email: 'alex.kumar@university.edu',
      phone: '+1 (555) 123-4567',
      bio: 'Computer Science student passionate about software development and AI. Currently seeking full-time software engineering opportunities for 2024.',
      avatar: '/api/placeholder/100/100',
      university: 'Massachusetts Institute of Technology',
      major: 'Computer Science',
      graduationYear: '2024',
      location: 'Boston, MA',
      website: 'https://alexkumar.dev',
      linkedinUrl: 'https://linkedin.com/in/alexkumar'
    },
    security: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      twoFactorEnabled: true,
      loginNotifications: true
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      inAppNotifications: true,
      jobAlerts: true,
      applicationUpdates: true,
      networkingRequests: false,
      weeklyDigest: true
    },
    privacy: {
      profileVisibility: 'employers',
      resumeSharing: true,
      certificateSharing: true,
      contactInfoVisible: false
    },
    integrations: {
      googleCalendar: true,
      outlookCalendar: false,
      linkedinConnected: true
    },
    personalization: {
      theme: 'system',
      language: 'en',
      timezone: 'America/New_York',
      dashboardLayout: 'comfortable'
    },
    accessibility: {
      highContrast: false,
      reduceMotion: false,
      screenReader: false,
      fontSize: 'medium'
    }
  });

  const [hasChanges, setHasChanges] = useState(false);
  const [savedChanges, setSavedChanges] = useState(false);

  const handleInputChange = (section: keyof SettingsData, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Simulate API call
    setTimeout(() => {
      setHasChanges(false);
      setSavedChanges(true);
      setTimeout(() => setSavedChanges(false), 3000);
    }, 500);
  };

  const handleUndo = () => {
    // Reset to original values (in a real app, this would restore from initial state)
    setHasChanges(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="flex items-center gap-3">
            <SettingsIcon className="size-8 text-primary" />
            Account Settings
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your account preferences, security, and privacy settings.
          </p>
        </div>
        
        {/* Save/Undo Actions */}
        {hasChanges && (
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleUndo}>
              <RotateCcw className="size-4 mr-2" />
              Undo Changes
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Save className="size-4 mr-2" />
              Save Changes
            </Button>
          </div>
        )}
      </div>

      {/* Success Message */}
      {savedChanges && (
        <Alert className="border-green-200 bg-green-50 text-green-800">
          <CheckCircle className="size-4" />
          <AlertDescription>
            Settings saved successfully!
          </AlertDescription>
        </Alert>
      )}

      {/* PROFILE STORY SECTION - Prominently Featured at Top */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <User className="size-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Your Profile Story</CardTitle>
                <CardDescription className="text-base">
                  Tell your story and showcase who you are to potential employers.
                </CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Shield className="size-3" />
              Verified Student
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Profile Photo Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-card rounded-xl border border-border/50">
            <Avatar className="size-24 ring-4 ring-primary/20 shadow-lg">
              <AvatarImage src={settings.profile.avatar} />
              <AvatarFallback className="bg-gradient-primary text-white text-xl">
                {settings.profile.firstName[0]}{settings.profile.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="font-semibold text-lg">
                  {settings.profile.firstName} {settings.profile.lastName}
                </h3>
                <p className="text-muted-foreground">
                  {settings.profile.major} • {settings.profile.university} • Class of {settings.profile.graduationYear}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Camera className="size-4 mr-2" />
                  Change Photo
                </Button>
                <Button variant="outline" size="sm">
                  <Upload className="size-4 mr-2" />
                  Upload Resume
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                JPG, PNG or GIF. Max 2MB. High-quality photos get 40% more profile views.
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <User className="size-4" />
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={settings.profile.firstName}
                        onChange={(e) => handleInputChange('profile', 'firstName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={settings.profile.lastName}
                        onChange={(e) => handleInputChange('profile', 'lastName', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        className="pl-10"
                        value={settings.profile.email}
                        onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 size-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        className="pl-10"
                        value={settings.profile.phone}
                        onChange={(e) => handleInputChange('profile', 'phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 size-4 text-muted-foreground" />
                      <Input
                        id="location"
                        className="pl-10"
                        value={settings.profile.location}
                        onChange={(e) => handleInputChange('profile', 'location', e.target.value)}
                        placeholder="City, State"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="size-4" />
                  Academic Information
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="university">University</Label>
                    <Input
                      id="university"
                      value={settings.profile.university}
                      onChange={(e) => handleInputChange('profile', 'university', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="major">Major/Field of Study</Label>
                    <Input
                      id="major"
                      value={settings.profile.major}
                      onChange={(e) => handleInputChange('profile', 'major', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Select
                      value={settings.profile.graduationYear}
                      onValueChange={(value) => handleInputChange('profile', 'graduationYear', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Globe className="size-4" />
                  Online Presence
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Personal Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 size-4 text-muted-foreground" />
                      <Input
                        id="website"
                        className="pl-10"
                        value={settings.profile.website}
                        onChange={(e) => handleInputChange('profile', 'website', e.target.value)}
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-3 size-4 text-muted-foreground" />
                      <Input
                        id="linkedinUrl"
                        className="pl-10"
                        value={settings.profile.linkedinUrl}
                        onChange={(e) => handleInputChange('profile', 'linkedinUrl', e.target.value)}
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2">
                <Edit className="size-4" />
                Professional Bio
              </h3>
              <Badge variant="outline" className="text-xs">
                {settings.profile.bio.length}/500 characters
              </Badge>
            </div>
            <Textarea
              rows={4}
              placeholder="Tell employers about yourself, your interests, and your career goals..."
              value={settings.profile.bio}
              onChange={(e) => handleInputChange('profile', 'bio', e.target.value)}
              className="resize-none"
            />
            <p className="text-sm text-muted-foreground">
              A compelling bio increases your profile visibility by 60%. Include your interests, skills, and career goals.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Account Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="size-5" />
            Account Security
          </CardTitle>
          <CardDescription>
            Manage your password and security preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Change Password */}
          <div className="space-y-4">
            <h3 className="font-medium">Change Password</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={settings.security.currentPassword}
                  onChange={(e) => handleInputChange('security', 'currentPassword', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={settings.security.newPassword}
                    onChange={(e) => handleInputChange('security', 'newPassword', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={settings.security.confirmPassword}
                    onChange={(e) => handleInputChange('security', 'confirmPassword', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Security Settings */}
          <div className="space-y-4">
            <h3 className="font-medium">Security Settings</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <Badge variant="secondary" className="text-xs">
                    {settings.security.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <Switch
                checked={settings.security.twoFactorEnabled}
                onCheckedChange={(checked) => handleInputChange('security', 'twoFactorEnabled', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-medium">Login Notifications</h4>
                <p className="text-sm text-muted-foreground">
                  Get notified when someone logs into your account.
                </p>
              </div>
              <Switch
                checked={settings.security.loginNotifications}
                onCheckedChange={(checked) => handleInputChange('security', 'loginNotifications', checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Visibility */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="size-5" />
            Privacy & Visibility
          </CardTitle>
          <CardDescription>
            Control who can see your information and how it's shared.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Profile Visibility</Label>
            <Select
              value={settings.privacy.profileVisibility}
              onValueChange={(value) => handleInputChange('privacy', 'profileVisibility', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">
                  <div className="flex items-center gap-2">
                    <Eye className="size-4" />
                    <div>
                      <p>Public</p>
                      <p className="text-sm text-muted-foreground">Visible to everyone</p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="employers">
                  <div className="flex items-center gap-2">
                    <Shield className="size-4" />
                    <div>
                      <p>Employers Only</p>
                      <p className="text-sm text-muted-foreground">Only verified employers can see your profile</p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="private">
                  <div className="flex items-center gap-2">
                    <EyeOff className="size-4" />
                    <div>
                      <p>Private</p>
                      <p className="text-sm text-muted-foreground">Only you can see your profile</p>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium">Document Sharing Permissions</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-medium">Resume Sharing</span>
                <p className="text-sm text-muted-foreground">
                  Allow employers to download your resume.
                </p>
              </div>
              <Switch
                checked={settings.privacy.resumeSharing}
                onCheckedChange={(checked) => handleInputChange('privacy', 'resumeSharing', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-medium">Certificate Sharing</span>
                <p className="text-sm text-muted-foreground">
                  Allow employers to view your certificates.
                </p>
              </div>
              <Switch
                checked={settings.privacy.certificateSharing}
                onCheckedChange={(checked) => handleInputChange('privacy', 'certificateSharing', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-medium">Contact Information</span>
                <p className="text-sm text-muted-foreground">
                  Show your email and phone number to employers.
                </p>
              </div>
              <Switch
                checked={settings.privacy.contactInfoVisible}
                onCheckedChange={(checked) => handleInputChange('privacy', 'contactInfoVisible', checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="size-5" />
            Notification Preferences
          </CardTitle>
          <CardDescription>
            Choose how you want to be notified about important updates.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Notification Channels */}
          <div className="space-y-4">
            <h3 className="font-medium">Notification Channels</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="size-4" />
                  <span className="font-medium">Email Notifications</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Receive notifications via email.
                </p>
              </div>
              <Switch
                checked={settings.notifications.emailNotifications}
                onCheckedChange={(checked) => handleInputChange('notifications', 'emailNotifications', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Bell className="size-4" />
                  <span className="font-medium">Push Notifications</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Receive push notifications on your device.
                </p>
              </div>
              <Switch
                checked={settings.notifications.pushNotifications}
                onCheckedChange={(checked) => handleInputChange('notifications', 'pushNotifications', checked)}
              />
            </div>
          </div>

          <Separator />

          {/* Notification Types */}
          <div className="space-y-4">
            <h3 className="font-medium">What to notify me about</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-medium">Job Alerts</span>
                <p className="text-sm text-muted-foreground">
                  New job opportunities matching your preferences.
                </p>
              </div>
              <Switch
                checked={settings.notifications.jobAlerts}
                onCheckedChange={(checked) => handleInputChange('notifications', 'jobAlerts', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-medium">Application Updates</span>
                <p className="text-sm text-muted-foreground">
                  Status changes on your job applications.
                </p>
              </div>
              <Switch
                checked={settings.notifications.applicationUpdates}
                onCheckedChange={(checked) => handleInputChange('notifications', 'applicationUpdates', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-medium">Weekly Digest</span>
                <p className="text-sm text-muted-foreground">
                  Weekly summary of your activities and opportunities.
                </p>
              </div>
              <Switch
                checked={settings.notifications.weeklyDigest}
                onCheckedChange={(checked) => handleInputChange('notifications', 'weeklyDigest', checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integrations & Personalization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="size-5" />
            Integrations & Personalization
          </CardTitle>
          <CardDescription>
            Connect your external accounts and customize your experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Calendar Integration */}
          <div className="space-y-4">
            <h3 className="font-medium">Calendar Integration</h3>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Chrome className="size-8 text-blue-600" />
                <div>
                  <h4 className="font-medium">Google Calendar</h4>
                  <p className="text-sm text-muted-foreground">
                    Sync your interview schedules with Google Calendar.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {settings.integrations.googleCalendar && (
                  <Badge variant="secondary" className="text-green-600">Connected</Badge>
                )}
                <Switch
                  checked={settings.integrations.googleCalendar}
                  onCheckedChange={(checked) => handleInputChange('integrations', 'googleCalendar', checked)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Linkedin className="size-8 text-blue-700" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-sm text-muted-foreground">
                    Import your profile information and expand your network.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {settings.integrations.linkedinConnected ? (
                  <>
                    <Badge variant="secondary" className="text-green-600">Connected</Badge>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="size-4 mr-2" />
                      Manage
                    </Button>
                  </>
                ) : (
                  <Button size="sm">
                    <Link className="size-4 mr-2" />
                    Connect
                  </Button>
                )}
              </div>
            </div>
          </div>

          <Separator />

          {/* Personalization */}
          <div className="space-y-4">
            <h3 className="font-medium">Personalization</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label>Theme</Label>
                <Select
                  value={settings.personalization.theme}
                  onValueChange={(value) => handleInputChange('personalization', 'theme', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center gap-2">
                        <Sun className="size-4" />
                        Light
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center gap-2">
                        <Moon className="size-4" />
                        Dark
                      </div>
                    </SelectItem>
                    <SelectItem value="system">
                      <div className="flex items-center gap-2">
                        <Monitor className="size-4" />
                        System
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Language</Label>
                <Select
                  value={settings.personalization.language}
                  onValueChange={(value) => handleInputChange('personalization', 'language', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility & Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Accessibility className="size-5" />
            Accessibility & Support
          </CardTitle>
          <CardDescription>
            Customize the interface for accessibility and get help when needed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Accessibility */}
          <div className="space-y-4">
            <h3 className="font-medium">Accessibility</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-medium">High Contrast Mode</span>
                <p className="text-sm text-muted-foreground">
                  Increase contrast for better visibility.
                </p>
              </div>
              <Switch
                checked={settings.accessibility.highContrast}
                onCheckedChange={(checked) => handleInputChange('accessibility', 'highContrast', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-medium">Reduce Motion</span>
                <p className="text-sm text-muted-foreground">
                  Minimize animations and transitions.
                </p>
              </div>
              <Switch
                checked={settings.accessibility.reduceMotion}
                onCheckedChange={(checked) => handleInputChange('accessibility', 'reduceMotion', checked)}
              />
            </div>
          </div>

          <Separator />

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-medium">Support & Help</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Mail className="size-4" />
                    <span className="font-medium">Email Support</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Get help via email within 24 hours
                  </span>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="size-4" />
                    <span className="font-medium">Help Center</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Browse FAQs and tutorials
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="size-5" />
            Danger Zone
          </CardTitle>
          <CardDescription>
            Irreversible and destructive actions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="border-destructive mb-4">
            <AlertTriangle className="size-4" />
            <AlertDescription>
              Once you delete your account, there is no going back. Please be certain.
            </AlertDescription>
          </Alert>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="size-4 mr-2" />
                Delete Account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                  Delete Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
}