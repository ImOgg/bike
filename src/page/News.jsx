import React from 'react';
import Newsdata from "../news.json";
const News = () => {
   
  return (
    <div>
        {Newsdata[0].title }
    </div>
  )
}

export default News