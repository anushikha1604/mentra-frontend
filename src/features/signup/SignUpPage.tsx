import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Checkbox } from '../../components/ui/checkbox';
import { Progress } from '../../components/ui/progress';
import {
  GraduationCap,
  Users,
  Shield,
  ArrowLeft,
  Upload,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  BookOpen,
  Heart,
  Lock,
  Key,
  FileText,
  Zap,
  Star,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export function SignUpPage() {
  const navigation = useNavigate();
  const handleRoleSelect = (roleName: string) => {
    return navigation(`/signup/${roleName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="font-heading text-3xl font-bold text-primary-strong">
              Mentra
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-strong mb-4">
            Choose Your Role
          </h1>
          <p className="font-body text-xl text-secondary-medium">
            Select how you want to use Mentra to get personalized features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student Card */}
          <Card
            className="border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() => handleRoleSelect('student')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                <GraduationCap className="w-10 h-10 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-strong mb-4">
                Student
              </h3>
              <p className="font-body text-secondary-medium mb-6 leading-relaxed">
                Build your professional profile, track applications, and connect
                with your wishlist companies
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-secondary-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-body">
                    Create and manage academic profiles
                  </span>
                </li>
                <li className="flex items-center text-secondary-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-body">
                    Save and track wishlist companies
                  </span>
                </li>
                <li className="flex items-center text-secondary-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-body">
                    Stay updated on placement activities
                  </span>
                </li>
                <li className="flex items-center text-secondary-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-body">
                    Access career guidance resources
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-brand-primary hover:bg-blue-700 font-body font-medium">
                Continue as Student
              </Button>
            </CardContent>
          </Card>

          {/* Admin Card */}
          <Card
            className="border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            onClick={() => handleRoleSelect('institute')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
                <Shield className="w-10 h-10 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-strong mb-4">
                Institution Admin
              </h3>
              <p className="font-body text-secondary-medium mb-6 leading-relaxed">
                Manage student databases, track placements, and access powerful
                analytics for your institution
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-secondary-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-body">
                    Centralized student database
                  </span>
                </li>
                <li className="flex items-center text-secondary-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-body">
                    Placement tracking and reporting
                  </span>
                </li>
                <li className="flex items-center text-secondary-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-body">Role-based access control</span>
                </li>
                <li className="flex items-center text-secondary-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-body">
                    Advanced analytics dashboard
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700 font-body font-medium">
                Continue as Admin
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="font-body text-secondary-medium">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-brand-primary hover:text-blue-700 font-medium"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
