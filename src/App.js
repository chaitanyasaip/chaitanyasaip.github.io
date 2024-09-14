import React from 'react';
import { Twitter } from 'lucide-react';

const Portfolio = () => {
  const essays = [
    { date: '9 Sep 2024', title: "You don't need discipline" },
    { date: '17 Jul 2024', title: 'Activation Energy' },
    { date: '1 Jul 2024', title: 'Consistency vs Intensity' },
    { date: '29 June 2024', title: 'Taking Responsibility' },
  ];

  const experience = [
    {
      period: '2024 - Present',
      title: 'Founder - roundzero',
      description: 'Automating technical coding interviews',
      tech: 'TS • Next.js • shit ton of GPT',
    },
    {
      period: '2023 - Present',
      title: 'Software Engineer - blockchain infrastructure',
      description: 'Building and pioneering web3 infrastructure, with emphasis on performance and latency. Imagine TCP/IP for web3. Reading smart contracts on a daily basis',
      tech: 'Golang • TS • Rust',
    },
    {
      period: '2022 - 2023',
      title: 'Software Engineer - another web3 startup',
      description: 'Real name, cool tools on the chain. One of them was utilizing LLM and AI image generation to create different artworks based on the NFT\'s metadata. We managed to raise 700K in the seed round.',
      tech: 'TS • Node • Express • Golang • Git • Redis • MongoDB • AWS • Solana',
    },
    {
      period: '2021 - 2022',
      title: 'Software Engineering Intern - ByteDance',
      description: 'Worked on safety systems used in TikTok. Ate a lot of snacks and gained a few.',
      tech: 'Golang • GRPC • Redis • MySQL • PostgreSQL',
    },
    {
      period: '2021 - 2021',
      title: 'Software Engineering Intern - blockchain explorer startup',
      description: 'Part of the founding team, built the first version of blockchain indexer with low latency and high throughput.',
      tech: '.NET • Rust • RabbitMQ • PostgreSQL',
    },
  ];

  return (
    <div className="bg-black text-gray-300 min-h-screen font-sans p-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-16 text-center">
          <img src="/api/placeholder/100/100" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-2">Sai Chaitanya Pachipulusu</h1>
          <p className="text-lg text-gray-500">software engineer • ai • blockchain</p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
          <div className="space-y-4 text-gray-400">
            <p>
              I currently work at [redacted] and building roundzero on the side. More details soon.
            </p>
            <p>
              I am passionate about applying the use of AI to solve real-world problems.
            </p>
            <p>
              I care deeply about performance and UX/UI of applied AI systems. I am also an avid enjoyer of building something people want. I am undecided so I try to describe my work as much as possible without giving away my identity.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Essays</h2>
          <ul className="space-y-4">
            {essays.map((essay, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{essay.date}</span>
                <a href="#" className="text-lg text-blue-400 hover:underline">{essay.title} →</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Work Experience</h2>
          {experience.map((job, index) => (
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
          <a href="https://twitter.com/0xluffyb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline">
            <Twitter size={20} className="mr-2" />
            <span className="text-lg">@0xluffyb</span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;