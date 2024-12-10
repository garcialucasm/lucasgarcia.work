function ParagraphLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="w-full text-pretty">
      {children}
    </p>
  )
}

ParagraphLabel.propTypes = {}

export default ParagraphLabel
