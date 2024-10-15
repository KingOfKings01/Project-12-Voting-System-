import { useContext } from "react";
import StudentsList from "../StudentsList/StudentsList";
import { dataContext } from "../../store/contexts";
import styles from "./monitorList.module.css"

export default function MonitorList() {
  const { monitors } = useContext(dataContext);

  return (
    <div>
      <div className={styles.card}>
        <h3>Monitors</h3>
        {monitors.map((monitor, index) => (
          <div key={index}>
            <div className={styles.heading}>
              <h4 className={styles.cursive}>{monitor.name}</h4>
              <p>{monitor.vote} Vote{monitor.vote > 1 && "s"}</p>
            </div>

            <StudentsList monitorId={monitor.id} studentsList={monitor.studentsList} />

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
