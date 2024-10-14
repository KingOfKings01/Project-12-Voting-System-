
export default function StudentsList({ studentsList }) {
    
    return (
        <div>
            <ul>
                {studentsList.map((student, index) => (
                    <li key={index}>
                        <span>
                            {student.name}
                        </span>
                        &nbsp;
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
