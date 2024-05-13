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
//   FaAngleDown,
//   FaPlus,
// } from "react-icons/fa";
// import "@fortawesome/fontawesome-free/css/all.css";
// import { IoOptionsOutline } from "react-icons/io5";
// import { BsSearch } from "react-icons/bs";
// import { VscGraph } from "react-icons/vsc";
// import { BsFillChatSquareTextFill } from "react-icons/bs";
// import { BsChatSquareDotsFill } from "react-icons/bs";
// import { BsFillInfoSquareFill } from "react-icons/bs";
// import { IoMail } from "react-icons/io5";
// import { BiSolidFileExport } from "react-icons/bi";
// import { LuBox } from "react-icons/lu";
// import { MdSunny } from "react-icons/md";
// import { IoMoonOutline } from "react-icons/io5";
// import { NavLink, Outlet } from "react-router-dom";
// import userImg from "../Images/Zayn-Malik.webp";
// import "../../src/Home.css";

// const SideNavbar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const [isDropOpen, setIsDropOpen] = useState(false);
//   const drop = () => setIsDropOpen(!isDropOpen);
//   const toggleTheme = () =>
//     setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
//   const [selectedTheme, setSelectedTheme] = useState("light");

//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   console.log("Selected Theme:", selectedTheme);
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
//       // path: "/payments",
//       name: "Documents",
//       icon: <FaFolder />,
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

//   const handleSubmenuToggle = (index) => {
//     setOpenSubmenu(openSubmenu === index ? null : index);
//   };

//   return (
//     <div className="box">
//       <div
//         style={{
//           backgroundColor: selectedTheme === "light" ? "#fff" : "#000",
//           color: selectedTheme === "light" ? "#000" : "#fff",
//           width: isOpen ? "250px" : "80px",
//           height: "100vh",
//           overflowY: "auto",
//           transition: "width 0.6s ease", // Add a transition for smoother animation
//         }}
//         className="sidebar"
//       >
//         <div className="top_section">
//           <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
//             Logo
//           </h1>
//           <div
//             style={{ marginLeft: isOpen ? "115px" : "15px" }}
//             className="bars"
//           >
//             <FaBars onClick={toggle} />
//           </div>
//         </div>
//         <div className={`form-field ${isOpen ? "full-width" : ""}`}>
//           <input
//             id="quick_search"
//             className="xs-hide ps-5"
//             name="quick_search"
//             placeholder="Search..."
//             type="search"
//             style={{ width: isOpen ? "100%" : "30%" }}
//           />
//           <i className="fa fa-search search-icon" aria-hidden="true"></i>
//           <div style={{ display: isOpen ? "flex" : "none" }}>
//             <span className="filter-icon text-black fs-5">
//               <IoOptionsOutline />
//             </span>
//           </div>
//         </div>
//         <div
//           className="d-flex "
//           style={{ justifyContent: isOpen ? "start" : "center" }}
//         >
//           <span
//             className="text-secondary fs-5 mt-2"
//             style={{ marginLeft: isOpen ? "20px" : "0" }}
//           >
//             Menu
//           </span>
//         </div>
//         {/* {menuItem.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="link"
//             activeclassName="active"
//           >
//             <div className="icon" style={{ marginLeft: isOpen ? "" : "12px" }}>
//               {item.icon}
//             </div>
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
//             <div className="icon" style={{ marginLeft: isOpen ? "" : "12px" }}>
//               {item.icon}
//             </div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="fs-5"
//             >
//               {item.name}
//             </div>
//           </NavLink>
//         ))} */}
//         {menuItem.map((item, index) => (
//           <div key={index}>
//             {item.submenu && isOpen ? (
//               <div>
//                 <NavLink
//                   to={item.path}
//                   className="link"
//                   activeClassName="active"
//                 >
//                   <div
//                     className="icon"
//                     style={{
//                       marginLeft: isOpen ? "" : "12px",
//                       color: selectedTheme === "light" ? "#000" : "#fff",
//                     }}
//                   >
//                     {item.icon}
//                   </div>
//                   <div
//                     style={{
//                       display: isOpen ? "block" : "none",
//                       color: selectedTheme === "light" ? "#000" : "#fff",
//                     }}
//                     className="fs-5"
//                   >
//                     {item.name}
//                   </div>
//                   <div
//                     className="icon"
//                     style={{
//                       marginLeft: isOpen ? "" : "12px",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => handleSubmenuToggle(index)}
//                   >
//                     {openSubmenu === index ? <FaAngleDown /> : <FaAngleRight />}
//                   </div>
//                 </NavLink>
//                 <div
//                   style={{
//                     display: openSubmenu === index ? "block" : "none",
//                     marginLeft: isOpen ? "" : "25px",
//                   }}
//                 >
//                   {item.submenu.map((subitem, subindex) => (
//                     <NavLink
//                       key={subindex}
//                       to={subitem.path}
//                       className="link"
//                       activeClassName="active"
//                     >
//                       <div
//                         className="icon"
//                         style={{
//                           marginLeft: isOpen ? "30px" : "0px",
//                         }}
//                       >
//                         {subitem.icon}
//                       </div>
//                       <div
//                         style={{
//                           display: isOpen ? "block" : "none",
//                         }}
//                         className="fs-5"
//                       >
//                         {subitem.name}
//                       </div>
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <NavLink to={item.path} className="link" activeClassName="active">
//                 <div
//                   className="icon"
//                   style={{
//                     marginLeft: isOpen ? "" : "12px",
//                     color: selectedTheme === "light" ? "#000" : "#fff",
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//                 <div
//                   style={{
//                     display: isOpen ? "block" : "none",
//                     color: selectedTheme === "light" ? "#000" : "#fff",
//                   }}
//                   className="fs-5"
//                 >
//                   {item.name}
//                 </div>
//               </NavLink>
//             )}
//             {index === menuItem.length - 1 && (
//               <div
//                 style={{
//                   marginLeft: isOpen ? "" : "12px",
//                   cursor: "pointer",
//                   marginTop: "10px",
//                 }}
//               ></div>
//             )}
//           </div>
//         ))}

