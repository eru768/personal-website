import Link from 'next/link';
import QuestCard from './components/questcard'; 
import RoundProfileImage from './components/roundpfp';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-8 pt-20 pb-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-8">
        <RoundProfileImage
          src="/profile_pic.png"
          alt="Jeffrey"
        />
        <h1 className="text-3xl font-bold mb-2 pt-4">Hi, I’m Jeffrey</h1>
        <p className="text-gray-600 text-lg mb-4"> Aspiring Developer · Minimalist · Avid Traveller </p>
        <div className="flex justify-center gap-4">
          <Link href="/about" className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition">
            🎮 View Stats
          </Link>
          <Link href="/projects" className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition">
            🧪 Projects
          </Link>
          <Link href="/contact" className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition">
            📬 Contact
          </Link>
        </div>
      </section>

      {/* Current Status */}
      <section className="max-w-2xl mx-auto text-center mb-8">
        <p className="text-sm text-gray-500 italic">
          Currently working on: web animations + learning video and photo editing 
        </p>
      </section>

      {/* Quests */}          
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Main Quests</h2>
        <QuestCard
          title="Singapore Management University"
          description="To learn more in depth about computers, networks, develop leadership and communication skills and create projects as a team."
          image="/personal_website.png"
          link="/projects/portfolio"
          progress={25}
          color="bg-blue-600"
          carouselImages={["/personal_website.png", "/personal_website.png", "/personal_website.png"]}
        />
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Side Quests</h2>
        <QuestCard
          title="Portfolio Website"
          description="A clean, responsive developer portfolio built with Next.js and Tailwind CSS."
          image="/personal_website.png"
          link="/projects/portfolio"
          progress={40}
          color="bg-blue-600"
          carouselImages={["/projects/portfolio1.png", "/projects/portfolio2.png"]}
        />

        <QuestCard
          title="Portfolio Website"
          description="A clean, responsive developer portfolio built with Next.js and Tailwind CSS."
          image="/personal_website.png"
          link="/projects/portfolio"
          progress={40}
          color="bg-blue-600"
          carouselImages={["/projects/portfolio1.png", "/projects/portfolio2.png"]}
        />
      </section>
    </main>
  );
}