import React, {  } from 'react'

const Topbar = () => {
  let clickedClass = "clicked"
  const body = document.querySelector('html')
  const lightTheme = "light"
  const darkTheme = "dark"
  let theme

  if (localStorage) {
    theme = localStorage.getItem("theme")
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const switchTheme = e => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem("theme", "light")
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      localStorage.setItem("theme", "dark")
      theme = darkTheme
    }
  }
  // menu

  const handleClick = () => {
    let nav = document.querySelector('#nav');
    nav.classList.toggle('active');
  };
  return (
    <>
      <div className="mx-auto container flex justify-between md:justify-end items-center">
        <svg onClick={handleClick} className='w-5 h-4 cursor-pointer md:hidden' width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15 1.63021C15 1.16997 14.6269 0.796875 14.1667 0.796875H0.833332C0.373095 0.796875 0 1.16997 0 1.63021C0 2.09045 0.373095 2.46354 0.833332 2.46354H14.1667C14.6269 2.46354 15 2.09045 15 1.63021ZM14.1667 9.13021C14.6269 9.13021 15 9.5033 15 9.96354C15 10.4238 14.6269 10.7969 14.1667 10.7969H10.8333C10.3731 10.7969 10 10.4238 10 9.96354C10 9.5033 10.3731 9.13021 10.8333 9.13021H14.1667Z" fill="#808191" />
          <path d="M15 5.79622C15 5.33599 14.6269 4.96289 14.1667 4.96289H5.83333C5.3731 4.96289 5 5.33599 5 5.79622C5 6.25646 5.3731 6.62956 5.83333 6.62956H14.1667C14.6269 6.62956 15 6.25646 15 5.79622Z" fill="#CECECE" />
        </svg>
        <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {/* darkmode button */}
          <div id="darkMode" onClick={e => switchTheme(e)} className="relative z-0 w-[50px] ml-auto flex p-[5px] dark:bg-white bg-[#1a202c] rounded-full cursor-pointer shadow-[0px_5px_20px_-10px_#000000] duration-300 ease-in transition-colors">
            <div className="z-20 toggle-inner w-[20px] h-[15px] dark:bg-dark bg-white rounded-full transition-[margin-left_0.2s_ease-in,_background-color_0.2s_ease-in]"></div>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 absolute top-1/2 right-1 z-10 -translate-y-1/2"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-slate-400 dark:stroke-slate-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-slate-400 dark:stroke-slate-500"></path></svg>
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-2 absolute left-1 top-1/2 z-10 -translate-y-1/2"><path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-transparent"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-slate-400 dark:fill-slate-500"></path><path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-slate-400 dark:fill-slate-500"></path></svg>
          </div>
          <div className="relative ml-3">
            <div>
              <button type="button" className="flex rounded-full bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </button>
            </div>
            
          </div>
        </div>
      </div>
      {/* copied text alert box */}
      <div className='copied-alert absolute left-[56%] top-7 hidden duration-500 ease-in-out -translate-x-1/2'>
          <p className='inline-flex items-center gap-3 border border-green-500 px-4 py-3 rounded-lg bg-green-100 font-medium dark:text-green-500'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
          Your Text been copied!
          </p>
      </div>
    </>
  )
}

export default Topbar
