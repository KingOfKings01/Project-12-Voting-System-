// import styles from "./monitorList.module.css"

import { useContext, useState } from "react";
import StudentsList from "../StudentsList/StudentsList";
import { dataContext } from "../../store/contexts";
export default function MonitorList() {

  const { monitors } = useContext(dataContext)

  return (
    <div>
      <h3>Monitors:</h3>

      {monitors.map((monitor, index) => (
        <div key={index}>
          <h4>{monitor.name}</h4>
          <p>Votes: {monitor.vote}</p>
          <StudentsList studentsList={monitor.studentsList} monitorId={monitor.id}/>
        </div>
      ))}

    </div>
  )
}
