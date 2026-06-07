// import { useState } from "react";

// const TwitterIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//   </svg>
// );

// const FacebookIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//   </svg>
// );

// const YoutubeIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//   </svg>
// );

// const InstagramIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//   </svg>
// );

// const ArrowRight = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M5 12h14M12 5l7 7-7 7" />
//   </svg>
// );

// // Placeholder image component using gradient
// const PlaceholderImage = ({ className, alt, type = "office" }) => {
//   const configs = {
//     hero: { bg: "from-slate-200 to-slate-300", label: "Team working at laptops" },
//     office: { bg: "from-stone-200 to-stone-300", label: "Office meeting" },
//     yoga: { bg: "from-amber-100 to-amber-200", label: "Person doing yoga" },
//     related1: { bg: "from-zinc-200 to-zinc-300", label: "Business meeting" },
//     related2: { bg: "from-gray-200 to-gray-300", label: "Team brainstorm" },
//   };
//   const config = configs[type] || configs.office;

//   return (
//     <div
//       className={`bg-gradient-to-br ${config.bg} flex items-center justify-center overflow-hidden ${className}`}
//       role="img"
//       aria-label={alt || config.label}
//     >
//       <span className="text-gray-400 text-xs text-center px-4 select-none">{alt || config.label}</span>
//     </div>
//   );
// };

// const relatedArticles = [
//   {
//     id: 1,
//     date: "May 24, 2025",
//     title: "Tactics to maximize sales and build customer trust",
//     excerpt:
//       "With the rise of online shopping, businesses need strategies to provide an exceptional customer experience.",
//     imageType: "related1",
//     imageAlt: "Two people working at a desk with monitors",
//   },
//   {
//     id: 2,
//     date: "May 24, 2025",
//     title: "Tips and tools to amplify your brand's online presence.",
//     excerpt:
//       "Boost your brand's online visibility with proven tips & powerful tools designed to engage, attract & grow your audience.",
//     imageType: "related2",
//     imageAlt: "Team presenting at whiteboard with charts",
//   },
// ];

// export default function BlogDetailPage() {
//   return (
//     <div className="min-h-screen bg-white font-serif">
//       {/* ── HERO SECTION ── */}
//       <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left: meta + title */}
//           <div className="flex flex-col gap-4 pr-0 md:pr-6">
//             {/* Category */}
//             <p className="text-xs uppercase tracking-widest text-gray-500 font-sans font-medium">
//               App Development
//             </p>

//             {/* Title */}
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               Strategies to grow brand and build lasting engagement
//             </h1>

//             {/* Published date */}
//             <p className="text-sm text-gray-400 font-sans mt-2">
//               Published Date: Jun 18, 2025
//             </p>
//           </div>

//           {/* Right: hero image */}
//           <div className="w-full">
//             <PlaceholderImage
//               className="w-full h-56 sm:h-64 md:h-80 rounded-sm object-cover"
//               alt="Three people collaborating around a laptop at a white desk"
//               type="hero"
//             />
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="mt-8 border-gray-200" />

//         {/* Share bar */}
//         <div className="flex items-center gap-4 py-4">
//           <span className="text-sm text-gray-500 font-sans">Share</span>
//           <button className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="Share on X">
//             <TwitterIcon />
//           </button>
//           <button className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="Share on Facebook">
//             <FacebookIcon />
//           </button>
//           <button className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="Share on YouTube">
//             <YoutubeIcon />
//           </button>
//           <button className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="Share on Instagram">
//             <InstagramIcon />
//           </button>
//         </div>
//       </section>

//       {/* ── ARTICLE BODY ── */}
//       <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Intro paragraph */}
//         <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed mb-8 max-w-3xl">
//           At{" "}
//           <a href="#" className="underline text-gray-800 hover:text-black">
//             Zinle
//           </a>
//           , we go beyond traditional agency services—we craft experiences that leave a lasting impact. With a deep
//           understanding of branding, design, development, and digital marketing, we help businesses build strong
//           identities, engage audiences, and drive measurable growth.
//         </p>

