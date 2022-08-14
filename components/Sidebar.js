import { AiOutlineMenuUnfold } from 'react-icons/ai'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { BsTable } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
//
export const menuStore = create(
  persist((set) => ({
    menu: false,
    toggleMenu: () => set((state) => ({ menu: !state.menu })),
  })),
)
//

export default function Sidebar() {
  const { menu } = menuStore()
  return (
    <div
      className={classnames(
        'pt-8 bg-white  shadow-[0px_12px_24px_rgba(0,0,0,0.05)]  h-full      overflow-y-scroll scrollbar-hide pl-4 pr-2  transition-all ',
        {
          ' min-w-[270px] ': menu,
          'w-[70px]': !menu,
        },
      )}
    >
      <Menu />
      <div className="flex flex-col gap-4">
        <ElementLayout name="Employees Table" icon={<BsTable />} />
        <div>
          <ElementLayout
            name="Employee Hierarchical"
            icon={<FaUsers />}
            link="/emp-hierachi"
          />
        </div>
      </div>
    </div>
  )
}

function Menu() {
  const { menu, toggleMenu } = menuStore()

  return (
    <div className="flex items-center text-3xl gap-2  mb-16">
      <AiOutlineMenuUnfold onClick={toggleMenu} className=" cursor-pointer" />
      {menu && <h2 className="font-semibold">Menu</h2>}
    </div>
  )
}

function ElementLayout({ icon, name, link = '/' }) {
  const { menu } = menuStore()
  const router = useRouter()
  const active = link === router.pathname
  return (
    <Link href={link}>
      <a
        className={classnames(
          'flex items-center text-xl gap-2 transition-all whitespace-nowrap  ',
          {
            'text-blue-500': active,
          },
        )}
      >
        {icon}
        {menu && <span> {name}</span>}
      </a>
    </Link>
  )
}
