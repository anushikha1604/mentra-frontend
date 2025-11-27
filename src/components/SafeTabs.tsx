import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ErrorBoundary } from './ErrorBoundary';

interface SafeTabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

interface SafeTabsListProps {
  className?: string;
  children: React.ReactNode;
}

interface SafeTabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface SafeTabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

// Safe wrapper for Tabs with error handling
export function SafeTabs({ children, ...props }: SafeTabsProps) {
  return (
    <ErrorBoundary>
      <Tabs {...props}>
        {children}
      </Tabs>
    </ErrorBoundary>
  );
}

// Safe wrapper for TabsList
export function SafeTabsList({ children, className }: SafeTabsListProps) {
  return (
    <ErrorBoundary>
      <TabsList className={className}>
        {children}
      </TabsList>
    </ErrorBoundary>
  );
}

// Safe wrapper for TabsTrigger
export function SafeTabsTrigger({ children, ...props }: SafeTabsTriggerProps) {
  return (
    <ErrorBoundary>
      <TabsTrigger {...props}>
        {children}
      </TabsTrigger>
    </ErrorBoundary>
  );
}

// Safe wrapper for TabsContent
export function SafeTabsContent({ children, ...props }: SafeTabsContentProps) {
  return (
    <ErrorBoundary>
      <TabsContent {...props}>
        {children}
      </TabsContent>
    </ErrorBoundary>
  );
}

// Export as a complete tabs system
export {
  SafeTabs as Tabs,
  SafeTabsList as TabsList,
  SafeTabsTrigger as TabsTrigger,
  SafeTabsContent as TabsContent
};