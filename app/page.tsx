"use client"
import { useEffect } from 'react'
import Threads from './Threads'

export default function Page() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.feature-item').forEach((item) => {
      observer.observe(item)
    })

    const btn = document.querySelector('.cta-button') as HTMLButtonElement | null
    const features = document.querySelector('.features') as HTMLElement | null
    const onClick = () => features?.scrollIntoView({ behavior: 'smooth' })
    btn?.addEventListener('click', onClick)

    return () => {
      btn?.removeEventListener('click', onClick)
      observer.disconnect()
    }
  }, [])

  return (
            <div>
      <header>
        <div className="header-inner">
          <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 108 112"
            preserveAspectRatio="xMidYMid meet"
            className="logo-mark"
            aria-hidden="true"
          >
            <g transform="translate(0,112) scale(0.05,-0.05)" fill="#000000" stroke="#000000" stroke-width="12" stroke-linejoin="round">
              <path d="M1046 1895 c-63 -116 -26 -525 50 -550 78 -26 108 333 45 540 -28 92 -50 94 -95 10z"/>
              <path d="M460 1693 c0 -101 169 -285 344 -375 236 -121 49 197 -207 353 -133 82 -137 82 -137 22z"/>
              <path d="M1590 1649 c-148 -77 -427 -471 -298 -421 17 7 43 12 57 12 70 0 371 341 371 419 0 30 -61 26 -130 -10z"/>
              <path d="M959 1183 c-98 -79 -30 -250 100 -250 83 0 141 57 141 140 0 129 -140 192 -241 110z"/>
              <path d="M293 1171 c-124 -35 -133 -46 -77 -92 88 -71 492 -59 569 18 74 74 -295 130 -492 74z"/>
              <path d="M1590 1125 c-96 -11 -270 -65 -270 -83 0 -102 581 -109 615 -7 18 53 -189 107 -345 90z"/>
              <path d="M730 897 c-105 -58 -330 -334 -330 -404 0 -109 271 92 391 290 88 143 66 183 -61 114z"/>
              <path d="M1220 839 c0 -114 306 -419 420 -419 126 0 -97 285 -326 416 -93 54 -94 54 -94 3z"/>
              <path d="M972 752 c-58 -122 -20 -552 48 -552 79 0 110 308 51 511 -37 127 -55 134 -99 41z"/>
            </g>
          </svg>
            <span>Suminos</span>
          </div>
          <div className="header-actions">
            <a href="https://app.suminos.ai" className="header-link">Sign In</a>
          
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-thread">
          <Threads amplitude={4.8} distance={1.8} enableMouseInteraction={true} style={{ opacity: 0.3 }} />
        </div>
        <div className="hero-content">
          <h1>
            Get hired faster
            <br />
            with AI powered-tools
              </h1>
          <p className="hero-subtitle">
            The AI that helps you see what's next — when old paths no longer lead
            anywhere.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
      

        <div className="feature-item">
          <div className="feature-content">
            <div className="feature-number">1</div>
            <h3>Smart Resume Optimization</h3>
            <p>
              Transform your resume with AI-powered analysis that makes it
              recruiter-friendly, highlights your top achievements, and shows
              exactly how to stand out. Upload your existing resume or create a
              polished one in minutes.
            </p>
            <div className="feature-tags">
              <span className="tag">Recruiter-Friendly Format</span>
              <span className="tag">Achievement Highlighting</span>
              <span className="tag">Intelligent Resume Builder</span>
            </div>
          </div>
          <div className="feature-visual resume-visual">
            <div className="resume-icon"></div>
            <div className="progress-bar"></div>
            <div className="resume-lines">
              <div className="resume-line"></div>
              <div className="resume-line"></div>
              <div className="resume-line"></div>
              <div className="resume-line"></div>
              <div className="resume-line"></div>
              <div className="resume-line"></div>
            </div>
            <div className="keyword-tooltip">
              Optimize keywords to match job requirements
            </div>
          </div>
            </div>
            
        <div className="feature-item">
          <div className="feature-content">
            <div className="feature-number">2</div>
            <h3>Job Application Companion</h3>
            <p>
              Stop filling out endless forms. Our AI assistant helps you auto-fill
              applications, tailor answers for each role, and submit with
              confidence — expanding your reach to more opportunities.
            </p>
            <div className="feature-tags">
              <span className="tag">Auto-Fill Applications</span>
              <span className="tag">Tailored Answers per Role</span>
              <span className="tag">Effortless Submissions</span>
            </div>
          </div>
          <div className="feature-visual application-visual">
            <div className="browser-bar">
              <div className="browser-dot"></div>
              <div className="browser-dot"></div>
              <div className="browser-dot"></div>
              <div className="browser-url">https://company.com/careers/apply</div>
                </div>
            <div className="form-content">
              <div className="assistant-badge">suminos</div>
              <div className="form-field">
                <label className="form-label">Technical Skills</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="React, TypeScript, Node.js, Python"
                />
              </div>
              <div className="form-field">
                <label className="form-label">Relevant Experience</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="5+ years full-stack development"
                />
                </div>
              <div className="form-field">
                <label className="form-label">Cover Letter</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="Passionate about building scalable..."
                />
              </div>
              <div className="form-field">
                <label className="form-label">Key Achievements</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="Led team of 5, increased performance 40%"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-content">
            <div className="feature-number">3</div>
            <h3>Track Your Progress</h3>
            <p>
              Keep every application in one place. Get real-time updates,
              reminders, and an organized dashboard so you never lose track of
              opportunities or follow-ups.
            </p>
            <div className="feature-tags">
              <span className="tag">Application Tracking</span>
              <span className="tag">Status Updates</span>
              <span className="tag">Follow-Up Reminders</span>
                    </div>
                  </div>
          <div className="feature-visual tracker-visual">
            <div className="tracker-header">
              <div className="tracker-title">Job Search Progress</div>
              <div className="tracker-count">3 applications sent</div>
            </div>
            <div className="job-card">
              <div className="job-header">
                <div>
                  <div className="job-title">Senior Software Engineer</div>
                  <div className="job-company">Stripe</div>
                  <div className="job-note">Dream company! Perfect culture fit</div>
                </div>
                <span className="status-badge status-review">Under Review</span>
              </div>
              <div className="job-stats">
                <span className="stat">📈 $180k</span>
                <span className="stat">⭐ 98% match</span>
                <span className="stat">🔥 Priority</span>
              </div>
              <div className="job-time">2 days ago</div>
            </div>
            <div className="job-card">
              <div className="job-header">
                <div>
                  <div className="job-title">Full Stack Engineer</div>
                  <div className="job-company">Notion</div>
                  <div className="job-note">Great product, exciting challenges</div>
                </div>
                <span className="status-badge status-interview">Interview</span>
              </div>
              <div className="job-stats">
                <span className="stat">📈 $160k</span>
                <span className="stat">⭐ 85% match</span>
                    </div>
              <div className="job-time">1 week ago</div>
                  </div>
            <div className="job-card">
              <div className="job-header">
                <div>
                  <div className="job-title">Software Engineer II</div>
                  <div className="job-company">Microsoft</div>
                  <div className="job-note">Stable company, good benefits</div>
                </div>
                <span className="status-badge status-applied">Applied</span>
              </div>
              <div className="job-stats">
                <span className="stat">📈 $140k</span>
                <span className="stat">⭐ 92% match</span>
              </div>
              <div className="job-time">3 days ago</div>
            </div>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-content">
            <div className="feature-number">4</div>
            <h3>Master Your Interview Game</h3>
            <p>
              Get ready to ace every interview with role-specific prep materials,
              company research insights, and practice questions tailored to your
              target positions.
            </p>
            <div className="feature-tags">
              <span className="tag">Company Research Briefs</span>
              <span className="tag">Role-Specific Question Banks</span>
              <span className="tag">Interview Practice Sessions</span>
              <span className="tag">Confidence Building Tools</span>
            </div>
          </div>
          <div className="feature-visual interview-visual">
            <div className="prep-item">
              <div className="prep-icon">🔍</div>
              <div className="prep-text">Analyzing job posting...</div>
              <div className="prep-dots">•••</div>
              <div className="prep-progress"></div>
            </div>
            <div className="prep-item">
              <div className="prep-icon">❓</div>
              <div className="prep-text">Generating interview questions...</div>
              <div className="prep-dots">•••</div>
              <div className="prep-progress"></div>
            </div>
            <div className="prep-item">
              <div className="prep-icon">🏢</div>
              <div className="prep-text">Researching company insights...</div>
              <div className="prep-dots">•••</div>
              <div className="prep-progress"></div>
            </div>
            <div className="generated-section">
              <div className="generated-title">Generated Materials</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @font-face {
          font-family: 'BIZ UDP Mincho';
          src: url('/fonts/BIZUDPMincho-Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Roboto Mono', monospace; background: #fafafa; color:rgb(52, 52, 52); overflow-x: hidden; font-weight: 500; font-size: 18px; }
        h1, h2 { font-family: 'BIZ UDP Mincho', serif; letter-spacing: normal; }
        h3 { font-family: 'Roboto Mono', monospace; font-weight: 500; }
        .hero h1 { color: #000; text-align: center; font-family: 'BIZ UDP Mincho', serif; font-size: 80px; font-style: normal; font-weight: 400; line-height: 101px; letter-spacing: -1.72px; }
        header { position: fixed; top: 0; left: 0; right: 0; padding: 20px 60px; background: rgba(250, 250, 250, 0.95); backdrop-filter: blur(10px); z-index: 1000; border-bottom: 1px solid #e0e0e0; }
        .header-inner { display: flex; align-items: center; justify-content: space-between; }
        .logo { font-family: 'Roboto Mono', monospace; font-size: 20px; font-weight: 500; color: #1a1a1a; display: inline-flex; align-items: center; gap: 8px; }
        .logo .logo-mark { width: 30px; height: 30px; display: inline-block; }
        .logo .logo-mark path { stroke: #000000; stroke-width: 12; stroke-linejoin: round; stroke-linecap: round; }
        .header-actions { display: inline-flex; align-items: center; gap: 12px; }
        .header-link { font-family: 'Roboto Mono', monospace; font-size: 14px; color: #4b5563; text-decoration: none; padding: 8px 12px; }
        .header-link:hover { color: #111827; }
        .header-cta { font-size: 14px; padding: 8px 14px; box-shadow: 0 8px 18px rgba(37, 99, 235, 0.22); transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .header-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(37, 99, 235, 0.28); }
        .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 120px 40px 80px; background: #fafafa; position: relative; overflow: hidden; }
        .hero-thread { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .hero::before { content: ''; position: absolute; bottom: -50%; left: -10%; width: 80%; height: 100%; background: linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, transparent 70%); border-radius: 50%; animation: float 20s ease-in-out infinite; }
        .hero::after { content: ''; position: absolute; top: -30%; right: -10%; width: 70%; height: 80%; background: linear-gradient(225deg, rgba(147, 197, 253, 0.03) 0%, transparent 70%); border-radius: 50%; animation: float 25s ease-in-out infinite reverse; }
        @keyframes float { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(30px, -30px) rotate(5deg); } 66% { transform: translate(-20px, 20px) rotate(-5deg); } }
        .hero-content { max-width: 900px; text-align: center; position: relative; z-index: 1; }
        h1 { font-size: 72px; line-height: 1.2; margin-bottom: 30px; color: #1a1a1a; animation: fadeInUp 0.8s ease-out; }
        .hero-subtitle { font-size: 18px; color:rgb(1, 1, 1); margin-bottom: 50px; font-weight: 300; animation: fadeInUp 0.8s ease-out 0.2s both; font-family: 'Roboto Mono', monospace; }
        .cta-button { background: #0060F3; color: white; padding: 16px 40px; border-radius: 8px; font-size: 16px; font-family: 'Roboto Mono', monospace; border: none; cursor: pointer; transition: all 0.3s ease; animation: fadeInUp 0.8s ease-out 0.4s both; }
        .cta-button:hover { background: #1d4ed8; transform: translateY(-2px); box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .features { padding: 100px 60px; background: white; }
        .features-header { text-align: center; max-width: 900px; margin: 0 auto 80px; }
        .features-header h2 { font-size: 48px; margin-bottom: 20px; color: #1a1a1a; }
        .features-header p { font-size: 16px; color: #6b7280; font-weight: 300; }
        .feature-item { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto 120px; opacity: 0; transform: translateY(40px); transition: all 0.8s ease-out; }
        .feature-item.visible { opacity: 1; transform: translateY(0); }
        .feature-item:nth-child(even) { direction: rtl; }
        .feature-item:nth-child(even) > * { direction: ltr; }
        .feature-number { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #2563eb; color: white; border-radius: 50%; font-weight: 600; margin-bottom: 20px; font-size: 18px; }
        .feature-content h3 { font-size: 32px; margin-bottom: 20px; color: #1a1a1a; }
        .feature-content p { font-size: 15px; color: #1a1a1a; line-height: 1.7; margin-bottom: 25px; font-weight: 300; }
        .feature-tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .tag { padding: 8px 16px; background: #eff6ff; color: #2563eb; border-radius: 20px; font-size: 13px; font-weight: 500; }
        .feature-visual { background: #f8fafc; border-radius: 16px; padding: 60px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04); position: relative; overflow: hidden; }
        .resume-visual { position: relative; }
        .resume-icon { position: absolute; top: 20px; right: 20px; width: 50px; height: 50px; background: #2563eb; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .resume-icon::before { content: '≡'; color: white; font-size: 24px; }
        .progress-bar { position: absolute; top: 20px; left: 0; height: 4px; background: #2563eb; width: 60%; animation: progress 2s ease-in-out infinite; }
        @keyframes progress { 0%, 100% { width: 60%; } 50% { width: 80%; } }
        .resume-lines { margin-top: 80px; }
        .resume-line { height: 12px; background: #e5e7eb; border-radius: 6px; margin-bottom: 12px; animation: shimmer 2s ease-in-out infinite; }
        .resume-line:nth-child(1) { width: 60%; }
        .resume-line:nth-child(2) { width: 80%; animation-delay: 0.2s; }
        .resume-line:nth-child(3) { width: 70%; animation-delay: 0.4s; }
        .resume-line:nth-child(4) { width: 90%; margin-top: 30px; }
        .resume-line:nth-child(5) { width: 85%; animation-delay: 0.2s; }
        .resume-line:nth-child(6) { width: 75%; animation-delay: 0.4s; }
        @keyframes shimmer { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        .keyword-tooltip { position: absolute; right: 40px; bottom: 80px; background: white; padding: 12px 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); font-size: 12px; color: #6366f1; display: flex; align-items: center; gap: 8px; animation: float 3s ease-in-out infinite; }
        .keyword-tooltip::before { content: '⚙'; }
        .application-visual { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); }
        .browser-bar { background: #f3f4f6; padding: 12px 20px; display: flex; align-items: center; gap: 8px; }
        .browser-dot { width: 12px; height: 12px; border-radius: 50%; background: #ef4444; animation: dotPulse 3s ease-in-out infinite; }
        .browser-dot:nth-child(2) { background: #fbbf24; animation-delay: .2s; }
        .browser-dot:nth-child(3) { background: #22c55e; animation-delay: .4s; }
        .browser-url { margin-left: auto; background: white; padding: 6px 20px; border-radius: 6px; font-size: 11px; color: #9ca3af; flex: 1; max-width: 400px; }
        .form-content { padding: 50px; position: relative; }
        .form-field { margin-bottom: 20px; }
        .form-label { font-size: 12px; color: #4b5563; margin-bottom: 8px; display: block; }
        .form-input { width: 100%; padding: 10px 14px; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 13px; background: #f9fafb; color: #1f2937; font-family: 'Roboto Mono', monospace; }
        .assistant-badge { position: absolute; top: 20px; right: 20px; background: #2563eb; color: white; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 500; display: flex; align-items: center; gap: 8px; animation: floatY 4s ease-in-out infinite; }
        .assistant-badge::before { content: '✓'; }
        .tracker-visual { padding: 50px; }
        .tracker-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
        .tracker-title { font-size: 14px; font-weight: 600; color: #1f2937; }
        .tracker-count { font-size: 12px; color: #6b7280; display: flex; align-items: center; gap: 6px; animation: countPulse 2s ease-in-out infinite; }
        .tracker-count::before { content: '●'; color: #2563eb; animation: glow 2.4s ease-in-out infinite; }
        .job-card { background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 15px; transition: all 0.3s ease; }
        .job-card:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); transform: translateY(-2px); }
        .job-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px; }
        .job-title { font-size: 15px; font-weight: 600; color: #1f2937; }
        .job-company { font-size: 13px; color: #6b7280; margin-bottom: 6px; }
        .job-note { font-size: 12px; color: #9ca3af; font-style: italic; margin-bottom: 12px; }
        .job-stats { display: flex; gap: 15px; font-size: 12px; color: #4b5563; margin-bottom: 10px; }
        .stat { display: flex; align-items: center; gap: 4px; }
        .status-badge { padding: 6px 12px; border-radius: 6px; font-size: 11px; font-weight: 500; box-shadow: 0 0 0 0 rgba(37,99,235,0); animation: badgePulse 3s ease-out infinite; }
        .status-review { background: #dbeafe; color: #1e40af; }
        .status-interview { background: #fef3c7; color: #92400e; }
        .status-applied { background: #e5e7eb; color: #4b5563; }
        .job-time { font-size: 11px; color: #9ca3af; margin-top: 10px; }
        .interview-visual { padding: 50px; }
        .prep-item { display: flex; align-items: center; gap: 15px; padding: 15px; background: white; border-radius: 10px; margin-bottom: 12px; position: relative; overflow: hidden; }
        .prep-icon { width: 40px; height: 40px; background: #eff6ff; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #2563eb; font-size: 20px; }
        .prep-text { flex: 1; font-size: 13px; color: #4b5563; }
        .prep-dots { color: #d1d5db; font-size: 18px; }
        .prep-progress { position: absolute; bottom: 0; left: 0; height: 2px; background: #2563eb; animation: loadProgress 8s ease-in-out infinite; }
        .prep-item:nth-child(1) .prep-progress { animation-delay: 0s; }
        .prep-item:nth-child(2) .prep-progress { animation-delay: 0.3s; }
        .prep-item:nth-child(3) .prep-progress { animation-delay: 0.6s; }
        @keyframes loadProgress { 0%, 100% { width: 0%; } 50% { width: 100%; } }
        .generated-section { margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
        .generated-title { font-size: 12px; color: #1f2937; font-weight: 600; display: flex; align-items: center; gap: 8px; }
        .generated-title::before { content: '💡'; }
        /* Micro animations */
        @keyframes dotPulse { 0%, 100% { transform: scale(1); opacity: .8; } 50% { transform: scale(1.25); opacity: 1; } }
        @keyframes floatY { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes glow { 0%, 100% { text-shadow: 0 0 0 rgba(37,99,235,0); } 50% { text-shadow: 0 0 8px rgba(37,99,235,0.6); } }
        @keyframes badgePulse { 0% { box-shadow: 0 0 0 0 rgba(37,99,235,0.0); } 50% { box-shadow: 0 0 0 6px rgba(37,99,235,0.08); } 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0); } }
        @keyframes countPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @media (max-width: 968px) { h1 { font-size: 48px; } .feature-item { grid-template-columns: 1fr; gap: 40px; } .feature-item:nth-child(even) { direction: ltr; } header, .features { padding-left: 30px; padding-right: 30px; } }
      `}</style>
    </div>
  )
}
