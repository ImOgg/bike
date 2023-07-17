import React from "react";
import Item from "./Item";
const List = ({ data }) => {
  return (
    <div className="list">
      <ul className="title">
        <li>縣市</li>
        <li>區域</li>
        <li>站點名稱</li>
        <li>可借車輛</li>
        <li>可還空位</li>
      </ul>

      {/* {data.map(((item,index)=>{
      const {sarea,sna,tot,sbi}=item;
      return <Item key={index} sarea={sarea} sna={sna} tot={tot} sbi={sbi}/>
     }))} */}
      {data.length === 0 ? (
        <div style={{textAlign:'center',margin:'10px 0px',fontSize:'32px'}}>目前沒有資料，請輸入您想查詢的項目</div>
      ) : (
        data.map((item, index) => (
          <Item
            key={index}
            sarea={item.sarea}
            sna={item.sna}
            tot={item.tot}
            sbi={item.sbi}
          />
        ))
      )}
    </div>
  );
};

export default List;
