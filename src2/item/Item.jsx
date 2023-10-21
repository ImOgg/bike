import React from "react";
import { useParams,useNavigate } from "react-router-dom";

const Item = (props) => {
  const { dataArray } = props;
  console.log(dataArray);
  const { postId } = useParams();
  const item = dataArray.find((item) => item.id === parseInt(postId));
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>單篇文章頁面</h1>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      <button onClick={goBack}>返回上一頁</button>
    </div>
  );
};

export default Item;
