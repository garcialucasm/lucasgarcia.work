"use client"

function ContainerSelectedCases({ children }: { children: React.ReactNode }) {
  return (
    <div className="group flex w-full rounded-s-2xl bg-white py-8 ps-8 transition-all ms-8 md:ms-12 xl:ms-16 gap-8">
      {children}
    </div>
  )
}

ContainerSelectedCases.propTypes = {}

export default ContainerSelectedCases
