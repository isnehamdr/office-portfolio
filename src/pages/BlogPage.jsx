// import { useState } from "react";
// import { Link } from "react-router-dom";

// const blogs = [
//   {
//     id: 1,
//     date: "April 23, 2021",
//     title: "Can AI chatbots completely replace customer service representatives?",
//     excerpt:
//       "AI chatbots improve customer service through speed, scalability, and cost efficiency, but they require significant investment, ongoing maintenance, and regular updates.",
//     image:
//       "/images/blog1.jpg",
//     alt: "Team working together at a white desk in a modern studio",
//     slug: "can-ai-chatbots-replace-customer-service-representatives",
//   },
//   {
//     id: 2,
//     date: "May 23, 2021",
//     title: "Cyber Hygiene – Practices to protect the health of Digital Assets",
//     excerpt:
//       "Cyber hygiene refers to the practices and habits that help protect individuals and organizations from cyber threats.Strong cyber hygiene reduces security risks, improves digital resilience, and enables safer use of technology in an increasingly connected world.",
//     image:
//       "/images/blog2.jpg",
//     alt: "Designer working on UI layouts on a large monitor",
//     slug: "cyber-hygiene-practices",
//   },
//   {
//     id: 3,
//     date: "August 16, 2024",
//     title: "Digital Journeys: The Tech-Powered Revolution of Online Travel Booking",
//     excerpt:
//       "Online Travel Agencies (OTAs) have transformed the travel industry by making trip planning and booking faster, easier, and more convenient. Platforms such as Booking.com, Agoda, Expedia, and Goibibo allow travelers to book flights, accommodations, transportation, and activities in one place.",
//     image:
//       "/images/blog3.jpg",
//     alt: "Close-up of printed typography specimen sheets",
//     slug: "web-typography-fundamentals",
//   },
//   {
//     id: 4,
//     date: "July 30, 2024",
//     title: "The Future of Voice Search for Hospitality Brands",
//     excerpt:
//       "Voice search is changing how travelers find and book hospitality services. With the growing use of smart speakers and virtual assistants, travelers now use natural voice commands to search for hotels, restaurants, and travel experiences. To remain competitive and visible, hospitality businesses must optimize their digital presence for voice-based searches.",
//     image:
//       "/images/blog4.webp",
//     alt: "Whiteboard covered in UI component sketches",
//     slug: "scalable-design-systems",
//   },
  
// ];

// export default function BlogPage() {
//   return (
//     <div className="overflow-x-hidden">
//       <div
//         className="min-h-screen w-full "
//         style={{ backgroundColor: "#f7f6f5" }}
//       >
//         <div className="px-6 sm:px-10 lg:px-24 py-14 sm:py-20">

//           {/* Section heading */}
//           <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-12 sm:mb-16 pt-12 tracking-wide">
//             Latest Articles
//           </h1>

//           {/* Blog list */}
//           <div className="flex flex-col divide-y divide-gray-200">
//             {blogs.map((blog, index) => (
//               <article
//                 key={blog.id}
//                 className={`flex flex-col lg:flex-row items-start gap-10 lg:gap-0 ${
//                   index === 0 ? "pb-16" : "py-16"
//                 }`}
//               >
//                 {/* LEFT — date + title + excerpt + CTA */}
//                 <div className="flex flex-col lg:flex-row flex-1 gap-8 lg:gap-18 lg:pr-8">

//                   {/* Date column */}
//                   <div className="lg:w-48 xl:w-36 flex-shrink-0">
//                     <span className="text-gray-700 text-sm">{blog.date}</span>
//                   </div>

//                   {/* Text column */}
//                   <div className="flex flex-col justify-between flex-1">
//                     <div>
//                       <h2 className="text-gray-900 text-2xl font-normal leading-snug mb-4">
//                         {blog.title}
//                       </h2>
//                       <p className="text-gray-700 text-sm sm:text-lg leading-relaxed max-w-sm">
//                         {blog.excerpt}
//                       </p>
//                     </div>

//                     {/* Read Article link */}
//                     <div className="mt-12 sm:mt-16">
//                       <Link
//                         to={`/blog-detail/${blog.slug}`}
//                         className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:opacity-60 transition-opacity"
//                       >
//                         Read Article <span>→</span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 {/* RIGHT — image */}
//                 <div className="w-full lg:w-[55%] xl:w-[58%] flex-shrink-0 rounded-2xl overflow-hidden">
//                   <img
//                     src={blog.image}
//                     alt={blog.alt}
//                     className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
//                   />
//                 </div>
//               </article>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import blogData from "../data/blog.json"; // Adjust path if this file is in a subfolder

export default function BlogPage() {
  const blogs = blogData.blogs;

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen w-full" style={{ backgroundColor: "#f7f6f5" }}>
        <div className="px-6 sm:px-10 lg:px-24 py-14 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-12 sm:mb-16 pt-12 tracking-wide">
            Latest Articles
          </h1>

          <div className="flex flex-col divide-y divide-gray-200">
            {blogs.map((blog, index) => (
              <article
                key={blog.id}
                className={`flex flex-col lg:flex-row items-start gap-10 lg:gap-0 ${
                  index === 0 ? "pb-16" : "py-16"
                }`}
              >
                <div className="flex flex-col lg:flex-row flex-1 gap-8 lg:gap-18 lg:pr-8">
                  <div className="lg:w-48 xl:w-36 flex-shrink-0">
                    <span className="text-gray-700 text-sm">{blog.date}</span>
                  </div>

                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="text-gray-900 text-2xl font-normal leading-snug mb-4">
                        {blog.title}
                      </h2>
                      <p className="text-gray-700 text-sm sm:text-lg leading-relaxed max-w-sm">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="mt-12 sm:mt-16">
                      <Link
                        to={`/blog-detail/${blog.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:opacity-60 transition-opacity"
                      >
                        Read Article <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-[55%] xl:w-[58%] flex-shrink-0 rounded-2xl overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.alt}
                    className="w-full h-64 sm:h-80 lg:h-[320px] object-contain"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}