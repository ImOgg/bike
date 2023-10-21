import React from 'react'
import Post from './item/Post'

const Home = (props) => {
  const {dataArray}=props;
  
  return (
    <div>
      <Post dataArray={dataArray}/>
    </div>
  )
}

export default Home