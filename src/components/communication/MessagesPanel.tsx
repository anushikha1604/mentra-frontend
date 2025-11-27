import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Send, Paperclip, Phone, Video, Plus } from 'lucide-react';
import { CONVERSATIONS_DATA, MESSAGES_DATA } from './data';

export function MessagesPanel() {
  const [activeChat, setActiveChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(MESSAGES_DATA);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message = {
      id: Date.now(),
      sender: 'me',
      content: newMessage,
      time: 'Just now',
      type: 'text'
    };
    
    setMessages(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), message]
    }));
    setNewMessage('');
  };

  const activeConversation = CONVERSATIONS_DATA.find(c => c.id === activeChat);
  const chatMessages = messages[activeChat] || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Conversations List */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Messages</CardTitle>
            <Button size="sm">
              <Plus className="size-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {CONVERSATIONS_DATA.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 cursor-pointer hover:bg-accent transition-colors ${
                  activeChat === conversation.id ? 'bg-accent' : ''
                }`}
                onClick={() => setActiveChat(conversation.id)}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{conversation.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{conversation.role}</p>
                    <p className="text-xs text-muted-foreground truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="size-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="lg:col-span-2 flex flex-col">
        {activeConversation && (
          <>
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={activeConversation.avatar} />
                    <AvatarFallback>{activeConversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{activeConversation.name}</p>
                    <p className="text-sm text-muted-foreground">{activeConversation.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="size-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="size-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'me'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="size-4" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                />
                <Button size="sm" onClick={sendMessage}>
                  <Send className="size-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}