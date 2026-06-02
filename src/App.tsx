import { Mail, Phone, MapPin, ExternalLink, Linkedin } from 'lucide-react';

const coreSkills = [
  { name: 'React Native', level: 'Expert', years: '8 yrs' },
  { name: 'React.js', level: 'Expert', years: '8 yrs' },
  { name: 'JavaScript / TypeScript', level: 'Expert', years: '8 yrs' },
  { name: 'Firebase / DynamoDB', level: 'Expert', years: '8 yrs' },
  { name: 'Redux / State Mgmt', level: 'Proficient', years: '6 yrs' },
  { name: 'GraphQL / REST APIs', level: 'Proficient', years: '6 yrs' },
  { name: 'Expo / React Navigation', level: 'Proficient', years: '8 yrs' },
  { name: 'AWS (Cognito, Amplify, S3)', level: 'Proficient', years: '5 yrs' },
  { name: 'CI/CD & DevOps', level: 'Proficient', years: '5 yrs' },
  { name: 'Node.js', level: 'Proficient', years: '5 yrs' },
  { name: 'Flutter', level: 'Proficient', years: '2 yrs' },
];

const aiTools = ['Cursor AI', 'ChatGPT', 'Claude', 'Bolt'];

const flagshipProjects = [
  {
    name: 'UR.Life — Health & Wellness Platform',
    role: 'Senior Developer · Health & Wellness Platform',
    stack: 'React Native, React.js, Firebase, TV App',
    impact:
      'Wellness super-app for content, consultations, and subscriptions, scaled to 150K users.',
  },
  {
    name: 'Nav App — City of Navotas (Philippines)',
    role: 'Lead Flutter Developer · Government Digital Services',
    stack: 'Flutter, REST APIs, Offline Sync',
    impact:
      'Citizen-services app for registrations, complaints, and city updates, actively used by 250K users.',
  },
  {
    name: '42 Cards — Credit Card Management',
    role: 'Frontend Developer · Fintech Platform',
    stack: 'React.js, GraphQL, AWS (Cognito/Amplify)',
    impact:
      'Credit-card operations platform for issuance, billing, and compliance workflows used by multi-bank teams.',
  },
  {
    name: 'Leo1 — EdTech Fee Management',
    role: 'Full-Stack Developer · EdTech Fee Platform',
    stack: 'React Native, React.js, Node.js, Cognito',
    impact:
      'School fee and payment app for parents, students, and admins, used by 100K users.',
  },
];