// <div
//           className="d-flex "
//           style={{ justifyContent: isOpen ? "start" : "center" }}
//         >
//           <span
//             className="text-secondary fs-5 mt-2"
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
//             activeClassName="active"
//           >
//             <div
//               className="icon"
//               style={{
//                 marginLeft: isOpen ? "" : "12px",
//                 color: selectedTheme === "light" ? "#000" : "#fff",
//               }}
//             >
//               {item.icon}
//             </div>
//             <div
//               style={{
//                 display: isOpen ? "block" : "none",
//                 color: selectedTheme === "light" ? "#000" : "#fff",
//               }}
//               className="fs-5"
//             >
//               {item.name}
//             </div>
//           </NavLink>
//         ))}

//         <div
//           className="switch mb-2"
//           style={{
//             justifyContent: isOpen ? "center" : "start",
//             marginTop: isOpen ? "20px" : "85px",
//           }}
//         >
//           <div className="tabs">
//             <input
//               type="radio"
//               id="radio-1"
//               name="tabs"
//               checked={selectedTheme === "light"}
//               onChange={toggleTheme}
//             />
//             <label className="tab" for="radio-1">
//               <MdSunny />
//             </label>
//             <input
//               type="radio"
//               id="radio-2"
//               name="tabs"
//               checked={selectedTheme === "dark"}
//               onChange={toggleTheme}
//             />
//             <label className="tab" for="radio-2">
//               <IoMoonOutline />
//             </label>
//             <span className="glider"></span>
//           </div>
//         </div>
//         {/* <div
//           className="footer"
//           style={{
//             display: isOpen ? "flex" : "block",
//             paddingTop: isOpen ? "60px" : "100px",
//           }}
//         >
//           <div
//             className="mb-2 fs-5"
//             style={{ paddingLeft: isOpen ? "70px" : "0px" }}
//           >
//             <MdSunny />
//           </div>
//           <div
//             className="mb-2 fs-5"
//             style={{ paddingLeft: isOpen ? "25px" : "0px" }}
//           >
//             <IoMoonOutline />
//           </div>
//         </div> */}
//         <div
//           className="d-flex"
//           style={{
//             width: isOpen ? "35%" : "100%",
//           }}
//         >
//           <img src={userImg} className="img-fluid rounded-circle p-2"></img>
//           <div>
//             <span>Mariya Siby</span>
//             <p>mariya@gmail.com</p>
//           </div>
//         </div>
//       </div>
//       <main>{children}</main>
//       <Outlet />
//     </div>
//   );
// };

// export default SideNavbar;
