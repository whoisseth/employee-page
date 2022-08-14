import Layout from '../Layout'
import { FiChevronDown } from 'react-icons/fi'
import classnames from 'classnames'
import useLocalStorage from 'use-local-storage'
import { useState } from 'react'
import Link from 'next/link'
export default function EmpHierachiPage({ data }) {
  console.log(data)
  const [isBossOpen, setBoss] = useLocalStorage('dropDownState', false)
  // const [isBossOpen, setBoss] = useState(false)
  function toggleBoss() {
    setBoss(!isBossOpen)
  }

  const managers = data
    .map((data) => data.manager_id)
    .filter((item, i, ar) => ar.indexOf(item) === i)
  console.log('managers', managers)

  return (
    <Layout>
      <div
        className="mb-4 text-2xl flex items-center gap-4 cursor-pointer  w-fit"
        onClick={toggleBoss}
      >
        <span className="font-semibold">Manager (Boss)</span>
        <FiChevronDown
          className={classnames(' transition-all text-x;', {
            'rotate-180 ': !isBossOpen,
          })}
        />
      </div>
      {isBossOpen && (
        //
        <div className="flex h-fit ml-2 ">
          <div className="w-[2px] bg-black" />
          <div className="ml-8 flex flex-col gap-4 text-lg">
            {managers.map((manager) => (
              <ManagerAndEmployees data={data} manager={manager} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  )
}

function ManagerAndEmployees({ manager, data }) {
  const [isManagerOpen, setManager] = useState(false)
  function toggleManager() {
    setManager(!isManagerOpen)
  }
  return (
    <div className=" w-fit">
      {manager.length > 0 && (
        <div
          className=" flex items-center gap-4 cursor-pointer"
          onClick={toggleManager}
        >
          <div className="flex gap-2 font-medium">
            <span>Manager -</span>
            <span>{manager}</span>
          </div>
          <FiChevronDown
            className={classnames('text-lg transition-all ', {
              'rotate-180 ': !isManagerOpen,
            })}
          />
        </div>
      )}
      {isManagerOpen && (
        <div className="flex h-fit ml-2 mt-2 ">
          <div className="w-[2px] bg-black" />

          <div className="ml-8 flex flex-col gap-2 text-lg">
            {data
              .filter((data) => data.manager_id === manager)
              .map((data) => (
                <Link href={`/${data.first_name}`}>
                  <a className="text-blue-500 hover:underline">
                    {data.first_name}
                  </a>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
