// import React, { useState } from "react";
// import {
//   FaCalendarDay,
//   FaTh,
//   FaBars,
//   FaRegChartBar,
//   FaCommentAlt,
//   FaShoppingBag,
//   FaThList,
//   FaHouseUser,
//   FaHome,
//   FaFolder,
//   FaAngleRight,
//   FaPlus,
// } from "react-icons/fa";
// import { VscGraph } from "react-icons/vsc";
// import { BsFillChatSquareTextFill } from "react-icons/bs";
// import { BsChatSquareDotsFill } from "react-icons/bs";
// import { BsFillInfoSquareFill } from "react-icons/bs";
// import { IoMail } from "react-icons/io5";
// import { BiSolidFileExport } from "react-icons/bi";
// import { LuBox } from "react-icons/lu";
// import { MdSunny } from "react-icons/md";
// import { IoMoonOutline } from "react-icons/io5";
// import { NavLink } from "react-router-dom";
// import userImg from "../Images/Zayn-Malik.webp"
// import "../../src/Home.css";

// const Home = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const [isDropOpen, setIsDropOpen] = useState(false);
//   const drop = () => setIsOpen(!isDropOpen);
//   const menuItem = [
//     {
//       path: "/",
//       name: "Dashboard",
//       icon: <FaHouseUser />,
//     },
//     {
//       path: "/calendar",
//       name: "Calendar",
//       icon: <FaCalendarDay />,
//     },
//     {
//       path: "/documents",
//       name: "Documents",
//       icon: <FaFolder />,
//       right: <FaAngleRight />,
//       submenu: [
//         {
//           path: "/inbox",
//           name: "Inbox",
//           icon: <LuBox />,
//         },
//         {
//           path: "/incoming",
//           name: "Incoming",
//           icon: <IoMail />,
//         },
//         {
//           path: "/export",
//           name: "Export",
//           icon: <BiSolidFileExport />,
//         },
//       ],
//     },
//     {
//       path: "/statistics",
//       name: "Statistics",
//       icon: <VscGraph />,
//       right: <FaAngleRight />,
//     },
//     {
//       path: "/chat",
//       name: "Chat",
//       icon: <BsFillChatSquareTextFill />,
//     },
//     {
//       path: "/productList",
//       name: "Product List",
//       icon: <FaThList />,
//     },
//   ];
//   const menuItemSecond = [
//     {
//       path: "/info",
//       name: "Info",
//       icon: <BsFillInfoSquareFill />,
//     },
//     {
//       path: "/request",
//       name: "Request",
//       icon: <BsChatSquareDotsFill />,
//     },
//   ];

//   return (
//     <div className="box">
//       <div style={{ width: isOpen ? "200px" : "65px", height:"100vh" }} className="sidebar position-fixed">
//         <div className="top_section">
//           <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
//             Logo
//           </h1>
//           <div style={{ marginLeft: isOpen ? "50px" : "4px" }} className="bars">
//             <FaBars onClick={toggle} />
//           </div>
//         </div>
//         <div>
//         <a href="" class="search-mobile">
// 					<i class="fa fa-search"></i>
// 				</a>
//           </div>
//         <div
//           className="d-flex "
//           style={{ justifyContent: isOpen ? "start" : "center" }}
//         >
//           <span
//             className="text-secondary fs-5"
//             style={{ marginLeft: isOpen ? "20px" : "0" }}
//           >
//             Menu
//           </span>
//         </div>
//         {menuItem.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="link"
//             activeclassName="active"
//           >
//             <div className="icon ms-2">{item.icon}</div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="fs-5"
//             >
//               {item.name}
//             </div>
//             <div className="ms-auto ">
//               <span
//                 className="mt-1"
//                 onClick={drop}
//                 style={{ display: isOpen ? "block" : "none" }}
//               >
//                 {item.right}
//               </span>
//             </div>
//           </NavLink>
//         ))}
//         <div
//           className="d-flex"
//           style={{ justifyContent: isOpen ? "start" : "center" }}
//         >
//           <span
//             className="text-secondary fs-5"
//             style={{ marginLeft: isOpen ? "20px" : "0" }}
//           >
//             Others
//           </span>
//         </div>
//         {menuItemSecond.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="link"
//             activeclassName="active"
//           >
//             <div className="icon ms-2">{item.icon}</div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="fs-5"
//             >
//               {item.name}
//             </div>
//           </NavLink>
//         ))}
//         <div className="footer" style={{display:isOpen? "flex":"block",paddingTop:isOpen?"40px":"110px"}}>
//           <div className="mb-2 fs-5" style={{paddingLeft: isOpen ? "70px" : "0px"}}>
//           <MdSunny/>
//           </div>
//           <div className="mb-2 fs-5" style={{paddingLeft: isOpen ? "25px" : "0px"}}>
//           <IoMoonOutline/>
//           </div>
          
