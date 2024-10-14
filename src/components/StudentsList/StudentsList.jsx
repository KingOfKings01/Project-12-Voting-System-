import { useContext } from "react";
import { dataContext } from "../../store/contexts";

export default function StudentsList({ monitorId, studentsList }) {
  const { students, deleteStudentsVote } = useContext(dataContext);

  return (
    <div>
      <ul>
        {studentsList.map(studentId => {
          const student = students.find(s => s.id === studentId);
          return (
            <li key={studentId}>
              <span>{student ? student.name : "Unknown"}</span>
              &nbsp;
              <button onClick={() => deleteStudentsVote(monitorId, studentId)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
