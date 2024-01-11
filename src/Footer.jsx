import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container">
        <div className="footer py-10 md:py-16 grid-cols-2 sm:grid-cols-4 lg:grid-cols-auto">
          <nav>
            <header className="footer-title">SOLUTIONS</header>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Analytics</a>
            <a className="link link-hover">Commerce</a>
            <a className="link link-hover">Insights</a>
          </nav>
          <nav>
            <header className="footer-title">SERVICES</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertise</a>
          </nav>
          <nav>
            <header className="footer-title">COMPANY</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">LEGAL</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form className="w-full col-span-full md:col-auto">
            <header className="footer-title">NEWSLETTER</header>
            <fieldset className="form-control w-full">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row items-center border-t border-base-300 py-4 gap-2">
          <div className="flex-grow text-center sm:text-start">
            <p>© 2024 Company Inc. All rights reserved</p>
          </div>

          <div className="grid grid-flow-col gap-4">
            <a className="link link-secondary" href="#!">
              <i className="bi bi-facebook text-xl"></i>
            </a>
            <a className="link link-secondary" href="#!">
              <i className="bi bi-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
