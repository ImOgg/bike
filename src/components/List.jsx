import React from 'react'
import Item from './Item'
const List = ({data}) => {
  return (
    <div className='list'>
        <ul className='title'>
            <li>縣市</li>
            <li>區域</li>
            <li>站點名稱</li>
            <li>可借車輛</li>
            <li>可還空位</li>
        </ul>
        
     {data.map(((item,index)=>{
      const {sarea,sna,tot,sbi}=item;
      return <Item key={index} sarea={sarea} sna={sna} tot={tot} sbi={sbi}/>
     }))}
    </div>
  )
}

export default List