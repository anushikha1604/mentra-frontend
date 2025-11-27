import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { NotificationsPanel } from './communication/NotificationsPanel';
import { MessagesPanel } from './communication/MessagesPanel';
import { ForumPanel } from './communication/ForumPanel';
import { FeedbackPanel } from './communication/FeedbackPanel';

export function CommunicationCenter() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="notifications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="forum">Q&A Forum</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications">
          <NotificationsPanel />
        </TabsContent>

        <TabsContent value="messages">
          <MessagesPanel />
        </TabsContent>

        <TabsContent value="forum">
          <ForumPanel />
        </TabsContent>

        <TabsContent value="feedback">
          <FeedbackPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}