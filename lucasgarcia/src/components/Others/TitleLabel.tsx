import { useFramerMotion } from "@/context/framerMotion"
function TitleLabel({ children }: { children: React.ReactNode }) {
  const { motion } = useFramerMotion()
  return (
    <motion.div
      className="w-full text-3xl font-extrabold uppercase"
      viewport={{ once: true }}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h2 className="inline-block bg-gradient-to-r from-sky-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
        {children}
      </h2>
    </motion.div>
  )
}

TitleLabel.propTypes = {}

export default TitleLabel
