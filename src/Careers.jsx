import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import HeaderImage1 from './assets/Header-image-1.png'
import BlogImage from './assets/Image-5.svg'
import BlogImage1 from './assets/Image-1.svg'
import BlogImage2 from './assets/Image-2.svg'

export default function Careers() {
  const [language, setLanguage] = useState('en')
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  const changeLang = (lang) => { setLanguage(lang); setLangMenuOpen(false) }
  const translations = {
    en: { aboutUs: 'About Us', careers: 'Careers', services: 'Services', blog: 'Blog', contactUs: 'Contact Us', cloneProject: 'Clone project' },
    uz: { aboutUs: 'Biz haqida', careers: 'Martabalar', services: 'Xizmatlar', blog: 'Blog', contactUs: 'Bogʻlanish', cloneProject: 'Loyihani klonlash' }
  }
  const t = translations[language]

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-[#063255]">Finsweet</Link>
            <nav className="flex gap-8 items-center">
              <Link to="/about" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.aboutUs}</Link>
              <Link to="/careers" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.careers}</Link>
              <Link to="/services" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.services}</Link>
              <Link to="/blog" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.blog}</Link>
              <Link to="/contact" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.contactUs}</Link>

              <div className="relative">
                <button onClick={() => setLangMenuOpen(!langMenuOpen)} className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-orange-600 transition cursor-pointer flex items-center gap-2">
                  {language === 'en' ? 'EN' : 'UZ'}
                </button>
                {langMenuOpen && (
                  <div className="absolute right-0 top-full mt-3 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                    <button onClick={() => changeLang('en')} className={`w-full px-6 py-3 text-left text-sm font-semibold transition cursor-pointer flex items-center gap-3 ${language === 'en' ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : 'text-gray-900 hover:bg-gray-50'}`}>
                      <span className="text-lg">🇺🇸</span>English
                    </button>
                    <div className="border-t border-gray-100"></div>
                    <button onClick={() => changeLang('uz')} className={`w-full px-6 py-3 text-left text-sm font-semibold transition cursor-pointer flex items-center gap-3 ${language === 'uz' ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : 'text-gray-900 hover:bg-gray-50'}`}>
                      <span className="text-lg">🇺🇿</span>O'zbekcha
                    </button>
                  </div>
                )}
              </div>

              <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition shadow-md">{t.cloneProject}</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f2b3a] leading-tight mb-6 max-w-xl">We hired people who are very passionate about what they do</h1>
              <p className="text-gray-600 mb-8 max-w-lg">Through True Rich Attended does no end it his mother since <br /> real had half every him case in packages enquire we up <br /> ecstatic unsatiable saw.</p>

              <div className="mt-8">
                <a href="#open-positions" className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full font-semibold shadow-sm hover:bg-orange-600 transition">View Positions</a>
              </div>
            </div>

            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px]">
                <img src={HeaderImage1} alt="Team" className="w-[674px] h-[520px] object-cover rounded-2xl shadow-lg" />
              </div>
            </div>
          </div>
        </section>
        <section id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">See our open positions</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#EFF8FF] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0b2a3a]">Full Stack Developer</h3>
              <div className="text-sm text-gray-500 mt-2">Bengaluru · Full Time</div>
              <a className="mt-6 inline-block text-orange-500 font-medium">Apply Now</a>
            </div>

            <div className="bg-[#EFF8FF] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0b2a3a]">Testing Engineer</h3>
              <div className="text-sm text-gray-500 mt-2">Bengaluru · Full Time</div>
              <a className="mt-6 inline-block text-orange-500 font-medium">Apply Now</a>
            </div>

            <div className="bg-[#EFF8FF] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0b2a3a]">Hr Manager+</h3>
              <div className="text-sm text-gray-500 mt-2">Mumbai · Full Time</div>
              <a className="mt-6 inline-block text-orange-500 font-medium">Apply Now</a>
            </div>

            <div className="bg-[#EFF8FF] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0b2a3a]">Full Stack Developer</h3>
              <div className="text-sm text-gray-500 mt-2">Bengaluru · Full Time</div>
              <a className="mt-6 inline-block text-orange-500 font-medium">Apply Now</a>
            </div>

            <div className="bg-[#EFF8FF] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0b2a3a]">Testing Engineer</h3>
              <div className="text-sm text-gray-500 mt-2">Bengaluru · Full Time</div>
              <a className="mt-6 inline-block text-orange-500 font-medium">Apply Now</a>
            </div>
          </div>
        </section>

        <section className="bg-[#e6f2f8] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1724] mb-8">Latest Blog & News</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl overflow-hidden shadow-md">
                <img src={BlogImage} alt="blog 1" className="w-[400px] h-[230px] object-cover rounded-t-2xl" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Why you have to digitalize in <br /> 2021</h3>
                  <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Curabitur sit amet eros <br /> blandit, hendrerit elit et.</p>
                  <a href="#" className="text-orange-500 font-semibold inline-flex items-center gap-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                </div>
              </article>

              <article className="bg-white rounded-2xl overflow-hidden shadow-md">
                <img src={BlogImage1} alt="blog 2" className="w-[400px] h-[230px] object-cover rounded-t-2xl" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Our internal process and <br /> longerm vision</h3>
                  <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Curabitur sit amet eros <br /> blandit, hendrerit elit et.</p>
                  <a href="#" className="text-orange-500 font-semibold inline-flex items-center gap-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                </div>
              </article>

              <article className="bg-white rounded-2xl overflow-hidden shadow-md">
                <img src={BlogImage2} alt="blog 3" className="w-[400px] h-[230px] object-cover rounded-t-2xl" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Helping the next generation <br /> of leaders</h3>
                  <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Curabitur sit amet eros <br /> blandit, hendrerit elit et.</p>
                  <a href="#" className="text-orange-500 font-semibold inline-flex items-center gap-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                </div>
              </article>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-[#063255]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Finsweet</h3>
              <p className="text-white text-3xl mb-6">Bespoke software solutions</p>

              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333H16V2.169c-.585-.089-1.308-.169-2.227-.169-2.995 0-5.207 1.784-5.207 5.591V8z" /></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.002H4.385c-.979 0-1.78.8-1.78 1.78v14.436c0 .979.801 1.78 1.78 1.78h15.23c.979 0 1.78-.801 1.78-1.78V4.782c0-.98-.801-1.78-1.78-1.78zm-8.615 13.48V9.08h2.143v7.402h-2.143zm1.071-8.403c-.686 0-1.242-.556-1.242-1.242s.556-1.242 1.242-1.242 1.242.556 1.242 1.242-.556 1.242-1.242 1.242zM17.5 16.482h-2.143v-3.6c0-.858-.017-1.96-1.194-1.96-1.195 0-1.378.933-1.378 1.897v3.663H10.64V9.08h2.056v1.012h.029c.286-.54.984-1.11 2.023-1.11 2.162 0 2.561 1.422 2.561 3.274v4.226z" /></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" /></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-white hover:text-orange-500 transition">About Us</Link></li>
                <li><Link to="/careers" className="text-white hover:text-orange-500 transition">Careers</Link></li>
                <li><Link to="/services" className="text-white hover:text-orange-500 transition">Services</Link></li>
                <li><Link to="/blog" className="text-white hover:text-orange-500 transition">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Connect</h4>
              <ul className="space-y-3">
                <li><a href="mailto:hi@finsweet.com" className="text-gray-300 hover:text-white transition">hi@finsweet.com</a></li>
                <li><a href="tel:+1234567890" className="text-gray-300 hover:text-white transition">+(123) 456-7890</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Join Newsletter</h4>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Type email here"
                  className=" bg-[#ffff] px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
              <p>© All rights reserved - Finsweet</p>
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
