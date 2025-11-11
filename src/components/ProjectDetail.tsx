import { ArrowLeft, Calendar, Users, Code, Award, Lightbulb, Target, ExternalLink, Github, Download, FileText, Globe } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const projectData = {
  "opportune-ai": {
    title: "OpportuneAI",
    subtitle: "AI-powered scholarship matching platform",
    description: "OpportuneAI helps college students find scholarships that actually fit them through a simple, personalized, and inclusive search experience. The platform uses Google Gemini AI to match students with relevant scholarship opportunities based on their academic background, demographics, and personal circumstances.",
    longDescription: `Scholarships are meant to create opportunities, yet millions of dollars go unclaimed every year. The barrier is not student potential, but the time-consuming and discouraging process of finding reliable results.

With OpportuneAI, we make scholarship searching simple, accessible, and personal for every student. Through a short questionnaire on academics and personal background, the platform instantly delivers scholarships that match each student's profile.

The platform also offers Omnia, an AI assistant that guides students through FAQs, navigation, and scholarship resources, plus a calendar feature to save deadlines directly to personal calendars with one click.`,
    images: [
      "/opportuneai-screenshots/screenshot-1.png",
      "/opportuneai-screenshots/screenshot-2.png",
      "/opportuneai-screenshots/screenshot-3.png",
      "/opportuneai-screenshots/screenshot-4.png",
      "/opportuneai-screenshots/screenshot-5.png",
      "/opportuneai-screenshots/screenshot-6.png",
      "/opportuneai-screenshots/screenshot-7.png",
      "/opportuneai-screenshots/screenshot-8.png"
    ],
    technologies: ["React", "TypeScript", "FastAPI", "Python", "Google Gemini AI", "Node.js", "CSS"],
    hackathon: "HackUTA 7: Enter the Hacker-Verse",
    team: ["Ayman Fuad", "Zubair Rashaad", "Yousuf Riaz", "Abdullah Moghal"],
    features: [
      "AI-powered scholarship matching using Google Gemini",
      "Personalized questionnaire for accurate matching",
      "Omnia AI assistant for guidance and support",
      "Calendar integration for deadline management",
      "Spanish translation support",
      "Responsive design for all devices"
    ],
    challenges: [
      "Creating a matching system that felt both accurate and personal",
      "Balancing inclusivity with technical precision",
      "Integrating generative AI into a practical solution",
      "Building under tight hackathon deadlines"
    ],
    accomplishments: [
      "Working platform that genuinely makes scholarship searching simpler",
      "Blended empathy with technical design",
      "Delivered a tool students can trust",
      "Successfully integrated Google Gemini AI for intelligent matching"
    ],
    problem: "Millions of dollars in scholarships go unclaimed every year due to the time-consuming and discouraging process of finding reliable results.",
    solution: "A personalized scholarship search platform that connects students with opportunities through AI-powered matching.",
    impact: "Makes scholarship searching simple, accessible, and personal for every student, helping them find opportunities that actually fit their unique backgrounds."
  },
  "msa-website": {
    title: "MSA Website",
    subtitle: "UT Arlington Muslim Student Association Platform",
    description: "Developed and deployed a comprehensive platform for UT Arlington's MSA (Muslim Student Association) featuring event scheduling, donation systems, and membership registration that increased accessibility and engagement for 200+ students and community members.",
    longDescription: `The MSA Website project was designed to streamline communication and enhance the organization's online presence for UT Arlington's Muslim Student Association. The platform serves as a central hub for students and community members to stay connected with MSA activities, events, and initiatives.

Key features include event scheduling and management, donation systems for fundraising efforts, membership registration for new students, and comprehensive information about MSA programs and resources. The website has significantly improved accessibility and engagement, making it easier for students to participate in MSA activities and stay informed about upcoming events.

The project streamlined communication channels, boosted MSA's online visibility, and enhanced the organization's ability to manage outreach efficiently across the campus community.`,
    images: [
      "/msa-website-screenshots/screenshot-1.png",
      "/msa-website-screenshots/screenshot-2.png",
      "/msa-website-screenshots/screenshot-3.png",
      "/msa-website-screenshots/screenshot-4.png"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Web Development", "Responsive Design"],
    duration: "Jul 2025 - Aug 2025",
    team: ["Abdullah Moghal"],
    features: [
      "Event scheduling and management system",
      "Donation and fundraising platform",
      "Membership registration portal",
      "Community engagement tools",
      "Responsive design for all devices",
      "User-friendly navigation and interface"
    ],
    challenges: [
      "Creating an intuitive user experience for diverse student demographics",
      "Implementing secure donation processing",
      "Designing responsive layouts for various devices",
      "Ensuring accessibility compliance"
    ],
    accomplishments: [
      "Successfully deployed platform serving 200+ students and community members",
      "Streamlined MSA communication and event management",
      "Enhanced organization's online visibility and outreach",
      "Improved accessibility and engagement for campus community"
    ],
    problem: "UT Arlington's MSA lacked a centralized digital platform for communication, event management, and community engagement.",
    solution: "A comprehensive web platform featuring event scheduling, donation systems, and membership registration to centralize MSA operations and improve community engagement.",
    impact: "Increased accessibility and engagement for 200+ students and community members while streamlining communication and boosting MSA's online visibility."
  },
  "nocturne": {
    title: "Nocturne",
    subtitle: "Chrome Extension for Custom Website Themes",
    description: "Nocturne is a Chrome extension that lets you apply custom themes to all websites — not just dark mode. You can choose dark, light, sepia, or your own background and text colors to personalize your browsing experience and reduce eye strain.",
    longDescription: `Nocturne is a Chrome extension that lets you apply custom themes to all websites — not just dark mode. You can choose dark, light, sepia, or your own background and text colors to personalize your browsing experience and reduce eye strain.

The extension follows a simple Chrome Extension architecture with a popup UI for theme selection, content scripts that inject CSS filters and theme rules into websites, and the Chrome Storage API to save user preferences across sessions. It works on all websites and provides a lightweight, fast solution for consistent browsing comfort.

Perfect for students, developers, and night readers who want to reduce eye strain and create a personalized browsing experience across all websites they visit.`,
    images: [
      "/nocturne-screenshots/screenshot-1.png",
      "/nocturne-screenshots/screenshot-2.png"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Chrome Extension", "Chrome Storage API", "Content Scripts"],
    duration: "Sep 2025 - Sep 2025",
    team: ["Abdullah Moghal"],
    features: [
      "Force dark mode on any website",
      "Customize background and text colors to your preference",
      "One-click toggle from the toolbar",
      "Saves your settings automatically across sessions",
      "Lightweight, fast, and works everywhere",
      "Multiple theme options (dark, light, sepia, custom)"
    ],
    challenges: [
      "Creating CSS filters that work across diverse website layouts",
      "Implementing Chrome Storage API for persistent user preferences",
      "Ensuring compatibility with various website structures",
      "Building an intuitive popup interface for theme selection"
    ],
    accomplishments: [
      "Successfully published on Chrome Web Store with 4.7/5 rating",
      "Lightweight extension (38.39KiB) that works on all websites",
      "Automatic preference saving across browser sessions",
      "One-click theme switching with instant visual feedback"
    ],
    problem: "Many websites don't offer dark mode or customizable themes, causing eye strain during extended browsing sessions, especially at night.",
    solution: "A Chrome extension that applies custom themes to any website, allowing users to personalize their browsing experience with dark mode, custom colors, and other visual preferences.",
    impact: "Reduces eye strain and provides a consistent, personalized browsing experience across all websites, improving comfort for students, developers, and night readers."
  },
  "insight": {
    title: "InsighT",
    subtitle: "PM Intelligence Dashboard",
    description: "InsighT stitches together fragmented signals into a single intelligence layer: what's happening, where it's happening, how bad it is, and what to do next. We built a scalable ingestion pipeline, a thoughtful UI that emphasizes clarity, and an AI layer that transforms insights into prioritized opportunities.",
    longDescription: `About the project

InsighT stitches together fragmented signals into a single intelligence layer: what's happening, where it's happening, how bad it is, and what to do next. We built a scalable ingestion pipeline, a thoughtful UI that emphasizes clarity, and an AI layer that transforms insights into prioritized opportunities.

We set out to give PMs the power to see, understand, and act. Along the way, we solved SSR pitfalls, map layering/z-index issues, and model compatibility quirks. This helped deliver a focused, production-ready experience that PMs can trust.

Inspiration

InsighT was born from a simple question PMs ask daily: "Where are customers hurting right now, and what should we do about it?" Feedback is scattered across social media, outage trackers, forums, and support logs. We wanted a single pane of glass that turns raw noise into prioritized, location-aware, actionable intelligence.

What it does

• Consolidates multi-source customer signals (Reddit, outage trackers, community forums, internal feedback) into a unified timeline.
• Computes a Customer Happiness Index (CHI) and trends by product area (Network, Mobile App, Billing, Home Internet).
• Visualizes geographic clusters via a Leaflet heatmap and overlays live outage markers.
• Surfaces "Top Emerging Issues" ranked by intensity and sentiment.
• Generates AI-powered, actionable opportunities with priority/urgency, root cause analysis, recommended actions, impact, and stakeholders using Google Gemini 2.0 Flash.
• Provides a clean, on-brand dashboard with charts (Recharts), timelines, distribution, source breakdown, and an early-warning panel.

How we built it

Frontend: Next.js (App Router), React, TypeScript, Tailwind, Radix UI.
Data: Supabase (Postgres, RLS), server actions, SSR/edge-friendly API routes.
Ingestion: Scrapers for Reddit, News, DownDetector, IsTheServiceDown, Outage.Report, plus customer feedback; processed into normalized "signals".
Processing: Sentiment scoring, topic detection, deduplication/merging, and intensity weighting.
Geo: Leaflet + react-leaflet + leaflet.heat with OpenStreetMap tiles and Nominatim geocoding.
Visualizations: Recharts for CHI, timelines, distribution; custom UI for issue velocity and early warnings.
AI: Google Gemini 2.0 Flash for insights on emerging issues via secure server-side API routes.
Ops: CRON-secured ingestion endpoint; environment variables for Supabase and Gemini.

What we learned

Designing for SSR + client-only libs requires disciplined boundaries and dynamic loading. Weighting and normalization are critical for trustworthy visual signals (especially heatmaps). Good AI prompts and response validation dramatically improve actionability. Small DX investments (diagnostic logs, fallbacks, typed schemas) accelerate debugging and iteration.

What's next for InsighT

Real-time streaming updates via websockets for live dashboards. Advanced filters (time range, geo bounding boxes, product area, channel). Deeper ML: trend forecasting, anomaly detection, and clustering of root causes. Workflow integrations (Jira/Linear/Slack) to turn insights into tracked opportunities. Team collaboration: comments, assignments, and change history. Mobile-friendly PM views and alerting for critical spikes.`,
    images: [
      "/insight-screenshots/screenshot-1.png",
      "/insight-screenshots/screenshot-2.png",
      "/insight-screenshots/screenshot-3.png"
    ],
    workflowImage: "/insight-screenshots/workflow.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Supabase", "PostgreSQL", "Leaflet", "Recharts", "Google Gemini 2.0 Flash", "OpenStreetMap", "Cheerio", "Node.js", "Vercel", "Reddit API"],
    hackathon: "🏆 2nd Place Winner in T-Mobile Track at HackUTD 2025: Lost in the Pages",
    duration: "2025",
    team: ["Abdullah Moghal", "Ahsan Amir", "Mohammed Ahmed"],
    features: [
      "Multi-source signal consolidation (Reddit, outage trackers, forums, support logs)",
      "Customer Happiness Index (CHI) tracking and trending by product area",
      "Geographic heatmaps with Leaflet and live outage markers",
      "Top Emerging Issues ranked by intensity and sentiment",
      "AI-powered actionable opportunities with Google Gemini 2.0 Flash",
      "Real-time dashboard with charts, timelines, and early-warning panels",
      "Scalable ingestion pipeline with CRON-secured endpoints",
      "Sentiment scoring, topic detection, and deduplication/merging"
    ],
    challenges: [
      "SSR vs client-only libraries: Leaflet requires the browser. Fixed with dynamic imports and a client wrapper.",
      "Hydration and z-index conflicts: Resolved dialog/modal stacking over a sticky navbar; eliminated <div> inside <p> hydration issues.",
      "Model/version mismatches: Updated Gemini to 2.0 Flash and hardened error handling for model availability.",
      "Data sparsity and weighting: Tuned intensity/sentiment normalization so heatmaps show meaningful medium/high hotspots (not only \"low blue\").",
      "Time windows: Standardized 24-hour windows with graceful fallbacks for empty datasets and added diagnostics."
    ],
    accomplishments: [
      "🏆 2nd Place Winner in T-Mobile Track at HackUTD 2025: Lost in the Pages",
      "Competed in the largest 24-hour hackathon in North America with 37% acceptance rate and over 1,100 teams",
      "A cohesive, brand-aligned PM dashboard that goes from raw signals to actionable opportunities",
      "Real-time, geo-aware heatmaps and outage overlays using only free mapping/geocoding services",
      "AI-generated, non-generic recommendations with priority/urgency and stakeholders—useful out of the box",
      "Robust ingestion + processing pipeline with deduplication and topic detection",
      "Clean, accessible UI with responsive layouts and clear information hierarchy"
    ],
    problem: "PMs struggle to see where customers are hurting right now and what to do about it. Feedback is scattered across social media, outage trackers, forums, and support logs, making it difficult to prioritize and act on critical issues.",
    solution: "InsighT provides a single pane of glass that consolidates fragmented customer signals into a unified intelligence layer with geographic visualization, sentiment analysis, and AI-powered actionable opportunities.",
    impact: "Delivers a focused, production-ready experience that PMs can trust, transforming raw noise into prioritized, location-aware, actionable intelligence that helps teams make data-driven decisions faster."
  },
  "paper-1": {
    title: "CAST AI: AI-Powered Inventory Forecasting and Strategic Decision Support for SMEs",
    subtitle: "Research Paper",
    course: "INSY 4391: Generative AI in Business",
    description: "CAST AI is a research paper exploring how predictive and generative AI can transform inventory forecasting for small-to-medium enterprises (SMEs). The system integrates predictive analytics with GPT-4o-powered natural-language generation to forecast demand, explain recommendations in plain language, and enable data-driven procurement decisions. Key findings show that combining statistical forecasting with conversational AI improves decision accuracy, reduces overstocking and stockouts, and bridges the gap between data science and everyday business use.",
    longDescription: `This research introduces a hybrid AI architecture combining narrow AI forecasting with generative AI explanations. Historical sales data are cleaned and decomposed into trend, seasonal, and residual components, augmented with weather and holiday data. GPT-4o then converts model outputs into plain-English insights, automated reports, and email drafts. Prompt engineering defined the AI's role as an inventory advisor and established structured templates for forecast explanations, scenario simulations, and Q&A responses. Iterative user testing refined tone, clarity, and risk-analysis quality. Findings reveal that thoughtful configuration and prompt design enable SMEs to interpret complex analytics, improving operational efficiency and inventory performance.`,
    pdfUrl: "/pdf-redirects/CAST_AI (2).pdf",
    date: "2024",
    topics: ["AI Integration", "Predictive Modeling", "SME Decision Support"],
    type: "paper",
    abstract: "Small and medium-sized enterprises often lack advanced forecasting tools, leading to overstocking, stockouts, and financial losses. This paper presents CAST AI—a hybrid AI system that combines predictive modeling for demand forecasting with generative AI for explainable, human-readable insights. The research employs historical sales data, weather forecasts, holiday calendars, and sentiment analysis to generate accurate forecasts and actionable recommendations. Iterative testing, parameter tuning, and prompt engineering ensured interpretability and reliability. Results demonstrate measurable reductions in forecasting error and improved decision confidence among non-technical users.",
    authors: ["Abdullah Moghal", "Imthiaz Faizal", "Zayd Alnachef"],
    keywords: ["AI Forecasting", "Prompt Engineering", "Inventory Management", "SME Analytics", "Decision Support"],
    problem: "SMEs struggle with poor inventory allocation due to limited analytical tools, resulting in wasted capital, customer dissatisfaction, and reactive planning.",
    solution: "CAST AI unites predictive models and GPT-4o-based language generation to provide both accurate forecasts and clear explanations. The system supports \"what-if\" simulations, trend detection, and chatbot-based decision support, empowering managers to make proactive, informed choices.",
    impact: "CAST AI demonstrated clear business impact—reducing inventory-related losses, enabling proactive decision-making, and increasing trust in AI-driven insights. The approach shows how accessible, explainable AI can democratize advanced forecasting for SMEs, driving efficiency and competitiveness."
  },
  "paper-2": {
    title: "Calmē: Mindful Energy for a Burnt-Out Generation",
    subtitle: "Research Paper",
    course: "Maverick Marketing Intelligence Competition 2025",
    description: "Calmē is a functional beverage concept designed for Gen Z, addressing the gap between hyperactive energy drinks and genuine wellness needs. Developed for the Maverick Marketing Intelligence Competition 2025, this project positions Calmē as a mindful alternative to traditional energy drinks, offering sustained focus without crashes. The research reveals that 77% of Gen Z consumes energy drinks, but 38% experience crashes and 18% report jitters—exposing a critical market opportunity for calm, sustained energy.",
    longDescription: `The functional beverage market is saturated with brands like Red Bull, Monster, Celsius, and Prime that promote hyperactivity and constant motion. Yet Gen Z audiences report record burnout and fatigue. Deloitte (2024) found that 40% of Gen Z experience persistent anxiety and stress, while Gallup (2023) research shows chronic stress reduces engagement and cognitive ability.

Our team acted as innovation consultants for Pulse, a Dallas–Fort Worth beverage company entering the functional beverage market. Through comprehensive research including a survey of 100 Gen Z students, we discovered that while 77% consume energy drinks, 38% report "crashes" and 18% experience "jitters." Many described it as "fake energy." TikTok trends (#overstimulated, #burnout, #quietquitting) reveal a cultural rejection of hustle culture, with Gen Z seeking calm focus, emotional balance, and sustained mental clarity.

Calmē redefines what "energy" means by combining 50 mg natural caffeine with L-theanine and B-vitamins to deliver sustained focus without the crash. Inspired by Liquid Death's counter-culture branding, Calmē features minimalist design with the message "Focus, without the crash" and a tone of mindful rebellion. The brand positions itself as authenticity over performance, calm energy over constant grind.

Market opportunity is validated by McKinsey (2025), Mintel (2025), and The Food Institute (2025), showing increased spending on cognitive and wellness-oriented beverages. Calmē represents a strategic pivot from performance-driven energy to mindful, sustained focus—addressing both functional needs and cultural values of a generation seeking balance in an overstimulated world.`,
    pdfUrl: "/pdf-redirects/Calmē_ Mindful Energy for a Burnt-Out Generation MMIS Submission.pdf",
    date: "2024",
    topics: ["Marketing Strategy", "Consumer Research", "Brand Innovation"],
    type: "paper",
    abstract: "The functional beverage market is dominated by brands promoting hyperactivity, yet Gen Z reports record burnout and fatigue. This research project, developed for the Maverick Marketing Intelligence Competition 2025, identifies a critical gap: while 77% of Gen Z consumes energy drinks, 38% experience crashes and 18% report jitters. Through consumer research, trend analysis, and market validation, we developed Calmē—a functional beverage concept that redefines energy as calm, sustained focus. The solution combines natural caffeine with L-theanine and B-vitamins, positioned through minimalist branding and mindful messaging. Research validates a growing market opportunity for cognitive and wellness-oriented beverages, with Calmē addressing both functional needs and cultural values of a generation seeking balance.",
    authors: ["Abdullah Moghal", "Yousuf Riyaz"],
    keywords: ["Functional Beverages", "Gen Z Marketing", "Brand Strategy", "Consumer Research", "Market Innovation"],
    problem: "The functional beverage market is saturated with brands promoting hyperactivity and constant motion, yet Gen Z audiences report record burnout and fatigue. While 77% of Gen Z consumes energy drinks, 38% experience crashes and 18% report jitters—revealing a disconnect between product offerings and genuine consumer needs. Traditional energy drinks deliver 'fake energy' that doesn't align with Gen Z's rejection of hustle culture and desire for calm focus and emotional balance.",
    solution: "Calmē redefines what 'energy' means by combining 50 mg natural caffeine with L-theanine and B-vitamins to deliver sustained focus without the crash. Inspired by Liquid Death's counter-culture branding, Calmē features minimalist design with the message 'Focus, without the crash' and positions itself as authenticity over performance, calm energy over constant grind. The brand addresses both functional needs and cultural values of a generation seeking balance.",
    impact: "Calmē represents a strategic pivot from performance-driven energy to mindful, sustained focus. Market opportunity is validated by McKinsey (2025), Mintel (2025), and The Food Institute (2025), showing increased spending on cognitive and wellness-oriented beverages. The concept addresses the cultural shift away from hustle culture, offering Gen Z a beverage that aligns with their values of authenticity, balance, and genuine wellness—transforming the functional beverage category from hyperactive performance to mindful energy."
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projectData[projectId as keyof typeof projectData];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-accent mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
          
          <div className={`flex flex-col ${'type' in project && project.type === "paper" ? '' : 'lg:flex-row'} items-center gap-12`}>
            <div className={`${'type' in project && project.type === "paper" ? 'w-full' : 'lg:w-1/2'} text-center lg:text-left`}>
              <h1 className="text-5xl md:text-6xl font-black text-accent mb-4">
                {project.title}
              </h1>
              {'course' in project && project.course && (
                <p className="text-lg md:text-xl text-accent font-semibold mb-4">
                  {project.course}
                </p>
              )}
              {(!('type' in project) || project.type !== "paper") && (
                <p className="text-xl md:text-2xl text-black/70 mb-6">
                  {project.subtitle}
                </p>
              )}
              <p className="text-lg text-black leading-relaxed mb-8">
                {project.description}
              </p>
              
                  {/* Project Stats */}
                  {'type' in project && project.type === "paper" ? (
                    <div className="mb-8">
                      <a
                        href={'pdfUrl' in project ? project.pdfUrl : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg"
                      >
                        <Download className="w-5 h-5" />
                        Download/View Paper
                      </a>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-center gap-4 mb-3">
                        {projectId === "opportune-ai" ? (
                          <>
                            <a 
                              href="https://devpost.com/software/opportuneai-b8fqov" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on Devpost"
                            >
                              <ExternalLink className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            
                            <a 
                              href="https://github.com/AbdullahMoghal/opportune-ai-scholarships" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on GitHub"
                            >
                              <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                          </>
                        ) : projectId === "msa-website" ? (
                          <>
                            <a 
                              href="https://msaatuta.org/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View Website"
                            >
                              <ExternalLink className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            
                            <a 
                              href="https://github.com/utamsa/uta-website" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on GitHub"
                            >
                              <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                          </>
                        ) : projectId === "insight" ? (
                          <>
                            <a 
                              href="https://insight-tmobile.us" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View Live Site"
                            >
                              <Globe className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            
                            <a 
                              href="https://devpost.com/software/t-insights" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on Devpost"
                            >
                              <ExternalLink className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            
                            <a 
                              href="https://github.com/AbdullahMoghal/t-insight-hack2025" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on GitHub"
                            >
                              <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                          </>
                        ) : (
                          <>
                            <a 
                              href="https://chromewebstore.google.com/detail/nocturne/nhpckgdgnbdmmpbdkajggbalhokligfh" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on Chrome Web Store"
                            >
                              <ExternalLink className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            
                            <a 
                              href="https://github.com/AbdullahMoghal/Nocturne-chrome-extension" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors group"
                              title="View on GitHub"
                            >
                              <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                          </>
                        )}
                      </div>
                      <p className="text-lg font-bold text-accent mb-1">Project Links</p>
                      <p className="text-sm text-black/70">
                        {projectId === "opportune-ai" ? "Devpost & GitHub" : 
                         projectId === "msa-website" ? "Website & GitHub" : 
                         projectId === "insight" ? "Live Site, Devpost & GitHub" :
                         "Chrome Store & GitHub"}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <Code className="w-8 h-8 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-accent">{'technologies' in project ? project.technologies.length : 0}</p>
                      <p className="text-sm text-black/70">Technologies</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-accent">{'team' in project ? project.team.length : 0}</p>
                      <p className="text-sm text-black/70">Team Members</p>
                    </div>
                      </>
                    </div>
                  )}
            </div>
            
            {/* Project Image - Only for non-papers */}
            {(!('type' in project) || project.type !== "paper") && (
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-full max-w-lg">
                  <img 
                    src={projectId === "opportune-ai" ? "/opportuneai-thumbnail.png" : 
                         projectId === "msa-website" ? "/msa-website-thumbnail.png" : 
                         projectId === "insight" ? "/Insight thumbnail.png" :
                         "/nocturne-thumbnail.png"}
                    alt={`${project.title} Project Thumbnail`}
                    className="w-full h-auto object-contain rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* For Papers - Abstract Section */}
            {'type' in project && project.type === "paper" && (
              <section>
                <h2 className="text-3xl font-bold text-accent mb-6">Abstract</h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <p className="text-black leading-relaxed">{'abstract' in project ? project.abstract : ''}</p>
                </div>
                
                <div className="mb-6">
                  <a
                    href={'pdfUrl' in project ? project.pdfUrl : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download Full Paper (PDF)
                  </a>
                </div>
              </section>
            )}

            {/* Problem & Solution */}
            <section>
              <h2 className="text-3xl font-bold text-accent mb-6">
                {'type' in project && project.type === "paper" ? "Research Overview" : "The Challenge"}
              </h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">The Problem</h3>
                    <p className="text-red-700">{project.problem}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Our Solution</h3>
                    <p className="text-green-700">{project.solution}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Process Flow - Only for insight project */}
            {projectId === "insight" && 'workflowImage' in project && project.workflowImage && (
              <section>
                <h2 className="text-3xl font-bold text-accent mb-6">Process Flow</h2>
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={project.workflowImage} 
                    alt={`${project.title} Process Flow`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </section>
            )}

            {/* Project Screenshots - Only for non-papers */}
            {(!('type' in project) || project.type !== "paper") && 'images' in project && project.images && (
              <section>
                <h2 className="text-3xl font-bold text-accent mb-6">Project Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={image} 
                        alt={`${project.title} Screenshot ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
            )}

            {/* Long Description for Papers */}
            {'type' in project && project.type === "paper" && project.longDescription && (
              <section>
                <h2 className="text-3xl font-bold text-accent mb-6">Full Description</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-black leading-relaxed whitespace-pre-line">
                    {project.longDescription}
                  </p>
                </div>
              </section>
            )}

            {/* Features - Only for non-papers */}
            {(!('type' in project) || project.type !== "paper") && 'features' in project && project.features && (
              <section>
                <h2 className="text-3xl font-bold text-accent mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-black">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
            )}

            {/* Technical Implementation - Only for non-papers */}
            {(!('type' in project) || project.type !== "paper") && (
              <section>
                <h2 className="text-3xl font-bold text-accent mb-6">Technical Implementation</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">How We Built It</h3>
                  <p className="text-black leading-relaxed mb-4">
                    {projectId === "opportune-ai" 
                      ? "We developed OpportuneAI with React and TypeScript for the frontend, and FastAPI with Python for the backend. To power intelligent matches and conversational support, we integrated the Google Gemini API, which drives both scholarship recommendations and Omnia's AI-powered responses."
                      : projectId === "msa-website"
                      ? "We developed the MSA Website using HTML, CSS, and JavaScript to create a responsive and user-friendly platform. The website features clean, semantic HTML structure for accessibility, modern CSS for responsive design across all devices, and JavaScript for interactive functionality including event scheduling, donation processing, and membership registration systems."
                      : "We developed Nocturne as a Chrome extension using HTML, CSS, and JavaScript with Chrome Extension APIs. The extension uses content scripts to inject CSS filters and theme rules into websites, a popup UI for theme selection, and the Chrome Storage API to persist user preferences across sessions. The architecture ensures lightweight performance while providing comprehensive theme customization across all websites."
                    }
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {'technologies' in project && project.technologies.map((tech, index) => (
                    <div key={index} className="text-center p-3 bg-white rounded-lg">
                      <p className="text-sm font-medium text-accent">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            )}

            {/* Impact */}
            <section>
              <h2 className="text-3xl font-bold text-accent mb-6">Impact & Results</h2>
              <div className="bg-accent/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-accent mb-4">Project Impact</h3>
                <p className="text-black leading-relaxed mb-4">{project.impact}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {'accomplishments' in project && project.accomplishments.map((accomplishment, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-black text-sm">{accomplishment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies or Topics */}
            <section>
              <h3 className="text-xl font-bold text-accent mb-4">
                {'type' in project && project.type === "paper" ? "Research Topics" : "Technologies Used"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {('type' in project && project.type === "paper" 
                  ? ('topics' in project ? project.topics : [])
                  : ('technologies' in project ? project.technologies : [])
                )?.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {/* Paper Details - Only for papers */}
            {'type' in project && project.type === "paper" && (
              <section>
                <h3 className="text-xl font-bold text-accent mb-4">Paper Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-black/70">Authors</p>
                      <p className="text-black font-medium">{'authors' in project ? project.authors?.join(", ") : ''}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-black/70">Publication Date</p>
                      <p className="text-black font-medium">{'date' in project ? project.date : ''}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-black/70 mb-2">Keywords</p>
                    <div className="flex flex-wrap gap-2">
                      {'keywords' in project && project.keywords?.map((keyword, index) => (
                        <span key={index} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Project Info - Only for non-papers */}
            {(!('type' in project) || project.type !== "paper") && (
              <section>
                <h3 className="text-xl font-bold text-accent mb-4">Project Details</h3>
                <div className="space-y-4">
                  {'hackathon' in project && project.hackathon && (
                    <>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-sm text-black/70">Hackathon</p>
                          <p className="text-black font-medium">{project.hackathon}</p>
                        </div>
                      </div>
                      {projectId === "insight" && (
                        <div className="pl-8 space-y-2 text-sm text-black/70">
                          <p>• Largest 24-hour hackathon in North America</p>
                          <p>• 37% acceptance rate</p>
                          <p>• Over 1,100 teams competed</p>
                        </div>
                      )}
                    </>
                  )}
                  
                  {'duration' in project && project.duration && (
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-sm text-black/70">Duration</p>
                        <p className="text-black font-medium">{project.duration}</p>
                      </div>
                    </div>
                  )}
                  
                  {'team' in project && (
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-sm text-black/70">Team Members</p>
                        <div className="text-black font-medium">
                          {project.team.map((member, index) => (
                            <span key={index}>
                              {member}
                              {index < project.team.length - 1 && ", "}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Accomplishments - Only for non-papers */}
            {(!('type' in project) || project.type !== "paper") && 'accomplishments' in project && project.accomplishments && (
              <section>
                <h3 className="text-xl font-bold text-accent mb-4">Accomplishments</h3>
                <div className="space-y-3">
                  {project.accomplishments.map((accomplishment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-black">{accomplishment}</p>
                  </div>
                ))}
              </div>
            </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
