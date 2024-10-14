import { useContext } from "react";
import { dataContext } from "../../store/contexts";
import PropTypes from "prop-types";
import styles from "./studentsList.module.css"

export default function StudentsList({ monitorId, studentsList }) {
    
  const { students, deleteStudentsVote } = useContext(dataContext);

  return (
    <div>
      <ul className={styles.list}>
        {studentsList.map(studentId => {
          const student = students.find(s => s.id === studentId);
          return (
            <li className={styles.listContent} key={studentId}>
              <span className={styles.sameBold}>{student.name}</span>
              
              <button className={styles.delete} onClick={() => deleteStudentsVote(monitorId, studentId)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

StudentsList.propTypes = {
    monitorId: PropTypes.number.isRequired,
    studentsList: PropTypes.arrayOf(PropTypes.number).isRequired,
}