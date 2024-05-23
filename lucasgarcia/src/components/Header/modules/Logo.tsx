import { FaCode } from "react-icons/fa"

function Logo(props: { isOpenedLogo: boolean; isScrolling: boolean }) {
  const isOpenedLogo = props.isOpenedLogo
  const isScrolling = props.isScrolling

  return (
    <div className="group flex items-center text-[16px] font-semibold">
      <span
        className={`text-[24px] transition-transform duration-500 ${!isOpenedLogo && "rotate-[360deg]"} ${!isScrolling && isOpenedLogo && "group-hover:-rotate-[360deg]"} motion-reduce:transform-none`}
      >
        <FaCode />
      </span>
      <div className="relative overflow-hidden">
        <div
          className={`flex items-center transition-transform duration-500 ease-in-out ${!isOpenedLogo && "-translate-x-[68px]"} group-hover:-translate-x-[68px] motion-reduce:transform-none`}
        >
          <span className="px-1">Code by </span>
          <h1 className="transition-transform duration-500 motion-reduce:transform-none">
            Lucas Garcia
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Logo
