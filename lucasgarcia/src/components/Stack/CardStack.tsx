"use client"

function CardStack({
  children,
  stackName,
  stackColor,
}: {
  children: React.ReactNode
  stackName: string
  stackColor: string
}) {
  return (
    <div className="group flex min-h-28 min-w-72 items-center gap-x-4 rounded-xl bg-white px-16 py-8 group-hover:border group-hover:border-gray-500 group-hover:shadow-lg">
      <span className={`text-xl group-hover:text-${stackColor}-700`}>{children}</span>
      <span>{stackName}</span>
    </div>
  )
}

CardStack.propTypes = {}

export default CardStack
