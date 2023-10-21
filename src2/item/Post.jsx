import React from "react";
import { Link } from "react-router-dom";
const Post = (props) => {
 const { dataArray } = props;
 console.log(dataArray);
  return (
    <div>
      {dataArray.map((item) => (
        <Link key={item.id}  to={`/post/${item.id}`}>
          <h2>{item.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Post;
