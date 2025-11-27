import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Bell, Search, Archive, Trash2, CheckCircle2, AlertCircle, Calendar, Award } from 'lucide-react';
import { NOTIFICATIONS_DATA } from './data';

export function NotificationsPanel() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const [filter, setFilter] = useState('all');

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'interview':
        return <Calendar className="size-4 text-blue-500" />;
      case 'application':
        return <AlertCircle className="size-4 text-yellow-500" />;
      case 'offer':
        return <CheckCircle2 className="size-4 text-green-500" />;
      case 'event':
        return <Award className="size-4 text-purple-500" />;
      default:
        return <Bell className="size-4" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      default:
        return 'border-l-blue-500 bg-blue-50';
    }
  };

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => notif.id === id ? {...notif, read: true} : notif)
    );
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.read;
    if (filter === 'high') return notif.priority === 'high';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header & Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bell className="size-5" />
              Notifications
              <Badge variant="destructive">{notifications.filter(n => !n.read).length}</Badge>
            </CardTitle>
            <Button variant="outline" size="sm">
              Mark All Read
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input placeholder="Search notifications..." className="flex-1" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Notifications</SelectItem>
                <SelectItem value="unread">Unread Only</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`border-l-4 ${getPriorityColor(notification.priority)} ${
              !notification.read ? 'bg-accent/30' : ''
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{notification.title}</h4>
                      {!notification.read && (
                        <div className="size-2 bg-blue-500 rounded-full" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {notification.time}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {!notification.read && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => markAsRead(notification.id)}
                    >
                      <CheckCircle2 className="size-4" />
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <Archive className="size-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}