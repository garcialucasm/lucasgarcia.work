interface Props {
  children: React.ReactNode
}

function ContainerPage({ children }: Props) {
  return (
    <div
      className={`flex h-full w-full max-w-screen-xl flex-col gap-y-24 px-4 2xl:px-0`}
    >
      {children}
    </div>
  )
}

export default ContainerPage
