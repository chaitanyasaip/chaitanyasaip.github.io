import React, { useState } from 'react';
import { Twitter, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import data from './data';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    console.log('Toggle dark mode clicked');
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`min-h-screen font-sans p-8 ${darkMode ? 'bg-black text-gray-300' : 'bg-white text-gray-800'}`}>
      <div className="max-w-2xl mx-auto">
        <header className="mb-16 text-center relative">
          <button
            onClick={toggleDarkMode}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <img src="/api/placeholder/100/100" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-6" />
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'} mb-2`}>Sai Chaitanya Pachipulusu</h1>
          <p className="text-lg text-gray-500">machine learning engineer • ai • art</p>
        </header>

        <section className="mb-16">
          <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'} mb-4`}>About</h2>
          <div className="space-y-4 text-gray-400">
            {data.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'} mb-6`}>Blogs</h2>
          <ul className="space-y-4">
            {data.blogs.map((blog, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{blog.date}</span>
                <a href="#" className="text-lg text-blue-400 hover:underline">{blog.title} →</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-black'} mb-6`}>Work Experience</h2>
          {data.experience.map((job, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">{job.period}</span>
                <a href="#" className="text-lg text-blue-400 hover:underline">{job.title} →</a>
              </div>
              <p className="mb-2 text-gray-300">{job.description}</p>
              <p className="text-sm text-gray-500">{job.tech}</p>
            </div>
          ))}
        </section>

        <footer className="text-center">
          <a href="https://x.com/chai_anya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline">
            <Twitter size={20} className="mr-2" />
            <span className="text-lg">@chai_anya</span>
          </a>
          <a href="https://github.com/chaitanyasaip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline">
            <Github size={20} className="mr-2" />
            <span className="text-lg">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/psaichaitanya/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline">
            <Linkedin size={20} className="mr-2" />
            <span className="text-lg">LinkedIn</span>
          </a>
          <a href="mailto:siai.chaitanyap@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline">
            <Mail size={20} className="mr-2" />
            <span className="text-lg">Email</span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;