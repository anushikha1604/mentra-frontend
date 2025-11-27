import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { MessageSquare, ThumbsUp, Search, Plus } from 'lucide-react';
import { FORUM_POSTS_DATA } from './data';

export function ForumPanel() {
  const [showNewQuestion, setShowNewQuestion] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Q&A Forum</CardTitle>
              <CardDescription>Get help from peers and experts</CardDescription>
            </div>
            <Button onClick={() => setShowNewQuestion(true)}>
              <Plus className="size-4 mr-2" />
              Ask Question
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Input placeholder="Search questions..." />
        </CardContent>
      </Card>

      {/* New Question Form */}
      {showNewQuestion && (
        <Card>
          <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Question title..." />
            <Textarea placeholder="Describe your question in detail..." />
            <div className="flex gap-2">
              <Button>Post Question</Button>
              <Button variant="outline" onClick={() => setShowNewQuestion(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Forum Posts */}
      <div className="space-y-4">
        {FORUM_POSTS_DATA.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="size-10">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium">{post.title}</h3>
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    {post.solved && (
                      <Badge className="text-xs bg-green-100 text-green-700">Solved</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.author.name}</span>
                    <span>{post.time}</span>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="size-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="size-4" />
                      <span>{post.replies} replies</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}