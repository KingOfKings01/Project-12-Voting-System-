import { useContext } from "react";
import StudentsList from "../StudentsList/StudentsList";
import { dataContext } from "../../store/contexts";

export default function MonitorList() {
  const { monitors, addStudentsVote } = useContext(dataContext);

  return (
    <div>
      <h3>Monitors:</h3>
      {monitors.map((monitor, index) => (
        <div key={index}>
          <h4>{monitor.name}</h4>
          <p>Votes: {monitor.vote}</p>
          <StudentsList monitorId={monitor.id} studentsList={monitor.studentsList} />
        </div>
      ))}
    </div>
  );
}
