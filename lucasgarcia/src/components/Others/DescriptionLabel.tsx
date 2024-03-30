function DescriptionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="w-full font-normal">
      {children}
    </h3>
  )
}

DescriptionLabel.propTypes = {}

export default DescriptionLabel
