// // import {
// //   CodeBracketIcon,
// //   DevicePhoneMobileIcon,
// //   CubeTransparentIcon,
// //   RocketLaunchIcon,
// //   EyeIcon,
// //   ClipboardDocumentCheckIcon,
// // } from "@heroicons/react/24/solid";

// // export default function Services() {
// //   const services = [
// //     {
// //       title: "Frontend Web Development",
// //       description:
// //         "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
// //       icon: CodeBracketIcon,
// //     },
// //     {
// //       title: "Mobile App Development",
// //       description:
// //         "I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
// //       icon: DevicePhoneMobileIcon,
// //     },
// //     {
// //       title: "Technology Stack",
// //       description:
// //         "I’m well-versed in the industry’s most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
// //       icon: CubeTransparentIcon,
// //     },
// //     {
// //       title: "Web Optimization",
// //       description:
// //         "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
// //       icon: RocketLaunchIcon,
// //     },
// //     {
// //       title: "User-Centric Design",
// //       description:
// //         "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
// //       icon: EyeIcon,
// //     },
// //     {
// //       title: "Testing and Quality Assurance",
// //       description:
// //         "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
// //       icon: ClipboardDocumentCheckIcon,
// //     },
// //   ];

// //   return (
// //     <section className="px-8" id="services">
// //       <div className="container mx-auto mb-20 text-center">
// //         <p className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase">
// //           my skills
// //         </p>
// //         <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">
// //           What I do
// //         </h1>
// //         <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12">
// //           I'm not just a developer; I'm a digital dreamweaver. Crafting
// //           immersive online experiences is not just a job but my calling.
// //           Discover below how I can help you.
// //         </p>
// //       </div>

// //       <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
// //         {services.map(({ title, description, icon: Icon }, index) => (
// //           <div
// //             key={index}
// //             className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none"
// //           >
// //             <div className="p-6 grid justify-center text-center">
// //               <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
// //                 <Icon className="h-6 w-6" />
// //               </div>
// //               <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
// //                 {title}
// //               </h5>
// //               <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
// //                 {description}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// import {
//   CodeBracketIcon,
//   DevicePhoneMobileIcon,
//   CubeTransparentIcon,
//   RocketLaunchIcon,
//   EyeIcon,
//   ClipboardDocumentCheckIcon,
// } from "@heroicons/react/24/solid";

// export default function Services() {
//   const services = [
//     {
//       title: "Frontend Web Development",
//       description:
//         "I design and build stunning, user-centric web applications using HTML, CSS, JavaScript, React, and more.",
//       icon: CodeBracketIcon,
//     },
//     {
//       title: "Mobile App Development",
//       description:
//         "I develop seamless, cross-platform mobile applications with React Native that feel right at home on iOS and Android.",
//       icon: DevicePhoneMobileIcon,
//     },
//     {
//       title: "Technology Stack",
//       description:
//         "I'm proficient in HTML5, CSS3, JavaScript, React, React Native, and modern tools essential for scalable app development.",
//       icon: CubeTransparentIcon,
//     },
//     {
//       title: "Web Optimization",
//       description:
//         "Speed and performance are crucial. I ensure your website is fast, accessible, and optimized for search engines.",
//       icon: RocketLaunchIcon,
//     },
//     {
//       title: "User-Centric Design",
//       description:
//         "From wireframes to finished UI, I craft digital experiences that balance aesthetics with usability.",
//       icon: EyeIcon,
//     },
//     {
//       title: "Testing & QA",
//       description:
//         "I perform rigorous testing and QA to ensure your app is secure, stable, and ready for production.",
//       icon: ClipboardDocumentCheckIcon,
//     },
//   ];

//   return (
//     <section className="px-6 py-20 bg-white" id="services">
//       <div className="container mx-auto mb-16 text-center">
//         <p className="uppercase text-sm text-gray-700 font-semibold mb-2">
//           My Skills
//         </p>
//         <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//           I build fast, intuitive, and modern web and mobile apps with a sharp
//           focus on performance, usability, and design.
//         </p>
//       </div>

//       <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {services.map(({ title, description, icon: Icon }, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-shadow"
//           >
//             <div className="mb-4 bg-gray-900 p-3 rounded-full text-white">
//               <Icon className="h-6 w-6" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               {title}
//             </h3>
//             <p className="text-base text-gray-600">{description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CubeTransparentIcon,
  RocketLaunchIcon,
  EyeIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

export default function Skills() {
  const Skills = [
    {
      title: "SAP S/4HANA",
      description: "Finance module expertise.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Frontend Development",
      description: "UI with React, Tailwind, HTML, CSS.",
      icon: CodeBracketIcon,
    },
    {
      title: "Frameworks & Tools",
      description: "Next.js, Git, GitHub, VS Code.",
      icon: CubeTransparentIcon,
    },

    {
      title: "Python",
      description: "Programming and development.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Java",
      description: "Object-oriented programming.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "SQL",
      description: "Database management.",
      icon: EyeIcon,
    },
  ];

  return (
    <section className="px-6 py-20 bg-white" id="skills">
      <div className="container mx-auto mb-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          I build fast, intuitive, and modern web and mobile apps with a sharp
          focus on performance, usability, and design.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Skills.map(({ title, description, icon: Icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-shadow"
          >
            <div className="mb-4 bg-gray-900 p-3 rounded-full text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-base text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
