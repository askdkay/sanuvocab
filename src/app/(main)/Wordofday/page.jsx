"use client";
import React from 'react';

const Wordofday = () => {
// Example words data
const words = [
    {
        word: "Serendipity",
        type: "noun",
        definition: "The occurrence and development of events by chance in a happy or beneficial way.",
        example: '"Finding the book was pure serendipity."'
    },
    {
        word: "Ebullient",
        type: "adjective",
        definition: "Cheerful and full of energy.",
        example: '"She sounded ebullient and happy."'
    },
    {
        word: "Quixotic",
        type: "adjective",
        definition: "Exceedingly idealistic; unrealistic and impractical.",
        example: '"A vast and perhaps quixotic project."'
    }
];

const [index, setIndex] = React.useState(0);

const nextWord = () => setIndex((prev) => (prev + 1) % words.length);
const prevWord = () => setIndex((prev) => (prev - 1 + words.length) % words.length);

const { word, type, definition, example } = words[index];

return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-extrabold mb-8 text-blue-800 drop-shadow">Word of the Day</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{word}</h2>
            <p className="text-lg text-blue-600 mb-2 capitalize">{type}</p>
            <p className="text-gray-700 mb-4">{definition}</p>
            <div className="text-base text-gray-500 mb-6">
                Example: <span className="italic">{example}</span>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={prevWord}
                    className="px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded-lg text-blue-800 font-semibold transition"
                >
                    Previous
                </button>
                <button
                    onClick={nextWord}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
                >
                    Next
                </button>
            </div>
        </div>
        <div className="mt-8 text-gray-600 text-center max-w-xl">
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p>
                Explore a new word every day! Use the navigation buttons to discover more words, their meanings, and example usages. Expand your vocabulary and have fun learning.
            </p>
        </div>
    </div>
);
}

export default Wordofday;
