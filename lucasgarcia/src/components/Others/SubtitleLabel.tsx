function SubtitleLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="w-full text-base font-light uppercase">
      {children}
    </h3>
  )
}

SubtitleLabel.propTypes = {}

export default SubtitleLabel
