export default function Card({ title, description, icon }) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 
                    flex flex-col items-start transition-all duration-300 
                    hover:border-indigo-100 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] 
                    hover:-translate-y-1">
      
      {/* Icon Container with soft background */}
      {icon && (
        <div className="mb-6 flex items-center justify-center w-14 h-14 
                        bg-indigo-50 text-indigo-600 rounded-xl 
                        group-hover:bg-indigo-600 group-hover:text-white 
                        transition-colors duration-300 shadow-sm">
          <span className="text-2xl">{icon}</span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight 
                       group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
          {description}
        </p>
      </div>

      {/* Decorative 'Learn More' link - optional but looks professional */}
      <div className="mt-6 flex items-center text-sm font-bold text-indigo-600 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Explore more</span>
        <svg 
          className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>

      {/* Subtle top accent line on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-400 
                      rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </div>
  );
}