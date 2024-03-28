interface ContainerSectionsProps {
  children: React.ReactNode
}

const ContainerSections: React.FC<ContainerSectionsProps> = ({ children }) => {
  return (
    <>
      <div className="hover:shadow-center-2xl flex flex-col gap-y-8 rounded-3xl bg-slate-200 p-8 md:p-12 xl:p-16 transition-all duration-300 hover:xl:scale-105 hover:bg-slate-100">
        {children}
      </div>
    </>
  )
}

export default ContainerSections
