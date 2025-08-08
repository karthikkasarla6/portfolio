// // // import React from "react";

// // // export default function Contact() {
// // //   return (
// // //     <section id="contact" className="px-8 py-16 bg-gray-100">
// // //       <div className="container mx-auto mb-20 text-center">
// // //         <h1 className="text-5xl font-semibold text-blue-gray-900 mb-4">
// // //           Contact Us
// // //         </h1>
// // //         <p className="text-xl text-gray-500 mx-auto lg:w-5/12">
// // //           Ready to get started? Feel free to reach out through the contact form,
// // //           and let's embark on a journey of innovation and success.
// // //         </p>
// // //       </div>

// // //       <div className="container mx-auto border border-gray-200 bg-white rounded-xl shadow-md p-6 lg:p-10 grid lg:grid-cols-7 gap-10">
// // //         {/* Left - Contact Info */}
// // //         <div className="col-span-3 bg-gray-900 rounded-lg p-8 text-white space-y-6">
// // //           <div>
// // //             <h4 className="text-2xl font-semibold mb-2">Contact Information</h4>
// // //             <p className="text-gray-400">
// // //               Fill up the form and our Team will get back to you within 24
// // //               hours.
// // //             </p>
// // //           </div>

// // //           <div className="flex items-center gap-4">
// // //             <i className="fas fa-phone-alt text-white"></i>
// // //             <h6 className="font-semibold">+1 (424) 535 3523</h6>
// // //           </div>

// // //           <div className="flex items-center gap-4">
// // //             <i className="fas fa-envelope text-white"></i>
// // //             <h6 className="font-semibold">hello@mail.com</h6>
// // //           </div>

// // //           <div className="flex items-center gap-4">
// // //             <i className="fas fa-headset text-white"></i>
// // //             <h6 className="font-semibold">Open Support Ticket</h6>
// // //           </div>

// // //           {/* Social Icons */}
// // //           <div className="flex gap-4 pt-4">
// // //             {["facebook", "instagram", "github"].map((icon) => (
// // //               <button
// // //                 key={icon}
// // //                 className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"
// // //               >
// // //                 <i className={`fab fa-${icon}`}></i>
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Right - Contact Form */}
// // //         <div className="col-span-4">
// // //           <form className="space-y-6">
// // //             <div className="grid lg:grid-cols-2 gap-4">
// // //               <div className="relative">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="eg. Lucas"
// // //                   className="peer w-full h-12 bg-transparent border-b border-gray-300 focus:border-gray-900 text-sm pt-5 px-1"
// // //                 />
// // //                 <label className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-focus:text-gray-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
// // //                   First Name
// // //                 </label>
// // //               </div>

// // //               <div className="relative">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="eg. Jones"
// // //                   className="peer w-full h-12 bg-transparent border-b border-gray-300 focus:border-gray-900 text-sm pt-5 px-1"
// // //                 />
// // //                 <label className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-focus:text-gray-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
// // //                   Last Name
// // //                 </label>
// // //               </div>
// // //             </div>

// // //             <div className="relative">
// // //               <input
// // //                 type="email"
// // //                 placeholder="eg. lucas@mail.com"
// // //                 className="peer w-full h-12 bg-transparent border-b border-gray-300 focus:border-gray-900 text-sm pt-5 px-1"
// // //               />
// // //               <label className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-focus:text-gray-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
// // //                 Email
// // //               </label>
// // //             </div>

// // //             {/* Interest options */}
// // //             <div>
// // //               <p className="text-sm text-gray-500 mb-2">
// // //                 What are you interested in?
// // //               </p>
// // //               <div className="flex flex-wrap gap-4">
// // //                 {["Design", "Development", "Support", "Other"].map(
// // //                   (type, i) => (
// // //                     <label
// // //                       key={type}
// // //                       className="flex items-center gap-2 cursor-pointer"
// // //                     >
// // //                       <input
// // //                         type="radio"
// // //                         name="interest"
// // //                         className="accent-gray-900"
// // //                         defaultChecked={i === 0}
// // //                       />
// // //                       <span className="text-gray-700 text-sm">{type}</span>
// // //                     </label>
// // //                   )
// // //                 )}
// // //               </div>
// // //             </div>

// // //             <div className="relative">
// // //               <textarea
// // //                 placeholder=" "
// // //                 rows="4"
// // //                 className="peer w-full bg-transparent border-b border-gray-300 focus:border-gray-900 text-sm pt-5 px-1"
// // //               ></textarea>
// // //               <label className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-focus:text-gray-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
// // //                 Your Message
// // //               </label>
// // //             </div>

// // //             <div className="flex justify-end">
// // //               <button
// // //                 type="submit"
// // //                 className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm font-semibold uppercase"
// // //               >
// // //                 Send Message
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import React from "react";

