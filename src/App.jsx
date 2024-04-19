import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoItems from './components/ToDoItems';
import Header from './components/Header';
import InputText from './components/InputText';
import './App.css'
import MessageDisplay from "./components/MessageDisplay";

function App() {
  
  const initialtodoDataItems=[
    {
      name:"good work",
      dueDate:"12-12-12",
    },
    {
      name:"Keep doing Praful",
      dueDate:"12-12-12",
    },
    {
      name:"going onn",
      dueDate:"12-12-12",
    }
  ]


const [todoDataItems,settodoDataItems] = useState(initialtodoDataItems)

const handleAddButon = (todoname, duedate) =>
{
// console.log(`new item added: ${todoname} dueDate:${duedate}`)

const displayTodoItems = [...todoDataItems,{name:todoname,
dueDate:duedate}
]
settodoDataItems(displayTodoItems)

}


const handleDeleteButton = (deletedTodoItem) =>{
  const displayTodoItems = todoDataItems.filter(item => item.name !== deletedTodoItem )
  settodoDataItems(displayTodoItems);

  // console.log(`item deleted : ${deletedTodoItem}`)
}

  return (
    <>
    <Header></Header>
    <InputText HandleItems={handleAddButon}></InputText>
    {todoDataItems.length ===0 && <MessageDisplay/>}
    <ToDoItems DataItems={todoDataItems} deleteItems={handleDeleteButton} ></ToDoItems>
    



    </>
  )
}

export default App
