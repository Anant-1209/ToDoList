import React, { useState } from 'react'
import styles from "./InputText.module.css"
function InputText({HandleItems}) {


const [todoname,settodoname] = useState();
const [tododate,settododate] = useState();

const handleNameChange = (event) =>{
  console.log(event.target.value)
  settodoname(event.target.value)

}
const handleDateChange = (event) =>{
  console.log(event.target.value)
  settododate(event.target.value)
}

const handleAddButtonClicked = () =>
{
  
  HandleItems(todoname,tododate)
  settodoname("")
  settododate("")
}

  return (
    <div className={styles.InputItems}>  
 <input type="text" placeholder='enter items to Add' className={styles.inputData}
value={todoname}
 onChange={handleNameChange}
 
 />
      <input type='date' className={styles.inputData}
      value={tododate}
      onChange={handleDateChange}
      />
      <button type="button" className="btn btn-success" 
  onClick={() => {
    handleAddButtonClicked()
   
  }
}
      >Submit</button>
    </div>
   
  )
}

export default InputText