// // export default function Contact() {
// //   return (
// //     <section id="contact" className="px-8 py-16 ">
// //       <div className="container mx-auto mb-20 text-center">
// //         <h1 className="text-5xl font-semibold text-blue-gray-900 mb-4">
// //           Contact Us
// //         </h1>
// //         <p className="text-xl text-gray-500 mx-auto lg:w-5/12">
// //           Ready to get started? Feel free to reach out through the contact form,
// //           and let's embark on a journey of innovation and success.
// //         </p>
// //       </div>

// //       <div className="container mx-auto border border-gray-200 bg-white rounded-xl shadow-md p-6 lg:p-10 grid lg:grid-cols-7 gap-10">
// //         {/* Left - Contact Info */}
// //         <div className="col-span-3 bg-gray-900 rounded-lg p-8 text-white space-y-6">
// //           <div>
// //             <h4 className="text-2xl font-semibold mb-2">Contact Information</h4>
// //             <p className="text-gray-400">
// //               Fill up the form and our Team will get back to you within 24
// //               hours.
// //             </p>
// //           </div>

// //           <div className="flex items-center gap-4">
// //             <i className="fas fa-phone-alt text-white"></i>
// //             <h6 className="font-semibold">+1 (424) 535 3523</h6>
// //           </div>

// //           <div className="flex items-center gap-4">
// //             <i className="fas fa-envelope text-white"></i>
// //             <h6 className="font-semibold">hello@mail.com</h6>
// //           </div>

// //           <div className="flex items-center gap-4">
// //             <i className="fas fa-headset text-white"></i>
// //             <h6 className="font-semibold">Open Support Ticket</h6>
// //           </div>

// //           {/* Social Icons */}
// //           <div className="flex gap-4 pt-4">
// //             {["facebook", "instagram", "github"].map((icon) => (
// //               <button
// //                 key={icon}
// //                 className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition text-white"
// //               >
// //                 <i className={`fab fa-${icon}`}></i>
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Right - Contact Form */}
// //         <div className="col-span-4">
// //           <form className="space-y-6">
// //             <div className="grid lg:grid-cols-2 gap-4">
// //               <div className="relative w-full min-w-[200px] h-12">
// //                 <input
// //                   type="text"
// //                   placeholder="eg. Lucas"
// //                   name="first-name"
// //                   className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900"
// //                 />
// //                 <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
// //                   First Name
// //                 </label>
// //               </div>

// //               <div className="relative w-full min-w-[200px] h-12">
// //                 <input
// //                   type="text"
// //                   placeholder="eg. Jones"
// //                   name="last-name"
// //                   className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900"
// //                 />
// //                 <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
// //                   Last Name
// //                 </label>
// //               </div>
// //             </div>

// //             <div className="relative w-full min-w-[200px] h-12">
// //               <input
// //                 type="email"
// //                 placeholder="eg. lucas@mail.com"
// //                 name="email"
// //                 className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900"
// //               />
// //               <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
// //                 Email
// //               </label>
// //             </div>

// //             {/* Interest options and textarea remain unchanged */}
// //             <div>
// //               <p className="text-sm text-gray-500 mb-2">
// //                 What are you interested in?
// //               </p>
// //               <div className="flex flex-wrap gap-4">
// //                 {["Design", "Development", "Support", "Other"].map(
// //                   (type, i) => (
// //                     <label
// //                       key={type}
// //                       className="flex items-center gap-2 cursor-pointer"
// //                     >
// //                       <input
// //                         type="radio"
// //                         name="interest"
// //                         className="accent-gray-900"
// //                         defaultChecked={i === 0}
// //                       />
// //                       <span className="text-gray-700 text-sm">{type}</span>
// //                     </label>
// //                   )
// //                 )}
// //               </div>
// //             </div>

// //             <div className="relative">
// //               <textarea
// //                 placeholder=" "
// //                 rows="4"
// //                 className="peer w-full bg-transparent border-b border-gray-300 focus:border-gray-900 text-sm pt-5 px-1"
// //               ></textarea>
// //               <label className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-focus:text-gray-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
// //                 Your Message
// //               </label>
// //             </div>

// //             <div className="flex justify-end">
// //               <button
// //                 type="submit"
// //                 className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm font-semibold uppercase"
// //               >
// //                 Send Message
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React from "react";

// export default function Contact() {
//   return (
//     <section id="contact" className="px-8 py-16 bg-gray-100">
//       <div className="container mx-auto mb-20 text-center">
//         <h1 className="text-5xl font-semibold text-blue-gray-900 mb-4">
//           Contact Me
//         </h1>
//         <p className="text-xl text-gray-500 mx-auto lg:w-5/12">
//           Feel free to reach out. I'm currently open to new opportunities,
//           collaborations, or just a friendly tech chat!
//         </p>
//       </div>

