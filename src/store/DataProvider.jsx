import { useState } from "react";
import { dataContext } from "./contexts";

const DataProvider = ({ children }) => {
  const [monitors, setMonitors] = useState([
    { id: 1, name: "Suresh", vote: 2, studentsList: [1, 2] },
    { id: 2, name: "Deepank", vote: 1, studentsList: [3] },
    { id: 3, name: "Abhik", vote: 1, studentsList: [4] },
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: "Tom", monitorId: 1 },
    { id: 2, name: "Don", monitorId: 1 },
    { id: 3, name: "Jon", monitorId: 2 },
    { id: 4, name: "Ron", monitorId: 3 },
  ]);

  const [totalVotes, setTotalVotes] = useState(4);

  const addStudentsVote = (monitorId, studentName) => {
    const newStudent = {
      id: Date.now(),
      name: studentName,
      monitorId: monitorId
    };

    setStudents(prevStudents => [...prevStudents, newStudent]);

    setMonitors(prevMonitors =>
      prevMonitors.map(monitor =>
        monitor.id === monitorId
          ? {
              ...monitor,
              vote: monitor.vote + 1,
              studentsList: [...monitor.studentsList, newStudent.id],
            }
          : monitor
      )
    );

    setTotalVotes(prev => prev + 1);
  };

  const deleteStudentsVote = (monitorId, studentId) => {
    setStudents(prevStudents =>
      prevStudents.filter(student => student.id !== studentId)
    );

    setMonitors(prevMonitors =>
      prevMonitors.map(monitor =>
        monitor.id === monitorId
          ? {
              ...monitor,
              vote: monitor.vote > 0 ? monitor.vote - 1 : 0,
              studentsList: monitor.studentsList.filter(id => id !== studentId),
            }
          : monitor
      )
    );

    setTotalVotes(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <dataContext.Provider
      value={{ monitors, students, totalVotes, addStudentsVote, deleteStudentsVote }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
