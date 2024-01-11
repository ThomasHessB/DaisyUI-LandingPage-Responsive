import React from "react";

export default function HeroSection() {
  return (
    <section>
      <div className="container">
        <div
          className="hero h-96 md:h-[500px] rounded-box overflow-hidden"
          style={{
            backgroundImage: "url(src/image/1.jpeg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 bg-ghost"></div>
          <div className="hero-content text-center text-secondary-content bg-slate-500 rounded-full">
            <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                Let's Make Your Product a Success
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-warning sm:btn-wide">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
