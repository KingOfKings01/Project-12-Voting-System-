// import styles from "./monitorList.module.css"

import { useState } from "react";
import StudentsList from "../StudentsList/StudentsList";
export default function MonitorList({monitors}) {


  return (
    <div>
      <h3>Monitors:</h3>

      {monitors.map((monitor, index) => (
        <div key={index}>
          <h4>{monitor.name}</h4>
          <p>Votes: {monitor.vote}</p>
          <StudentsList studentsList={monitors[index].studentsList}/>
        </div>
      ))}

    </div>
  )
}
