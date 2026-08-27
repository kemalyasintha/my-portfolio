import React from 'react'
import { motion } from 'motion/react'

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I am open to senior software engineering, .NET/Azure, full-stack, and DevOps opportunities in Canada.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className='mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row'
      >
        <a
          href='mailto:kemalyashintha@gmail.com'
          className='rounded-full bg-black px-8 py-3 text-white transition hover:bg-black/80 dark:border dark:border-white dark:bg-transparent'
        >
          Email Kemal
        </a>
        <a
          href='https://www.linkedin.com/in/kemalyasintha/'
          target='_blank'
          rel='noreferrer'
          className='rounded-full border border-gray-500 px-8 py-3 transition hover:bg-lightHover dark:border-white dark:hover:bg-white/10'
        >
          Connect on LinkedIn
        </a>
      </motion.div>
    </motion.section>
  )
}

export default Contact
