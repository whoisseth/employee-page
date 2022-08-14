import React, { useState } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { SearchBox } from '../components/SearchBox'

export default function Home({ data }) {
  console.log(data)
  const [searchField, setSearchField] = useState('')
  const filterProducts = data.filter((data) =>
    searchField
      ? data.first_name
          .toLowerCase()
          .includes(searchField.toLocaleLowerCase()) ||
        data.last_name
          .toLowerCase()
          .includes(searchField.toLocaleLowerCase()) ||
        data.address.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
        data.designation
          .toLowerCase()
          .includes(searchField.toLocaleLowerCase()) ||
        data.id.toLowerCase().includes(searchField.toLocaleLowerCase())
      : data,
  )
  //
  return (
    <div className="   justify-center px-8 py-20   ">
      <div className="mb-8 flex">
        <h1 className="  text-3xl">Employees</h1>{' '}
        <SearchBox search={(e) => setSearchField(e.target.value)} />
      </div>
      <Table employee={filterProducts} />
    </div>
  )
}

function Table({ employee }) {
  console.log(employee)
  const darkText = 'text-[#00072B'
  const lightText = 'text-[#454D59]'

  const title = [
    'Id',
    'First Name',
    'Last Name',
    'Date of Birth',
    'Address',
    'Date of Joining',
    'Salary',
    'Designation',
  ]

  return (
    <section>
      <div className=" place-content-around      justify-items-start grid grid-cols-8 bg-[#DFE2E9]   items-center h-[38px] rounded-tr  px-10">
        {title.map((data, index) => (
          <th
            key={index}
            className={classnames(
              'font-semibold whitespace-nowrap',
              data.className,
            )}
          >
            {data}
          </th>
        ))}
      </div>
      <div className=" border-[1px] border-[#EAEAEA] w-full">
        {employee.map((data, index) => (
          <section
            key={index}
            className={classnames(
              '  grid grid-cols-8      place-content-center justify-between   px-10    w-full    h-12 border-[1px] border-[#EAEAEA]   ',
              darkText,
              {
                'bg-[#F8F8F8]': index % 2 !== 0,
                'bg-white': !(index % 2 !== 0),
              },
            )}
          >
            <Link href={`/${data.first_name}`}>
              <a className="text-blue-400 hover:underline ">{data.id}</a>
            </Link>
            <div className={lightText}>{data.first_name}</div>
            <div className={lightText}>{data.last_name}</div>
            <div className={classnames(lightText, ' whitespace-nowrap')}>
              {data.date_of_birth}
            </div>
            <div>{data.address}</div>
            <div>{data.date_of_joining}</div>
            <div>{data.salary}</div>
            <div className={'whitespace-nowrap'}>{data.designation}</div>
          </section>
        ))}
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  const API =
    'https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees'
  const res = await fetch(API)
  const data = await res.json()

  return { props: { data } }
}
