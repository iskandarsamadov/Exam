import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import MapSvg from './assets/map.svg'

const translations = {
  en: {
    aboutUs: 'About Us',
    careers: 'Careers',
    services: 'Services',
    blog: 'Blog',
    contactUs: 'Contact Us',
    cloneProject: 'Clone project'
    ,
    title: "Have a question ? Let’s get in touch with us.",
    subtitle: 'Fill up the Form and our team will get back to you within 24 hrs',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email address',
    message: 'Type message',
    submit: 'Submit',
    locationTitle: 'Location',
    locationText: 'DLF Cybercity, Bhubaneswar,\nIndia, &52500',
    contactTitle: 'Contact Us',
    contactText: '020 7993 2905\nhi@finsweet.com',
    mapAlt: 'map'
    ,
    footerDesc: 'Bespoke software solutions',
    companyTitle: 'Company',
    connectTitle: 'Connect',
    joinNewsletter: 'Join Newsletter',
    typeEmail: 'Type email here',
    subscribe: 'Subscribe',
    allRights: '© All rights reserved - Finsweet',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    contactEmail: 'hi@finsweet.com',
    contactPhone: '+(123) 456-7890'
  },
  uz: {
    aboutUs: 'Biz haqida',
    careers: 'Martabalar',
    services: 'Xizmatlar',
    blog: 'Blog',
    contactUs: 'Biz bilan bogʻlanish',
    cloneProject: 'Loyihani klonlash'
    ,
    title: 'Savolingiz bormi? Keling, biz bilan bog‘laning.',
    subtitle: 'Formani to‘ldiring va jamoamiz 24 soat ichida sizga javob beradi',
    firstName: 'Ism',
    lastName: 'Familiya',
    email: 'Elektron pochta',
    message: 'Xabaringizni kiriting',
    submit: 'Yuborish',
    locationTitle: 'Manzil',
    locationText: 'DLF Cybercity, Bhubaneswar,\nIndia, &52500',
    contactTitle: 'Bogʻlanish',
    contactText: '020 7993 2905\nhi@finsweet.com',
    mapAlt: 'karta'
    ,
    footerDesc: 'Shaxsiy dasturiy ta\'minot yechimlari',
    companyTitle: 'Kompaniya',
    connectTitle: 'Bogʻlanish',
    joinNewsletter: 'Yangiliklarga obuna',
    typeEmail: 'Email manzilini kiriting',
    subscribe: 'Obuna boʻlish',
    allRights: '© Barcha huquqlar himoyalangan - Finsweet',
    privacyPolicy: 'Maxfiylik siyosati',
    termsConditions: 'Shartlar va shartlar',
    contactEmail: 'hi@finsweet.com',
    contactPhone: '+(123) 456-7890'
  }


}

export default function Contact() {
  const [language, setLanguage] = useState('en')
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const t = translations[language]

  // Telegram bot settings (provided)
  const BOT_TOKEN = '8547763037:AAEi4kzx6RUBk1Jr_EJkq9zwLCxXyyMA-gE'
  const CHAT_ID = '7876634270'

  // form state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [textMsg, setTextMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState(null)

  const changeLang = (lang) => {
    setLanguage(lang)
    setLangMenuOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatusMessage(null)
    setLoading(true)

    const message = `<b>New contact form</b>\n<b>Name:</b> ${firstName} ${lastName}\n<b>Email:</b> ${email}\n<b>Message:</b> ${textMsg}`

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: 'HTML' })
      })

      const data = await res.json()
      if (data.ok) {
        setStatusMessage('Message sent successfully')
        setFirstName('')
        setLastName('')
        setEmail('')
        setTextMsg('')
      } else {
        setStatusMessage('Failed to send message')
      }
    } catch {
      setStatusMessage('Error sending message')
    } finally {
      setLoading(false)
    }
  }

  return (

    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#063255]">Finsweet</Link>
          <nav className="flex gap-10 items-center">
            <NavLink to="/about" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.aboutUs}</NavLink>
            <NavLink to="/careers" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.careers}</NavLink>
            <NavLink to="/services" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.services}</NavLink>
            <NavLink to="/blog" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.blog}</NavLink>
            <NavLink to="/contact" className="text-sm font-medium text-gray-900 hover:text-orange-500 transition">{t.contactUs}</NavLink>

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-5xl lg:text-4xl font-extrabold text-[#0f2b3a] leading-tight mb-4">{t.title.split('\n').map((line, i) => (<span key={i}>{line}{i < t.title.split('\n').length - 1 && <br />}</span>))}</h1>
            <p className="text-gray-500 mb-10">{t.subtitle}</p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder={t.firstName} className="w-full px-5 py-3 rounded-full bg-gray-100 placeholder-gray-400 focus:outline-none shadow-sm" />
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder={t.lastName} className="w-full px-5 py-3 rounded-full bg-gray-100 placeholder-gray-400 focus:outline-none shadow-sm" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={t.email} className="w-full px-5 py-3 rounded-full bg-gray-100 placeholder-gray-400 focus:outline-none shadow-sm" />
              <textarea value={textMsg} onChange={(e) => setTextMsg(e.target.value)} placeholder={t.message} rows={6} className="w-full px-5 py-5 rounded-2xl bg-gray-100 placeholder-gray-400 focus:outline-none shadow-sm"></textarea>

              <div className="pt-4">
                <button disabled={loading} type="submit" className="px-6 py-2.5 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">{loading ? 'Sending...' : t.submit}</button>
              </div>

              {statusMessage && <p className="text-sm mt-2 text-gray-600">{statusMessage}</p>}
            </form>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{t.locationTitle}</h4>
                <p className="text-gray-500">{t.locationText.split('\n').map((line, i) => (<span key={i}>{line}{i < t.locationText.split('\n').length - 1 && <br />}</span>))}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{t.contactTitle}</h4>
                <p className="text-gray-500 mb-15">{t.contactText.split('\n').map((line, i) => (<span key={i}>{line}{i < t.contactText.split('\n').length - 1 && <br />}</span>))}</p>
              </div>
            </div>

            <div className="w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img src={MapSvg} alt={t.mapAlt} className="w-[620px] h-[370px] object-cover grayscale" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#08324a] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-white">Finsweet</Link>
            <p className="mt-4 text-3xl mb-6 text-white" >Bespoke software solutions</p>
            <div className="flex gap-4 mt-6 text-white/80">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">f</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">in</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">ig</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">t</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.companyTitle}</h4>
            <ul className="space-y-3 text-white">
              <li><Link to="/about" className="hover:text-orange-500">{t.aboutUs}</Link></li>
              <li><Link to="/careers" className="hover:text-orange-500">{t.careers}</Link></li>
              <li><Link to="/services" className="hover:text-orange-500">{t.services}</Link></li>
              <li><Link to="/blog" className="hover:text-orange-500">{t.blog}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.connectTitle}</h4>
            <p className="text-white">{t.contactEmail}</p>
            <p className="text-white mt-2">{t.contactPhone}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.joinNewsletter}</h4>
            <div className="flex gap-4 items-center">
              <input type="email" placeholder={t.typeEmail} className="w-full px-6 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none" />
            </div>
            <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600">{t.subscribe}</button>
          </div>
        </div>

        <div className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 flex justify-between text-sm text-white/80">
            <div>{t.allRights}</div>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-white">{t.privacyPolicy}</Link>
              <Link to="/terms" className="hover:text-white">{t.termsConditions}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
