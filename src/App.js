
import Header from './components/Header';

// import AddList from "./components/AddList";
import ListMain from './components/ListMain';
import React, { useState, useEffect } from 'react';
function App() {
  let initList;
  if (localStorage.getItem("lists") === null) {
    initList = [];
  }
  else {
    initList = JSON.parse(localStorage.getItem("lists"));
  }

  const onDelete = (list) => {
    console.log("I am ondelete of List", list);

    setLists(lists.filter((e) => {
      return e !== list;
    }));
    console.log("deleted", lists)
    localStorage.setItem("Lists", JSON.stringify(lists));
  }


  const addList = (title, desc) => {
    console.log("i am adding this list", title, desc)
    let sno;
    if (lists.length === 0) {
      sno = 0;
    }
    else {
      sno = lists[lists.length - 1].sno + 1
    }
    const myList = {
      sno: sno,
      title: title,
      desc: desc,

    }

    setLists([...lists, myList]);
    console.log(myList)



    if (localStorage.getItem("lists")) {
      localStorage.setItem("lists", JSON.stringify(lists));
    }
  }
  const [lists, setLists] = useState(initList);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists])

  
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      {/* <AddList addList={addList} /> */}
      <ListMain lists={lists} addList={addList} onDelete={onDelete} />
    </>
  );
}

export default App;
