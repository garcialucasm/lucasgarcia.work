interface Props {
  children: React.ReactNode
}

function ContainerContent({ children }: Props) {
  return (
    <div
      className={`flex h-full w-full max-w-screen-xl flex-col gap-y-16 px-4 2xl:px-0`}
    >
      {children}
    </div>
  )
}

export default ContainerContent
