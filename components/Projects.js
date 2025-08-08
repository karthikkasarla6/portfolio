// export default function Projects() {
//   const projects = [
//     {
//       title: "Tic-Tac-Toe Game",
//       description:
//         "Interactive 3x3 game using HTML, CSS, and JS with real-time win detection and reset functionality.",
//       image: "images/tictac.png",
//     },
//     {
//       title: "Calculator App",
//       description:
//         "Performs basic arithmetic operations with clear screen feature and support for decimals.",
//       image: "images/calcu.png",
//     },

//     {
//       title: "Portfolio Website",
//       description:
//         "Personal portfolio built using Next.js and Tailwind CSS showcasing projects and skills.",
//       image: "images/image.png",
//     },
//   ];

//   return (
//     <section id="projects" className="py-28 px-8 bg-white">
//       <div className="container mx-auto mb-20 text-center">
//         <h2 className="text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
//           My Projects
//         </h2>
//         <p className="text-xl text-gray-500 mx-auto px-4 lg:w-6/12">
//           Whether you have a mobile app idea that needs to come to life or a
//           website that requires a facelift, I'm here to turn your digital dreams
//           into reality.
//         </p>
//       </div>

//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-20">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col text-gray-700 shadow-none bg-transparent rounded-xl"
//           >
//             <div className="relative h-48 overflow-hidden rounded-xl bg-white shadow-lg">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="p-0 mt-6">
//               <h5 className="text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
//                 {project.title}
//               </h5>
//               <p className="text-base text-gray-500 font-normal mb-6">
//                 {project.description}
//               </p>
//               <button
//                 type="button"
//                 className="text-xs font-bold uppercase bg-gray-900 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all"
//               >
//                 See Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function Projects() {
  const projects = [
    {
      title: "Tic-Tac-Toe Game",
      description:
        "Interactive 3x3 game using HTML, CSS, and JS with  win detection and reset functionality.",
      image: "images/tictac.png",
      link: "https://github.com/karthikkasarla6/Tic-Tac-Toe-game",
    },
    {
      title: "Calculator App",
      description:
        "Performs basic arithmetic operations with clear screen feature and support for decimals.",
      image: "images/calcu.png",
      link: "https://github.com/karthikkasarla6/calculator",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using Next.js and Tailwind CSS showcasing projects and skills.",
      image: "images/web.png",
      link: "https://github.com/karthikkasarla6",
    },
  ];

  return (
    <section id="projects" className="py-8 px-8 bg-white">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          My Projects
        </h2>
        <p className="text-xl text-gray-500 mx-auto px-4 lg:w-6/12">
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I'm here to turn your digital dreams
          into reality.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-20">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col text-gray-700 shadow-none bg-transparent rounded-xl"
          >
            <div className="relative h-48 overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-0 mt-6">
              <h5 className="text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                {project.title}
              </h5>
              <p className="text-base text-gray-500 font-normal mb-6">
                {project.description}
              </p>
              <button
                type="button"
                className="text-xs font-bold uppercase bg-gray-900 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                View on GitHub
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
