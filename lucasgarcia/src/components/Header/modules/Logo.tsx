import { BsBracesAsterisk } from "react-icons/bs"

function Logo(props: { isOpenedNavbar: boolean }) {
  const isOpenedNavbar = props.isOpenedNavbar

  return (
    <div className="group flex items-center text-[16px] font-semibold">
      <span
        className={`text-[24px] transition-transform duration-500 ${isOpenedNavbar && "rotate-[360deg]"} text-slate-600 group-hover:-rotate-[360deg] motion-reduce:transform-none`}
      >
        <BsBracesAsterisk />
      </span>
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${isOpenedNavbar && "-translate-x-[68px]"} group-hover:-translate-x-[68px] motion-reduce:transform-none`}
        >
          <span className="px-1">Code by </span>
          <h1 className="transition-transform duration-500 group-hover:text-cyan-700 motion-reduce:transform-none">
            Lucas Garcia
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Logo
