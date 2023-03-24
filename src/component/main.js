import React from 'react'
import { NavLink } from "react-router-dom";

export default function main() {
  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>Text Ease</h1>
        <div className='flex flex-wrap -mx-4 pb-10'>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
            <div className='w-full bg-white dark:bg-darksecondary p-5 rounded-lg drop-shadow-primary dark:drop-shadow-none'>
              <h4 className='text-primary dark:text-white text-xl font-semibold flex items-center gap-3'><svg className="w-6 h-6" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H12.3431C13.404 0 14.4214 0.421428 15.1716 1.17157L16.8284 2.82843C17.5786 3.57857 18 4.59599 18 5.65685V18C18 20.2091 16.2091 22 14 22H4C1.79086 22 0 20.2091 0 18V4ZM16 7V18C16 19.1046 15.1046 20 14 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2H11V4C11 5.65685 12.3431 7 14 7H16ZM15.8891 5C15.7909 4.7176 15.6296 4.45808 15.4142 4.24264L13.7574 2.58579C13.5419 2.37035 13.2824 2.20914 13 2.11094V4C13 4.55228 13.4477 5 14 5H15.8891Z" className="c2 fill-current"></path>
                <path d="M6 11C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H6Z" className="c1 fill-current"></path>
                <path d="M6 15C5.44771 15 5 15.4477 5 16C5 16.5523 5.44771 17 6 17H9C9.55229 17 10 16.5523 10 16C10 15.4477 9.55229 15 9 15H6Z" className="c1 fill-current"></path>
              </svg> Text</h4>
              <ul className='text-gray pt-4 space-y-3 mt-4'>
                <li><NavLink to="case-converter" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>case converter</NavLink></li>
                <li><NavLink to="find-and-replace" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Find and replace</NavLink></li>
                <li><NavLink to="remove-duplicate-keywords" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Remove Duplicate Keywords</NavLink></li>
                <li><NavLink to="remove-duplicate-lines" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Remove Duplicate Lines</NavLink></li>
                <li><NavLink to="remove-empty-lines" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Remove Empty Lines</NavLink></li>
                <li><NavLink to="remove-extra-spaces" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Remove Extra Spaces</NavLink></li>
                <li><NavLink to="remove-line-breaks" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Remove Line Breaks</NavLink></li>
                <li><NavLink to="reverse-string" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Reverse a String</NavLink></li>
                <li><NavLink to="/text-counter" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Text Counter</NavLink></li>
              </ul>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
            <div className='w-full bg-white dark:bg-darksecondary p-5 rounded-lg drop-shadow-primary dark:drop-shadow-none'>
              <h4 className='text-primary dark:text-white text-xl font-semibold flex items-center gap-3'><svg className="w-6 h-6" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H12.3431C13.404 0 14.4214 0.421428 15.1716 1.17157L16.8284 2.82843C17.5786 3.57857 18 4.59599 18 5.65685V18C18 20.2091 16.2091 22 14 22H4C1.79086 22 0 20.2091 0 18V4ZM16 7V18C16 19.1046 15.1046 20 14 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2H11V4C11 5.65685 12.3431 7 14 7H16ZM15.8891 5C15.7909 4.7176 15.6296 4.45808 15.4142 4.24264L13.7574 2.58579C13.5419 2.37035 13.2824 2.20914 13 2.11094V4C13 4.55228 13.4477 5 14 5H15.8891Z" className="c2 fill-current"></path>
                <path d="M6 11C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H6Z" className="c1 fill-current"></path>
                <path d="M6 15C5.44771 15 5 15.4477 5 16C5 16.5523 5.44771 17 6 17H9C9.55229 17 10 16.5523 10 16C10 15.4477 9.55229 15 9 15H6Z" className="c1 fill-current"></path>
              </svg> Formatter</h4>
              <ul className='text-gray pt-4 space-y-3 mt-4'>
                <li><NavLink to="css-formatter" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>Css Formatter</NavLink></li>
                <li><NavLink to="html-formatter" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  HTML Formatter</NavLink></li>
                <li><NavLink to="javascript-formatter" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  JavaScript Formatter</NavLink></li>
                <li><NavLink to="json-formatter" className="flex items-center"><svg className='mr-4 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  JSON Formatter</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
