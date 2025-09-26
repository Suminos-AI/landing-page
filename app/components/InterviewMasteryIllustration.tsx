'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Building2,
  MessageSquare,
  Lightbulb
} from 'lucide-react';

interface InterviewMasteryIllustrationProps {
  className?: string;
}

export function InterviewMasteryIllustration({ className = '' }: InterviewMasteryIllustrationProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const aiTasks = [
    { 
      text: "Analyzing job posting...", 
      icon: Building2, 
      color: "blue",
      completed: currentStep >= 1 
    },
    { 
      text: "Generating interview questions...", 
      icon: MessageSquare, 
      color: "green",
      completed: currentStep >= 2 
    },
    { 
      text: "Researching company insights...", 
      icon: Building2, 
      color: "purple",
      completed: currentStep >= 3 
    }
  ];

  const generatedContent = [
    { type: "Company Research", content: "Stripe • Fintech • Innovation-focused culture", visible: currentStep >= 1 },
    { type: "Interview Questions", content: "Tell me about a time you solved a complex problem", visible: currentStep >= 2 },
    { type: "Answer Tips", content: "Use STAR method: Situation, Task, Action, Result", visible: currentStep >= 3 }
  ];

  return (
    <div className={`w-full min-h-96 rounded-2xl flex items-center justify-center relative overflow-visible ${className}`}>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center w-full">
          {/* AI Chat Interface */}
          <div className="relative w-full max-w-2xl">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="space-y-4">

                {/* AI Processing Tasks */}
                <div className="space-y-2">
                  {aiTasks.map((task, index) => {
                    const Icon = task.icon;
                    return (
                      <motion.div
                        key={task.text}
                        className={`flex items-center space-x-3 p-2 rounded-lg border transition-all duration-300 ${
                          task.completed 
                            ? 'bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600' 
                            : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                      >
                        <motion.div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            task.completed ? 'bg-slate-600' : 'bg-slate-300'
                          }`}
                          animate={{ 
                            scale: task.completed ? [1, 1.1, 1] : 1,
                            rotate: !task.completed ? [0, 360] : 0
                          }}
                          transition={{ 
                            duration: task.completed ? 0.3 : 2,
                            repeat: task.completed ? 0 : Infinity,
                            ease: "linear"
                          }}
                        >
                          {task.completed ? (
                            <CheckCircle className="w-3 h-3 text-white" />
                          ) : (
                            <Icon className="w-3 h-3 text-slate-600" />
                          )}
                        </motion.div>
                        
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {task.text}
                        </span>
                        
                        {!task.completed && (
                          <motion.div
                            className="flex space-x-1"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <div className="w-1 h-1 bg-slate-400 rounded-full" />
                            <div className="w-1 h-1 bg-slate-400 rounded-full" />
                            <div className="w-1 h-1 bg-slate-400 rounded-full" />
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Generated Content */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-slate-600" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">Generated Materials</span>
                  </div>
                  
                  <div className="space-y-1">
                    {generatedContent.map((item, index) => (
                      <motion.div
                        key={item.type}
                        className={`p-2 bg-slate-50 dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 ${
                          item.visible ? 'opacity-100' : 'opacity-0'
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: item.visible ? 1 : 0,
                          y: item.visible ? 0 : 10
                        }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                      >
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                          {item.type}
                        </div>
                        <div className="text-sm text-slate-900 dark:text-white">
                          {item.content}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
