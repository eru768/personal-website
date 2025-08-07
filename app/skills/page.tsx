'use client';

import { useState } from 'react';

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'BootStrap CSS', 'HTML', 'CSS', 'JavaScript']
    },
    {
      category: 'Backend',
      items: ['Python', 'Java', 'Go', 'C++', 'C#', 'MySQL', 'PostgreSQL']
    },
    {
      category: 'Tools',
      items: ['GitHub', 'VS Code', 'Figma', 'Postman', 'Docker']
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">🧠 Skills & Tools</h1>

        {expandedCategory && (
          <div className="mb-6 text-left">
            <button
              onClick={() => setExpandedCategory(null)}
              className="text-sm text-gray-500 hover:text-black"
            >
              ← Back to all categories
            </button>
          </div>
        )}

        <div className={`grid gap-8 transition-all duration-500 ${expandedCategory ? 'grid-cols-1' : 'md:grid-cols-3'}`}>
          {skills.map((group, index) => {
            const isExpanded = expandedCategory === group.category;

            // Hide other categories if one is expanded
            if (expandedCategory && !isExpanded) return null;

            return (
              <div
                key={index}
                onClick={() => setExpandedCategory(isExpanded ? null : group.category)}
                className={`bg-white p-6 rounded-lg shadow cursor-pointer transition-all duration-500`}
              >
                <h2 className="text-xl font-semibold mb-4 text-center">{group.category}</h2>
                <ul className={`space-y-2 ${isExpanded ? 'grid grid-cols-2 gap-4' : ''}`}>
                  {group.items.map((skill, idx) => (
                    <li
                      key={idx}
                      className={`text-sm text-gray-700 rounded text-center transition-all duration-300 ${
                        isExpanded
                          ? 'bg-gray-200 py-4 text-base font-medium col-span-1'
                          : 'bg-gray-100 py-2 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {/* <div className="mt-10 flex justify-center gap-10">
          <a
            href="/"
            rel="noopener noreferrer"
            className="w-20 h-20 bg-gray-0 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
            <img src="/icons/linkedin.png" alt="Home" className="w-6 h-6" />
          </a>
        </div> */}
      </section>
    </main>
  );
}