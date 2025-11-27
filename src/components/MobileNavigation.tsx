import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  BarChart3,
  Users,
  Search,
  Calendar,
  Target,
  MessageSquare,
  Menu,
  Home,
  FolderOpen
} from 'lucide-react';

interface MobileNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  setSidebarOpen: (open: boolean) => void;
}

export function MobileNavigation({ 
  activeSection, 
  setActiveSection, 
  setSidebarOpen 
}: MobileNavigationProps) {
  const primaryNavItems = [
    {
      id: 'dashboard',
      label: 'Home',
      icon: Home,
      shortLabel: 'Home'
    },
    {
      id: 'jobs',
      label: 'Jobs',
      icon: Search,
      shortLabel: 'Jobs'
    },
    {
      id: 'applications',
      label: 'Applications',
      icon: Calendar,
      shortLabel: 'Apps'
    },
    {
      id: 'communications',
      label: 'Messages',
      icon: MessageSquare,
      shortLabel: 'Chat',
      hasNotification: true
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      icon: FolderOpen,
      shortLabel: 'Portfolio'
    }
  ];

  return (
    <>
      {/* Mobile Bottom Navigation - Fixed positioning with safe area */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border mobile-safe-bottom">
        {/* Navigation Content */}
        <div className="flex items-center justify-around px-2 py-2">
          {primaryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`
                  flex flex-col items-center justify-center gap-1 p-2 min-h-[56px] min-w-[64px] rounded-xl
                  mobile-tap transition-all duration-200
                  ${isActive ? 'bg-gradient-to-t from-primary/10 to-primary/5 text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'}
                `}
                onClick={() => setActiveSection(item.id)}
                aria-label={`Navigate to ${item.label}`}
              >
                {/* Icon Container */}
                <div className="relative">
                  <div className={`
                    size-6 flex items-center justify-center
                    ${isActive ? 'text-primary' : ''}
                  `}>
                    <Icon className="size-5" />
                  </div>
                  
                  {/* Notification Badge */}
                  {item.hasNotification && (
                    <div className="absolute -top-1 -right-1">
                      <div className="size-2 bg-destructive rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
                
                {/* Label */}
                <span className={`
                  text-xs font-medium transition-colors duration-200
                  ${isActive ? 'text-primary' : ''}
                `}>
                  {item.shortLabel}
                </span>
                
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary rounded-full" />
                )}
              </Button>
            );
          })}
        </div>
        
        {/* Quick Action Floating Button */}
        <div className="absolute -top-6 right-4">
          <Button
            size="sm"
            className="size-12 rounded-full bg-gradient-primary shadow-lg hover:shadow-xl transition-all duration-200 mobile-tap"
            onClick={() => setActiveSection('roadmap')}
            aria-label="Quick access to AI roadmap"
          >
            <Target className="size-5" />
          </Button>
        </div>
      </div>
      
      {/* Spacer to prevent content overlap */}
      <div className="md:hidden h-20" />
    </>
  );
}