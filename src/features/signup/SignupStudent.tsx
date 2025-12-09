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

export function SignupStudent() {
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
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-primary-strong">
              Mentra
            </span>
          </div>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-2xl flex items-center justify-center gap-2 text-primary-strong">
              <GraduationCap className="w-6 h-6 text-brand-primary" />
              Student Registration
            </CardTitle>
            <CardDescription className="font-body text-secondary-medium">
              Create your student account to start building your career profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-primary-strong flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="font-body text-primary-strong"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className={`font-body ${
                        validationErrors.fullName ? 'border-red-500' : ''
                      }`}
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange('fullName', e.target.value)
                      }
                      required
                    />
                    {validationErrors.fullName && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="font-body text-primary-strong"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@college.edu"
                      className={`font-body ${
                        validationErrors.email ? 'border-red-500' : ''
                      }`}
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange('email', e.target.value)
                      }
                      required
                    />
                    {validationErrors.email && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="primaryPhone"
                      className="font-body text-primary-strong"
                    >
                      Primary Phone Number *
                    </Label>
                    <Input
                      id="primaryPhone"
                      placeholder="+91 98765 43210"
                      className={`font-body ${
                        validationErrors.primaryPhone ? 'border-red-500' : ''
                      }`}
                      value={formData.primaryPhone}
                      onChange={(e) =>
                        handleInputChange('primaryPhone', e.target.value)
                      }
                      required
                    />
                    {validationErrors.primaryPhone && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.primaryPhone}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="alternatePhone"
                      className="font-body text-primary-strong"
                    >
                      Alternate Phone Number
                    </Label>
                    <Input
                      id="alternatePhone"
                      placeholder="+91 98765 43211"
                      className="font-body"
                      value={formData.alternatePhone}
                      onChange={(e) =>
                        handleInputChange('alternatePhone', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="gender"
                      className="font-body text-primary-strong"
                    >
                      Gender *
                    </Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) =>
                        handleInputChange('gender', value)
                      }
                    >
                      <SelectTrigger className="font-body">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {validationErrors.gender && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.gender}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-primary-strong flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Address Information
                </h3>
                <div>
                  <Label
                    htmlFor="address"
                    className="font-body text-primary-strong"
                  >
                    Address *
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your full address"
                    className={`font-body ${
                      validationErrors.address ? 'border-red-500' : ''
                    }`}
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange('address', e.target.value)
                    }
                    required
                  />
                  {validationErrors.address && (
                    <p className="font-body text-xs text-red-600 mt-1">
                      {validationErrors.address}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label
                      htmlFor="city"
                      className="font-body text-primary-strong"
                    >
                      City *
                    </Label>
                    <Input
                      id="city"
                      placeholder="City"
                      className={`font-body ${
                        validationErrors.city ? 'border-red-500' : ''
                      }`}
                      value={formData.city}
                      onChange={(e) =>
                        handleInputChange('city', e.target.value)
                      }
                      required
                    />
                    {validationErrors.city && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.city}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="state"
                      className="font-body text-primary-strong"
                    >
                      State *
                    </Label>
                    <Input
                      id="state"
                      placeholder="State"
                      className={`font-body ${
                        validationErrors.state ? 'border-red-500' : ''
                      }`}
                      value={formData.state}
                      onChange={(e) =>
                        handleInputChange('state', e.target.value)
                      }
                      required
                    />
                    {validationErrors.state && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.state}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="pincode"
                      className="font-body text-primary-strong"
                    >
                      Pincode *
                    </Label>
                    <Input
                      id="pincode"
                      placeholder="123456"
                      className={`font-body ${
                        validationErrors.pincode ? 'border-red-500' : ''
                      }`}
                      value={formData.pincode}
                      onChange={(e) =>
                        handleInputChange('pincode', e.target.value)
                      }
                      required
                    />
                    {validationErrors.pincode && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.pincode}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-primary-strong flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Academic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="collegeName"
                      className="font-body text-primary-strong"
                    >
                      College/University Name *
                    </Label>
                    <Input
                      id="collegeName"
                      placeholder="Enter your institution name"
                      className={`font-body ${
                        validationErrors.collegeName ? 'border-red-500' : ''
                      }`}
                      value={formData.collegeName}
                      onChange={(e) =>
                        handleInputChange('collegeName', e.target.value)
                      }
                      required
                    />
                    {validationErrors.collegeName && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.collegeName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="course"
                      className="font-body text-primary-strong"
                    >
                      Course/Program *
                    </Label>
                    <Select
                      value={formData.course}
                      onValueChange={(value) =>
                        handleInputChange('course', value)
                      }
                    >
                      <SelectTrigger className="font-body">
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bca">BCA</SelectItem>
                        <SelectItem value="btech">B.Tech</SelectItem>
                        <SelectItem value="mca">MCA</SelectItem>
                        <SelectItem value="mba">MBA</SelectItem>
                        <SelectItem value="bsc">B.Sc</SelectItem>
                        <SelectItem value="msc">M.Sc</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {validationErrors.course && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.course}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="year"
                      className="font-body text-primary-strong"
                    >
                      Year/Semester *
                    </Label>
                    <Select
                      value={formData.year}
                      onValueChange={(value) =>
                        handleInputChange('year', value)
                      }
                    >
                      <SelectTrigger className="font-body">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st-year">1st Year</SelectItem>
                        <SelectItem value="2nd-year">2nd Year</SelectItem>
                        <SelectItem value="3rd-year">3rd Year</SelectItem>
                        <SelectItem value="4th-year">4th Year</SelectItem>
                        <SelectItem value="masters-1">
                          Masters 1st Year
                        </SelectItem>
                        <SelectItem value="masters-2">
                          Masters 2nd Year
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {validationErrors.year && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.year}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="studentId"
                      className="font-body text-primary-strong"
                    >
                      Student ID/Enrollment Number
                    </Label>
                    <Input
                      id="studentId"
                      placeholder="Enter your student ID"
                      className="font-body"
                      value={formData.studentId}
                      onChange={(e) =>
                        handleInputChange('studentId', e.target.value)
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="collegeId"
                    className="font-body text-primary-strong"
                  >
                    College ID (Upload or Enter ID Number)
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="font-body text-sm text-secondary-medium">
                        Upload College ID
                      </p>
                      <p className="font-body text-xs text-muted-light">
                        PNG, JPG, PDF up to 5MB
                      </p>
                    </div>
                    <div>
                      <Input
                        placeholder="Or enter College ID number"
                        className="font-body"
                        value={formData.collegeId}
                        onChange={(e) =>
                          handleInputChange('collegeId', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Information */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-primary-strong flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Career Information
                </h3>
                <div>
                  <Label
                    htmlFor="wishlistCompany"
                    className="font-body text-primary-strong"
                  >
                    Wishlist Company
                  </Label>
                  <Input
                    id="wishlistCompany"
                    placeholder="e.g., Google, Microsoft, Amazon (comma separated)"
                    className="font-body"
                    value={formData.wishlistCompany}
                    onChange={(e) =>
                      handleInputChange('wishlistCompany', e.target.value)
                    }
                  />
                  <p className="font-body text-xs text-muted-light mt-1">
                    Enter companies you'd like to work for
                  </p>
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
                        className={`font-body ${
                          validationErrors.password ? 'border-red-500' : ''
                        }`}
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
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-body text-secondary-medium">
                            Password strength
                          </span>
                          <span
                            className={`font-body ${
                              passwordStrength >= 75
                                ? 'text-green-600'
                                : passwordStrength >= 50
                                ? 'text-yellow-600'
                                : 'text-red-600'
                            }`}
                          >
                            {getPasswordStrengthText()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                            style={{ width: `${passwordStrength}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    {validationErrors.password && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.password}
                      </p>
                    )}
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
                        className={`font-body ${
                          validationErrors.confirmPassword
                            ? 'border-red-500'
                            : ''
                        }`}
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
                    {validationErrors.confirmPassword && (
                      <p className="font-body text-xs text-red-600 mt-1">
                        {validationErrors.confirmPassword}
                      </p>
                    )}
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
              {validationErrors.agreeTerms && (
                <p className="font-body text-xs text-red-600">
                  {validationErrors.agreeTerms}
                </p>
              )}

              <Button
                type="submit"
                className="w-full bg-brand-primary hover:bg-blue-700 font-body text-lg py-3"
                disabled={
                  !formData.agreeTerms ||
                  formData.password !== formData.confirmPassword ||
                  passwordStrength < 50
                }
              >
                Create Student Account
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
