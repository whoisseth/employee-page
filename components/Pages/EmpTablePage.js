import React, { useState } from 'react'
import Layout from '../Layout'
import Table from '../Table'
import { SearchBox } from '../SearchBox'

export default function EmpTablePage({ data }) {
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
    <Layout>
      <SearchBox
        className="mb-8"
        search={(e) => setSearchField(e.target.value)}
      />
      <Table employee={filterProducts} />
    </Layout>
  )
}
