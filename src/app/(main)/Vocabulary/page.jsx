"use client";
import React, { useState } from 'react';

const initialWords = [
    { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
    { word: 'Candid', meaning: 'Truthful and straightforward' },
    { word: 'Pragmatic', meaning: 'Dealing with things sensibly and realistically' },
];

const Vocabulary = () => {
    const [search, setSearch] = useState('');

    const filteredWords = initialWords.filter(w =>
        w.word.toLowerCase().includes(search.toLowerCase()) ||
        w.meaning.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Vocabulary List</h1>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Search word or meaning..."
                    className="flex-1 px-3 py-2 border rounded"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <ul className="space-y-4">
                {filteredWords.length === 0 && (
                    <li className="text-gray-500 text-center">No words found.</li>
                )}
                {filteredWords.map((w, i) => (
                    <li
                        key={i}
                        className="flex items-center justify-between p-4 border rounded"
                    >
                        <div>
                            <span className="font-semibold">{w.word}</span>
                            <span className="ml-2 text-gray-600">{w.meaning}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Vocabulary;
