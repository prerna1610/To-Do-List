
import List from "../components/List";
import React, { useState, } from 'react';

const ListMain = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank.")
    }
    else {
      props.addList(title, desc);
      setTitle("");
      setDesc("");
    }
  }
  let myStyle = {

  }
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-4">
          <h3 className="text-primary">
            Add a Todo
          </h3>
          <div className="container text-light bg-dark rounded">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label my-3">Todo Title</label>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} className="form-control" id="title" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Discription</label>
                <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc"></textarea>
              </div>
              <button type="submit" className="btn btn-sm btn-primary mb-2">Submit</button>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="container" style={myStyle}>
            <h3 className="text-primary">Todos List</h3>
            <hr />
            {props.lists.length === 0 ? "No todos to display" :
              props.lists.map((list) => {
                return (<List key={list.sno} list={list} onDelete={props.onDelete} />);
              })}
          </div>
        </div>
      </div>
    </div>

  )
}

export default ListMain
