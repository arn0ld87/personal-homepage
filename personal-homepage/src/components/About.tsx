import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * About-Me Komponente mit animierten Inhalten
 * Präsentiert persönliche Informationen mit eleganten Fade-In Effekten
 */
const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white" id="about">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text-Content */}
          <div className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Über mich
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Als leidenschaftlicher Webentwickler verbinde ich kreative Designs 
              mit moderner Technologie. Mit über 5 Jahren Erfahrung in der 
              Frontend-Entwicklung habe ich mich auf die Erstellung responsiver, 
              performanter und barrierefreier Webanwendungen spezialisiert.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Meine Leidenschaft liegt in der Entwicklung von benutzerfreundlichen 
              Oberflächen, die nicht nur funktional sind, sondern auch visuell 
              beeindrucken und eine emotionale Verbindung zum Nutzer aufbauen.
            </motion.p>

            {/* Skills-Liste */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {[
                'React & TypeScript',
                'Next.js',
                'Tailwind CSS',
                'Framer Motion',
                'Node.js',
                'UI/UX Design',
              ].map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visuelle Elemente */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4 h-full">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/50 backdrop-blur rounded-xl flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dekorative Kreise */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-200 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About