//         {/* Sub-heading 1 */}
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
//           Empowering brands with creative digital innovation
//         </h2>

//         {/* Body text 1 */}
//         <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed mb-8">
//           Senectus tempor vivamus fringilla auctor massa quam venenatis. Urna rutrum pellentesque mi eleifend. At sit
//           malesuada quis nunc malesuada enim integer. Euismod ac pharetra tempus nunc enim in blandit. Egestas proin
//           orci ultricies nisl. Maecenas mauris ac felis praesent turpis orci. Amet at aliquet ornare sapien a orci
//           adipiscing.
//         </p>

//         {/* Full-width image */}
//         <div className="w-full mb-10">
//           <PlaceholderImage
//             className="w-full h-64 sm:h-80 md:h-96 rounded-sm"
//             alt="Person doing yoga on a mat in a bright studio with wooden floors"
//             type="yoga"
//           />
//         </div>

//         {/* Sub-heading 2 */}
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
//           Strategy, innovation, and execution for outstanding digital success
//         </h2>

//         {/* Body text 2 */}
//         <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed mb-10">
//           Senectus tempor vivamus fringilla auctor massa quam venenatis. Urna rutrum pellentesque mi eleifend. At sit
//           malesuada quis nunc malesuada enim integer. Euismod ac pharetra tempus nunc enim in blandit. Egestas proin
//           orci ultricies nisl. Maecenas mauris ac felis praesent turpis orci. Amet at aliquet ornare sapien a orci
//           adipiscing.
//         </p>

//         {/* Blockquote */}
//         <blockquote className="border border-gray-200 bg-gray-50 rounded-sm px-6 py-6 mb-12">
//           <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed italic">
//             "At Zinle, we don't just build brands; we create powerful digital experiences that captivate, engage, and
//             drive real results. Our approach blends creativity, &amp; ensuring every project we take on is not only
//             visually stunning but also performance-driven."
//           </p>
//         </blockquote>
//       </section>

//       {/* ── RELATED ARTICLES ── */}
//       <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200">
//         {/* Section label */}
//         <div className="flex items-center gap-2 mb-1">
//           <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-blue-500">
//             <rect width="14" height="14" rx="2" fill="currentColor" opacity="0.15" />
//             <rect x="3" y="3" width="8" height="8" rx="1" fill="currentColor" />
//           </svg>
//           <span className="text-xs uppercase tracking-widest text-gray-500 font-sans font-medium">Related</span>
//         </div>

//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Similar Articles</h2>

//         {/* Article list */}
//         <div className="flex flex-col divide-y divide-gray-200">
//           {relatedArticles.map((article) => (
//             <article key={article.id} className="py-8">
//               <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr_280px] gap-4 sm:gap-6 items-start">
//                 {/* Date */}
//                 <div className="text-sm text-gray-400 font-sans pt-1 whitespace-nowrap">
//                   {article.date}
//                 </div>

//                 {/* Text content */}
//                 <div className="flex flex-col gap-3">
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
//                     {article.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 font-sans leading-relaxed">
//                     {article.excerpt}
//                   </p>
//                   <a
//                     href="#"
//                     className="inline-flex items-center gap-1.5 text-sm text-gray-800 underline underline-offset-4 hover:text-black transition-colors mt-2 w-fit font-sans"
//                   >
//                     Read Article <ArrowRight />
//                   </a>
//                 </div>

//                 {/* Thumbnail */}
//                 <div className="w-full sm:w-auto order-first sm:order-last">
//                   <PlaceholderImage
//                     className="w-full sm:w-72 h-44 sm:h-48 rounded-sm"
//                     alt={article.imageAlt}
//                     type={article.imageType}
//                   />
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


import { useParams, Link } from "react-router-dom";
import blogData from "../data/blog.json"; // Adjust path if needed

// ── Icons (Unchanged) ─────────────────────────────────────────────────────────
const TwitterIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>);
const FacebookIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>);
const YoutubeIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>);
const InstagramIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.848 0 3.259.014 3.668.072 4.848.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.848.072 3.259 0 3.668-.014 4.848-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.848 0-3.204-.014-3.667-.072-4.847-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>);
const ArrowRight = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>);

