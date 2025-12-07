import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import {
  GraduationCap,
  Shield,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Building2,
  Smartphone,
  Clock,
} from 'lucide-react';

import { Link } from 'react-router';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [loginData, setLoginData] = useState({
    emailOrPhone: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});
  const [showTwoFA, setShowTwoFA] = useState(false);
  const [twoFACode, setTwoFACode] = useState('');
  const [twoFAMethod, setTwoFAMethod] = useState<'email' | 'sms'>('email');

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!loginData.emailOrPhone.trim()) {
      errors.emailOrPhone = 'Email, phone, or username is required';
    } else if (loginData.emailOrPhone.includes('@')) {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(loginData.emailOrPhone)) {
        errors.emailOrPhone = 'Please enter a valid email address';
      }
    }

    if (!loginData.password) {
      errors.password = 'Password is required';
    } else if (loginData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setLoginData((prev) => ({
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

    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, check for demo credentials
      if (
        loginData.emailOrPhone === 'demo@mentra.com' ||
        loginData.emailOrPhone === 'admin@university.edu' ||
        loginData.emailOrPhone === 'student@college.edu'
      ) {
        // Simulate 2FA requirement for admin accounts
        if (loginData.emailOrPhone === 'admin@university.edu' && !showTwoFA) {
          setShowTwoFA(true);
          setIsLoading(false);
          return;
        }

        // Navigate to dashboard after successful login
        onNavigate('dashboard');
      } else {
        setError(
          'Invalid credentials. Try demo@mentra.com, admin@university.edu, or student@college.edu'
        );
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTwoFASubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (twoFACode === '123456') {
        onNavigate('dashboard');
      } else {
        setError('Invalid verification code. Try 123456');
      }
    } catch (err) {
      setError('Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getInputIcon = () => {
    if (loginData.emailOrPhone.includes('@')) {
      return <Mail className="w-4 h-4 text-muted-light" />;
    } else if (/^\\+?[\\d\\s\\-\\(\\)]+$/.test(loginData.emailOrPhone)) {
      return <Phone className="w-4 h-4 text-muted-light" />;
    }
    return <User className="w-4 h-4 text-muted-light" />;
  };

  if (showTwoFA) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="font-heading text-3xl font-bold text-primary-strong">
                Mentra
              </span>
            </div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-primary-strong mb-2">
              Two-Factor Authentication
            </h1>
            <p className="font-body text-secondary-medium">
              Enter the verification code sent to your {twoFAMethod}
            </p>
          </div>

          {/* 2FA Card */}
          <Card className="border-2 border-gray-100 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="font-heading text-xl text-primary-strong">
                Verify Your Identity
              </CardTitle>
              <CardDescription className="font-body text-secondary-medium">
                We've sent a 6-digit code to protect your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTwoFASubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="font-body text-sm text-red-700">
                      {error}
                    </span>
                  </div>
                )}

                {/* Demo Code Info */}
                <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <div className="font-body text-sm text-blue-700">
                    <strong>Demo Code:</strong> 123456
                  </div>
                </div>

                {/* 2FA Method Selection */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant={twoFAMethod === 'email' ? 'default' : 'outline'}
                    className="h-12 font-body"
                    onClick={() => setTwoFAMethod('email')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button
                    type="button"
                    variant={twoFAMethod === 'sms' ? 'default' : 'outline'}
                    className="h-12 font-body"
                    onClick={() => setTwoFAMethod('sms')}
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    SMS
                  </Button>
                </div>

                {/* Code Input */}
                <div className="space-y-2">
                  <Label
                    htmlFor="twoFACode"
                    className="font-body text-primary-strong"
                  >
                    Verification Code
                  </Label>
                  <Input
                    id="twoFACode"
                    type="text"
                    placeholder="Enter 6-digit code"
                    className="text-center text-lg tracking-wider font-body"
                    maxLength={6}
                    value={twoFACode}
                    onChange={(e) =>
                      setTwoFACode(e.target.value.replace(/\\D/g, ''))
                    }
                    required
                  />
                </div>

                {/* Verify Button */}
                <Button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-blue-700 text-white font-body"
                  disabled={isLoading || twoFACode.length !== 6}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Verifying...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Verify & Continue
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </Button>

                {/* Resend Code */}
                <div className="text-center">
                  <button
                    type="button"
                    className="font-body text-sm text-brand-primary hover:text-blue-700 font-medium"
                    onClick={() => {
                      alert('Verification code resent!');
                    }}
                  >
                    Didn't receive the code? Resend
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <button
              onClick={() => setShowTwoFA(false)}
              className="font-body text-secondary-medium hover:text-primary-strong text-sm"
            >
              ← Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="font-heading text-3xl font-bold text-primary-strong">
              Mentra
            </span>
          </div>
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-primary-strong mb-2">
            Welcome Back
          </h1>
          <p className="font-body text-secondary-medium">
            Sign in to access your placement management platform
          </p>
        </div>

        {/* Login Card */}
        <Card className="border-2 border-gray-100 shadow-xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="font-heading text-xl text-primary-strong">
              Access Your Account
            </CardTitle>
            <CardDescription className="font-body text-secondary-medium">
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="font-body text-sm text-red-700">
                    {error}
                  </span>
                </div>
              )}

              {/* Demo Credentials Info */}
              <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <div className="font-body text-sm text-blue-700">
                  <div>
                    <strong>Demo Accounts:</strong>
                  </div>
                  <div>Student: student@college.edu</div>
                  <div>Admin: admin@university.edu (2FA enabled)</div>
                </div>
              </div>

              {/* Email/Phone/Username Input */}
              <div className="space-y-2">
                <Label
                  htmlFor="emailOrPhone"
                  className="font-body text-primary-strong"
                >
                  Email, Phone, or Username
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {getInputIcon()}
                  </div>
                  <Input
                    id="emailOrPhone"
                    type="text"
                    placeholder="Enter your email, phone, or username"
                    className={`pl-10 font-body ${
                      validationErrors.emailOrPhone ? 'border-red-500' : ''
                    }`}
                    value={loginData.emailOrPhone}
                    onChange={(e) =>
                      handleInputChange('emailOrPhone', e.target.value)
                    }
                    required
                  />
                </div>
                {validationErrors.emailOrPhone && (
                  <p className="font-body text-xs text-red-600">
                    {validationErrors.emailOrPhone}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="font-body text-primary-strong"
                >
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="w-4 h-4 text-muted-light" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className={`pl-10 pr-10 font-body ${
                      validationErrors.password ? 'border-red-500' : ''
                    }`}
                    value={loginData.password}
                    onChange={(e) =>
                      handleInputChange('password', e.target.value)
                    }
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute inset-y-0 right-0 px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-muted-light" />
                    ) : (
                      <Eye className="w-4 h-4 text-muted-light" />
                    )}
                  </Button>
                </div>
                {validationErrors.password && (
                  <p className="font-body text-xs text-red-600">
                    {validationErrors.password}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={loginData.rememberMe}
                    onCheckedChange={(checked) =>
                      handleInputChange('rememberMe', checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="rememberMe"
                    className="font-body text-sm font-medium text-secondary-medium"
                  >
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  className="font-body text-sm text-brand-primary hover:text-blue-700 font-medium"
                  onClick={() => {
                    alert('Password reset link sent to your email!');
                  }}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-brand-primary hover:bg-blue-700 text-white font-body"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing In...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Log In
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* User Type Indicators */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            <GraduationCap className="w-8 h-8 text-brand-primary mx-auto mb-2" />
            <p className="font-body text-sm font-medium text-primary-strong">
              Students
            </p>
            <p className="font-body text-xs text-secondary-medium">
              Profile & career management
            </p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            <Building2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-body text-sm font-medium text-primary-strong">
              Institutions
            </p>
            <p className="font-body text-xs text-secondary-medium">
              Placement management & analytics
            </p>
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
          <div className="flex items-center justify-center gap-6 text-xs text-secondary-medium">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span className="font-body">Secure Login</span>
            </div>
            <div className="flex items-center gap-1">
              <Smartphone className="w-3 h-3" />
              <span className="font-body">2FA Available</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span className="font-body">Data Protected</span>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="font-body text-secondary-medium">
            New to Mentra?{' '}
            <Link
              to="/signup"
              className="text-brand-primary hover:text-blue-700 font-medium"
            >
              Create Account
            </Link>
          </p>
        </div>

        {/* Back to Landing */}
        <div className="text-center mt-4">
          <Link
            to="/"
            className="font-body text-secondary-medium hover:text-primary-strong text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
