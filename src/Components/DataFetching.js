import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [Posts, setPosts] = useState([]);
  // const [Id, setId] = useState(1)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="App-title"> This is news App </h1>
      <div className="container">
        <div className="row">
        
          <div>
            {Posts?.map((post) => (
              <div className="col-md-3">
              <ul>
                <li>
                  <h2>{post.title.slice(0,30)}... </h2>
                </li>
                <li>{post.body.slice(0,80)}...</li>
              </ul>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default DataFetching;
