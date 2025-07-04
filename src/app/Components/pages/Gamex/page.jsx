"use client";
import { useState, useEffect, useRef } from "react";
import { simpleWords } from "../../../Data/Eng_Hi_data_01"; // Adjust the import path as necessary


// Import all your files...
const SpellingGame = () => {
  const wordList = simpleWords.map((item) => item.Eng); // Extract only Eng words

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const inputRef = useRef(null);
  const [shuffledWords, setShuffledWords] = useState([]);

  // Shuffle words on initial load
  useEffect(() => {
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };
    setShuffledWords(shuffleArray([...wordList]));
  }, []);

  // Auto-focus and reset state for new word
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setUserInput("");
    setFeedback("");
    setIsChecked(false);
  }, [currentWordIndex, shuffledWords]);

  const checkSpelling = () => {
    const correctWord = shuffledWords[currentWordIndex];
    const isCorrect = userInput.toLowerCase() === correctWord.toLowerCase();

    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Correct! Press Enter for next word");
    } else {
      const currentWordData = simpleWords.find((word) => word.Eng === correctWord);
      setFeedback(`Incorrect. Correct: ${correctWord} (${currentWordData.Hi})`);
    }
    setIsChecked(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!isChecked) {
        checkSpelling();
      } else {
        nextWord();
      }
    }
  };

  const renderKeyboardLetters = (word) => {
    return (
      <div className='flex justify-center mx-1 my-1 flex-wrap'>
        {(shuffledWords[currentWordIndex] || "").split("").map((letter, index) => (
          <div key={index} className='w-7 h-7 ml-[2px] flex items-center justify-center bg-gray-100 border-[1px] border-gray-500/50 rounded-md shadow-sm font-bold text-gray-800 text-xl'>
            {letter.toUpperCase()}
          </div>
        ))}
      </div>
    );
  };

  const nextWord = () => {
    if (currentWordIndex < shuffledWords.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      // Reshuffle when all words are shown
      const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      };
      setShuffledWords(shuffleArray([...wordList]));
      setCurrentWordIndex(0);
    }
  };
  return (
    <div className='relative h-full  flex flex-col items-center w-full justify-center '>
      {/* macbook view */}

      <div className='bg-gray-950/5 p-2 lg:col-span-2 lg:-mx-px w-[70%]'>
        <div className='rounded-xl bg-gray-950'>
          <div className='rounded-xl p-1 text-sm scheme-dark dark:inset-ring dark:inset-ring-gray-100/30'>
            <div className='flex gap-2 p-2'>
              <span className='size-3 rounded-full bg-[#FF605C]'></span>
              <span className='size-3 rounded-full bg-[#FFBD44]'></span>
              <span className='size-3 rounded-full bg-[#00CA4E]'></span>
            </div>
            <div className='with-line-numbers text-[13px]/6 *:*:p-3!'>
              <div className=' *:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-white/10! *:p-5 dark:*:bg-white/5! **:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh] *:inset-ring *:inset-ring-white/10 dark:*:inset-ring-gray-100/30'>
                <pre className='bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10'>
                  {/*  */}

                  <div className='bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)] dark:[--pattern-fg:var(--color-white)]/10 w-full max-w-[95%] h-[28rem] bg-gray-950 border-[1px] border-gray-100/30  rounded-md shadow-lg p-6 space-y-6'>
                    <h1 className='text-3xl font-bold text-center text-white diplomata-regular'>Spelling Game</h1>
                    {/* word/score */}white
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-sm font-medium text-gray-500'>
                        Word {currentWordIndex + 1} of {wordList.length}
                      </span>
                      <span className='text-sm font-bold text-purple-600'>
                        Score: {score}/{wordList.length}
                      </span>
                    </div>
                    {/*  */}
                    <div className='flex flex-row justify-between items-center'>
                      {/* wordlist */}
                      <div className=''>
                        <p>Word is </p>
                        <div className='border-[1px]   border-dashed border-indigo-200 rounded-lg'>
                          <h2 className='text-xl font-semibold text-center text-indigo-800 break-all'>{renderKeyboardLetters(shuffledWords[currentWordIndex] || "")}</h2>
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <p htmlFor='spelling' className='m-0'>
                          Type the spelling:
                        </p>
                        <div className=' border-dotted border-[1px]  border-gray-200  rounded-lg py-1'>
                          <input id='spelling' type='text' value={userInput.toUpperCase()} onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleKeyDown} ref={inputRef} autoComplete='off' className='w-full bg-transparent focus:outline-none text-center h-full text-2xl font-extrabold  text-gray-400 ' />
                        </div>
                      </div>
                    </div>
                    <div className='hindi-display mt-4'>
                      <p className='text-white'>
                        <span className='text-yellow-400'>Meaning:</span>
                        {simpleWords.find((word) => word.Eng === shuffledWords[currentWordIndex])?.Hi || "Not available"}
                      </p>
                      {/* Optional: Hindi letters */}
                    </div>
                    <div className='flex justify-center items-center mt-16'> {feedback && <div className={`p-3 rounded-lg text-center w-[70%] ${feedback.startsWith("Correct") ? "backdrop-blur-3xl border-[1px] border-green-500 text-green-800" : " text-red-800 border-[1px] border-red-500"}`}>{feedback}</div>}</div>
                  </div>
                  {/*  */}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end mac book view */}
    </div>
  );
};

export default SpellingGame;
