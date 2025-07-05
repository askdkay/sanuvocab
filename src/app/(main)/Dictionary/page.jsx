"use client";
import React, { useState } from "react";

const initialWords = [
  { word: "serendipity", meaning: "The occurrence of events by chance in a happy or beneficial way.", hindi: "संयोगवश सुखद घटना" },
  { word: "ephemeral", meaning: "Lasting for a very short time.", hindi: "क्षणिक" },
];

export default function DictionaryPage() {
  const [search, setSearch] = useState("");

  const filteredWords = initialWords.filter(
    (entry) =>
      entry.word.toLowerCase().includes(search.toLowerCase()) ||
      entry.meaning.toLowerCase().includes(search.toLowerCase()) ||
      (entry.hindi && entry.hindi.includes(search))
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Dictionary</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search word, meaning, or Hindi..."
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Word list */}
      <ul className="space-y-4">
        {filteredWords.length === 0 && (
          <li className="text-gray-500 text-center">No words found.</li>
        )}
        {filteredWords.map((entry) => (
          <li
            key={entry.word}
            className="flex items-start justify-between bg-white shadow rounded p-4"
          >
            <div>
              <span className="font-semibold text-lg">{entry.word}</span>
              <div className="text-gray-600">{entry.meaning}</div>
              <div className="text-green-700">{entry.hindi}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
