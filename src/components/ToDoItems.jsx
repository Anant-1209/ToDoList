import React from 'react'
import styles from "./ToDoItems.module.css"
// import App from "../App"
// import ToDoItems from "../App"

// import React from 'react';
// import styles from "./ToDoItems.module.css";

function ToDoItems({ DataItems , deleteItems}) {
  return (
    <div className={styles.container}>
      {DataItems.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.dueDate}>{item.dueDate}</div>
          <button type="button" className="btn btn-danger"
         onClick={ () => deleteItems(item.name) }

          
          
          >Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ToDoItems;
