interface ContainerStackProps {
  children: React.ReactNode
}

const ContainerStack: React.FC<ContainerStackProps> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-1 items-center justify-center gap-8 font-semibold sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </>
  )
}

export default ContainerStack
