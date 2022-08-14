import classnames from 'classnames'
import Link from 'next/link'

export default function Table({ employee }) {
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
            <div className="whitespace-nowrap ">{data.designation}</div>
          </section>
        ))}
      </div>
    </section>
  )
}
