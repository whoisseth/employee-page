import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { TbArrowBackUp } from 'react-icons/tb'
import Layout from '../components/Layout'

export default function Employee({ data }) {
  const emp = data[0]

  return (
    // <div className="flex items-center justify-center w-screen h-screen relative">
    //   <BackBtn />
    <Layout>
      <div className="   border-[#EAEAEA] w-fit ">
        <TableRow
          label="Field"
          value="Value"
          className=" text-white font-semibold text-2xl"
          color="bg-gray-600"
        />
        <TableRow label="Fist Name" value={emp.first_name} />
        <TableRow label="Last Name" value={emp.last_name} color="bg-white" />
        <TableRow label="Date Of Birth" value={emp.date_of_birth} />
        <TableRow label="Address" value={emp.address} color="bg-white" />
        <TableRow label="Date of Joining" value={emp.date_of_joining} />
        <TableRow label="Salary" value={emp.salary} color="bg-white" />
        <TableRow label="Designation" value={emp.designation} />
      </div>
    </Layout>
    // </div>
  )
}

export async function getServerSideProps({ params }) {
  const API =
    'https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees'
  const res = await fetch(API)
  const apiOutput = await res.json()
  const data = apiOutput.filter((data) => data.first_name === params.employee)

  return {
    props: { data },
  }
}

function TableRow({ label, value, color = 'bg-[#F8F8F8]', className }) {
  const rowStyle =
    'grid grid-cols-2 place-content-center justify-between   px-10  w-full h-12 border-[1px] border-[#EAEAEA]  gap-20'
  return (
    <div className={classnames(rowStyle, color, className)}>
      <label>{label} </label>
      <value>{value} </value>
    </div>
  )
}

function BackBtn() {
  return (
    <Link href="/">
      <a className="absolute top-16 left-20 px-6 py-2 border-2 rounded ">
        <TbArrowBackUp className="text-2xl" />
      </a>
    </Link>
  )
}
