import EmpHierachiPage from './../components/Pages/EmpHierachiPage'
export default function EmpHierarchi({ data }) {
  return (
    <>
      <EmpHierachiPage data={data} />
    </>
  )
}

export async function getServerSideProps() {
  const API =
    'https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees'
  const res = await fetch(API)
  const data = await res.json()

  return { props: { data } }
}
