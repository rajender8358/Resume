import React from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const App = () => {
  return (
    <main className="font-sans antialiased text-gray-800 bg-gray-100 p-2 md:p-4 print:p-0 text-[10px]">
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg print:shadow-none">
        <div className="flex flex-col md:flex-row print:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-2/3 print:w-2/3 p-4">
            {/* Header */}
            <header className="flex items-center space-x-4 mb-4">
              <img
                src="/pic.png"
                alt="Rajender Reddy Garlapally"
                className="w-16 h-16 rounded-full border-2 border-gray-200"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Rajender Reddy Garlapally</h1>
                <h2 className="text-sm font-semibold text-blue-600">Senior Software Engineer</h2>
                <div className="flex items-center space-x-3 mt-1 text-[10px] text-gray-600">
                  <a href="https://rajender-reddy-garlapally.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-blue-600">
                    <ExternalLink size={12} />
                    <span>rajender-reddy-garlapally.vercel.app</span>
                  </a>
                  <a href="https://github.com/rajenderreddy78/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-blue-600">
                    <Github size={12} />
                    <span>rajenderreddy78</span>
                  </a>
                </div>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-3">
              <h3 className="text-base font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Professional Summary</h3>
              <p className="text-[11px] text-gray-700 leading-snug text-justify">
              Seasoned Full-Stack Developer with 7+ years of experience in building high-performance mobile (React Native) and web (React.js) applications. Skilled in creating scalable, user-focused solutions with clean architecture and responsive UI/UX. Proficient in backend development using Node.js, with strong command over AWS services like Cognito, Amplify, DynamoDB, and S3 for secure, cloud-native apps. Adept at CI/CD, automation, and cross-functional team collaboration. Passionate about modern tech and AI tools (Cursor/ChatGPT, Gemini) to streamline workflows, boost productivity, and drive innovation.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-3">
              <h3 className="text-base font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Work Experience</h3>
              
              <div className="space-y-2.5">
                {/* Experience Item */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-[12px] font-semibold text-gray-900">Senior Software Engineer</h4>
                    <span className="text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded print:hidden">Mar 2024 - Present</span>
                  </div>
                  <p className="text-[11px] text-blue-600 font-medium">OSI Digital Pvt Ltd. • Hyderabad, India</p>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4">
                    <li>Leading multiple teams across projects to develop scalable web and mobile solutions using React.js, React Native, and AWS.</li>
                    <li>Engaged in sprint planning, CI/CD setup, performance tuning, and delivering high-quality UX across platforms.</li>
                    <li>Mentoring developers, reviewing code, and collaborating on cross-functional initiatives for end-to-end product delivery.</li>
                  </ul>
                </div>
                
                {/* Experience Item */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-[12px] font-semibold text-gray-900">Senior Software Developer</h4>
                    <span className="text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded print:hidden">Sep 2022 - Feb 2024</span>
                  </div>
                  <p className="text-[11px] text-blue-600 font-medium">UR.Life • Hyderabad, India</p>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4">
                    <li>Led the development of web, mobile, and TV applications using React Native, React.js, and backend integrations.</li>
                    <li>Participated in sprint planning, architecture discussions, and implemented CI/CD pipelines for deployments.</li>
                    <li>Handled AWS services, code reviews, and collaborated on UX enhancements across platforms.</li>
                  </ul>
                </div>

                {/* Experience Item */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-[12px] font-semibold text-gray-900">Software Developer</h4>
                    <span className="text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded print:hidden">May 2020 - Sep 2022</span>
                  </div>
                  <p className="text-[11px] text-blue-600 font-medium">Gajju Technologies Pvt Ltd. • Hyderabad, India</p>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4">
                      <li>Worked as a Front-End Developer on both React Native and React.js projects for web and mobile platforms.</li>
                      <li>Took ownership of sprint planning, UI implementation, and code reviews as a lead frontend developer.</li>
                      <li>Collaborated with cross-functional teams to deliver scalable, responsive applications.</li>
                  </ul>
                </div>

                {/* Experience Item */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-[12px] font-semibold text-gray-900">Mobile Application Developer</h4>
                    <span className="text-[10px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded print:hidden">Aug 2018 - May 2020</span>
                  </div>
                  <p className="text-[11px] text-blue-600 font-medium">Norm Software Solutions • Hyderabad, India</p>
                  <ul className="mt-0.5 list-disc list-outside text-[11px] text-gray-700 space-y-0.5 text-justify pl-4">
                    <li>Started my career as a Junior Developer, building mobile applications using Swift and React Native.</li>
                    <li>Contributed to designing UI screens and implementing app features across multiple internal projects.</li>
                    <li>Collaborated closely with senior developers and QA teams to deliver stable builds and timely releases.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 print:w-1/3 bg-gray-50 p-4 print:bg-white">
            {/* Contact */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Contact</h3>
              <div className="space-y-1 text-[11px]">
                <a href="mailto:rajenderreddy.garlapalli@gmail.com" className="flex items-center space-x-2 hover:text-blue-600">
                  <Mail size={13} className="text-gray-600"/>
                  <span>rajenderreddy.garlapalli@gmail.com</span>
                </a>
                <a href="tel:+918309008358" className="flex items-center space-x-2 hover:text-blue-600">
                  <Phone size={13} className="text-gray-600"/>
                  <span>+91 8309008358, 9154175727</span>
                </a>
                <div className="flex items-center space-x-2">
                  <MapPin size={13} className="text-gray-600"/>
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </section>
            
            {/* Skills */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Skills</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold mb-1 text-[11px]">Technical</h4>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-2 text-[9px]">
                    {['React Native', 'React JS', 'Redux', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Material UI', 'HTML/CSS'].map(skill => (
                      <span key={skill} className="bg-gray-100 px-2 py-1 rounded-md text-center">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[11px]">Cloud</h4>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-2 text-[9px]">
                    {['Cognito', 'Amplify', 'S3'].map(tool => (
                      <span key={tool} className="bg-gray-100 px-2 py-1 rounded-md text-center">{tool}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[11px]">Tools & Platforms</h4>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-2 text-[9px]">
                    {['Prismatic', 'Prismic', 'Firebase', 'Figma'].map(tool => (
                      <span key={tool} className="bg-gray-100 px-2 py-1 rounded-md text-center">{tool}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-[11px]">AI Tools</h4>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-2 text-[9px]">
                    {['OpenAI', 'Cursor', 'Gemini', 'ChatGPT', 'Bolt', 'Copilot'].map(tool => (
                      <span key={tool} className="bg-gray-100 px-2 py-1 rounded-md text-center">{tool}</span>
                    ))}
                  </div>
                </div>
                
              </div>
            </section>
            
            {/* Certifications */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Certifications</h3>
              <div className="text-[11px]">
                  <p className="font-semibold">Certified Meta Front-End Developer</p>
                  <p className="text-gray-600">Coursera</p>
              </div>
            </section>

            {/* Languages */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Languages</h3>
              <div className="space-y-0.5 text-[11px]">
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
        {/* Key Projects Section */}
        <div className="p-4 -mt-6 md:-mt-12">
          <section>
            <h3 className="text-base font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-1.5">Key Projects</h3>
            <div className="grid grid-cols-3 gap-x-4 gap-y-1.5 text-[11px] mt-2">
              <div>
                <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center">42 Cards <ExternalLink className="w-3 h-3 ml-1" /></a>
                <p className="text-gray-700">Credit Card Processing Solution (Finance Domain)</p>
              </div>
              <div>
                <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center">Twin Dolphin <ExternalLink className="w-3 h-3 ml-1" /></a>
                <p className="text-gray-700">Travel & Hospitality</p>
              </div>
              <div>
                <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center">UR.LIFE <ExternalLink className="w-3 h-3 ml-1" /></a>
                <p className="text-gray-700">Health & wellness Application</p>
              </div>
              <div>
                <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center">Leo 1 <ExternalLink className="w-3 h-3 ml-1" /></a>
                <p className="text-gray-700">A educational loan Application</p>
              </div>
              <div>
                <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center">Rowdy - E-commerce Platform <ExternalLink className="w-3 h-3 ml-1" /></a>
                <p className="text-gray-700">E-Commerce Application</p>
              </div>
              <div>
                <a href="#" className="font-semibold text-gray-900 hover:text-blue-600 flex items-center">JVB Health & Wellness <ExternalLink className="w-3 h-3 ml-1" /></a>
                <p className="text-gray-700">Health & Wellness Application</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;