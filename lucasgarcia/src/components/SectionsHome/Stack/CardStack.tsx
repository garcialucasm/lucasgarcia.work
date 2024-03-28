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
      className="group flex h-24 items-center justify-center gap-x-8 rounded-2xl bg-white transition-all hover:scale-110 hover:shadow-center-xl shadow-orange-400"
      title={stackName}
    >
      {children}
      <span>{stackName}</span>
    </div>
  )
}

CardStack.propTypes = {}

export default CardStack
