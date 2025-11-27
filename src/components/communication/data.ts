export const NOTIFICATIONS_DATA = [
  {
    id: 1,
    type: 'interview',
    title: 'Interview Reminder',
    message: 'Google technical interview tomorrow at 2:00 PM',
    time: '10 minutes ago',
    read: false,
    priority: 'high'
  },
  {
    id: 2,
    type: 'application',
    title: 'Application Update',
    message: 'Microsoft has reviewed your application',
    time: '2 hours ago',
    read: false,
    priority: 'medium'
  },
  {
    id: 3,
    type: 'offer',
    title: 'Offer Extension',
    message: 'Amazon has extended your offer deadline to Jan 10',
    time: '1 day ago',
    read: true,
    priority: 'high'
  },
  {
    id: 4,
    type: 'event',
    title: 'Career Fair Reminder',
    message: 'Tech Career Fair starts in 3 days',
    time: '2 days ago',
    read: true,
    priority: 'low'
  }
];

export const CONVERSATIONS_DATA = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'TPO - Computer Science',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Your interview slot has been confirmed',
    time: '2m ago',
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: 'David Rodriguez',
    role: 'Career Counselor',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Great progress on your roadmap!',
    time: '1h ago',
    unread: 0,
    online: false
  },
  {
    id: 3,
    name: 'Google Recruiter',
    role: 'External Recruiter',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Looking forward to our interview',
    time: '3h ago',
    unread: 1,
    online: true
  }
];

export const MESSAGES_DATA = {
  1: [
    {
      id: 1,
      sender: 'Sarah Chen',
      content: 'Hi Alex! I hope you\'re doing well. I wanted to confirm your interview slot for tomorrow.',
      time: '2:30 PM',
      type: 'text'
    },
    {
      id: 2,
      sender: 'me',
      content: 'Hi Sarah! Yes, I\'m all set for the 2:00 PM slot. Should I prepare anything specific?',
      time: '2:32 PM',
      type: 'text'
    },
    {
      id: 3,
      sender: 'Sarah Chen',
      content: 'Perfect! Just review your system design basics and be ready to discuss your projects. You\'ve got this!',
      time: '2:35 PM',
      type: 'text'
    }
  ],
  2: [
    {
      id: 1,
      sender: 'David Rodriguez',
      content: 'I reviewed your dream company roadmap progress. You\'re making excellent progress on your Google preparation!',
      time: '1:15 PM',
      type: 'text'
    }
  ],
  3: [
    {
      id: 1,
      sender: 'Google Recruiter',
      content: 'Hi Alex, thank you for your application. We\'re excited to meet you tomorrow for the technical interview.',
      time: '11:30 AM',
      type: 'text'
    }
  ]
};

export const FORUM_POSTS_DATA = [
  {
    id: 1,
    title: 'How to prepare for Google system design interviews?',
    content: 'I have a system design interview coming up at Google. What are the key topics I should focus on? Any specific resources you\'d recommend?',
    author: {
      name: 'Priya Sharma',
      avatar: '/api/placeholder/40/40'
    },
    category: 'Interview Prep',
    time: '2 hours ago',
    likes: 12,
    replies: 8,
    solved: true
  },
  {
    id: 2,
    title: 'Salary negotiation tips for new grads?',
    content: 'I received my first job offer but I think the salary might be below market rate. How should I approach salary negotiation as a new graduate?',
    author: {
      name: 'Michael Chen',
      avatar: '/api/placeholder/40/40'
    },
    category: 'Offers',
    time: '5 hours ago',
    likes: 24,
    replies: 15,
    solved: false
  },
  {
    id: 3,
    title: 'Best projects to showcase for ML engineer roles?',
    content: 'I\'m applying for machine learning engineer positions. What types of projects should I include in my portfolio to stand out?',
    author: {
      name: 'Lisa Wong',
      avatar: '/api/placeholder/40/40'
    },
    category: 'Portfolio',
    time: '1 day ago',
    likes: 18,
    replies: 12,
    solved: true
  }
];