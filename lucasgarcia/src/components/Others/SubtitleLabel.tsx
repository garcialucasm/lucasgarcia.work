function SubtitleLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="w-full text-base font-extralight uppercase">
      {children}
    </h3>
  )
}

SubtitleLabel.propTypes = {}

export default SubtitleLabel
