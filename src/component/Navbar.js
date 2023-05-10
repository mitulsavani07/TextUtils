import React, { memo, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import $ from 'jquery';


const Navbar = memo(() => {
  // const [isActive, setIsActive] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = () => {
    let main = document.querySelector('#main');
    let nav = document.querySelector('#nav');
    main.classList.toggle('active');
    nav.classList.toggle('active');
  };
  // const [isOpenmenu, setOpenmenu] = useState(false);

  // const handleNavClick = (index) => {
  //   setActiveIndex(index === activeIndex ? null : index);
  // };
  useEffect(() => {

    $(".navbarLink-a").click(function (e) {
      $(".navbarLink-a").removeClass("active");
      $(".navbarLink-content").removeClass("active");
      let checklist = $(this).next().hasClass('navbarLink-content');
      if(checklist){
        $(this).toggleClass("active");
        $(this).next('.navbarLink-content').toggleClass("active");
        e.preventDefault();
      }
    });

    const mediaQuery = window.matchMedia('(max-width: 767px)')
      if (mediaQuery.matches) {
        $(".navbarLink-content li a, .todo").click (function (e) {
          // $("#burgermenu").trigger("click");
          // $("#burgermenu").trigger("click");
          // e.preventDefault();
          $('#nav').removeClass('active');
        });
      }
  }, []);
  return (
    <>
      <nav id="nav" className={`overflow-y-auto h-screen w-full z-10 bg-light dark:bg-dark -left-full md:left-0 md:w-60 lg:w-80 fixed py-5 md:py-10 px-4 md:px-7 my-element duration-500 border-r-2 dark:border-darksecondary border-highlight`}>
        <div className="flex flex-shrink-0 items-center justify-between">
          <Link to="/">
            <img className="h-8 w-auto dark:hidden logo" src="images/light-logo.svg" alt="Your Company" />
            <img className="hidden h-8 w-auto dark:block logo" src="images/dark-logo.svg" alt="Your Company" />
            <img className='hidden h-8 navactive w-14' src="images/navactive.svg" alt="Your Company" />
          </Link>
          <svg onClick={handleClick} id="burgermenu" className='w-5 h-4 cursor-pointer' width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15 1.63021C15 1.16997 14.6269 0.796875 14.1667 0.796875H0.833332C0.373095 0.796875 0 1.16997 0 1.63021C0 2.09045 0.373095 2.46354 0.833332 2.46354H14.1667C14.6269 2.46354 15 2.09045 15 1.63021ZM14.1667 9.13021C14.6269 9.13021 15 9.5033 15 9.96354C15 10.4238 14.6269 10.7969 14.1667 10.7969H10.8333C10.3731 10.7969 10 10.4238 10 9.96354C10 9.5033 10.3731 9.13021 10.8333 9.13021H14.1667Z" fill="#808191" />
            <path d="M15 5.79622C15 5.33599 14.6269 4.96289 14.1667 4.96289H5.83333C5.3731 4.96289 5 5.33599 5 5.79622C5 6.25646 5.3731 6.62956 5.83333 6.62956H14.1667C14.6269 6.62956 15 6.25646 15 5.79622Z" fill="#CECECE" />
          </svg>
        </div>
        <div className="pt-10">
          <ul className="space-y-2 navbarLink">
            <li className=""><Link to="/" className={`active flex items-center relative navbarLink-a `}><span className='inline-block p-4 mr-2 bg-white drop-shadow-primary dark:drop-shadow-none dark:bg-darksecondary rounded-2xl nav-icon'>
              <svg className="w-4 h-4" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H12.3431C13.404 0 14.4214 0.421428 15.1716 1.17157L16.8284 2.82843C17.5786 3.57857 18 4.59599 18 5.65685V18C18 20.2091 16.2091 22 14 22H4C1.79086 22 0 20.2091 0 18V4ZM16 7V18C16 19.1046 15.1046 20 14 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2H11V4C11 5.65685 12.3431 7 14 7H16ZM15.8891 5C15.7909 4.7176 15.6296 4.45808 15.4142 4.24264L13.7574 2.58579C13.5419 2.37035 13.2824 2.20914 13 2.11094V4C13 4.55228 13.4477 5 14 5H15.8891Z" className="c2 fill-current"></path>
                <path d="M6 11C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H6Z" className="c1 fill-current"></path>
                <path d="M6 15C5.44771 15 5 15.4477 5 16C5 16.5523 5.44771 17 6 17H9C9.55229 17 10 16.5523 10 16C10 15.4477 9.55229 15 9 15H6Z" className="c1 fill-current"></path>
              </svg></span>
              <span className='showA'>Text</span>
              <svg className='absolute right-3 w-4 h-2 showA' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.796875L6 5.79687L11 0.796875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
              <ul className={`active p-4 space-y-4 text-gray navbarLink-content`}>
                <li><NavLink activeclassname="active" to="/case-converter" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Case Converter</NavLink></li>
                <li><NavLink activeclassname="active" to="find-and-replace" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Find and replace</NavLink></li>
                <li><NavLink activeclassname="active" to="remove-duplicate-keywords" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Remove Duplicate Keywords</NavLink></li>
                <li><NavLink activeclassname="active" to="remove-duplicate-lines" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Remove Duplicate Lines</NavLink></li>
                <li><NavLink activeclassname="active" to="remove-empty-lines" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Remove Empty Lines</NavLink></li>
                <li><NavLink activeclassname="active" to="remove-extra-spaces" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Remove Extra Spaces</NavLink></li>
                <li><NavLink activeclassname="active" to="remove-line-breaks" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Remove Line Breaks</NavLink></li>
                <li><NavLink activeclassname="active" to="reverse-string" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Reverse a String</NavLink></li>
                <li><NavLink activeclassname="active" to="/text-counter" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Text Counter</NavLink></li>
                <li><NavLink activeclassname="active" to="/split-text" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Split Text</NavLink></li>
                <li><NavLink activeclassname="active" to="/text-comparison" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Text Comparison</NavLink></li>
              </ul>
            </li>
            <li className=""><NavLink activeclassname="active" to="/todolist" className={`flex items-center relative todo navbarLink-a`}><span className='inline-block p-4 mr-2 bg-white drop-shadow-primary dark:drop-shadow-none dark:bg-darksecondary rounded-2xl nav-icon'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg></span>
              <span className='showA'>Todolist</span>
            </NavLink>
            </li>
            <li className=""><Link to="/" className={`flex items-center relative navbarLink-a `}><span className='inline-block p-4 mr-2 bg-white drop-shadow-primary dark:drop-shadow-none dark:bg-darksecondary rounded-2xl nav-icon'>
              <svg className="w-4 h-4" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H12.3431C13.404 0 14.4214 0.421428 15.1716 1.17157L16.8284 2.82843C17.5786 3.57857 18 4.59599 18 5.65685V18C18 20.2091 16.2091 22 14 22H4C1.79086 22 0 20.2091 0 18V4ZM16 7V18C16 19.1046 15.1046 20 14 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2H11V4C11 5.65685 12.3431 7 14 7H16ZM15.8891 5C15.7909 4.7176 15.6296 4.45808 15.4142 4.24264L13.7574 2.58579C13.5419 2.37035 13.2824 2.20914 13 2.11094V4C13 4.55228 13.4477 5 14 5H15.8891Z" className="c2 fill-current"></path>
                <path d="M6 11C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H6Z" className="c1 fill-current"></path>
                <path d="M6 15C5.44771 15 5 15.4477 5 16C5 16.5523 5.44771 17 6 17H9C9.55229 17 10 16.5523 10 16C10 15.4477 9.55229 15 9 15H6Z" className="c1 fill-current"></path>
              </svg></span>
              <span className='showA'>Formatter</span>
              <svg className='absolute right-3 w-4 h-2 showA' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.796875L6 5.79687L11 0.796875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
              <ul className={` p-4 space-y-4 text-gray navbarLink-content`}>
                <li><NavLink activeclassname="active" to="/css-formatter" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Css Formatter</NavLink></li>
                <li><NavLink activeclassname="active" to="/html-formatter" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  HTML Formatter</NavLink></li>
                <li><NavLink activeclassname="active" to="/javascript-formatter" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  JavaScript Formatter </NavLink></li>
                <li><NavLink activeclassname="active" to="/json-formatter" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  JSON Formatter </NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
})

export default Navbar