//         </div>
//         <div className="mx-auto" style={{width:isOpen?"50%":""}}>
//             <img src={userImg} className="img-fluid rounded-circle p-2"></img>
//           </div>
//       </div>
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import {SidebarData} from '../SideNavBar/SidebarData';
// import '../../src/Home.css'
// import { IconContext } from 'react-icons';

// function Home() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <div className='navbar'>
//           <Link to='#' className='menu-bars'>
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//           <ul className='nav-menu-items' onClick={showSidebar}>
//             <li className='navbar-toggle'>
//               <Link to='#' className='menu-bars'>
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Home;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
// import * as RiIcons from 'react-icons/ri';
// import { SidebarData } from '../SideNavBar/SidebarData';
// import SubMenu from '../SideNavBar/SubMenu';

// const Nav = styled.div`
//   background: #15171c;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   color: #fff;
//   text-decoration: none;
// `;

// const SidebarNav = styled.nav`
//   background: #15171c;
//   width: 250px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
//   transition: 350ms;
//   z-index: 10;
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
// `;

// const Home = () => {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <Nav>
//         <NavIcon to='#'>
//           <FaIcons.FaBars onClick={showSidebar} />
//         </NavIcon>
//       </Nav>
//       <SidebarNav sidebar={sidebar}>
//         <SidebarWrap>
//           <NavIcon to='#'>
//             <AiIcons.AiOutlineClose onClick={showSidebar} />
//           </NavIcon>
//           {SidebarData.map((item, index) => (
//             <SubMenu item={item} key={index} />
//           ))}
//         </SidebarWrap>
//       </SidebarNav>
//     </>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import '../../src/Home.css';
// // import Apartmentlogo from '../Assets/Images/Apartment logo.png';
// // import person1 from '../Assets/Images/person1.jpeg';
// // import person2 from '../Assets/Images/person2.jpeg';
// // import person3 from '../Assets/Images/person3.jpeg';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import SidebarData from '../SideNavBar/SidebarData';

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   useEffect(() => {

//     const arrows = document.querySelectorAll(".arrow");

//     const handleArrowClick = (e) => {
//       const arrowParent = e.target.parentElement.parentElement;
//       arrowParent.classList.toggle("showMenu");
//     };

//     arrows.forEach((arrow) => {
//       arrow.addEventListener('click', handleArrowClick);
//     });
//     const handleWindowResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleWindowResize);

//     return () => {
//       window.removeEventListener('resize', handleWindowResize);
//       arrows.forEach((arrow) => {
//         arrow.removeEventListener('click', handleArrowClick);
//       });
//     };

//   }, []);

//   return (
//     <div className="layout has-sidebar">
//     {windowWidth <= 768 && ( // For screens less than or equal to 768px, display the menu toggle button
//     <div className="menu-toggle-container">
//     <span href="#menu-toggle" id="menu-toggle" onClick={toggleSidebar} >
//             &#9776;
//           </span>
//           </div>
//            )}
//            {(windowWidth > 768 || sidebarOpen) && ( // For screens larger than 768px or if sidebar is open, display the sidebar
//    <div className={`sidebar ${sidebarOpen ? '' : 'close'}`}>
//       <div className="toggle" onClick={toggleSidebar}>
//         <i
//           className={`bx text-dark fw-bold ${
//             sidebarOpen ? "bx-chevron-left" : "bx-chevron-right"
//           }`}
//         ></i>
//       </div>
//       <div className="logo-details">
//         {/* <img src={Apartmentlogo} alt="" /> */}
//         <span className="logo_name">Apna Apartment</span>
//       </div>
//       <div className="scrollbar">
//       <div>
//           {SidebarData[0].menu.map((menuItem, index) => (
//             <div key={index}>
//               {menuItem.submenu ? (
//                 <ul className="nav-links">
//                   <li>
//                     <div className="icon-link">
//                       <Link to={menuItem.link} className="navlink">
//                         {menuItem.icon && <i className={menuItem.icon}></i>}
//                         <span className="link_name">{menuItem.title}</span>
//                       </Link>
//                       <i className='bx bxs-chevron-down arrow'></i>
//                     </div>
//                     <ul className="sub-menu">
//                       {menuItem.submenu.map((subMenuItem, subIndex) => (
//                         <li key={subIndex}>
//                           <Link to={subMenuItem.link} className="navlink">
//                             {subMenuItem.icon && <i className={subMenuItem.icon}></i>}
//                             <span className="sub-title">{subMenuItem.title}</span>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 </ul>
//               ) : (
//                 <ul className="nav-links">
//                   <li>
//                     <Link to={menuItem.link} className="navlink">
//                       {menuItem.icon && <i className={menuItem.icon}></i>}
//                       <span className="link_name">{menuItem.title}</span>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//         <div>
//           <div className="sub-header"><span>EMAIL</span></div>
//           <div className='person-details'>
//             <ul className="nav-user">
//               <li className="person">
//                 <Link to="/william" className="person-one d-flex align-items-center">
//                   {/* <img src={person1} alt='' className="img-fluid mr-3" /> */}
//                   <span className="user-name">William</span>
//                 </Link>
//               </li>
//               <li className="person">
//                 <Link to="/robert" className="person-one d-flex align-items-center">
//                   {/* <img src={person2} alt='' className="img-fluid mr-3" /> */}
//                   <span className="user-name">Robert</span>
//                 </Link>
//               </li>
//               <li className="person">
//                 <Link to="/matt" className="person-one d-flex align-items-center">
//                   {/* <img src={person3} alt='' className="img-fluid mr-3" /> */}
//                   <span className="user-name">Matt</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="footer">
//           <div className="footer-box">
//             {sidebarOpen && (
//               <div className="shadow container" style={{ marginTop: -160 }}>
//                 <div className="container">
//                   <h5 className="start fw-bold text-center text-white">
//                     Let's start
//                   </h5>
//                   <p className="create-one text-center text-white">
//                     Creating or adding new tasks couldn't be easier
//                   </p> 
//                 </div>
//               </div>
//             )}
//             <div className="person-details">
//               <ul className="">
//                 <li className="person">
//                   <div className="d-flex align-items-center">
//                     <Button
//                       className="plus-btn"
//                       id="faplus"
//                       as={Link}
//                       to="/Profile"
//                     >
//                       <FontAwesomeIcon icon={faPlus} />
//                       {sidebarOpen && "Add New Task"}
//                     </Button>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//     )}

//     <div id="page-content-wrapper">

//        <h1 class="h1">Apna Apartment</h1>
//        </div>
//      </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import '../../src/Home.css'; // Include your CSS file

// const Home = () => {
//   const [showMenu, setShowMenu] = useState({
//     sidebar: false,
//     0: false,
//     1: false,
//     2: false,
//     3: false,
//     4: false,
//     5: false,
//     6: false,
//     7: false,
//   });

//   const handleArrowClick = (index) => {
//     setShowMenu((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   const handleSidebarToggle = () => {
//     setShowMenu((prev) => ({ ...prev, sidebar: !prev.sidebar }));
//   };

//   const menuItems = [
//     { icon: 'bxl-bitcoin', label: 'Menu' },
//     { icon: 'bx-home', label: 'Home', subMenu: ['Home'] },
//     {
//       icon: 'bx-bulb',
//       label: 'Solutions',
//       subMenu: ['Solutions', 'Payments API', 'Accounts API', 'Finance API'],
//     },
//     {
//       icon: 'bx-news',
//       label: 'Posts',
//       subMenu: ['Posts', 'Recent', 'Trending', 'Most Visited'],
//     },
//     {
//       icon: 'bx-file-find',
//       label: 'Insights',
//       subMenu: ['Insights', 'Money Movement', 'Enterprise Spotlight', 'Financial Burnout'],
//     },
//     { icon: 'bxs-credit-card', label: 'Pricing', subMenu: ['Pricing'] },
//     { icon: 'bx-bar-chart', label: 'Chart', subMenu: ['Chart'] },
//     { icon: 'bx-compass', label: 'Explore', subMenu: ['Explore'] },
//     { icon: 'bx-cog', label: 'Setting', subMenu: ['Setting'] },
//   ];

//   return (
//     <div className={`sidebar ${showMenu.sidebar ? 'close' : ''}`}>

//       <div className="logo-details">
//         <i className={`bx ${menuItems[0].icon}`}></i>
//         <span className="logo_name">{menuItems[0].label}</span>
//       </div>
//       <ul className="nav-links">
//         {menuItems.map((menuItem, index) => (
//           <li key={index}>
//             {menuItem.subMenu ? (
//               <div className="icon-link">
//                 <a href="#" onClick={() => handleArrowClick(index)}>
//                   <i className={`bx ${menuItem.icon}`}></i>
//                   <span className="link_name">{menuItem.label}</span>
//                 </a>
//                 <i className={`bx bxs-chevron-down arrow`}></i>
//                 <ul className={`sub-menu ${showMenu[index] ? '' : 'blank'}`}>
//                   {menuItem.subMenu.map((subItem, subIndex) => (
//                     <li key={subIndex}>
//                       <a className="link_name" href="#">
//                         {subItem}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : (
//               <a href="#">
//                 <i className={`bx ${menuItem.icon}`}></i>
//                 <span className="link_name">{menuItem.label}</span>
//               </a>
//             )}
//           </li>
//         ))}
//         <li>
//           <div className="profile-details">
//             <div className="profile-content">
//               <img
//                 src="https://sachinsamal.netlify.app/static/media/sachin-samal.d451ea9b3c53ed984bf7.png"
//                 alt="profileImg"
//               />
//             </div>
//             <div className="name-job">
//               <div className="profile_name">John Doe</div>
//               <div className="job">Crypto Expert</div>
//             </div>
//             <i className="bx bx-log-out"></i>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Home;