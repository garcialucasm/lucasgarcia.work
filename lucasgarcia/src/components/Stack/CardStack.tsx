"use client"

function CardStack({
  children,
  stackName,
}: {
  children: React.ReactNode
  stackName: string
}) {
  return (
    <div
      className="group flex h-28 min-w-80 items-center justify-start gap-x-8 rounded-xl bg-white px-16 py-8 transition-all hover:scale-110 hover:shadow-2xl"
      title={stackName}
    >
      {children}
      <span>{stackName}</span>
    </div>
  )
}

CardStack.propTypes = {}

export default CardStack
