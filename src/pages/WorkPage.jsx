const projects = [
  {
    id: 1,
    title: "Maiden",
    description:
      "Maiden is built on the belief that stillness sparks transformation our mission is to help you find it daily.",
    tags: ["SaaS", "Website", "Blurbird", "2021"],
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
    imageAlt: "Maiden project – laptop on a desk with green plants",
  },
  {
    id: 2,
    title: "Glamz",
    description:
      "Feel your best with Glamz high-performance formulas designed to nurture and elevate your natural beauty.",
    tags: ["SaaS", "UI/UX", "Figma", "2020"],
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    imageAlt: "Glamz project – beauty product lifestyle shot on laptop",
  },
  {
    id: 3,
    title: "Virox",
    description:
      "Guiding businesses to scale and redefine their potential, creating impactful, transformative solutions.",
    tags: ["Web Design", "UI/UX", "Photoshop", "2022"],
    image:
      "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&q=80",
    imageAlt: "Virox project – mobile UI on a tablet on a couch",
  },
  {
    id: 4,
    title: "Blake",
    description:
      "Designing with purpose bringing creative ideas to life through intuitive and elegant digital solutions.",
    tags: ["App", "Web Design", "HTML", "2024"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    imageAlt: "Blake project – dark portfolio site on tablet and phone",
  },
];

function Tag({ label }) {
  return (
    // Added group-hover to change text and border color when the card is hovered
    <span className="text-xs sm:text-sm font-medium text-gray-600 border border-gray-200 rounded-full px-2.5 sm:px-3 py-1 whitespace-nowrap group-hover:text-white group-hover:border-white/50 transition-colors duration-300">
      {label}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    // Added 'group' class to the main container to trigger child hover effects
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group ">
      
      {/* Text block: Added group-hover:bg-black */}
      <div className="px-4 sm:px-6  flex-1 flex flex-col group-hover:bg-black transition-colors duration-300">
        <h3 className="text-xl sm:text-2xl mt-8 font-normal text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-base sm:text-lg text-gray-700 group-hover:text-white/80 leading-relaxed mb-4 transition-colors duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="w-full overflow-hidden h-64 sm:h-96 rounded-t-xl mt-6">
        <img
          src={project.image}
          alt={project.imageAlt}
          // Replaced useState with Tailwind's group-hover:scale-105 for a cleaner zoom effect
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      </div>

      {/* Image block: Moved OUTSIDE the text block so it doesn't get a black background */}
      
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
    <div className="overflow-x-hidden">
    <div className="min-h-screen bg-[#f7f6f5] ">
      {/* Nav */}
      
      {/* Main content */}
      <main className="px-4 sm:px-12 md:px-24 pb-16 py-24 mt-12">
        <h1 className="text-2xl sm:text-5xl font-normal text-gray-900 mt-4 mb-6 sm:mb-16">
          Selected Projects
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Work button */}
        <div className="flex justify-end mt-8 sm:mt-10">
          <button className="bg-gray-900 hover:bg-gray-800 transition-colors text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md flex items-center gap-2">
            View All Work 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </main>
    </div>
    </div>
    </>
  );
}