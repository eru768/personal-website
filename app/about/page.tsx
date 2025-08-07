'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      name: 'Portfolio Website',
      level: 3,
      description: 'A minimalist portfolio built with Next.js and Tailwind CSS.',
      image: '/projects/portfolio.png',
      link: '/projects/portfolio'
    },
    // {
    //   name: 'Weather App',
    //   level: 2,
    //   description: 'A clean weather app using OpenWeather API.',
    //   image: '/projects/weather.png',
    //   link: '/projects/weather'
    // },
    // Add more projects here
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-8">
      <section className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold">Jeffrey — Lv. 23 CS Student</h1>
          <p className="text-gray-600">Aspiring Developer · Minimalist · Avid Traveller</p>
          <div className='py-2 text-xs'>
            <p className='text-red-900'>Hi, I&apos;m Jeffrey and I hope you enjoy your stay in my website (^.^) </p>
            <p className='text-red-900'>I wont say too much here as I&apos;d rather show you what I&apos;m all about. This website will show my personal design style, and philosophy as I improve it to fit my style</p>
          </div>
        </div>

        {/* RPG Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-semibold mb-2">Stats</h2>
            <ul className="text-sm space-y-1">
              <li>HP: ████████░░ 80%</li>
              <li>MP: ██████░░░░ 60%</li>
              <li>XP: 12,430</li>
              <li>Dexterity: 7</li>
              <li>Focus: 5</li>
              <li>Creativity: 7</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-semibold mb-2">Toolset (See Skills for more)</h2>
            <ul className="text-sm space-y-1">
              <li>🛠️ Many Major Programming Languages, JS Frameworks</li>
              <li>🎨 CSS (Bootstrap, Tailwind), SQL</li>
              <li>📦 Git, Docker, Unix Based OS</li>
              {/* <li>📐 Figma, Photoshop</li> */}
            </ul>
          </div>
        </div>

        {/* Project Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4">Quest Log (Projects)</h2>
          <ul className="space-y-3">
            {projects.map((project, index) => (
              <li key={index} className="flex items-start justify-between">
                <div>
                  <p className="font-medium">📘 {project.name} (Lv. {project.level})</p>
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="text-blue-600 text-sm hover:underline mt-1"
                  >
                    ▶ Preview
                  </button>
                </div>
                {selectedProject === index && (
                  <div className="ml-4 w-64">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={256}
                      height={144}
                      className="rounded mb-2"
                    />
                    <p className="text-sm text-gray-600 mb-1">{project.description}</p>
                    <Link href={project.link} className="text-sm text-blue-500 underline">
                      🔗 View Full Project
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Optional Achievements Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Achievements</h2>
          <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
            <li>🏆 Graduated from Polytechnic with GPA of 3.83 (Info Tech Diploma)</li>
            <li>😵‍💫 Idk whats next, it was always focus on grades in poly so.. ill be doing some projects to try stuff out</li>
          </ul>
        </div>
      </section>
    </main>
  );
}