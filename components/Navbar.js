// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="block   py-4 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-white/80 w-full max-w-full rounded-none px-4 bg-white sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <p className="block  font-sans text-blue-gray-900 text-lg font-bold">
//           Material Tailwind
//         </p>

//         {/* Desktop Menu */}
//         <ul className="ml-10 hidden items-center gap-8 lg:flex">
//           <li>
//             <a
//               href="#"
//               className="font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900"
//             >
//               <HomeIcon /> Page
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900"
//             >
//               <UserIcon /> Account
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               target="_blank"
//               className="font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900"
//             >
//               <DocsIcon /> Docs
//             </a>
//           </li>
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden items-center gap-2 lg:flex">
//           <button className="text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 font-bold uppercase">
//             Sign In
//           </button>
//           <a href="#">
//             <button className="text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 font-bold uppercase">
//               blocks
//             </button>
//           </a>
//         </div>

//         {/* Hamburger Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="relative align-middle w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 ml-auto inline-block lg:hidden"
//         >
//           <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
//             {open ? <CloseIcon /> : <MenuIcon />}
//           </span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="block w-full basis-full overflow-hidden">
//           <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
//             <ul className="flex flex-col gap-4">
//               <li>
//                 <a
//                   href="#"
//                   className="font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900"
//                 >
//                   <HomeIcon /> Page
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900"
//                 >
//                   <UserIcon /> Account
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900"
//                 >
//                   <DocsIcon /> Docs
//                 </a>
//               </li>
//             </ul>

//             <div className="mt-6 mb-4 flex items-center gap-2">
//               <button className="text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 font-bold uppercase">
//                 Sign In
//               </button>
//               <a href="#">
//                 <button className="text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 font-bold uppercase">
//                   blocks
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// // Icons
// function HomeIcon() {
//   return (
//     <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
//     </svg>
//   );
// }

// function UserIcon() {
//   return (
//     <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//       <path
//         fillRule="evenodd"
//         d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }

// function DocsIcon() {
//   return (
//     <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//       <path
//         fillRule="evenodd"
//         d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }

// function MenuIcon() {
//   return (
//     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//       <path
//         fillRule="evenodd"
//         d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }

// function CloseIcon() {
//   return (
//     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//       <path
//         fillRule="evenodd"
//         d="M6.47 6.47a.75.75 0 011.06 0L12 10.94l4.47-4.47a.75.75 0 111.06 1.06L13.06 12l4.47 4.47a.75.75 0 01-1.06 1.06L12 13.06l-4.47 4.47a.75.75 0 01-1.06-1.06L10.94 12 6.47 7.53a.75.75 0 010-1.06z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", icon: <HomeIcon /> },
    { label: "About", href: "#resume", icon: <UserIcon /> },
    { label: "Projects", href: "#projects", icon: <DocsIcon /> },
    { label: "Skills", href: "#skills", icon: <ToolsIcon /> },
    { label: "Contact", href: "#contact", icon: <MailIcon /> },
  ];

  return (
    <nav className="block py-4 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-white/80 w-full max-w-full rounded-none px-4 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <p className="font-sans text-blue-gray-900 text-lg font-bold">
          My Portfolio
        </p>

        {/* Desktop Menu */}
        <ul className="ml-10 hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900"
              >
                {item.icon} {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <a href="#contact">
            <button className="text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg font-bold uppercase">
              Hire Me
            </button>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 rounded-lg text-gray-900 hover:bg-gray-900/10 relative"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {open ? <CloseIcon /> : <MenuIcon />}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="w-full overflow-hidden">
          <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900"
                  >
                    {item.icon} {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 mb-4 flex items-center gap-2">
              <button className="text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 font-bold uppercase">
                Sign In
              </button>
              <a href="#contact">
                <button className="text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg font-bold uppercase">
                  Hire Me
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Icons
function HomeIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 1.5c-3.315 0-6 2.01-6 4.5v1.5h12V18c0-2.49-2.685-4.5-6-4.5z" />
    </svg>
  );
}

function DocsIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 2a2 2 0 00-2 2v16l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2H6z" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.121 2.879a3 3 0 010 4.242L13.5 7.742l2.758 2.758 1.379-1.379a3 3 0 014.242 0 3 3 0 010 4.242l-7.5 7.5a3 3 0 01-4.242 0 3 3 0 010-4.242l1.379-1.379L9.742 13.5l-1.379 1.379a3 3 0 01-4.242 0 3 3 0 010-4.242l7.5-7.5a3 3 0 014.242 0z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 11l-6-6H2v6l6 6h4l4 4 4-4h4V7l-6-6-6 6z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2 4.75A2.75 2.75 0 014.75 2h14.5A2.75 2.75 0 0122 4.75v14.5A2.75 2.75 0 0119.25 22H4.75A2.75 2.75 0 012 19.25V4.75zM20.25 5.5l-8.25 5.5L3.75 5.5v13.75h16.5V5.5z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
