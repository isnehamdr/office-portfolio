const featuredArticle = {
  id: 1,
  date: "May 29, 2025",
  title: "Strategies to boost presence and scale your business",
  excerpt:
    "We explore the essential strategies that businesses need to adopt in 2025 to stay ahead of the curve.",
  image:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
  imageAlt: "Woman working on laptop in a cozy home office",
};

const smallArticles = [
  {
    id: 2,
    date: "Jun 18, 2025",
    title: "Strategies to grow brand and build lasting engagement",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80",
    imageAlt: "Team collaborating around a table",
  },
  {
    id: 3,
    date: "May 24, 2025",
    title: "Driving brand success with social media marketing",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
    imageAlt: "Woman using laptop for social media",
  },
  {
    id: 4,
    date: "May 24, 2025",
    title: "Tips and tools to amplify your brand's online presence.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&q=80",
    imageAlt: "Business presentation in office",
  },
];

function SmallCard({ article }) {
  return (
    // FIX: Changed to flex-row so the image is strictly on the left and text on the right
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-row cursor-pointer group h-full">
      {/* Image: Left side */}
      <div className="w-32 sm:w-40 flex-shrink-0 overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Text: Right side */}
      <div className="p-4 sm:p-5 flex flex-col justify-center flex-1 text-left">
        <p className="text-gray-400 text-xs mb-2">{article.date}</p>
        <h3 className="text-gray-900 text-sm sm:text-base font-semibold leading-snug group-hover:text-gray-600 transition-colors">
          {article.title}
        </h3>
      </div>
    </div>
  );
}

export default function Blogs() {
  return (
    <div className="w-full py-16 sm:py-24" style={{ backgroundColor: "#f7f6f5" }}>
      <div className="px-5 sm:px-8 lg:px-24">

        {/* Section label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-semibold tracking-widest uppercase text-gray-500">
            Our Blogs
          </span>
        </div>

        {/* Section heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Latest Articles
        </h2>

        {/* ── Featured card ── */}
        <div className="bg-white rounded-2xl overflow-hidden mb-8 flex flex-col sm:flex-row">
          {/* Left – image */}
          <div className="w-full sm:w-1/2 flex-shrink-0 overflow-hidden h-64 sm:h-auto">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right – content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 flex-1">
            <p className="text-gray-400 text-sm mb-3">{featuredArticle.date}</p>
            <h3 className="text-gray-900 text-xl sm:text-5xl font-semibold leading-[52px] mb-4">
              {featuredArticle.title}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              {featuredArticle.excerpt}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 w-fit hover:opacity-70 transition-opacity"
            >
              Read Article 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Small cards row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallArticles.map((article) => (
            <SmallCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </div>
  );
}