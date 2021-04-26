import React, { useState, useEffect } from "react";

//component
import AddSvg from "./Assets/SVG/Add";
import TodoModal from "./TodoModal/TodoModal";
import TodoList from "./TodoList/TodoList";

//classes
import classes from "./Todo.css";

const Todo = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [allTodoList, setAllTodoList] = useState([
    {
      title: "Todo List",
      items: [
        ["Enable Changes", 1],
        ["Multiple Color Theme", 1],
        ["Beautiful UI", 1],
        ["Responsive", 1],
        ["Always Control Inputs", 1],
        
      ],
      theme: "#ffffff"
    },
    
  ]);
  const [enableEdit, setEnableEdit] = useState(-1) //take the value of index which you want to edit

  const AddClickHandler = () => {
    console.log("Clicked");
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setEnableEdit(-1)
    setShowModal(false);
  };

  const addTodoHandler = (data) => {
    let tempTodo = data;
    console.log(tempTodo);
    setAllTodoList((prev) => {
      let tempTodoArray = [...prev];
      console.log(tempTodoArray);
      tempTodoArray.push(tempTodo);
      return tempTodoArray;
    });
  };

  const checkUpdateHandler = (ItemIndex, ListIndex, checked) => {
    setAllTodoList((prev) => {
      let tempList = [...prev];
      tempList[ListIndex].items[ItemIndex][1] = checked ? -1 : 1;
      return tempList;
    });
  };

  const editHandler = (index) => {
    setEnableEdit(index)
  }

  const updateEditHandler = (todoData) => {
      console.log(todoData)
    setAllTodoList((prev) => {
        let tempList = [...prev];
        tempList[enableEdit] = todoData;
        console.log(tempList)
        return tempList;
      });
    setEnableEdit(-1)
  }

  return (
    <div className={classes.Todo}>
      <div className={classes.Header}>TODO</div>
      <div className={classes.Components}>
        {/* Initial add button  or show all todo list*/}

        {allTodoList.length >= 2 ? (
          <div className={classes.TodoContainer}>
            
            {allTodoList.map((ele, index) => {
              return (
                <TodoList
                  key={index}
                  todoData={ele}
                  updateTodoList={(ItemIndex, checked) =>
                    checkUpdateHandler(ItemIndex, index, checked)
                  }
                  editList={()=>editHandler(index)}
                />
              );
            })}
            <TodoList add addClick={AddClickHandler} />

          </div>
        ) : (
          <div className={classes.NullAdd}>
            {AddSvg(100, AddClickHandler)}
            <p>Press add button to start making your todo list</p>
          </div>
        )}

        {/* Add Modal handler */}
        {(enableEdit >= 0) && (
            <div className={classes.AddModal}>
            
            <div
              onClick={() => setShowModal(false)}
              className={classes.DropBox}
            ></div>

            <TodoModal
              addTodo={addTodoHandler}
              closeModal={closeModalHandler}
              todoData={allTodoList[enableEdit]}
              updateEdit={updateEditHandler}
              edit
            />

          </div>
        )}
        {showModal && (
          <div className={classes.AddModal}>
            
            <div
              onClick={() => setShowModal(false)}
              className={classes.DropBox}
            ></div>

            <TodoModal
              addTodo={addTodoHandler}
              closeModal={closeModalHandler}
              add
            />

          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
