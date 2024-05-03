import { motion } from "framer-motion"

function TitleLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="w-full text-2xl font-extrabold uppercase"
      viewport={{ once: true }}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h2 className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-600 inline-block text-transparent bg-clip-text">{children}</h2>
    </motion.div>
  )
}

TitleLabel.propTypes = {}

export default TitleLabel
