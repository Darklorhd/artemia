export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="
        bg-[url('/wht.avif')] 
        bg-no-repeat 
        bg-cover
        h-[100dvh]
        relative
        
        /* Mobile optimizations */
        bg-fixed
        sm:bg-scroll
        
        /* Responsive background positioning */
        bg-[position:center_30%]
        sm:bg-[position:center_40%]
        md:bg-[position:center_50%]
        lg:bg-center
        
        /* Alternative background sizes for different screens */
        md:bg-contain
        lg:bg-cover
        xl:bg-cover
        
        /* Ensure proper aspect ratio on different devices */
        w-full
        overflow-hidden
      ">
        {/* Optional overlay for better text readability */}
        <div className="
          bg-black/10
          sm:bg-black/5
          md:bg-transparent
        "></div>
        
        {/* Content container with responsive padding */}
        <div className="
          h-full 
          flex flex-col 
          justify-end 
          items-left
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
        ">
          {/* Sample content - replace with your actual content */}
          <div className="
            text-start
            max-w-xs
            sm:max-w-sm
            md:max-w-md
            lg:max-w-lg
            xl:max-w-xl
          ">
            <h1 className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-bold
              text-white
              drop-shadow-lg
              mb-4
              sm:mb-6
              md:mb-8
            ">
              Welcome To Artemia
            </h1>
            <p className="
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              text-white/90
              drop-shadow
              leading-relaxed
            ">
              Your No 1 Business Management Website
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}