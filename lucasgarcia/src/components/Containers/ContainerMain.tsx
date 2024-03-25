interface Props {
  children: React.ReactNode
  isSingleComponent?: boolean
}

function ContainerMain({ children, isSingleComponent }: Props) {
  return (
    <div className={`flex h-full w-full flex-col max-w-screen-xl`}>{children}</div>
  )
}

export default ContainerMain
