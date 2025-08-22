import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Palette, Smartphone, Server, GitBranch } from 'lucide-react'

/**
 * Skills-Komponente mit animierten Skill-Karten
 * Zeigt technische Fähigkeiten mit Progress-Bars und Hover-Effekten
 */
const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const skills = [
    {
      name: 'Frontend-Entwicklung',
      icon: Code,
      level: 95,
      color: 'bg-blue-500',
      description: 'React, TypeScript, Next.js, Vue.js',
    },
    {
      name: 'UI/UX Design',
      icon: Palette,
      level: 85,
      color: 'bg-purple-500',
      description: 'Figma, Adobe XD, User Research',
    },
    {
      name: 'Backend-Entwicklung',
      icon: Server,
      level: 80,
      color: 'bg-green-500',
      description: 'Node.js, Express, Python, REST APIs',
    },
    {
      name: 'Datenbanken',
      icon: Database,
      level: 75,
      color: 'bg-yellow-500',
      description: 'PostgreSQL, MongoDB, Redis',
    },
    {
      name: 'Mobile-Entwicklung',
      icon: Smartphone,
      level: 70,
      color: 'bg-red-500',
      description: 'React Native, Flutter, PWA',
    },
    {
      name: 'DevOps & Git',
      icon: GitBranch,
      level: 85,
      color: 'bg-indigo-500',
      description: 'Docker, CI/CD, AWS, GitHub Actions',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50" id="skills">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fähigkeiten & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Moderne Technologien und Best Practices für erstklassige Webanwendungen
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg ${skill.color}`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4">{skill.description}</p>

              {/* Progress-Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Fortschritt</span>
                  <span className="font-semibold text-gray-900">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </div>

              {/* Hover-Details */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: 'auto' }}
                className="mt-4 overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    {skill.level >= 90 ? 'Experte' : skill.level >= 75 ? 'Fortgeschritten' : 'Kompetent'}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Zusätzliche Skills-Übersicht */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Weitere Kompetenzen
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              'TypeScript',
              'Tailwind CSS',
              'GraphQL',
              'Jest',
              'Storybook',
              'AWS',
              'Docker',
              'CI/CD',
            ].map((tech) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + Math.random() * 0.5 }}
                className="p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300"
              >
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills