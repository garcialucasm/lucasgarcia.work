function TextLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full gap-y-4 flex flex-col text-justify">
      {children}
    </div>
  )
}

TextLabel.propTypes = {}

export default TextLabel
