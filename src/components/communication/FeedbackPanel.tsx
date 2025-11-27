import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Star, Send, MessageSquare } from 'lucide-react';

export function FeedbackPanel() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');

  const feedbackHistory = [
    {
      id: 1,
      subject: 'Job Search Feature Improvement',
      category: 'Feature Request',
      status: 'Under Review',
      date: '2024-12-20',
      response: 'Thank you for your suggestion. Our team is currently evaluating this feature.'
    },
    {
      id: 2,
      subject: 'Application Tracker Bug',
      category: 'Bug Report',
      status: 'Resolved',
      date: '2024-12-18',
      response: 'Issue has been fixed in the latest update. Thank you for reporting!'
    }
  ];

  const handleSubmit = () => {
    if (!feedback.trim() || !category) return;
    
    // Reset form
    setFeedback('');
    setCategory('');
    setRating(0);
    
    // Show success message (in real app, would submit to backend)
    alert('Feedback submitted successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Feedback Form */}
      <Card>
        <CardHeader>
          <CardTitle>Submit Feedback</CardTitle>
          <CardDescription>Help us improve PlaceMate with your suggestions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bug">Bug Report</SelectItem>
                <SelectItem value="feature">Feature Request</SelectItem>
                <SelectItem value="improvement">Improvement</SelectItem>
                <SelectItem value="general">General Feedback</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex items-center gap-2">
              <span className="text-sm">Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant="ghost"
                  size="sm"
                  className="p-1"
                  onClick={() => setRating(star)}
                >
                  <Star 
                    className={`size-4 ${
                      star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`} 
                  />
                </Button>
              ))}
            </div>
          </div>
          
          <Input placeholder="Subject (optional)" />
          <Textarea 
            placeholder="Share your feedback, suggestions, or report issues..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-[100px]"
          />
          
          <Button onClick={handleSubmit} disabled={!feedback.trim() || !category}>
            <Send className="size-4 mr-2" />
            Submit Feedback
          </Button>
        </CardContent>
      </Card>

      {/* Feedback History */}
      <Card>
        <CardHeader>
          <CardTitle>Your Feedback History</CardTitle>
          <CardDescription>Track the status of your previous submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feedbackHistory.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{item.subject}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.category} • {item.date}
                    </p>
                  </div>
                  <Badge 
                    variant={item.status === 'Resolved' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {item.status}
                  </Badge>
                </div>
                
                <div className="p-3 bg-accent/50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <MessageSquare className="size-4 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Response:</p>
                      <p className="text-sm text-muted-foreground">{item.response}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}