const App = () => {
  return (
    <main className="font-sans antialiased text-gray-800 bg-gray-100 p-2 md:p-4 print:p-0 text-[10px]">
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg print:shadow-none">
        <div className="flex flex-col md:flex-row print:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-2/3 print:w-2/3 p-4 print:p-3">
            {/* Header */}
            <header className="mb-2 print:mb-1.5">
              <h1 className="text-xl font-bold text-gray-900">Rajender Reddy Garlapally</h1>
              <h2 className="text-sm font-semibold text-blue-600">Senior Software Engineer - React Native</h2>
              <div className="flex flex-nowrap items-center gap-x-2 mt-1 text-[9.5px] text-gray-600">
                <a
                  href="https://rajender-reddy-garlapally.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-blue-600 whitespace-nowrap"
                >
                  <ExternalLink size={12} />
                  <span>rajender-reddy-garlapally.vercel.app</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rajenderreddy-fullstackdeveloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-blue-600 whitespace-nowrap"
                >
                  <Linkedin size={12} />
                  <span>https://www.linkedin.com/in/rajenderreddy-fullstackdeveloper/</span>
                </a>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-2 print:mb-1.5">
              <h3 className="text-base font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1">
                Professional Summary
              </h3>
              <p className="text-[11px] text-gray-700 leading-snug text-justify">
                React Native & full-stack specialist with 8+ years building cross-platform products across health,
                fintech, and government — currently leading 3 product teams at OSI Digital. Shipped 14+ production
                apps serving 250K+ users across mobile, web, and TV. Proven impact: 35%+ faster load times and
                quicker releases via CI/CD, plus AI-augmented delivery (Cursor, ChatGPT, Claude) over the last
                2 years to speed scaffolding, debugging, and review cycles.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-2 print:mb-1.5">
              <h3 className="text-base font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1">
                Work Experience
              </h3>

              <div className="space-y-1.5 print:space-y-1">
                <div>
                  <h4 className="text-[12.5px] font-semibold text-gray-900">Senior Software Engineer</h4>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[11.5px] text-blue-600 font-medium">OSI Digital Pvt Ltd. • Hyderabad, India</p>
                    <span className="text-[10.5px] text-gray-500 font-bold">Mar 2024 - Present</span>
                  </div>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4 leading-snug">
                    <li>
                      Lead 3 cross-functional product teams (12+ engineers) across 5+ React Native and React.js
                      products, partnering directly with CTO-level leadership on architecture and roadmap; reduced
                      release cycle from 3 weeks to 1.5 weeks and cut cold-start by 35% for a 200K+ MAU app.
                    </li>
                    <li>
                      Drove AI-first delivery (2024–present) using Cursor AI, ChatGPT, and Claude for scaffolding,
                      tests, and PR reviews — reducing feature delivery time by ~40% across active projects.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[12.5px] font-semibold text-gray-900">Senior Software Developer</h4>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[11.5px] text-blue-600 font-medium">UR.Life • Hyderabad, India</p>
                    <span className="text-[10.5px] text-gray-500 font-bold">Sep 2022 - Feb 2024</span>
                  </div>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4 leading-snug">
                    <li>
                      Architected cross-platform wellness platform (iOS, Android, Web, TV) for 150K+ registered
                      users; owned React Native and React.js modules for subscriptions, CMS content, and live
                      consultations.
                    </li>
                    <li>
                      Implemented AWS Amplify + Cognito auth and CI/CD (TestFlight/Play Store), cutting login
                      failures by 30%, onboarding drop-off by 18%, and deployment lead time from 2 days to 4 hours.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[12.5px] font-semibold text-gray-900">Software Developer</h4>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[11.5px] text-blue-600 font-medium">
                      Gajju Technologies Pvt Ltd. • Hyderabad, India
                    </p>
                    <span className="text-[10.5px] text-gray-500 font-bold">May 2020 - Sep 2022</span>
                  </div>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4 leading-snug">
                    <li>
                      Worked on a product-based fintech platform, developing and scaling a single core application
                      using React Native and React.js for production releases.
                    </li>
                    <li>
                      Served as mobile lead and contributed to complex fintech architecture discussions, API contracts,
                      and release planning with cross-functional teams.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[12.5px] font-semibold text-gray-900">Mobile Application Developer</h4>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[11.5px] text-blue-600 font-medium">
                      Norm Software Solutions • Hyderabad, India
                    </p>
                    <span className="text-[10.5px] text-gray-500 font-bold">May 2018 - Apr 2020</span>
                  </div>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4 leading-snug">
                    <li>
                      At this service-based company, worked on 2 client mobile applications using Swift and
                      React Native from development to production delivery.
                    </li>
                    <li>
                      Implemented core features, fixed production issues, and collaborated with senior developers
                      and QA to stabilize releases across both applications.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section className="mb-2 print:mb-1.5">
              <h3 className="text-base font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1">
                Key Projects
              </h3>
              <div className="space-y-0.5 print:space-y-0.5">
                {flagshipProjects.map((project) => (
                  <div key={project.name}>
                    <div className="font-semibold text-gray-900 text-[11px]">{project.name}</div>
                    <p className="text-gray-600 text-[10px] italic">{project.role}</p>
                    <ul className="list-disc list-outside pl-4 text-gray-700 text-[9.5px] leading-snug">
                      <li>{project.impact}</li>
                      <li>Key stack: {project.stack}</li>
                    </ul>
                  </div>
                ))}
                <p className="text-[10px] text-gray-600 pt-0">
                  <span className="font-semibold text-gray-800">Also delivered:</span> Run Tailor, Twin Dolphin,
                  CFO Challenge, Rowdy, JVB Health, 137 Mastery.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 print:w-1/3 bg-gray-50 p-4 print:p-3 print:bg-white">
            {/* Contact */}
            <section className="mb-2.5 print:mb-2">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Contact</h3>
              <div className="space-y-1 text-[11px]">
                <a
                  href="mailto:rajenderreddy.garlapalli@gmail.com"
                  className="flex items-center space-x-1.5 hover:text-blue-600"
                >
                  <Mail size={11} className="text-gray-600" />
                  <span>rajenderreddy.garlapalli@gmail.com</span>
                </a>
                <a href="tel:+918309008358" className="flex items-center space-x-1.5 hover:text-blue-600">
                  <Phone size={11} className="text-gray-600" />
                  <span>+91 8309008358 | +91 9154175727</span>
                </a>
                <div className="flex items-center space-x-1.5">
                  <MapPin size={11} className="text-gray-600" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-2.5 print:mb-2">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Core Skills</h3>
              <div className="space-y-1">
                {coreSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white border border-gray-200 rounded px-2 py-1 text-[10px] leading-snug print:py-0.5 flex justify-between items-center gap-2"
                  >
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-gray-500 shrink-0 text-right">
                      {skill.level ? `${skill.level} · ${skill.years}` : skill.years}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="font-semibold text-[11px] text-gray-800 mt-1.5 mb-1">AI-Assisted Development</h4>
              <div className="grid grid-cols-2 gap-1 text-[9px]">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-blue-50 border border-blue-100 text-blue-900 px-1.5 py-0.5 rounded text-center"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-2.5 print:mb-2">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Education</h3>
              <div className="text-[11px]">
                <h4 className="font-semibold">B.Tech — Electronics & Communication Engineering</h4>
                <p className="text-gray-600">Malla Reddy Institute of Technology • Hyderabad</p>
                <p className="text-[10px] text-gray-500 mt-0.5">Jun 2018</p>
              </div>
            </section>

            {/* Recent Learning & Certifications */}
            <section className="mb-2.5 print:mb-2">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">
                Recent Learning & Certifications
              </h3>
              <div className="text-[11px] space-y-1">
                <div>
                  <p className="font-semibold">Meta Front-End Developer Professional</p>
                  <p className="text-gray-600">Coursera · 2023</p>
                </div>
                <ul className="list-disc list-outside pl-4 text-[10px] text-gray-700 space-y-0.5 leading-snug">
                  <li>AWS serverless & cloud-native patterns (Cognito, Amplify, S3)</li>
                  <li>System design for mobile-first architectures</li>
                  <li>
                    AI-first engineering (2024–present): Cursor AI, ChatGPT, Claude & Bolt for scaffolding,
                    debugging, test generation, and code reviews in daily delivery
                  </li>
                  <li>
                    Ongoing upskilling: cloud architecture, release engineering, and production-grade frontend
                    reliability practices
                  </li>
                </ul>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Languages</h3>
              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span>English</span> <span className="text-gray-600">Proficient</span>
                </div>
                <div className="flex justify-between">
                  <span>Telugu</span> <span className="text-gray-600">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>Hindi</span> <span className="text-gray-600">Proficient</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
