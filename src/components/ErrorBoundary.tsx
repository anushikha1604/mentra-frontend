import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface Props {
  children: React.ReactNode;
  fallback?: React.ComponentType<ErrorInfo>;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorInfo {
  error?: Error;
  errorInfo?: React.ErrorInfo;
  retry: () => void;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error}
            errorInfo={this.state.errorInfo}
            retry={this.retry}
          />
        );
      }

      return (
        <Card className="max-w-2xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              Something went wrong
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We encountered an unexpected error. This has been logged and our team has been notified.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-700 mb-2">Error Details (Development)</h4>
                <pre className="text-xs text-red-600 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}
            
            <div className="flex gap-2">
              <Button onClick={this.retry} className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
              >
                Reload Page
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}

// Functional component wrapper for easier use
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ComponentType<ErrorInfo>
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}