'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Zap, CheckCircle, ArrowRight, Sparkle, Sparkles } from 'lucide-react';

interface JobApplicationIllustrationProps {
  className?: string;
}

export function JobApplicationIllustration({ className = '' }: JobApplicationIllustrationProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formFields = [
    { id: 'skills', label: 'Technical Skills', filled: currentStep >= 1 },
    { id: 'experience', label: 'Relevant Experience', filled: currentStep >= 2 },
    { id: 'cover-letter', label: 'Cover Letter', filled: currentStep >= 3 },
    { id: 'achievements', label: 'Key Achievements', filled: currentStep >= 4 },
    { id: 'motivation', label: 'Why This Role?', filled: currentStep >= 5 },
  ];

  return (
    <div className={`w-full rounded-2xl flex items-center justify-center relative overflow-visible ${className}`}>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center w-full">
          {/* Browser Window */}
          <div className="relative w-full max-w-5xl">
            {/* Browser Header */}
            <div className="bg-slate-200 dark:bg-slate-700 rounded-t-xl p-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white dark:bg-slate-600 rounded px-3 py-1 mx-4">
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  https://company.com/careers/apply
                </div>
              </div>
            </div>

            {/* Browser Content */}
            <div className="bg-white dark:bg-slate-800 rounded-b-xl shadow-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="flex h-96">
                {/* Main Content Area */}
                <div className="flex-1 p-6">
                  <div className="space-y-4">
                    {/* Page Header */}
                    <div className="space-y-2">
                      <motion.div 
                        className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"
                        animate={{ 
                          backgroundColor: currentStep >= 0 ? "rgb(59, 130, 246)" : "rgb(203, 213, 225)",
                          opacity: currentStep >= 0 ? 0.3 : 0.6
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      
                    </div>

                    {/* Job Application Form */}
                    <div className="space-y-2">
                      {formFields.map((field, index) => (
                        <motion.div 
                          key={field.id}
                          className="space-y-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <label className="block text-xs font-light text-slate-700 dark:text-slate-300">
                            {field.label}
                          </label>
                          <motion.div 
                            className="relative"
                            animate={{ 
                              scale: field.filled ? [1, 1.02, 1] : 1
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.input
                              type="text"
                              className={`w-full px-2 py-1 text-xs border rounded transition-all duration-500 ${
                                field.filled 
                                  ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500' 
                                  : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700'
                              }`}
                              value={field.filled ? (field.id === 'skills' ? 'React, TypeScript, Node.js, Python' : 
                                                   field.id === 'experience' ? '5+ years full-stack development' :
                                                   field.id === 'cover-letter' ? 'Passionate about building scalable...' :
                                                   field.id === 'achievements' ? 'Led team of 5, increased performance 40%' :
                                                   'Excited to contribute to your mission...') : ''}
                              readOnly
                            />
                          </motion.div>
                          
                        </motion.div>
                      ))}
                    </div>

                    {/* Submit Button */}
                    <motion.div 
                      className="pt-2"
                      animate={{ 
                        scale: currentStep >= 5 ? [1, 1.05, 1] : 1,
                      
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.button
                        className={`py-1 px-2 text-xs rounded font-medium transition-all duration-500 ${
                          currentStep >= 5 
                            ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg' 
                            : 'bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-400'
                        }`}
                        animate={{
                          backgroundColor: currentStep >= 5 ? "rgb(59, 130, 246)" : "rgb(226, 232, 240)"
                        }}
                        transition={{ duration: 0.5 }}
                      >
                       Submit
                      </motion.button>
                    </motion.div>
                  </div>
                </div>

                {/* Sidebar Extension */}
                <motion.div 
                  className="w-44 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l border-slate-200 dark:border-slate-700 p-3"
                  animate={{ 
                    backgroundColor: currentStep >= 1 ? [
                      "rgb(239, 246, 255)",
                      "rgb(224, 242, 254)",
                      "rgb(239, 246, 255)"
                    ] : "rgb(239, 246, 255)"
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Extension Header */}
                  <div className="flex items-center space-x-2 mb-3 pt-4">
                      <img src="/images/logo.png" alt="Logo" className="h-4" />
                    <div>
                     
                      
                    </div>
                  </div>

                  {/* Extension Status */}
                  <div className="space-y-2">

                    {/* Progress Indicator */}
                    <div className="space-y-3 pt-4">
                      {formFields.map((field, index) => (
                        <motion.div 
                          key={field.id}
                          className="flex items-center space-x-2 text-xs"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <motion.div
                            className="w-3 h-3 flex items-center justify-center"
                            animate={{
                              scale: field.filled ? [1, 1.2, 1] : 1
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                animate={field.filled ? {} : {
                                  scale: [1, 1.1, 1],
                                  opacity: [0.6, 1, 0.6],
                                  rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                <Sparkles 
                                  className="w-3 h-3" 
                                  style={{
                                    color: field.filled ? "rgb(59, 130, 246)" : "rgb(156, 163, 175)"
                                  }}
                                />
                              </motion.div>
                            </motion.div>
                          </motion.div>
                          <motion.span 
                            className={`text-xs ${field.filled ? 'text-black dark:text-black' : 'text-gray-600 dark:text-gray-400'}`}
                            animate={{
                              scale: field.filled ? [1, 1.1, 1] : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {field.label}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>

                   
                  </div>
                </motion.div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
