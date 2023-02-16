import React, { memo, useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import $ from 'jquery';


const Navbar = memo(() => {
  // const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = () => {
    let main = document.querySelector('#main');
    let nav = document.querySelector('#nav');
    main.classList.toggle('active');
    nav.classList.toggle('active');
  };
  // const [isOpenmenu, setOpenmenu] = useState(false);

  const handleNavClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  useEffect(() => {
    $(".navbarLink-a").click(function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
      // $(this).next().slideToggle();
    });
  }, []);
  return (
    <>
      <nav id="nav" className={`h-screen w-full z-10 bg-light dark:bg-dark -left-full md:left-0 md:w-60 lg:w-80 fixed py-5 md:py-10 px-4 md:px-7 my-element duration-500 border-r-2 dark:border-darksecondary border-highlight`}>
        <div className="flex flex-shrink-0 items-center justify-between">
          <Link to="/">
            <img className="h-8 w-auto dark:hidden logo" src="images/light-logo.svg" alt="Your Company" />
            <img className="hidden h-8 w-auto dark:block logo" src="images/dark-logo.svg" alt="Your Company" />
            <img className='hidden h-8 navactive w-14' src="images/navactive.svg" alt="Your Company" />
          </Link>
          <svg onClick={handleClick} className='w-5 h-4 cursor-pointer' width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15 1.63021C15 1.16997 14.6269 0.796875 14.1667 0.796875H0.833332C0.373095 0.796875 0 1.16997 0 1.63021C0 2.09045 0.373095 2.46354 0.833332 2.46354H14.1667C14.6269 2.46354 15 2.09045 15 1.63021ZM14.1667 9.13021C14.6269 9.13021 15 9.5033 15 9.96354C15 10.4238 14.6269 10.7969 14.1667 10.7969H10.8333C10.3731 10.7969 10 10.4238 10 9.96354C10 9.5033 10.3731 9.13021 10.8333 9.13021H14.1667Z" fill="#808191" />
            <path d="M15 5.79622C15 5.33599 14.6269 4.96289 14.1667 4.96289H5.83333C5.3731 4.96289 5 5.33599 5 5.79622C5 6.25646 5.3731 6.62956 5.83333 6.62956H14.1667C14.6269 6.62956 15 6.25646 15 5.79622Z" fill="#CECECE" />
          </svg>
        </div>
        <div className="pt-10">
          <ul className="space-y-2 navbarLink">
            {/* <li className="bg-white drop-shadow-primary dark:drop-shadow-none dark:bg-darksecondary text-primary dark:text-white p-2 rounded-2xl font-medium"><Link to="/" className='flex items-center relative'><span className='inline-block p-4 mr-2'><svg className='w-4 h-4' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99156 11.8947L5.17079 11.7406L5.17079 11.7406L5.99156 11.8947ZM6.00529 11.8215L6.82606 11.9756L6.82606 11.9756L6.00529 11.8215ZM9.21694 11.8215L8.39617 11.9756L8.39617 11.9756L9.21694 11.8215ZM9.23067 11.8947L10.0514 11.7406L10.0514 11.7406L9.23067 11.8947ZM9.02496 13.4787L9.77903 13.8376L9.77903 13.8376L9.02496 13.4787ZM8.18799 13.2941C7.9898 13.7105 8.16675 14.2088 8.58321 14.407C8.99967 14.6052 9.49794 14.4282 9.69614 14.0118L8.18799 13.2941ZM6.19728 13.4787L5.4432 13.8376L5.44321 13.8376L6.19728 13.4787ZM5.5261 14.0118C5.72429 14.4282 6.22257 14.6052 6.63903 14.407C7.05549 14.2088 7.23243 13.7105 7.03424 13.2941L5.5261 14.0118ZM7.15757 10.5618L6.93429 9.75707L6.93429 9.75707L7.15757 10.5618ZM8.06466 10.5618L8.28794 9.75707L8.28794 9.75707L8.06466 10.5618ZM6.81233 12.0487L6.82606 11.9756L5.18452 11.6675L5.17079 11.7406L6.81233 12.0487ZM8.39617 11.9756L8.4099 12.0487L10.0514 11.7406L10.0377 11.6675L8.39617 11.9756ZM8.27089 13.1199L8.18799 13.2941L9.69614 14.0118L9.77903 13.8376L8.27089 13.1199ZM5.44321 13.8376L5.5261 14.0118L7.03424 13.2941L6.95134 13.1199L5.44321 13.8376ZM8.4099 12.0487C8.47805 12.4118 8.42921 12.7872 8.27089 13.1199L9.77903 13.8376C10.0894 13.1853 10.1847 12.4507 10.0514 11.7406L8.4099 12.0487ZM5.17079 11.7406C5.0375 12.4507 5.1328 13.1853 5.4432 13.8376L6.95135 13.1199C6.79303 12.7872 6.74418 12.4118 6.81234 12.0487L5.17079 11.7406ZM7.38085 11.3665C7.53159 11.3246 7.69064 11.3246 7.84138 11.3665L8.28794 9.75707C7.84501 9.63417 7.37722 9.63417 6.93429 9.75707L7.38085 11.3665ZM10.0377 11.6675C9.86549 10.75 9.18871 10.007 8.28794 9.75707L7.84138 11.3665C8.12325 11.4447 8.34053 11.6792 8.39617 11.9756L10.0377 11.6675ZM6.82606 11.9756C6.8817 11.6792 7.09898 11.4447 7.38085 11.3665L6.93429 9.75707C6.03352 10.007 5.35674 10.75 5.18452 11.6675L6.82606 11.9756Z" fill="currentColor" />
              <path d="M13.621 5.78896C13.621 5.32775 13.2471 4.95386 12.7859 4.95386C12.3247 4.95386 11.9508 5.32775 11.9508 5.78896H13.621ZM3.27158 5.78896C3.27158 5.32775 2.89769 4.95386 2.43648 4.95386C1.97526 4.95386 1.60137 5.32775 1.60137 5.78896H3.27158ZM9.39521 13.5887L9.20321 12.776L9.39521 13.5887ZM5.82719 13.5887L6.01919 12.776L5.82719 13.5887ZM9.61894 2.44931L9.02634 3.03772L9.61894 2.44931ZM13.4072 7.44971C13.7321 7.77699 14.2609 7.77886 14.5882 7.45389C14.9155 7.12892 14.9173 6.60017 14.5924 6.27288L13.4072 7.44971ZM5.60348 2.44931L6.19608 3.03772L5.60348 2.44931ZM0.630059 6.27288C0.305088 6.60017 0.306962 7.12892 0.634245 7.45389C0.961527 7.77887 1.49028 7.77699 1.81525 7.44971L0.630059 6.27288ZM11.9508 5.78896V9.2802H13.621V5.78896H11.9508ZM3.27158 9.2802V5.78896H1.60137V9.2802H3.27158ZM9.20321 12.776C8.15606 13.0234 7.06634 13.0234 6.01919 12.776L5.63519 14.4015C6.93487 14.7085 8.28753 14.7085 9.58721 14.4015L9.20321 12.776ZM6.01919 12.776C4.41337 12.3966 3.27158 10.9515 3.27158 9.2802H1.60137C1.60137 11.7185 3.26829 13.8423 5.63519 14.4015L6.01919 12.776ZM9.58721 14.4015C11.9541 13.8423 13.621 11.7185 13.621 9.2802H11.9508C11.9508 10.9515 10.809 12.3966 9.20321 12.776L9.58721 14.4015ZM9.02634 3.03772L13.4072 7.44971L14.5924 6.27288L10.2115 1.8609L9.02634 3.03772ZM5.01088 1.8609L0.630059 6.27288L1.81525 7.44971L6.19608 3.03772L5.01088 1.8609ZM10.2115 1.8609C9.75498 1.4011 9.35454 0.995288 8.9895 0.714786C8.60543 0.419667 8.16307 0.184426 7.61121 0.184426V1.85464C7.6474 1.85464 7.73567 1.85769 7.97184 2.03917C8.22704 2.23526 8.53644 2.54434 9.02634 3.03772L10.2115 1.8609ZM6.19608 3.03772C6.68598 2.54434 6.99538 2.23526 7.25057 2.03917C7.48674 1.85769 7.57502 1.85464 7.61121 1.85464V0.184426C7.05935 0.184426 6.61699 0.419667 6.23292 0.714786C5.86787 0.995288 5.46743 1.4011 5.01088 1.8609L6.19608 3.03772Z" fill="currentColor" />
            </svg></span>
              <span className='showA'>Home</span>
              <svg className='absolute right-0 w-4 h-2 showA' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.796875L6 5.79687L11 0.796875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link></li> */}
            <li className=""><Link to="/"  onClick={() => handleNavClick(0)} tabIndex={0} className={`flex items-center relative navbarLink-a ${activeIndex === 0 ? "active" : ""}`}><span className='inline-block p-4 mr-2 bg-white drop-shadow-primary dark:drop-shadow-none dark:bg-darksecondary rounded-2xl nav-icon'>
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
              <ul className={`${activeIndex === 0 ? "active" : ""} p-4 space-y-4 text-gray navbarLink-content`}>
                <li><NavLink activeClassName="active" to="/case-converter" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                  Case Converter</NavLink></li>
                <li><NavLink activeClassName="active" to="find-and-replace" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Find and replace</NavLink></li>
                <li><NavLink activeClassName="active" to="remove-duplicate-keywords" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Remove Duplicate Keywords</NavLink></li>
                <li><Link to="/" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Remove Duplicate Lines</Link></li>
                <li><Link to="/" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Remove Empty Lines</Link></li>
                <li><Link to="/" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Remove Extra Spaces</Link></li>
                <li><Link to="/" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Remove Line Breaks</Link></li>
                <li><Link to="/" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Remove Lines Containing</Link></li>
                <li><Link to="/" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Reverse a String</Link></li>
                <li><Link to="/" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Sort text lines</Link></li>
                <li><Link to="/" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Text Counter</Link></li>
                <li><Link to="/" className="flex items-center"><svg className='mr-4 ml-1 w-2 h-2' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="3.79688" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Text Upside Down</Link></li>
              </ul>
            </li>
            <li className=""><Link onClick={() => handleNavClick(1)} tabIndex={0} to="/todolist" className={`${activeIndex === 1 ? "active" : ""} flex items-center relative navbarLink-a`}><span className='inline-block p-4 mr-2 bg-white drop-shadow-primary dark:drop-shadow-none dark:bg-darksecondary rounded-2xl nav-icon'><svg className='w-4 h-4' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99156 11.8947L5.17079 11.7406L5.17079 11.7406L5.99156 11.8947ZM6.00529 11.8215L6.82606 11.9756L6.82606 11.9756L6.00529 11.8215ZM9.21694 11.8215L8.39617 11.9756L8.39617 11.9756L9.21694 11.8215ZM9.23067 11.8947L10.0514 11.7406L10.0514 11.7406L9.23067 11.8947ZM9.02496 13.4787L9.77903 13.8376L9.77903 13.8376L9.02496 13.4787ZM8.18799 13.2941C7.9898 13.7105 8.16675 14.2088 8.58321 14.407C8.99967 14.6052 9.49794 14.4282 9.69614 14.0118L8.18799 13.2941ZM6.19728 13.4787L5.4432 13.8376L5.44321 13.8376L6.19728 13.4787ZM5.5261 14.0118C5.72429 14.4282 6.22257 14.6052 6.63903 14.407C7.05549 14.2088 7.23243 13.7105 7.03424 13.2941L5.5261 14.0118ZM7.15757 10.5618L6.93429 9.75707L6.93429 9.75707L7.15757 10.5618ZM8.06466 10.5618L8.28794 9.75707L8.28794 9.75707L8.06466 10.5618ZM6.81233 12.0487L6.82606 11.9756L5.18452 11.6675L5.17079 11.7406L6.81233 12.0487ZM8.39617 11.9756L8.4099 12.0487L10.0514 11.7406L10.0377 11.6675L8.39617 11.9756ZM8.27089 13.1199L8.18799 13.2941L9.69614 14.0118L9.77903 13.8376L8.27089 13.1199ZM5.44321 13.8376L5.5261 14.0118L7.03424 13.2941L6.95134 13.1199L5.44321 13.8376ZM8.4099 12.0487C8.47805 12.4118 8.42921 12.7872 8.27089 13.1199L9.77903 13.8376C10.0894 13.1853 10.1847 12.4507 10.0514 11.7406L8.4099 12.0487ZM5.17079 11.7406C5.0375 12.4507 5.1328 13.1853 5.4432 13.8376L6.95135 13.1199C6.79303 12.7872 6.74418 12.4118 6.81234 12.0487L5.17079 11.7406ZM7.38085 11.3665C7.53159 11.3246 7.69064 11.3246 7.84138 11.3665L8.28794 9.75707C7.84501 9.63417 7.37722 9.63417 6.93429 9.75707L7.38085 11.3665ZM10.0377 11.6675C9.86549 10.75 9.18871 10.007 8.28794 9.75707L7.84138 11.3665C8.12325 11.4447 8.34053 11.6792 8.39617 11.9756L10.0377 11.6675ZM6.82606 11.9756C6.8817 11.6792 7.09898 11.4447 7.38085 11.3665L6.93429 9.75707C6.03352 10.007 5.35674 10.75 5.18452 11.6675L6.82606 11.9756Z" fill="currentColor" />
              <path d="M13.621 5.78896C13.621 5.32775 13.2471 4.95386 12.7859 4.95386C12.3247 4.95386 11.9508 5.32775 11.9508 5.78896H13.621ZM3.27158 5.78896C3.27158 5.32775 2.89769 4.95386 2.43648 4.95386C1.97526 4.95386 1.60137 5.32775 1.60137 5.78896H3.27158ZM9.39521 13.5887L9.20321 12.776L9.39521 13.5887ZM5.82719 13.5887L6.01919 12.776L5.82719 13.5887ZM9.61894 2.44931L9.02634 3.03772L9.61894 2.44931ZM13.4072 7.44971C13.7321 7.77699 14.2609 7.77886 14.5882 7.45389C14.9155 7.12892 14.9173 6.60017 14.5924 6.27288L13.4072 7.44971ZM5.60348 2.44931L6.19608 3.03772L5.60348 2.44931ZM0.630059 6.27288C0.305088 6.60017 0.306962 7.12892 0.634245 7.45389C0.961527 7.77887 1.49028 7.77699 1.81525 7.44971L0.630059 6.27288ZM11.9508 5.78896V9.2802H13.621V5.78896H11.9508ZM3.27158 9.2802V5.78896H1.60137V9.2802H3.27158ZM9.20321 12.776C8.15606 13.0234 7.06634 13.0234 6.01919 12.776L5.63519 14.4015C6.93487 14.7085 8.28753 14.7085 9.58721 14.4015L9.20321 12.776ZM6.01919 12.776C4.41337 12.3966 3.27158 10.9515 3.27158 9.2802H1.60137C1.60137 11.7185 3.26829 13.8423 5.63519 14.4015L6.01919 12.776ZM9.58721 14.4015C11.9541 13.8423 13.621 11.7185 13.621 9.2802H11.9508C11.9508 10.9515 10.809 12.3966 9.20321 12.776L9.58721 14.4015ZM9.02634 3.03772L13.4072 7.44971L14.5924 6.27288L10.2115 1.8609L9.02634 3.03772ZM5.01088 1.8609L0.630059 6.27288L1.81525 7.44971L6.19608 3.03772L5.01088 1.8609ZM10.2115 1.8609C9.75498 1.4011 9.35454 0.995288 8.9895 0.714786C8.60543 0.419667 8.16307 0.184426 7.61121 0.184426V1.85464C7.6474 1.85464 7.73567 1.85769 7.97184 2.03917C8.22704 2.23526 8.53644 2.54434 9.02634 3.03772L10.2115 1.8609ZM6.19608 3.03772C6.68598 2.54434 6.99538 2.23526 7.25057 2.03917C7.48674 1.85769 7.57502 1.85464 7.61121 1.85464V0.184426C7.05935 0.184426 6.61699 0.419667 6.23292 0.714786C5.86787 0.995288 5.46743 1.4011 5.01088 1.8609L6.19608 3.03772Z" fill="currentColor" />
            </svg></span>
              <span className='showA'>Todolist</span>
              <svg className='absolute right-3 w-4 h-2 showA' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.796875L6 5.79687L11 0.796875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className={`${activeIndex === 1 ? "active" : ""} navbarLink-content`}>
          <p className="accordion-content">Sed sed risus justo. Nullam tristique ex ac mi consectetur, vel venenatis lectus suscipit. Integer sed risus sed massa euismod eleifend.</p>
        </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
})

export default Navbar