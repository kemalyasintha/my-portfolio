import { workData } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Selected engineering projects
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Evidence in code
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Public projects that demonstrate modernization, cloud delivery, testing, and full-stack
        engineering. Each repository includes implementation details and commit history.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 my-10 gap-6'
      >
        {workData.map((project) => (
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            key={project.title}
            className='flex flex-col rounded-xl border border-gray-300 bg-white p-7 shadow-sm transition dark:border-white/30 dark:bg-darkHover'
          >
            <div>
              <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{project.title}</h3>
              <p className='mt-3 text-sm leading-6 text-gray-600 dark:text-white/80'>
                {project.description}
              </p>
            </div>
            <div className='mt-5 flex flex-wrap gap-2'>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className='rounded-full bg-lightHover px-3 py-1 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-white'
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.repository}
              target='_blank'
              rel='noreferrer'
              className='mt-7 inline-flex w-max rounded-full border border-gray-700 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-lightHover dark:border-white dark:text-white dark:hover:bg-white/10'
            >
              View source on GitHub →
            </a>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work
