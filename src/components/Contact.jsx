import React, { useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
//service_kh5bjtb
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_628qhtp','template_ap3vxpi',
      {
        from_name: form.name,
        to_name: 'Pennada Sai Eshwar',
        from_email: form.email,
        to_email: 'pennadasaieshwar@gmsil.com',
        message: form.message,
      },
      'HDxWr2P93zbP0Eox_'
    )
      .then(() => {
        setLoading(false)
        alert('Thank you. I will get back to you as soon as possible.')

        setForm({
          name: '', 
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        console.error(error)

        alert('Ahh, something went wrong. Please try again.')
      });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-gradient-to-br from-[#181824] via-[#232631] to-[#2e225a] p-8 rounded-2xl shadow-2xl border border-[#2e225a]/40 backdrop-blur-md'
      >
        <p className={`${styles.sectionSubText} tracking-widest text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText} mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg`}>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-black/40 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 font-medium transition-all duration-300 shadow-inner hover:shadow-lg'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-black/40 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 font-medium transition-all duration-300 shadow-inner hover:shadow-lg'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-black/40 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-pink-400 focus:ring-2 focus:ring-pink-400/40 font-medium transition-all duration-300 shadow-inner hover:shadow-lg resize-none'
            />
          </label>

          <button
            type='submit'
            className='relative overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 py-3 px-10 rounded-xl outline-none w-fit text-white font-bold shadow-xl border-2 border-transparent transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:scale-105 hover:shadow-2xl hover:border-blue-300 active:scale-95 group'
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-500 blur-lg"></span>
            <span className="relative z-10 flex items-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" viewBox="0 0 24 24">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                  Send
                </>
              )}
            </span>
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")