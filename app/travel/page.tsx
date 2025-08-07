import Link from "next/link";

export default function Travels() {
  return (
    <main className="relative w-full min-h-screen">
        {/* Main Page Image */}
      <div className="fixed inset-0 z-0 bg-[url('/Travel_Main.png')] bg-cover bg-center bg-no-repeat bg-fixed" />

      <div className="relative z-20 flex justify-center h-screen px-6 pt-[35vh] text-white">
        <div className="text-center">
          <h1 className="md:text-4xl font-bold mb-4">Hi, I&apos;m Jeffrey</h1>
          <p className="text-lg md:text-2xl font-light backdrop-blur-lg">
            I love exploring new cultures, cities, and stories. Here&apos;s a glimpse into my travels around the world.
          </p>
        </div>
      </div>

      {/* Scrollable content below */}
      <section className="relative z-20 bg-white text-black px-8 p-20">
        <div className="px-[40%]">
          <h2 className="text-2xl font-semibold mb-6">Places I&apos;ve Been</h2>
          <ul className="list-disc pl-6">
            <li>11 x Japan</li>
            <li>2 x Australia</li>
            <li>2 x Taiwan</li>
            <li>2 x Korea </li>
          </ul>
        <p>The Blog is in development :)</p>
        <Link href="/">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> Home </button>
        </Link>
        </div>

      </section>
    </main>
  );
}