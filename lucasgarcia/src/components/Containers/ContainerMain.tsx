interface Props {
  children: React.ReactNode
  isSingleComponent?: boolean
}

function ContainerMain({ children, isSingleComponent }: Props) {
  return (
    <div className={`flex h-full w-full flex-col max-w-screen-xl px-4 2xl:px-0 gap-y-16`}>{children}</div>
  )
}

export default ContainerMain
