import { HeroSection, GeneralSection, TwoColumnSection } from './components/sections';
import { StaggerItem, StepItem } from './components';
import { Edit3, Search, MessageCircle } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection>
        <div className="relative text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Get Hired Faster — <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">With AI + Expert Guidance</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
                Skip the stress of endless edits and scattered applications. We'll polish your resume, match you to the right roles, and coach you for interviews — so you feel confident every step of the way.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.suminos.ai" className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
                Optimize My Resume
              </a>
            </div>
            
            {/* Value Badges */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6 justify-center items-center">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-200/80 dark:border-slate-600/60 shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto max-w-xs sm:max-w-none">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-600 flex items-center justify-center">
                  <Edit3 className="w-4 h-4 text-slate-600 dark:text-slate-200" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">AI Resume Polish</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-200/80 dark:border-slate-600/60 shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto max-w-xs sm:max-w-none">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-600 flex items-center justify-center">
                  <Search className="w-4 h-4 text-slate-600 dark:text-slate-200" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Smart Job Search</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-200/80 dark:border-slate-600/60 shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto max-w-xs sm:max-w-none">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-600 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-slate-600 dark:text-slate-200" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Interview Prep</span>
              </div>
            </div>
          </div>
        </div>
      </HeroSection>


      {/* How It Works Section */}
      <GeneralSection id="how-it-works" stagger>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Land Your Dream Job with Confidence
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            AI that enhances your resume, finds better opportunities, and preps you for interviews — so you get hired for the right role, not just any role.
          </p>
        </div>
        
        <div className="mt-20 relative journey-pathway lg:px-16">
          {/* Connecting line on the left */}
          <div className="hidden lg:block absolute left-24 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-900 to-blue-700"></div>
          
          <div className="space-y-24">
            {/* Step 1 */}
            <StepItem
              number={1}
              title="Smart Resume Optimization"
              description="Transform your resume with AI-powered analysis that makes it recruiter-friendly, highlights your top achievements, and shows exactly how to stand out. Upload your existing resume or create a polished one in minutes."
              features={["Recruiter-Friendly Format", "Achievement Highlighting", "Intelligent Resume Builder"]}
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              illustrationLabel="Resume Builder Interface"
            />

            {/* Step 2 */}
            <StepItem
              number={2}
              title="Job Application Companion"
              description="Stop filling out endless forms. Our AI assistant helps you auto-fill applications, tailor answers for each role, and submit with confidence — expanding your reach to more opportunities."
              features={["Auto-Fill Applications", "Tailored Answers per Role", "Effortless Submissions"]}
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              }
              illustrationLabel="Application Assistant"
            />

            {/* Step 3 */}
            <StepItem
              number={3}
              title="Track Your Progress"
              description="Keep every application in one place. Get real-time updates, reminders, and an organized dashboard so you never lose track of opportunities or follow-ups."
              features={["Application Tracking", "Status Updates", "Follow-Up Reminders"]}
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              illustrationLabel="Progress Dashboard"
            />

            {/* Step 4 */}
            <StepItem
              number={4}
              title="Master Your Interview Game"
              description="Get ready to ace every interview with role-specific prep materials, company research insights, and practice questions tailored to your target positions."
              features={["Company Research Briefs", "Role-Specific Question Banks", "STAR Method Coaching", "Confidence Building Tools"]}
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              illustrationLabel="Interview Mastery Interface"
            />
            
            {/* Coming Soon */}
            <StaggerItem>
              <div className="relative">
                <div className="flex items-start">
                  <div className="hidden lg:flex w-16 flex-shrink-0 justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs relative z-10">
                      🌟
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Smart Job Discovery
                      </h3>
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Discover AI-matched opportunities based on your skills and preferences, and apply with one click.
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </div>
        </div>
      </GeneralSection>

      {/* Final CTA Section */}
      <GeneralSection maxWidth="4xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Ready to Land Your Dream Job?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Join 10,000+ job seekers who've optimized their resumes and landed interviews 3x faster with our AI platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="https://app.suminos.ai" className="btn-primary text-lg px-8 py-4">
              Optimize My Resume
            </a>
          </div>
        </div>
      </GeneralSection>
    </div>
  )
}
