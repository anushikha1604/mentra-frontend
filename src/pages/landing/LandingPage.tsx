import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
  GraduationCap,
  Users,
  Building2,
  Target,
  BarChart3,
  Heart,
  BookOpen,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  Database,
  FileText,
  TrendingUp,
  Award,
  Briefcase,
  MessageSquare,
  ChevronRight,
  Play,
  Clock,
  UserCheck,
  Lock,
  Calendar,
  PieChart,
  Bell,
} from 'lucide-react';
import { Link } from 'react-router';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const studentFeatures = [
    {
      icon: Users,
      title: 'Create and Manage Profiles',
      description:
        'Build comprehensive profiles with academic records, career details, and verified college credentials for better placement opportunities.',
    },
    {
      icon: Heart,
      title: 'Save and Track Wishlist Companies',
      description:
        'Identify target companies, track application progress, and receive personalized guidance for your dream career path.',
    },
    {
      icon: Bell,
      title: 'Stay Updated on Placement Activities',
      description:
        'Get real-time notifications about placement drives, interview schedules, and opportunities that match your profile.',
    },
  ];

  const institutionFeatures = [
    {
      icon: Database,
      title: 'Centralized Student Database',
      description:
        'Manage comprehensive student records with verified college IDs, academic performance, and placement readiness in one secure platform.',
    },
    {
      icon: BarChart3,
      title: 'Placement Tracking and Reporting',
      description:
        'Monitor placement activities, generate detailed analytics, and create comprehensive reports for stakeholders and accreditation bodies.',
    },
    {
      icon: Shield,
      title: 'Role-based Access Control',
      description:
        'Secure platform with customizable access levels for admins, faculty, placement officers, and students with professional profile verification.',
    },
  ];

  const stats = [
    { number: '200+', label: 'Partner Universities' },
    { number: '50,000+', label: 'Students Managed' },
    { number: '500+', label: 'Recruiting Companies' },
    { number: '95%', label: 'Placement Success Rate' },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improved Placement Rates',
      description:
        "Increase your institution's placement success with data-driven insights and streamlined processes.",
    },
    {
      icon: Clock,
      title: 'Reduced Administrative Burden',
      description:
        'Automate routine tasks and centralize all placement-related activities in one comprehensive platform.',
    },
    {
      icon: Award,
      title: 'Enhanced Student Experience',
      description:
        'Provide students with professional tools to build profiles, track applications, and connect with opportunities.',
    },
    {
      icon: PieChart,
      title: 'Actionable Analytics',
      description:
        'Make informed decisions with detailed reports on placement trends, student performance, and industry demands.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-2xl font-bold text-primary-strong">
                Mentra
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="font-body text-primary-strong hover:text-brand-primary font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="font-body text-secondary-medium hover:text-brand-primary font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#for-students"
                className="font-body text-secondary-medium hover:text-brand-primary font-medium transition-colors"
              >
                For Students
              </a>
              <a
                href="#for-institutions"
                className="font-body text-secondary-medium hover:text-brand-primary font-medium transition-colors"
              >
                For Institutions
              </a>
              <a
                href="#contact"
                className="font-body text-secondary-medium hover:text-brand-primary font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link to="/login" className="font-body font-medium">
                Log In
              </Link>
              <Link
                to="signup"
                onClick={() => onNavigate('signup')}
                className="font-body font-medium"
              >
                Sign Up
              </Link>
              <Button
                className="bg-brand-primary hover:bg-blue-700 font-body font-medium"
                onClick={() => {
                  alert(
                    'Demo request submitted! Our team will contact you within 24 hours.'
                  );
                }}
              >
                Request a Demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-900 hover:text-blue-600 font-medium"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Features
                </a>
                <a
                  href="#for-students"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  For Students
                </a>
                <a
                  href="#for-institutions"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  For Institutions
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() => onNavigate('login')}
                    className="w-full"
                  >
                    Log In
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => onNavigate('signup')}
                    className="w-full"
                  >
                    Sign Up
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Request a Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-2 font-body">
                  <Zap className="w-4 h-4 mr-2" />
                  Trusted by 200+ Universities
                </Badge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-strong leading-tight">
                  Smart Placement Management Software for
                  <span className="text-brand-primary">
                    {' '}
                    Universities & Colleges
                  </span>
                </h1>
                <p className="font-body text-xl text-secondary-medium max-w-2xl leading-relaxed">
                  Mentra helps institutions manage student records, track career
                  readiness, and connect students with placement opportunities –
                  all in one platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-blue-700 font-body text-lg px-8 py-4 font-medium"
                  onClick={() => {
                    // Simulate demo request
                    alert(
                      'Demo request submitted! Our team will contact you within 24 hours.'
                    );
                  }}
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('signup')}
                  className="font-body text-lg px-8 py-4 font-medium"
                >
                  Sign Up
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-heading text-2xl md:text-3xl font-bold text-primary-strong">
                      {stat.number}
                    </div>
                    <div className="font-body text-sm text-secondary-medium font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Building2 className="w-8 h-8 text-blue-600" />
                      <span className="text-lg font-semibold">
                        Institution Dashboard
                      </span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Live</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        1,247
                      </div>
                      <div className="text-sm text-gray-600">
                        Active Students
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        89%
                      </div>
                      <div className="text-sm text-gray-600">
                        Placement Rate
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">
                        Google - Campus Drive
                      </span>
                      <Badge variant="outline" className="text-xs">
                        45 Applied
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">
                        Microsoft - Interview Round
                      </span>
                      <Badge variant="outline" className="text-xs">
                        23 Selected
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">
                        Amazon - Final Results
                      </span>
                      <Badge className="bg-green-500 text-white text-xs">
                        12 Offers
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-strong mb-4">
              Focused on Real Use Cases
            </h2>
            <p className="font-body text-xl text-secondary-medium max-w-3xl mx-auto">
              Comprehensive tools designed for both institutions and students to
              streamline placement processes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Students */}
            <div id="for-students" className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-body font-semibold">For Students</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-strong mb-4">
                  Empower Your Career Journey
                </h3>
              </div>
              <div className="space-y-6">
                {studentFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={index}
                      className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-heading text-lg font-semibold text-primary-strong mb-2">
                              {feature.title}
                            </h4>
                            <p className="font-body text-secondary-medium leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* For Institutions */}
            <div id="for-institutions" className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                  <Building2 className="w-5 h-5" />
                  <span className="font-body font-semibold">
                    For Universities & Colleges
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary-strong mb-4">
                  Streamline Your Placement Operations
                </h3>
              </div>
              <div className="space-y-6">
                {institutionFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={index}
                      className="border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-heading text-lg font-semibold text-primary-strong mb-2">
                              {feature.title}
                            </h4>
                            <p className="font-body text-secondary-medium leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Universities Choose Mentra
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results that matter to your institution's success and
              accreditation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Mentra
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Mentra is designed to empower universities and colleges with the
            right tools to streamline placement processes, while giving students
            a structured path toward career success. Our platform bridges the
            gap between academic excellence and industry requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure & Compliant
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security with data privacy compliance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Proven Results
              </h3>
              <p className="text-gray-600">
                95% placement success rate across partner institutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Award Winning
              </h3>
              <p className="text-gray-600">
                Recognized as Best EdTech Innovation 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Bring Smarter Placements to Your Institution with Mentra
          </h2>
          <p className="font-body text-xl text-blue-100 mb-8">
            Join 200+ universities already transforming their placement
            processes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-primary hover:bg-gray-100 font-body text-lg px-8 py-4 font-medium"
              onClick={() => {
                alert(
                  'Demo request submitted! Our team will contact you within 24 hours.'
                );
              }}
            >
              Request a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('signup')}
              className="border-white text-white hover:bg-white hover:text-brand-primary font-body text-lg px-8 py-4 font-medium"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Mentra</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Smart placement management software empowering universities and
                students.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  API Reference
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  System Status
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">hello@mentra.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Mentra. All rights reserved. Empowering institutions and
              students through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
