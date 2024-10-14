import { useContext } from "react";
import { dataContext } from "../../store/contexts";

export default function StudentsList({ studentsList, monitorId }) {
    const { deleteStudentsVote } = useContext(dataContext)
    // console.log(getStudentsWithMentorId());

    return (
        <div>
            <ul>
                {studentsList.map((student, index) => (
                    <li key={index}>
                        <span>
                            {student}
                        </span>
                        &nbsp;
                        <button onClick={()=> deleteStudentsVote(monitorId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
