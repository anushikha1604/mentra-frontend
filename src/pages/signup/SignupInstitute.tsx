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
import { Link } from 'react-router';

export function SignupInstitute() {
  const [step, setStep] = useState<'role' | 'student' | 'admin'>('role');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});
  const [formData, setFormData] = useState({
    role: '',
    // Student fields
    fullName: '',
    primaryPhone: '',
    alternatePhone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gender: '',
    collegeId: '',
    studentId: '',
    collegeName: '',
    course: '',
    year: '',
    wishlistCompany: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    // Admin fields
    institutionName: '',
    officialEmail: '',
    username: '',
    adminRole: '',
    accessCode: '',
  });

  const validateField = (field: string, value: any) => {
    const errors: { [key: string]: string } = {};

    switch (field) {
      case 'fullName':
        if (!value.trim()) {
          errors.fullName = 'Full name is required';
        } else if (value.trim().length < 2) {
          errors.fullName = 'Full name must be at least 2 characters';
        }
        break;
      case 'email':
      case 'officialEmail':
        if (!value.trim()) {
          errors[field] = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors[field] = 'Please enter a valid email address';
        }
        break;
      case 'primaryPhone':
        if (!value.trim()) {
          errors.primaryPhone = 'Phone number is required';
        } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/\s/g, ''))) {
          errors.primaryPhone = 'Please enter a valid phone number';
        }
        break;
      case 'password':
        if (!value) {
          errors.password = 'Password is required';
        } else if (value.length < 8) {
          errors.password = 'Password must be at least 8 characters';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          errors.confirmPassword = 'Please confirm your password';
        } else if (value !== formData.password) {
          errors.confirmPassword = 'Passwords do not match';
        }
        break;
      case 'pincode':
        if (!value.trim()) {
          errors.pincode = 'Pincode is required';
        } else if (!/^\d{6}$/.test(value)) {
          errors.pincode = 'Please enter a valid 6-digit pincode';
        }
        break;
    }

    return errors;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }

    // Validate the field
    if (typeof value === 'string') {
      const fieldErrors = validateField(field, value);
      setValidationErrors((prev) => ({
        ...prev,
        ...fieldErrors,
      }));
    }

    // Calculate password strength
    if (field === 'password') {
      const password = value as string;
      let strength = 0;
      if (password.length >= 8) strength += 25;
      if (/[A-Z]/.test(password)) strength += 25;
      if (/[0-9]/.test(password)) strength += 25;
      if (/[^A-Za-z0-9]/.test(password)) strength += 25;
      setPasswordStrength(strength);
    }
  };

  const handleRoleSelect = (role: 'student' | 'admin') => {
    setFormData((prev) => ({ ...prev, role }));
    setStep(role);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (step === 'student') {
      // Required fields for student
      const requiredFields = [
        'fullName',
        'email',
        'primaryPhone',
        'address',
        'city',
        'state',
        'pincode',
        'gender',
        'collegeName',
        'course',
        'year',
        'password',
        'confirmPassword',
      ];

      requiredFields.forEach((field) => {
        if (!formData[field as keyof typeof formData]) {
          errors[field] = `${field
            .replace(/([A-Z])/g, ' $1')
            .toLowerCase()} is required`;
        }
      });

      // Additional validations
      Object.keys(formData).forEach((field) => {
        const fieldErrors = validateField(
          field,
          formData[field as keyof typeof formData]
        );
        Object.assign(errors, fieldErrors);
      });

      if (!formData.agreeTerms) {
        errors.agreeTerms = 'You must agree to the terms and conditions';
      }

      if (passwordStrength < 50) {
        errors.password =
          'Password is too weak. Please create a stronger password.';
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simulate successful registration
    console.log('Form submitted:', formData);
    alert(
      'Account created successfully! Please check your email for verification.'
    );
    // onNavigate('login');
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 50) return 'bg-red-500';
    if (passwordStrength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return 'Very Weak';
    if (passwordStrength < 50) return 'Weak';
    if (passwordStrength < 75) return 'Good';
    return 'Strong';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link to="/signup" className="font-body">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-primary-strong">
              Mentra
            </span>
          </div>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-2xl flex items-center justify-center gap-2 text-primary-strong">
              <Shield className="w-6 h-6 text-green-600" />
              Institution Registration
            </CardTitle>
            <CardDescription className="font-body text-secondary-medium">
              Register your institution to access powerful placement management
              tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Institution Information */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-primary-strong flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Institution Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="font-body text-primary-strong"
                    >
                      Full Name (Admin/Placement Officer) *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="font-body"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange('fullName', e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="institutionName"
                      className="font-body text-primary-strong"
                    >
                      Institution/University Name *
                    </Label>
                    <Input
                      id="institutionName"
                      placeholder="Enter institution name"
                      className="font-body"
                      value={formData.institutionName}
                      onChange={(e) =>
                        handleInputChange('institutionName', e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="officialEmail"
                      className="font-body text-primary-strong"
                    >
                      Official Email Address *
                    </Label>
                    <Input
                      id="officialEmail"
                      type="email"
                      placeholder="admin@university.edu"
                      className="font-body"
                      value={formData.officialEmail}
                      onChange={(e) =>
                        handleInputChange('officialEmail', e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="primaryPhone"
                      className="font-body text-primary-strong"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="primaryPhone"
                      placeholder="+91 98765 43210"
                      className="font-body"
                      value={formData.primaryPhone}
                      onChange={(e) =>
                        handleInputChange('primaryPhone', e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Login Credentials */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-primary-strong flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Login Credentials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="password"
                      className="font-body text-primary-strong"
                    >
                      Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a strong password"
                        className="font-body"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange('password', e.target.value)
                        }
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="confirmPassword"
                      className="font-body text-primary-strong"
                    >
                      Confirm Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        className="font-body"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange('confirmPassword', e.target.value)
                        }
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) =>
                    handleInputChange('agreeTerms', checked as boolean)
                  }
                />
                <Label
                  htmlFor="agreeTerms"
                  className="font-body text-sm leading-5 text-secondary-medium"
                >
                  I agree to the{' '}
                  <a href="#" className="text-brand-primary hover:underline">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-brand-primary hover:underline">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 font-body text-lg py-3"
                disabled={
                  !formData.agreeTerms ||
                  formData.password !== formData.confirmPassword
                }
              >
                Create Admin Account
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
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
