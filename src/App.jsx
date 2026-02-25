import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Careers from './Careers'
import Services from './Services'

import Logo1 from './assets/Logo (1).svg'
import Logo2 from './assets/Logo (2).svg'
import Logo3 from './assets/Logo (3).svg'
import ImagePng from './assets/Image.png'
import ImageSvg from './assets/Image.svg'
import Image1Svg from './assets/Image (1).svg'
import Image2Svg from './assets/Image (2).svg'
import Icon1 from './assets/Icon (1).svg'
import Icon2 from './assets/Icon (2).svg'
import Icon3 from './assets/Icon (3).svg'
import AboutImagePng from './assets/About Image.png'
import ServiceImage from './assets/Service image.png'
import Image2Png from './assets/Image (2).png'
import Image4Svg from './assets/Image (4).svg'
import Image3Svg from './assets/Image (3).svg'

const translations = {
  en: {
    aboutUs: 'About Us',
    careers: 'Careers',
    services: 'Services',
    blog: 'Blog',
    contactUs: 'Contact Us',
    cloneProject: 'Clone project',
    prosper: 'Prosper with our bespoke solutions',
    prospDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique',
    seeOurServices: 'See Our Services',
    seeAllServices: 'See All Services',
    workedWith: 'Worked with 100+ Companies',
    helpMore: 'We help more than 1500 companies from all sectors',
    helpMoreDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    businessStrategy: 'Business strategy',
    digitalization: 'Digitalization',
    riskAssessment: 'Risk assessment',
    learnMore: 'Learn More',
    buildingSoftware: 'We are building software solution that solves your business challenges',
    invoicing: 'Invoicing',
    support: 'Support',
    surveying: 'Surveying',
    helping: 'Helping clients with research and strategy for their business',
    finsweet: 'Finsweet Was A Dream To Work With',
    finsweetDesc: 'Maecenas officitur scelerisque lorem, et varius locus tincidunt vol. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.',
    ceoAt: 'CEO at MassAI',
    latestBlog: 'Latest Blog & News',
    digitalize: 'Why you have to digitalize in 2021',
    process: 'Our internal process and longerm vision',
    leaders: 'Helping the next generation of leaders',
    energyExp: 'Energy of a start-up combined with 30 years of experience.',
    seeJobVacancies: 'See Job Vacancies',
    company: 'Company',
    connect: 'Connect',
    joinNewsletter: 'Join Newsletter',
    typeEmail: 'Type email here',
    subscribe: 'Subscribe',
    allRights: '© All rights reserved - Finsweet',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    bespoke: 'Bespoke software solutions',
    energy: 'The energy of a start-up combined with 30 years of experience.',
    awards15: '15+',
    awardsTxt: 'Awards received',
    clients500: '500+',
    clientsTxt: 'Clients served',
    awardDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicin. Curabitur sit amet eros elit et.',
    desc2: 'Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.',
    servicesDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,',
    buildingDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    featuresDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,',
    aboutDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    tabDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.'
  },
  uz: {
    aboutUs: 'Biz haqida',
    careers: 'Martabalar',
    services: 'Xizmatlar',
    blog: 'Blog',
    contactUs: 'Biz bilan bogʻlanish',
    cloneProject: 'Loyihani klonlash',
    prosper: 'Bizning shaxsiy yechimalari bilan taraqqiy eting',
    prospDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique',
    seeOurServices: 'Bizning xizmatlarini koʻring',
    seeAllServices: 'Barcha xizmatlarni koʻring',
    workedWith: '100+ kompaniya bilan ishladi',
    helpMore: 'Biz 1500dan koʻp kompaniyaga barcha sohalardan yordam beramiz',
    helpMoreDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    businessStrategy: 'Biznes strategiyasi',
    digitalization: 'Raqamlashtirish',
    riskAssessment: 'Risk baholash',
    learnMore: 'Koʻproq bilib olish',
    buildingSoftware: 'Biz sizning biznes muammolarini hal qiluvchi dasturiy taʼminotni qurayapti',
    invoicing: 'Hisob-kitob',
    support: 'Qoʻllab-quvvatlash',
    surveying: 'Soʻrov oʻtkazish',
    helping: 'Mijozlarga tadqiqot va strategiya boʻyicha yordam berish',
    finsweet: 'Finsweet bilan ishlash orzumandi edi',
    finsweetDesc: 'Maecenas officitur scelerisque lorem, et varius locus tincidunt vol. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.',
    ceoAt: 'MassAI ning CEO',
    latestBlog: 'Eng soʻnggi Blog & Yangiliklar',
    digitalize: 'Nima uchun 2021 yilda raqamlashtirish kerak',
    process: 'Bizning ichki jarayon va uzoq muddatli koʻrish',
    leaders: 'Keyingi avlod liderlarini yordam berish',
    energyExp: 'Startapning energiyasi 30 yil tajriba bilan birlashgan.',
    seeJobVacancies: 'Ish orinlarini koʻring',
    company: 'Kompaniya',
    connect: 'Bogʻlanish',
    joinNewsletter: 'Yangiliklar jurnalida ishtirok etish',
    typeEmail: 'Email manzilini kiriting',
    subscribe: 'Obuna boʻlish',
    allRights: '© Barcha huquqlar himoyalangan - Finsweet',
    privacyPolicy: 'Maxfiylik siyosati',
    termsConditions: 'Shartlar va shartlar',
    bespoke: 'Shaxsiy dasturiy taʼminot yechimalari',
    energy: 'Startapning energiyasi 30 yil tajriba bilan birlashgan.',
    awards15: '15+',
    awardsTxt: 'Qabul qilingan mukofotlar',
    clients500: '500+',
    clientsTxt: 'Xizmat koʻrsatilgan mijozlar',
    awardDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicin. Curabitur sit amet eros elit et.',
    desc2: 'Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.',
    servicesDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,',
    buildingDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    featuresDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,',
    aboutDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    tabDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
    blogDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.'
  }
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  const [language, setLanguage] = useState('en')
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const t = translations[language]

  const changeLang = (lang) => {
    setLanguage(lang)
    setLangMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#063255]">Finsweet</Link>
          <nav className="flex gap-10 items-center">
            <Link to="/about" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.aboutUs}</Link>
            <Link to="/careers" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.careers}</Link>
            <Link to="/services" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.services}</Link>
            <Link to="/blog" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.blog}</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.contactUs}</Link>

            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-orange-600 transition cursor-pointer flex items-center gap-2"
              >
                <span>{language === 'en' ? '🇺🇸' : '🇺🇿'}</span>
                {language === 'en' ? 'EN' : 'UZ'}
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-3 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                  <button
                    onClick={() => changeLang('en')}
                    className={`w-full px-6 py-3 text-left text-sm font-semibold transition cursor-pointer flex items-center gap-3 ${language === 'en' ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : 'text-gray-900 hover:bg-gray-50'}`}
                  >
                    <span className="text-lg">🇺🇸</span>
                    English
                  </button>
                  <div className="border-t border-gray-100"></div>
                  <button
                    onClick={() => changeLang('uz')}
                    className={`w-full px-6 py-3 text-left text-sm font-semibold transition cursor-pointer flex items-center gap-3 ${language === 'uz' ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : 'text-gray-900 hover:bg-gray-50'}`}
                  >
                    <span className="text-lg">🇺🇿</span>
                    O'zbekcha
                  </button>
                </div>
              )}
            </div>

            <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition cursor-pointer">
              {t.cloneProject}
            </button>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t.prosper}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.prospDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition transform hover:translate-y-[-2px] cursor-pointer">
                {t.seeOurServices}
              </button>
              <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition cursor-pointer">
                {t.seeAllServices}
              </button>
            </div>

            <div className="pt-8 border-gray-300">
              <p className="text-sm text-gray-500 mb-4">{t.workedWith}</p>
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <div className="flex items-center gap-2">
                  <img src="/src/assets/Logo (2).svg" alt="logo" className="w-30 h-16" />
                </div>
                <div className="flex items-center gap-2">
                  <img src="/src/assets/Logo (3).svg" alt="logo" className="w-30 h-16" />
                </div>
                <div className="flex items-center gap-2">
                  <img src="/src/assets/Logo (1).svg" alt="logo" className="w-30 h-16" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-auto flex justify-center items-center">
            <img src="/src/assets/Image.png" alt="Professional" className="w-[934px] h-[645px] object-cover rounded-lg relative z-10" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D3444] leading-tight mb-6 max-w-2xl">
              {t.helpMore}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              {t.helpMoreDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition">
              <img src="/src/assets/Image.svg" alt="Business strategy" className="w-[400px] h-[230px] object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.businessStrategy}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
                </p>
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition flex items-center gap-2">
                  {t.learnMore} <span>→</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition">
              <img src="/src/assets/Image (1).svg" alt="Digitalization" className="w-[400px] h-[230px] object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.digitalization}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
                </p>
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition flex items-center gap-2">
                  {t.learnMore} <span>→</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition">
              <img src="/src/assets/Image (2).svg" alt="Risk assessment" className="w-[400px] h-[230px] object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.riskAssessment}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
                </p>
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition flex items-center gap-2">
                  {t.learnMore} <span>→</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-5xl lg:text-3xl font-bold text-gray-900 leading-tight">
                {t.buildingSoftware}
              </h2>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition">
              <img src="/src/assets/Icon (1).svg" alt="Invoicing" className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.invoicing}</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition">
              <img src="/src/assets/Icon (2).svg" alt="Support" className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.support}</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition">
              <img src="/src/assets/Icon (3).svg" alt="Surveying" className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.surveying}</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                {t.energy}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
              </p>

              <div className="grid grid-cols-2 gap-8">

                <div>
                  <h3 className="text-4xl font-bold text-orange-500 mb-2">{t.awards15}</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-2">{t.awardsTxt}</p>
                  <p className="text-gray-600 text-sm">
                    {t.awardDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-orange-500 mb-2">{t.clients500}</h3>
                  <p className="text-lg font-semibold text-gray-900 mb-2">{t.clientsTxt}</p>
                  <p className="text-gray-600 text-sm">
                    {t.desc2}
                  </p>
                </div>

              </div>
            </div>
            <div className="relative">
              <div className="text-center">
              </div>

              <div className="relative rounded-2xl overflow-hidden h-96 lg:h-full">
                <img src="/src/assets/About Image.png" alt="Experience" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12" style={{ width: '100%', maxWidth: '1274px', height: 'auto' }}>


            <div className="flex gap-6 mb-12">
              <button className="px-4 py-2 text-orange-500 font-semibold border-b-2 border-orange-500">
                {t.businessStrategy}
              </button>
              <button className="px-4 py-2 text-gray-400 font-semibold border-b-2 border-transparent hover:text-gray-600 transition">
                {t.digitalization}
              </button>
              <button className="px-4 py-2 text-gray-400 font-semibold border-b-2 border-transparent hover:text-gray-600 transition">
                {t.riskAssessment}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                  {t.helping}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {t.desc2}
                </p>

                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition inline-flex items-center gap-2">
                  {t.seeAllServices} <span>→</span>
                </a>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img src="/src/assets/Service image.png" alt="Business Strategy" className="w-[472px] h-[466px] object-cover" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-96">

          <div className="h-96 lg:h-full overflow-hidden">
            <img src="/src/assets/Image (2).png" alt="Professional" className="w-full h-full object-cover" />
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-8 lg:p-20">
            <div className="max-w-sm">
              <h2 className="text-4xl lg:text-4xl font-bold text-white leading-tight mb-8">
                {t.energyExp}
              </h2>

              <button className="px-8 py-3 bg-white text-orange-500 rounded-full font-semibold hover:bg-gray-100 transition cursor-pointer">
                {t.seeJobVacancies}
              </button>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                {t.finsweet}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-12">
                {t.finsweetDesc}
              </p>

              <div className="flex items-center gap-4">
                <img src="/src/assets/Image (4).svg" alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-bold text-[#063255]">Chikelu Neo</h4>
                  <p className="text-orange-500 font-semibold text-sm">{t.ceoAt}</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-96 lg:h-full">
              <img src="/src/assets/Image (3).svg" alt="Testimonial" className="w-full h-full object-cover" />
            </div>

          </div>

        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
            {t.latestBlog}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition">
              <img src="/src/assets/Image.svg" alt="Blog post" className="w-[400px] h-[230px] object-cover" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t.digitalize}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.
                </p>
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition inline-flex items-center gap-2">
                  {t.learnMore} <span>→</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition">
              <img src="/src/assets/Image (1).svg" alt="Blog post" className="w-[400px] h-[230px] object-cover" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t.process}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.
                </p>
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition inline-flex items-center gap-2">
                  {t.learnMore} <span>→</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition">
              <img src="/src/assets/Image (2).svg" alt="Blog post" className="w-[400px] h-[230px] object-cover" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t.leaders}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.
                </p>
                <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition inline-flex items-center gap-2">
                  {t.learnMore} <span>→</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <footer className="bg-[#063255]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            <div>
              <Link to="/" className="text-2xl font-bold text-white mb-4">Finsweet</Link>
              <p className="text-white text-3xl mb-6">{t.bespoke}</p>

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
              <h4 className="text-white font-bold mb-6">{t.company}</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-white hover:text-orange-500 transition">{t.aboutUs}</Link></li>
                <li><Link to="/careers" className="text-white hover:text-orange-500 transition">{t.careers}</Link></li>
                <li><Link to="/services" className="text-white hover:text-orange-500 transition">{t.services}</Link></li>
                <li><Link to="/blog" className="text-white hover:text-orange-500 transition">{t.blog}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">{t.connect}</h4>
              <ul className="space-y-3">
                <li><a href="mailto:hi@finsweet.com" className="text-gray-300 hover:text-white transition">hi@finsweet.com</a></li>
                <li><a href="tel:+1234567890" className="text-gray-300 hover:text-white transition">+(123) 456-7890</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">{t.joinNewsletter}</h4>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder={t.typeEmail}
                  className=" bg-[#ffff] px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition cursor-pointer">
                  {t.subscribe}
                </button>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
              <p>{t.allRights}</p>
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white transition">{t.privacyPolicy}</Link>
                <Link to="/terms" className="hover:text-white transition">{t.termsConditions}</Link>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
