import type { NextPage } from 'next'
import TableContrustor from '../components/TableConstructor'
import TableItem from '../components/TableItem'
import Data from '../data/users.json'
import { useState,useEffect } from 'react'

type data = typeof Data;

const Home: NextPage = () => {
  const [data, setData] = useState<data>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/getTable')
      .then((res) => res.json())
      .then((data:data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <TableContrustor headers={["ID","User Name","Phone","Email","Enabled"]}>
        {isLoading ? <p>Loading...</p> : <></>}
        {!data ? <p>No profile data</p> : data.map((value,key) => <TableItem key={key} id={value.id} userName={value.userName} displayName={value.displayName} phone={value.phone} email={value.email} userRole={value.userRole} enabled={value.enabled} ></TableItem>)}
      </TableContrustor>
    </div>
  )
}

export default Home
