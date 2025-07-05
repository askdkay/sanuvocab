import React from 'react';



const FeatureCard = ({ title, description, icon }) => (
  <div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-6 w-full max-w-xs hover:scale-105 transition-transform">
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="text-2xl font-semibold text-blue-700 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-stone-950">

      <main className="flex flex-col items-center justify-center py-16 px-4">
        <div className="bg-white/80 rounded-3xl shadow-2xl p-12 max-w-2xl w-full flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-6 text-blue-700 drop-shadow-md text-center">Welcome to the Dictionary</h2>
          <p className="mb-10 text-gray-700 text-lg text-center max-w-xl">
            Discover word meanings, synonyms, antonyms, pronunciations, and more. Enhance your vocabulary with our beautifully designed, easy-to-use dictionary.
          </p>
          <form className="w-full flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter a word..."
              className="flex-grow px-6 py-4 rounded-xl border border-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg shadow"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-all"
            >
              Search
            </button>
          </form>
        </div>

        <section className="mt-20 max-w-5xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-10">Why use our Dictionary?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <FeatureCard
              icon="📚"
              title="Comprehensive Meanings"
              description="Get detailed definitions for thousands of words, including usage examples."
            />
            <FeatureCard
              icon="🔊"
              title="Pronunciation"
              description="Listen to correct pronunciations to improve your spoken English."
            />
            <FeatureCard
              icon="🔗"
              title="Synonyms & Antonyms"
              description="Expand your vocabulary with related words and opposites."
            />
            <FeatureCard
              icon="🌐"
              title="Modern & Responsive"
              description="Enjoy a seamless experience on any device with our modern UI."
            />
          </div>
        </section>

        <section className="mt-20 max-w-4xl w-full bg-white/70 rounded-2xl shadow-lg p-10">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">How to Use</h3>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
            <li>Type any word in the search box above.</li>
            <li>Click the <span className="font-semibold text-blue-600">Search</span> button.</li>
            <li>View the meaning, pronunciation, synonyms, antonyms, and more.</li>
            <li>Explore and learn new words every day!</li>
          </ol>
        </section>

        <div className="mt-16 text-center text-blue-500 font-medium text-xl animate-bounce">
          Start exploring words now!
        </div>
      </main>
    </div>
  );
};

export default HomePage;
