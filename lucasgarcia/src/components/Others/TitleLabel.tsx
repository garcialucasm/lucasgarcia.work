function TitleLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="w-full text-2xl font-extrabold uppercase">
      {children}
    </h2>
  )
}

TitleLabel.propTypes = {}

export default TitleLabel
