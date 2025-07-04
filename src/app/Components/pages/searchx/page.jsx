import React from "react";

const Searchx = () => {
  return (
    <div>
      <div className='mt-4 sm:mt-10 sm:px-2 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
        <div className='flex justify-end gap-4 max-sm:px-4'>
          <a className='z-1 max-sm:hidden inline-block rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600' href='docs/installation'>
            Get started
          </a>
          <button type='button' className='grid w-full grid-cols-[auto_1fr_auto] items-center gap-1 rounded-full px-4 py-2 text-left text-sm/6 text-gray-950/50 inset-ring inset-ring-gray-950/8 sm:w-80 dark:bg-white/5 dark:text-white/50 dark:inset-ring-white/15'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' className='-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500'>
              <path fillRule='evenodd' d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z' clipRule='evenodd'></path>
            </svg>
            Quick search
            <kbd className='hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&amp;]:block'>
              <span className='opacity-60'>⌘</span>K
            </kbd>
            <kbd className='hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&amp;]:block dark:text-gray-400'>
              <span className='opacity-60'>Ctrl</span>&nbsp;K
            </kbd>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchx;
