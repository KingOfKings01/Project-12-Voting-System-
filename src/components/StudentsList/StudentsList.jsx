import { useContext } from "react";
import { dataContext } from "../../store/contexts";
import PropTypes from "prop-types";
import styles from "./studentsList.module.css"

export default function StudentsList({ monitorId }) {
  const { students, deleteStudentsVote } = useContext(dataContext);

  const handleDelete = (studentId) => deleteStudentsVote(monitorId, studentId)

  return (
    <>
      <ul className={styles.list}>
        {students.map(student => {
          if (student.monitorId !== monitorId) {
            return
          }
          return (
            <li className={styles.listContent} key={student.id}>
              <span className={styles.sameBold}>{student.name}</span>
              <button className={styles.delete} onClick={() => handleDelete(student.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

StudentsList.propTypes = {
  monitorId: PropTypes.number.isRequired
}