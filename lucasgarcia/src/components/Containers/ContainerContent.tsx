interface Props {
  children: React.ReactNode
  isSingleComponent?: boolean
}

function ContainerContent({ children, isSingleComponent }: Props) {
  return (
    <div className={`flex h-full w-full flex-col max-w-screen-xl px-4 2xl:px-0 gap-y-16 -translate-y-12`}>{children}</div>
  )
}

export default ContainerContent