// ── Utility: Auto-generate slug from title if missing in JSON ─────────────────
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function BlogDetailPage() {
  const { slug } = useParams();
  
  // Find blog by slug, or fallback to generating slug from title
  const blog = blogData.blogs.find((b) => (b.slug || generateSlug(b.title)) === slug);
  
  // Get 2 related articles (excluding current)
  const relatedArticles = blogData.blogs
    .filter((b) => (b.slug || generateSlug(b.title)) !== slug)
    .slice(0, 2);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Article not found. Check your URL slug.
      </div>
    );
  }

  const currentSlug = blog.slug || generateSlug(blog.title);

  return (
    <div className="pt-24 bg-white z-10">
      {/* ── HERO SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-4 pr-0 md:pr-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-sans font-medium">
              {blog.category || "Article"}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-400 font-sans mt-2">
              Published Date: {blog.date}
            </p>
          </div>
          
          {/* Dynamic Hero Image */}
          <div className="w-full">
            <img
              src={blog.image}
              alt={blog.alt}
              className="w-full h-56 sm:h-64 md:h-92 rounded-sm object-contain"
            />
          </div>
        </div>

        <hr className="mt-8 border-gray-200" />

        {/* <div className="flex items-center gap-4 py-4">
          <span className="text-sm text-gray-500 font-sans">Share</span>
          <button className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="Share on X"><TwitterIcon /></button>
          <button className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="Share on Facebook"><FacebookIcon /></button>
          <button className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="Share on YouTube"><YoutubeIcon /></button>
          <button className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="Share on Instagram"><InstagramIcon /></button>
        </div> */}
      </section>

      {/* ── ARTICLE BODY (Fully Dynamic) ── */}
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {blog.body && blog.body.map((block, index) => {
          switch (block.type) {
            case 'intro':
            case 'paragraph':
              return (
                <p key={index} className={`text-sm sm:text-base text-gray-600 font-sans leading-relaxed ${block.type === 'intro' ? 'mb-8 max-w-3xl' : 'mb-8'}`}>
                  {block.text}
                </p>
              );
            case 'heading':
              return (
                <h2 key={index} className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {block.text}
                </h2>
              );
            case 'image':
              return (
                <div key={index} className="w-full mb-10">
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="w-full h-64 sm:h-80 md:h-96 rounded-sm object-contain"
                  />
                </div>
              );
            case 'quote':
              return (
                <blockquote key={index} className="border border-gray-200 bg-gray-50 rounded-sm px-6 py-6 mb-12">
                  <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed italic">
                    "{block.text}"
                  </p>
                </blockquote>
              );
            default:
              return null;
          }
        })}
      </section>

      {/* ── RELATED ARTICLES ── */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-blue-500">
              <rect width="14" height="14" rx="2" fill="currentColor" opacity="0.15" />
              <rect x="3" y="3" width="8" height="8" rx="1" fill="currentColor" />
            </svg>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-sans font-medium">Related</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Similar Articles</h2>

          <div className="flex flex-col divide-y divide-gray-200">
            {relatedArticles.map((article) => {
              const articleSlug = article.slug || generateSlug(article.title);
              return (
                <article key={article.id} className="py-8">
                  <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr_280px] gap-4 sm:gap-6 items-start">
                    <div className="text-sm text-gray-400 font-sans pt-1 whitespace-nowrap">
                      {article.date}
                    </div>

                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-sans leading-relaxed">
                        {article.excerpt}
                      </p>
                      <Link
                        to={`/blog-detail/${articleSlug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-gray-800 underline underline-offset-4 hover:text-black transition-colors mt-2 w-fit font-sans"
                      >
                        Read Article <ArrowRight />
                      </Link>
                    </div>

                    {/* Dynamic Related Article Image */}
                    <div className="w-full sm:w-auto order-first sm:order-last">
                      <img
                        src={article.image}
                        alt={article.alt}
                        className="w-full sm:w-72 h-44 sm:h-48 rounded-sm object-cover"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}