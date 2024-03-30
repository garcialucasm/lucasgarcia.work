interface ContainerSectionsProps {
  children: React.ReactNode
}

const ContainerSections: React.FC<ContainerSectionsProps> = ({ children }) => {
  return (
    <>
      <div className="flex transform-gpu flex-col gap-y-8 rounded-3xl bg-slate-200 transition-all duration-300 hover:bg-slate-100 hover:shadow-center-2xl p-8 md:p-12 xl:p-16 hover:xl:scale-105">
        {children}
      </div>
    </>
  )
}

export default ContainerSections
