'use client';

import React, { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [contactStatus, setContactStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    // Add/remove dark class on html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setContactStatus({ 
        message: 'Please fill in all fields before sending your message.', 
        isError: true 
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await apiClient.submitContact(formData.name, formData.email, formData.message);
      setContactStatus({ 
        message: result.message || 'Thank you! Your message has been sent successfully.', 
        isError: false 
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      setContactStatus({ 
        message: error.message || 'Send failed. Please try again later.', 
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0d1023] dark:text-white">
      {/* Page Container */}
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0d1023] dark:text-white">
        {/* Page Content */}
        <main id="page-content" className="mx-auto flex max-w-6xl flex-auto flex-col px-4 pb-4 lg:px-8 lg:pb-8">
          {/* Main Header */}
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#0f142c]/95">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 lg:px-0">
              <a href="#home" className="text-lg font-semibold uppercase tracking-[0.25em] text-slate-900 dark:text-white">
                Portfolio.
              </a>
              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex">
                <a href="#home" className="transition hover:text-orange-500 dark:hover:text-orange-400">
                  Home
                </a>
                <a href="#about" className="transition hover:text-orange-500 dark:hover:text-orange-400">
                  About
                </a>
                <a href="#projects" className="transition hover:text-orange-500 dark:hover:text-orange-400">
                  Projects
                </a>
                <a href="#skills" className="transition hover:text-orange-500 dark:hover:text-orange-400">
                  Skills
                </a>
                <a href="#contact" className="transition hover:text-orange-500 dark:hover:text-orange-400">
                  Contact
                </a>
              </nav>
              <div className="flex items-center gap-3">
                <a href="#contact" className="inline-flex items-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-400">
                  Hire Me
                </a>
                <button
                  onClick={toggleDarkMode}
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-900 transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  aria-label="Toggle dark mode"
                >
                  <span className="text-xl">{darkMode ? '🌙' : '☀'}</span>
                </button>
              </div>
            </div>
          </header>
          {/* END Main Header */}

          {/* Main Content */}
          {/* Hero Section */}
          <section id="home" className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-16 shadow-xl shadow-slate-200/40 sm:px-10 lg:px-14 dark:border-white/10 dark:bg-[#111735] dark:shadow-black/30">
            <div aria-hidden="true" className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-orange-500/15 blur-3xl"></div>
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <p className="mb-4 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">
                  Grace's Portfolio
                </p>
                <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
                  Hi, I'm Grace — A Developer & Data Scientist.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  I build polished analytics experiences and data-driven dashboards that help teams spot trends, reduce risk, and make smarter decisions.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">
                    Contact Me
                  </a>
                  <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-orange-300 hover:text-orange-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-orange-300">
                    View Projects
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-4 shadow-xl shadow-slate-200/40 sm:p-6 dark:border-white/10 dark:bg-[#0b1228] dark:shadow-black/40">
                  <img src="/assets/My Pic.jpg" alt="Grace Joachim" className="h-[360px] w-[360px] rounded-[1.75rem] object-cover shadow-2xl shadow-orange-500/10" />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mt-12">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-white/10 dark:bg-[#111735] dark:shadow-black/30">
              <div className="max-w-4xl">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">About Me</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  I'm <span className="font-semibold text-orange-600 dark:text-orange-400">Grace Joachim</span>, a Developer, Data Science enthusiast, and technology educator passionate about using technology to create opportunities and solve real-world challenges.
                </p>
                
                <p className="mt-5 text-slate-700 dark:text-slate-300">
                  I am the <span className="font-semibold">Co-founder of Binti Konekti</span>, an initiative dedicated to empowering girls and young women through technology, mentorship, and digital skills development. Beyond building digital solutions, I actively contribute to technology communities and educational programs that inspire the next generation of innovators.
                </p>
                
                <p className="mt-5 text-slate-700 dark:text-slate-300">
                  I have organized and facilitated various technology and AI-focused events through organizations such as <span className="font-semibold">Teens in AI Tanzania</span>, <span className="font-semibold">Generative AI Tanzania Community</span>, <span className="font-semibold">Smart Girls in ICT</span>, and <span className="font-semibold">GirlCode</span>, helping young people explore emerging technologies, develop practical skills, and build confidence in STEM fields.
                </p>
                
                <p className="mt-5 text-slate-700 dark:text-slate-300">
                  My interests span <span className="font-semibold">web development, data science, artificial intelligence, digital education, and community building</span>. I believe technology should be accessible, inclusive, and impactful for everyone.
                </p>
              </div>
              
              <div className="mt-10 border-t border-slate-200 pt-8 dark:border-white/10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Impact at a Glance</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 dark:from-orange-950/30 dark:to-orange-900/20 border border-orange-200/50 dark:border-orange-900/50">
                    <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">100+</p>
                    <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Girls Mentored</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 dark:from-orange-950/30 dark:to-orange-900/20 border border-orange-200/50 dark:border-orange-900/50">
                    <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">120+</p>
                    <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Students in AI Programs</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 dark:from-orange-950/30 dark:to-orange-900/20 border border-orange-200/50 dark:border-orange-900/50">
                    <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">10+</p>
                    <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Projects Completed</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 dark:from-orange-950/30 dark:to-orange-900/20 border border-orange-200/50 dark:border-orange-900/50">
                    <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">5+</p>
                    <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Community Events</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 border-t border-slate-200 pt-8 dark:border-white/10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Community Leadership</h3>
                <ul className="mt-5 space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg flex-shrink-0">★</span>
                    <span>Hosted the <span className="font-semibold">International Women's Day Teens in AI Event in 2024 and 2025</span>, engaging over 120 young people in AI and innovation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg flex-shrink-0">★</span>
                    <span>Organized and facilitated meetups with the <span className="font-semibold">Generative AI Tanzania Community</span>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg flex-shrink-0">★</span>
                    <span>Led technology empowerment initiatives through <span className="font-semibold">Binti Konekti</span>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg flex-shrink-0">★</span>
                    <span>Supported digital skills development programs under <span className="font-semibold">Smart Girls in ICT</span>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg flex-shrink-0">★</span>
                    <span>Participated in and organized community technology events with <span className="font-semibold">GirlCode</span>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg flex-shrink-0">★</span>
                    <span>Conducted workshops and mentorship sessions focused on <span className="font-semibold">AI, programming, digital literacy, and career development</span>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mt-12">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-white/10 dark:bg-[#111735] dark:shadow-black/30">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Skills</h2>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">Core capabilities I use to solve analytics and frontend challenges.</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[1.75rem] bg-slate-100 p-6 dark:bg-[#0d1329]">
                  <p className="font-semibold text-slate-900 dark:text-white">SQL</p>
                  <p className="mt-3 text-slate-500 dark:text-slate-400">Complex queries, joins, window functions, and performance tuning.</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-100 p-6 dark:bg-[#0d1329]">
                  <p className="font-semibold text-slate-900 dark:text-white">Power BI</p>
                  <p className="mt-3 text-slate-500 dark:text-slate-400">Dashboard design, data modeling, and executive reporting.</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-100 p-6 dark:bg-[#0d1329]">
                  <p className="font-semibold text-slate-900 dark:text-white">Tableau</p>
                  <p className="mt-3 text-slate-500 dark:text-slate-400">Interactive visualizations and story-driven analytics.</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-100 p-6 dark:bg-[#0d1329]">
                  <p className="font-semibold text-slate-900 dark:text-white">Python</p>
                  <p className="mt-3 text-slate-500 dark:text-slate-400">Data cleaning, automation, modeling, and analytics scripting.</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-100 p-6 dark:bg-[#0d1329]">
                  <p className="font-semibold text-slate-900 dark:text-white">Data Visualization</p>
                  <p className="mt-3 text-slate-500 dark:text-slate-400">Storytelling with charts that make insights easy to understand.</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-100 p-6 dark:bg-[#0d1329]">
                  <p className="font-semibold text-slate-900 dark:text-white">Statistics</p>
                  <p className="mt-3 text-slate-500 dark:text-slate-400">Hypothesis testing, forecasting, and analytics-driven decisions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mt-12">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 dark:border-white/10 dark:bg-[#111735] dark:shadow-black/30">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">Six featured analytics and visualization projects with real-world impact.</p>
                </div>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <a href="https://github.com/GraceJoachim/healthcare-operations-patient-analytics" target="_blank" rel="noopener noreferrer" className="group rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6 transition hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_25px_60px_-25px_rgba(255,140,0,0.25)] dark:border-white/10 dark:bg-[#0d1329]">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">Healthcare Analytics</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Healthcare Operations & Patient Analytics</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">Used SQL and visual analytics to reveal patient trends, optimize care pathways, and highlight operational performance.</p>
                </a>
                <a href="https://github.com/GraceJoachim/Olist-E-commerce-Analytics" target="_blank" rel="noopener noreferrer" className="group rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6 transition hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_25px_60px_-25px_rgba(255,140,0,0.25)] dark:border-white/10 dark:bg-[#0d1329]">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">E-commerce</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Olist Sales & Customer Analytics</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">Analyzed e-commerce data to uncover revenue patterns, customer segments, and business optimization opportunities.</p>
                </a>
                <a href="https://github.com/GraceJoachim" target="_blank" rel="noopener noreferrer" className="group rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6 transition hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_25px_60px_-25px_rgba(255,140,0,0.25)] dark:border-white/10 dark:bg-[#0d1329]">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">Play Store Analytics</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Play Store Apps Analysis & Visualization</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">Cleaned and analyzed the Play Store dataset using Python and SQL, then built Power BI visuals to surface app trends.</p>
                </a>
                <a href="https://github.com/GraceJoachim" target="_blank" rel="noopener noreferrer" className="group rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6 transition hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_25px_60px_-25px_rgba(255,140,0,0.25)] dark:border-white/10 dark:bg-[#0d1329]">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">Fintech</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Fraud Detection & Revenue Dashboard</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">Analyzed transactions with Python and MySQL, then delivered a Power BI dashboard for CFO and risk leadership.</p>
                </a>
                <a href="https://github.com/GraceJoachim" target="_blank" rel="noopener noreferrer" className="group rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6 transition hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_25px_60px_-25px_rgba(255,140,0,0.25)] dark:border-white/10 dark:bg-[#0d1329]">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">Machine Learning</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Customer Churn Prediction</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">Built a churn prediction pipeline using Python and machine learning to support customer retention strategy.</p>
                </a>
                <a href="https://github.com/GraceJoachim" target="_blank" rel="noopener noreferrer" className="group rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6 transition hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_25px_60px_-25px_rgba(255,140,0,0.25)] dark:border-white/10 dark:bg-[#0d1329]">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">Marketing</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Campaign Insights</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">Analyzed campaign performance to improve targeting, increase conversions, and optimize marketing spend.</p>
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/40 dark:border-white/10 dark:bg-[#111735] dark:shadow-black/30">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                  Let's talk
                </p>
                <h2 className="mt-5 text-3xl font-semibold text-slate-900 dark:text-white">Get in touch</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300">If you need help with analytics, dashboards, or data storytelling, send a message and I'll respond quickly.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-200/40 dark:bg-[#0d1329] dark:shadow-black/20">
                {contactStatus && (
                  <div className={`rounded-3xl border p-4 text-sm ${
                    contactStatus.isError 
                      ? 'border-red-500/30 bg-red-50 text-red-900 dark:border-red-400/20 dark:bg-red-950/40 dark:text-red-200'
                      : 'border-pink-500/30 bg-pink-50 text-pink-900 dark:border-pink-400/20 dark:bg-pink-950/40 dark:text-pink-200'
                  }`}>
                    {contactStatus.message}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 dark:border-white/10 dark:bg-[#111735] dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 dark:border-white/10 dark:bg-[#111735] dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 dark:border-white/10 dark:bg-[#111735] dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-700 dark:border-white/10 dark:text-slate-400">
            <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p>Grace Joachim © {currentYear}</p>
              <div className="inline-flex items-center justify-center gap-4">
                <a href="https://www.linkedin.com/in/gracejoachim" target="_blank" rel="noopener noreferrer" className="text-slate-700 transition hover:text-orange-500 dark:text-slate-300">
                  LinkedIn
                </a>
                <a href="https://github.com/GraceJoachim" target="_blank" rel="noopener noreferrer" className="text-slate-700 transition hover:text-orange-500 dark:text-slate-300">
                  GitHub
                </a>
                <a href="https://instagram.com/gracejoachim" target="_blank" rel="noopener noreferrer" className="text-slate-700 transition hover:text-orange-500 dark:text-slate-300">
                  Instagram
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
