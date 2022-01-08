import React, { useState, useMemo } from "react";
import { Form } from "./Form";
import { ListItem } from "./ListItem";
import { ModalList } from "./Modal";

export const List = () => {
  const InitialList = [
    { Id: 1, status: "JavaScript", stack: "Junior" },
    { Id: 2, status: "Reactjs", stack: "Middle" },
    { Id: 3, status: "NodeJs", stack: "Middle+" },
  ];
  const Opt = [
    { value: "status", name: "programming" },
    { value: "stack", name: "stack" },
  ];

  const [list, setList] = useState(InitialList);
  const [status, setstatus] = useState("");
  const [stack, setstack] = useState("");
  const [select, setSelect] = useState("");
  const [option, setoption] = useState(Opt);
  const [search, setsearch] = useState("");
  const [Basket, setBasket] = useState(false);
  const AddPost = (e) => {
    e.preventDefault();
    if (status.length && stack.length) {
      setList([...list, { Id: list.length + 1, status, stack }]);
      setstack("");
      setstatus("");
      console.log("Add");
    }
  };

  const SordBy = (sort) => {
    setSelect(sort);
    console.log(sort);
    setList([...list].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  const DeletePost = (id) => {
    const Fill = list.filter((value) => value.Id !== id);
    setList(Fill);
  };
  const SearchPost = list.filter((val) => {
    return val.status.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div className="cart">
      <div className="input-card">
      <input
          value={status}
          onChange={(e)=>setstatus(e.target.value)}
          placeholder="programming language"
        ></input>
        <input
          value={stack}
          onChange={(e)=>setstack(e.target.value)}
          placeholder="Enter your favourite stack"
        ></input>
        
        
        <button
          onClick={AddPost}
          className="  mt-2 btn btn-primary"
        >
          Add Post
        </button>
      </div>
      <div className="in">
        <input
          className="form-control inpu"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Seach..."
        ></input>
        <select
          onChange={(e) => SordBy(e.target.value)}
          value={select}
          className="form-control select"
        >
          <option disabled value="">
            sorted by
          </option>
          {option.map((val) => (
            <option value={val.value}>{val.name}</option>
          ))}
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">programming</th>
            <th scope="col">languages</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {list.length ? (
          SearchPost.map((value) => (
            <ListItem DeletePost={DeletePost} {...value} />
          ))
        ) : (
          <h6 className="Not">Ma`lumot yo`q</h6>
        )}
      </table>
     
    </div>
  );
};
