import React , {useState, useRef, useEffect} from 'react'

//classes
import AddSvg from "../Assets/SVG/Add"
import classes from "./TodoModal.css"

const theme = [
    "#ffffff",
    "#fdbaff",
    "#d0baff",
    "#bac4ff",
    "#baeaff",
    "#baffee",
    "#baffce",
    "#bfffba",
    "#dcffba",
    "#f9ffba",
    "#ffd6ba",
    "#ffbaba",

    "#ff8c8c",
    "#ffce94",
    "#fffa94",
    "#ceff94",
    "#9cff94",
    "#94ffc2",
    "#94fff8",
    "#94c5ff",
    "#9994ff",
    "#d994ff",
    "#ff94e5",
    "#ff94a4",
]

const TodoModal = (props) => {

    const [InputTitle, setInputTitle] = useState("")
    const [InputTodo, setInputTodo] = useState("")
    const [todoArray, setTodoArray] = useState([])
    const [selectColor, setSelectColor] = useState("#ffffff")
    const [showColor, setShowColor] = useState(false)
    const [warning, setWarning] = useState(null)
    const ArrayRef = useRef(null)

    useEffect(() => {
        //when array change it will scroll to bottom
        ArrayRef.current.scrollTo(0, ArrayRef.current.scrollHeight)
        // console.log(ArrayRef)
    }, [todoArray])

    useEffect(()=> {
        if(props.edit){
            console.log(props.todoData)
            setInputTitle(props.todoData.title)
            setTodoArray(props.todoData.items)
        }

    }, [props.edit])

    const appendHandler = () => {
        if(!InputTodo){
            setWarning("Can not add empty string")
            return 0;
        }else{
            setWarning(null)
            setTodoArray(prev=>{
                let tempArray = [...prev]
                tempArray.push([InputTodo, 1])
                return tempArray
            })
        }
        setInputTodo("")
    }


    const deleteHandler = (index) => {
        setTodoArray(prev=>{
            let tempArray = [...prev]
            tempArray.splice(index, 1)
            return tempArray
        })
    }

    const addHandler = () => {
        //send data to parent compoennt
        if(!InputTitle){
            setWarning("Submit with a title.")
            return 0;
        }
        else if(!todoArray.length){
            setWarning("Todo list without anything to do.")
            return 0;
        }else{
            props.addTodo({
                title: InputTitle,
                items: todoArray,
                theme: selectColor,
            })
        }

        //close modal
        setInputTitle("")
        setInputTodo("")
        setTodoArray([])
        
        props.closeModal()
    }

    const keyPressHandler = (e) => {
        console.log(e.key)
        if(e.key === "Enter"){
            appendHandler();
        }
    }

    const editHandler = () => {
        if(!InputTitle){
            setWarning("Submit with a title.")
            return 0;
        }
        else if(!todoArray.length){
            setWarning("Todo list without anything to do.")
            return 0;
        }else{
            props.updateEdit({
                title: InputTitle,
                items: todoArray,
                theme: selectColor,
            })
        }

        setInputTitle("")
        setInputTodo("")
        setTodoArray([])
        
        props.closeModal()
    }

    const choseColorHandler = (color) =>{
        setSelectColor(color)
        setShowColor(false)
    }

    return (
        <div className={classes.TodoModal} style={{backgroundColor: selectColor}}>
            {/* close button  */}
            <div className={classes.cancel}>
                {AddSvg(50, props.closeModal, false)}
            </div>

            {/* Input part  */}
            <div className={classes.Top}>
                <input className={classes.InputTitle} onChange={(e)=>setInputTitle(e.target.value)} name="title" value={InputTitle} autoComplete="off" placeholder="Title"></input>
                <div onClick={()=>setShowColor(!showColor)} className={classes.colorPicker}><div className={classes.color} style={{backgroundColor: selectColor}}></div></div>
                {showColor &&
                    <div className={classes.ColorBox}>
                        {theme.map(color=>{
                            return <div key={color} onClick={()=>choseColorHandler(color)} className={classes.colorContainer} style={{backgroundColor: color}}></div>
                        })}
                    </div>
                }
            </div>
            <p style={{opacity: warning ? "1" : "0"}} className={classes.warning}>{warning || "temp"}</p>

            {/* all array list  */}
            <div className={classes.coverArray}>
                
                <div ref={ArrayRef} className={classes.array}>
                    {todoArray.map((ele, index)=>{
                        return (<div key={index} className={classes.point}>
                            <p className={classes.text}>{ele[0]}</p>
                            <p onClick={()=>deleteHandler(index)} className={classes.option}>Delete</p>
                        </div>)
                    })}
                    {/* new task add  */}
                        <div className={classes.addContainer}>
                            <div className={classes.addArray}>
                                <input className={classes.InputTodo} onKeyPress={keyPressHandler} onChange={(e)=>setInputTodo(e.target.value)} name="title" value={InputTodo} autoComplete="off" placeholder="Task"></input>
                                <p onClick={appendHandler} className={classes.option}>Add</p>
                            </div>
                        </div>
                </div>
            </div>

            {/* save button  */}
            <div className={classes.add}>
                {AddSvg(80, props.add ? addHandler : (props.edit ? editHandler : null), true)}
            </div>
        </div>
    )
}

export default TodoModal
