import React from 'react'

//component
import AddSvg from "../Assets/SVG/Add"
import Edit from "../Assets/SVG/Edit"

//classes
import classes from "./TodoList.css"

const TodoList = (props) => {

    const checkChangeHandler = (e, index) => {
        console.log(e.target.checked)
        props.updateTodoList(index, e.target.checked)
    }

    const editHandler = () => {
        props.editList()
    }

    return (
        props.add 
        ? 
        <div className={classes.AddContainer}>
            {AddSvg(70, props.addClick)}
        </div>  
        :(
            <div className={classes.TodoList} style={{backgroundColor: props.todoData.theme}}>
            
                <div className={classes.Top}>
                    <div className={classes.Title}>
                        {props.todoData.title}
                    </div> 
                    {Edit(25, editHandler)}
                </div>
                {/* all array list  */}
                <div className={classes.coverArray}>
                    
                    <div className={classes.array}>
                        {props.todoData.items.map((ele, index)=>{
                            return (<div key={index} className={classes.point}>
                                <input className={classes.check} type="checkbox" checked={ele[1] === -1} onChange={(e)=>checkChangeHandler(e, index)}/>
                                <p className={classes.text} style={{textDecoration: (ele[1] === -1) ? "line-through" : "initial"}}>{ele[0]}</p>
                            </div>)
                        })}

                    </div>
                </div>


            </div>
        )
    )
}

export default TodoList
