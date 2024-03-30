function StackLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-light text-xs text-nowrap uppercase border border-cyan-600 py-1 px-2 rounded-md bg-cyan-200 hover:text-cyan-100 hover:bg-cyan-800 transition-colors">
      {children}
    </h4>
  )
}

StackLabel.propTypes = {}

export default StackLabel
