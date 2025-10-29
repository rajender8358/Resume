import { Mail, Phone, MapPin, ExternalLink, Linkedin } from 'lucide-react';

const App = () => {
  return (
    <main className="font-sans antialiased text-gray-800 bg-gray-100 p-2 md:p-4 print:p-0 text-[10px]">
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg print:shadow-none">
        <div className="flex flex-col md:flex-row print:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-2/3 print:w-2/3 p-4 print:p-3">
            {/* Header */}
            <header className="flex items-center space-x-4 mb-2 print:mb-1.5">
              <img
                src="/pic.png"
                alt="Rajender Reddy Garlapally"
                className="w-16 h-16 print:w-12 print:h-12 rounded-full border-2 border-gray-200"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Rajender Reddy Garlapally</h1>
                <h2 className="text-sm font-semibold text-blue-600">Senior Software Engineer</h2>
                <div className="flex items-center space-x-3 mt-1 text-[10px] text-gray-600">
                  <a href="https://rajender-reddy-garlapally.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-blue-600">
                    <ExternalLink size={12} />
                    <span>rajender-reddy-garlapally.vercel.app</span>
                  </a>
                  <a href="https://www.linkedin.com/in/rajenderreddy-fullstackdeveloper/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-blue-600">
                    <Linkedin size={12} />
                    <span>rajenderreddy-fullstackdeveloper</span>
                  </a>
                </div>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-2 print:mb-1.5">
              <h3 className="text-base font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1">Professional Summary</h3>
              <p className="text-[11px] text-gray-700 leading-snug text-justify">
              Seasoned Full-Stack Developer with 7+ years of experience in building high-performance mobile (React Native) and web (React.js) applications. Skilled in creating scalable, user-focused solutions with clean architecture and responsive UI/UX. Proficient in backend development using Node.js, with strong command over AWS services like Cognito, Amplify, DynamoDB, and S3 for secure, cloud-native apps. Adept at CI/CD, automation, and cross-functional team collaboration. Passionate about modern tech and AI tools (Cursor/ChatGPT, Gemini) to streamline workflows, boost productivity, and drive innovation.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-2 print:mb-1.5">
              <h3 className="text-base font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1">Work Experience</h3>
              
              <div className="space-y-1.5 print:space-y-1">
                {/* Experience Item */}
                <div>
                  <h4 className="text-[12.5px] font-semibold text-gray-900">Senior Software Engineer</h4>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[11.5px] text-blue-600 font-medium">OSI Digital Pvt Ltd. • Hyderabad, India</p>
                    <span className="text-[10.5px] text-gray-500 font-bold">Mar 2024 - Present</span>
                  </div>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4 leading-snug">
                    <li>Leading multiple teams across projects to develop scalable web and mobile solutions using React.js, React Native, and AWS.</li>
                    <li>Engaged in sprint planning, CI/CD setup, performance tuning, and delivering high-quality UX across platforms.</li>
                    <li>Mentoring developers, reviewing code, and collaborating on cross-functional initiatives for end-to-end product delivery.</li>
                  </ul>
                </div>
                
                {/* Experience Item */}
                <div>
                  <h4 className="text-[12.5px] font-semibold text-gray-900">Senior Software Developer</h4>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[11.5px] text-blue-600 font-medium">UR.Life • Hyderabad, India</p>
                    <span className="text-[10.5px] text-gray-500 font-bold">Sep 2022 - Feb 2024</span>
                  </div>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4 leading-snug">
                    <li>Led the development of web, mobile, and TV applications using React Native, React.js, and backend integrations.</li>
                    <li>Participated in sprint planning, architecture discussions, and implemented CI/CD pipelines for deployments.</li>
                    <li>Handled AWS services, code reviews, and collaborated on UX enhancements across platforms.</li>
                  </ul>
                </div>

                {/* Experience Item */}
                <div>
                  <h4 className="text-[12.5px] font-semibold text-gray-900">Software Developer</h4>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[11.5px] text-blue-600 font-medium">Gajju Technologies Pvt Ltd. • Hyderabad, India</p>
                    <span className="text-[10.5px] text-gray-500 font-bold">May 2020 - Sep 2022</span>
                  </div>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4 leading-snug">
                      <li>Worked as a Front-End Developer on both React Native and React.js projects for web and mobile platforms.</li>
                      <li>Took ownership of sprint planning, UI implementation, and code reviews as a lead frontend developer.</li>
                      <li>Collaborated with cross-functional teams to deliver scalable, responsive applications.</li>
                  </ul>
                </div>

                {/* Experience Item */}
                <div>
                  <h4 className="text-[12.5px] font-semibold text-gray-900">Mobile Application Developer</h4>
                  <div className="flex justify-between items-baseline">
                    <p className="text-[11.5px] text-blue-600 font-medium">Norm Software Solutions • Hyderabad, India</p>
                    <span className="text-[10.5px] text-gray-500 font-bold">May 2018 - Apr 2020</span>
                  </div>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4 leading-snug">
                    <li>Started my career as a Junior Developer, building mobile applications using Swift and React Native.</li>
                    <li>Contributed to designing UI screens and implementing app features across multiple internal projects.</li>
                    <li>Collaborated closely with senior developers and QA teams to deliver stable builds and timely releases.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section className="mb-2 print:mb-1.5">
              <h3 className="text-base font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1">Key Projects</h3>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 print:gap-y-0.5">
                {/* 2-line projects */}
                <div>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center text-[11px]">
                    UR.LIFE <ExternalLink className="w-2.5 h-2.5 ml-1" />
                  </a>
                  <p className="text-gray-700 text-[10px]">React Native (Mobile & TV) • React JS (Web) • Health & Wellness</p>
                </div>
                <div>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center text-[11px]">
                    Navotas <ExternalLink className="w-2.5 h-2.5 ml-1" />
                  </a>
                  <p className="text-gray-700 text-[10px]">Flutter • Government App for Navotas City, Philippines</p>
                </div>
                <div>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center text-[11px]">
                    42 Cards <ExternalLink className="w-2.5 h-2.5 ml-1" />
                  </a>
                  <p className="text-gray-700 text-[10px]">React JS • Finance • Credit Card Management System</p>
                </div>
                <div>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center text-[11px]">
                    Run Tailor <ExternalLink className="w-2.5 h-2.5 ml-1" />
                  </a>
                  <p className="text-gray-700 text-[10px]">React Native • Customer & Partner App • Fashion & Lifestyle</p>
                </div>
                {/* 1-line projects */}
                <div>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center text-[11px]">
                    Twin Dolphin <ExternalLink className="w-2.5 h-2.5 ml-1" />
                  </a>
                  <p className="text-gray-700 text-[10px]">React Native • Travel & Hospitality</p>
                </div>
                <div>
                  <a href="https://web.cfochallenge.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center text-[11px]">
                    CFO Challenge <ExternalLink className="w-2.5 h-2.5 ml-1" />
                  </a>
                  <p className="text-gray-700 text-[10px]">React Native • Finance E-Learning</p>
                </div>
                <div>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center text-[11px]">
                    Rowdy <ExternalLink className="w-2.5 h-2.5 ml-1" />
                  </a>
                  <p className="text-gray-700 text-[10px]">Flutter • E-Commerce</p>
                </div>
                <div>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center text-[11px]">
                    Leo1 <ExternalLink className="w-2.5 h-2.5 ml-1" />
                  </a>
                  <p className="text-gray-700 text-[10px]">React Native & React JS • Financial Technology</p>
                </div>
                <div>
                  <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center text-[11px]">
                    JVB Health & Wellness <ExternalLink className="w-2.5 h-2.5 ml-1" />
                  </a>
                  <p className="text-gray-700 text-[10px]">React Native • Health & Wellness</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 print:w-1/3 bg-gray-50 p-4 print:p-3 print:bg-white">
            {/* Contact */}
            <section className="mb-2.5 print:mb-2">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Contact</h3>
              <div className="space-y-1 text-[11px]">
                <a href="mailto:rajenderreddy.garlapalli@gmail.com" className="flex items-center space-x-1.5 hover:text-blue-600">
                  <Mail size={11} className="text-gray-600"/>
                  <span>rajenderreddy.garlapalli@gmail.com</span>
                </a>
                <a href="tel:+918309008358" className="flex items-center space-x-1.5 hover:text-blue-600">
                  <Phone size={11} className="text-gray-600"/>
                  <span>+91 8309008358, 9154175727</span>
                </a>
                <div className="flex items-center space-x-1.5">
                  <MapPin size={11} className="text-gray-600"/>
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </section>
            
            {/* Skills */}
            <section className="mb-2.5 print:mb-2">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Skills</h3>
              <div className="space-y-2 print:space-y-1.5">
                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold mb-1 text-[11px]">Key Achievements</h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="bg-gray-100 border border-gray-300 rounded p-1.5 text-center">
                      <div className="text-[16px] font-bold text-gray-800">7+</div>
                      <div className="text-[8px] text-gray-600 leading-tight">Years Exp.</div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 rounded p-1.5 text-center">
                      <div className="text-[16px] font-bold text-gray-800">15+</div>
                      <div className="text-[8px] text-gray-600 leading-tight">Projects</div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 rounded p-1.5 text-center">
                      <div className="text-[16px] font-bold text-gray-800">3</div>
                      <div className="text-[8px] text-gray-600 leading-tight">Tech Stacks</div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 rounded p-1.5 text-center">
                      <div className="text-[16px] font-bold text-gray-800">Full</div>
                      <div className="text-[8px] text-gray-600 leading-tight">Stack Dev</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-1 text-[11px]">Mobile Development</h4>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] gap-1.5 text-[9px]">
                    {['React Native', 'Flutter', 'Swift', 'Redux'].map(skill => (
                      <span key={skill} className="bg-gray-100 px-1.5 py-0.5 rounded text-center">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[11px]">Web Development</h4>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] gap-1.5 text-[9px]">
                    {['React JS', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Material UI'].map(skill => (
                      <span key={skill} className="bg-gray-100 px-1.5 py-0.5 rounded text-center">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[11px]">Cloud & Tools</h4>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] gap-1.5 text-[9px]">
                    {['Cognito', 'Amplify', 'S3', 'Prismatic', 'Prismic', 'Firebase'].map(tool => (
                      <span key={tool} className="bg-gray-100 px-1.5 py-0.5 rounded text-center">{tool}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[11px]">AI-Powered Development</h4>
                  <p className="text-[9px] text-gray-700 leading-snug mb-1.5">
                    Leveraging cutting-edge AI tools across the entire development lifecycle—from ideation and code generation to debugging, optimization, and deployment automation.
                  </p>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] gap-1.5 text-[9px]">
                    {['ChatGPT', 'Gemini', 'Claude', 'Cursor', 'Copilot', 'Windsurf', 'v0', 'Bolt', 'Lovable'].map(tool => (
                      <span key={tool} className="bg-gray-100 px-1.5 py-0.5 rounded text-center">{tool}</span>
                    ))}
                  </div>
                </div>
                
              </div>
            </section>
            
            {/* Certifications */}
            <section className="mb-2.5 print:mb-2">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Certifications</h3>
              <div className="text-[11px]">
                  <p className="font-semibold">Certified Meta Front-End Developer</p>
                  <p className="text-gray-600">Coursera</p>
              </div>
            </section>

            {/* Languages */}
            <section className="mb-2.5 print:mb-2">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Languages</h3>
              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between"><span>English</span> <span className="text-gray-600">Proficient</span></div>
                <div className="flex justify-between"><span>Telugu</span> <span className="text-gray-600">Native</span></div>
                <div className="flex justify-between"><span>Hindi</span> <span className="text-gray-600">Proficient</span></div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Education</h3>
              <div className="text-[11px]">
                <h4 className="font-semibold">Bachelor of Technology in Electronics and Communication Engineering</h4>
                <p className="text-gray-600">Malla Reddy Institute of Technology and Management • Hyderabad, India</p>
                <p className="text-[10px] text-gray-500 mt-0.5">Jun 2018</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;