//       <div className="container mx-auto border border-gray-200 bg-white rounded-xl shadow-md p-6 lg:p-10 grid lg:grid-cols-7 gap-10">
//         {/* Left - Contact Info */}
//         <div className="col-span-3 bg-gray-900 rounded-lg p-8 text-white space-y-6">
//           <div>
//             <h4 className="text-2xl font-semibold mb-2">Karthik Kasarla</h4>
//             <p className="text-gray-400">
//               MS in Information Systems | Software Developer | Ex-Accenture
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <i className="fas fa-phone-alt text-white"></i>
//             <h6 className="font-semibold">+1 (947) 275-7343</h6>
//           </div>

//           <div className="flex items-center gap-4">
//             <i className="fas fa-envelope text-white"></i>
//             <h6 className="font-semibold">karthikkasarla06@gmail.com</h6>
//           </div>

//           <div className="flex items-center gap-4">
//             <i className="fab fa-linkedin text-white"></i>
//             <h6 className="font-semibold">linkedin.com/in/karthikkasarla6</h6>
//           </div>

//           <div className="flex items-center gap-4">
//             <i className="fab fa-twitter text-white"></i>
//             <h6 className="font-semibold">twitter.com/karthikkasarla6</h6>
//           </div>
//         </div>

//         {/* Right - Contact Form */}
//         <div className="col-span-4">
//           <form className="space-y-6">
//             <div className="grid lg:grid-cols-2 gap-4">
//               <div className="relative w-full min-w-[200px] h-12">
//                 <input
//                   type="text"
//                   placeholder="eg. Karthik"
//                   name="first-name"
//                   className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900"
//                 />
//                 <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
//                   First Name
//                 </label>
//               </div>

//               <div className="relative w-full min-w-[200px] h-12">
//                 <input
//                   type="text"
//                   placeholder="eg. Kasarla"
//                   name="last-name"
//                   className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900"
//                 />
//                 <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
//                   Last Name
//                 </label>
//               </div>
//             </div>

//             <div className="relative w-full min-w-[200px] h-12">
//               <input
//                 type="email"
//                 placeholder="eg. karthikkasarla06@gmail.com"
//                 name="email"
//                 className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900"
//               />
//               <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
//                 Email
//               </label>
//             </div>

//             <div className="relative">
//               <textarea
//                 placeholder=" "
//                 rows="4"
//                 className="peer w-full bg-transparent border-b border-blue-gray-200 focus:border-gray-900 text-sm pt-6 px-1 outline-none"
//               ></textarea>
//               <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-900">
//                 Your Message
//               </label>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm font-semibold uppercase"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = () => {
    const { firstName, lastName, email, message } = formData;
    const subject = encodeURIComponent(
      "Contact from " + firstName + " " + lastName
    );
    const body = encodeURIComponent(
      `From: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:karthikkasarla06@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="px-8 py-16 ">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="text-5xl font-semibold text-blue-gray-900 mb-4">
          Contact Me
        </h1>
        <p className="text-xl text-gray-500 mx-auto lg:w-5/12">
          Feel free to reach out. I'm currently open to new opportunities,
          collaborations, or just a friendly tech chat!
        </p>
      </div>

      <div className="container mx-auto border border-gray-200 bg-white rounded-xl shadow-md p-6 lg:p-10 grid lg:grid-cols-7 gap-10">
        {/* Left - Contact Info */}
        <div className="col-span-3 bg-gray-900 rounded-lg p-8 text-white space-y-6">
          <div>
            <h4 className="text-2xl font-semibold mb-2">Karthik Kasarla</h4>
            <p className="text-gray-400">
              MS in Information Systems | Software Developer | Ex-Accenture
            </p>
          </div>

          <div className="flex items-center gap-4">
            <i className="fas fa-phone-alt text-white"></i>
            <h6 className="font-semibold">+1 (947) 275-7343</h6>
          </div>

          <div className="flex items-center gap-4">
            <i className="fas fa-envelope text-white"></i>
            <h6 className="font-semibold">karthikkasarla06@gmail.com</h6>
          </div>

          <div className="flex items-center gap-4">
            <i className="fab fa-linkedin text-white"></i>
            <h6 className="font-semibold">linkedin.com/in/karthikkasarla6</h6>
          </div>

          <div className="flex items-center gap-4">
            <i className="fab fa-twitter text-white"></i>
            <h6 className="font-semibold">twitter.com/karthikkasarla6</h6>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="col-span-4">
          <div className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="relative w-full min-w-[200px] h-12">
                <input
                  type="text"
                  placeholder="eg. Karthik"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900"
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
                  First Name
                </label>
              </div>

              <div className="relative w-full min-w-[200px] h-12">
                <input
                  type="text"
                  placeholder="eg. Kasarla"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900"
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative w-full min-w-[200px] h-12">
              <input
                type="email"
                placeholder="eg. karthikkasarla06@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900"
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content-[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                placeholder=" "
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="peer w-full bg-transparent border-b border-blue-gray-200 focus:border-gray-900 text-sm pt-6 px-1 outline-none"
              ></textarea>
              <label className="absolute left-1 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-900">
                Your Message
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSendEmail}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm font-semibold uppercase"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
