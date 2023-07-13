import React, { useEffect, useState } from 'react'
import Select from '../components/Select'
import List from '../components/List'
const Home = () => {
  const [data, setData] = useState([]);
  const [result,setresult]=useState([]);
  useEffect(() => {
    fetch("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data)
      })
  }
    , [])

  return (
    <div className='inphone' style={{ maxWidth: "1440px", margin: "auto", minHeight: "100vh", position: 'relative' }}>
      <Select data={data}  result={result} setresult={setresult}/>
      <List data={result} />
    </div>
  )
}

export default Home