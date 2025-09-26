'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle, Clock, Calendar, Mail, TrendingUp, Star, Zap, Target, Award } from 'lucide-react';

interface ProgressTrackingIllustrationProps {
  className?: string;
}

export function ProgressTrackingIllustration({ className = '' }: ProgressTrackingIllustrationProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const applications = [
    { 
      id: 'dream-job', 
      company: 'Stripe', 
      position: 'Senior Software Engineer',
      status: currentStep >= 1 ? (currentStep >= 3 ? 'interview' : 'review') : 'applied',
      date: '2 days ago',
      salary: '$180k',
      match: 98,
      story: 'Dream company! Perfect culture fit',
      urgency: 'high'
    },
    { 
      id: 'backup', 
      company: 'Notion', 
      position: 'Full Stack Engineer',
      status: currentStep >= 2 ? (currentStep >= 4 ? 'offer' : 'interview') : 'applied',
      date: '1 week ago',
      salary: '$160k',
      match: 85,
      story: 'Great product, exciting challenges',
      urgency: 'medium'
    },
    { 
      id: 'safe-bet', 
      company: 'Microsoft', 
      position: 'Software Engineer II',
      status: currentStep >= 5 ? 'review' : 'applied',
      date: '3 days ago',
      salary: '$140k',
      match: 92,
      story: 'Stable company, good benefits',
      urgency: 'low'
    },
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'applied':
        return { color: 'bg-slate-100 text-slate-600', icon: Mail, text: 'Applied' };
      case 'review':
        return { color: 'bg-blue-100 text-blue-600', icon: Clock, text: 'Under Review' };
      case 'interview':
        return { color: 'bg-yellow-100 text-yellow-600', icon: Calendar, text: 'Interview' };
      case 'offer':
        return { color: 'bg-green-100 text-green-600', icon: CheckCircle, text: 'Offer' };
      default:
        return { color: 'bg-slate-100 text-slate-600', icon: Mail, text: 'Applied' };
    }
  };

  const totalApplications = applications.length;
  const completedApplications = applications.filter(app => app.status === 'offer').length;
  const progressPercentage = (completedApplications / totalApplications) * 100;

  return (
    <div className={`w-full min-h-96 rounded-2xl flex items-center justify-center relative overflow-visible ${className}`}>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center w-full">
          {/* Dashboard */}
          <div className="relative w-full">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="space-y-6">
                {/* Progress Overview with story context */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Job Search Progress</span>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Target className="w-4 h-4 text-blue-500" />
                      </motion.div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {completedApplications > 0 ? `${completedApplications} offer${completedApplications > 1 ? 's' : ''} received!` : `${totalApplications} applications sent`}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full relative"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                  {completedApplications > 0 && (
                    <motion.div 
                      className="text-xs font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Congratulations! You're getting offers!
                    </motion.div>
                  )}
                </div>

                {/* Application Cards with enhanced animations */}
                <div className="space-y-3">
                  {applications.map((app, index) => {
                    const statusInfo = getStatusInfo(app.status);
                    const StatusIcon = statusInfo.icon;
                    
                    return (
                      <motion.div 
                        key={app.id}
                        className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 border border-slate-200 dark:border-slate-600 relative overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        {/* Animated background gradient */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0"
                          animate={{ opacity: app.status === 'offer' ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-2">
                            <div className="space-y-1">
                              <div className="font-medium text-sm text-slate-900 dark:text-white">{app.position}</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">{app.company}</div>
                              <div className="text-xs text-slate-400 dark:text-slate-500 italic">{app.story}</div>
                            </div>
                            <motion.div
                              className={`px-3 py-1 rounded-full text-xs flex items-center space-x-1 ${statusInfo.color}`}
                              animate={{
                                scale: app.status === 'offer' ? [1, 1.1, 1] : 1,
                                boxShadow: app.status === 'offer' ? ['0 0 0 0 rgba(34, 197, 94, 0.4)', '0 0 0 8px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)'] : 'none'
                              }}
                              transition={{ duration: 0.6, repeat: app.status === 'offer' ? Infinity : 0 }}
                            >
                              <StatusIcon className="w-3 h-3" />
                              <span>{statusInfo.text}</span>
                            </motion.div>
                          </div>
                          
                          {/* Additional info row with story context */}
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                                <TrendingUp className="w-3 h-3" />
                                <span>{app.salary}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-yellow-500" />
                                <span className="text-slate-500 dark:text-slate-400">{app.match}% match</span>
                              </div>
                              {app.urgency === 'high' && (
                                <motion.div 
                                  className="flex items-center space-x-1 text-red-500"
                                  animate={{ opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                >
                                  <span>🔥 Priority</span>
                                </motion.div>
                              )}
                            </div>
                            <div className="text-slate-400 dark:text-slate-500">{app.date}</div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
