"use client";
import React from "react";

const page = () => {
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar",
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan",
    },
];

const [current, setCurrent] = React.useState(0);

const handleNext = () => {
    setCurrent((prev) => (prev + 1) % quotes.length);
};

const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);
};

return (
    <div>
        <h1 className="text-3xl font-bold mb-4 text-center">Quote of the Day</h1>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
            <p className="text-lg italic text-gray-700 mb-4">
                "{quotes[current].text}"
            </p>
            <span className="block text-right text-sm text-gray-500">
                - {quotes[current].author}
            </span>
            <div className="flex justify-between mt-6">
                <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={handlePrev}
                >
                    Previous
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    </div>
);
}

export default page;
