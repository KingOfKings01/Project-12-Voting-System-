import { useState } from "react";
import { dataContext } from "./contexts";

const DataProvider = ({ children }) => {
  const [monitors, setMonitors] = useState([
    { id: 1, name: "Suresh", vote: 2, studentsList: ["Tom", "Don"] },
    { id: 2, name: "Deepank", vote: 1, studentsList: [ "Jon" ] },
    { id: 3, name: "Abhik", vote: 1, studentsList: ["Ron"] },
  ]);

  const increaseVote = (id) => {
    setMonitors((prevMonitors) =>
      prevMonitors.map((monitor) =>
        monitor.id === id
          ? { ...monitor, vote: monitor.vote + 1 }
          : monitor
      )
    );
  };

  const decreaseVote = (id) => {
    setMonitors((prevMonitors) =>
      prevMonitors.map((monitor) =>
        monitor.id === id
          ? { ...monitor, vote: monitor.vote - 1 }
          : monitor
      )
    );
  };

  const addStudentsVote = (monitorId, studentName) => {
    setMonitors((prevMonitors) =>
      prevMonitors.map((monitor) =>
        monitor.id === monitorId
          ? {
              ...monitor,
              vote: monitor.vote + 1, // Increase vote by 1
              studentsList: [...monitor.studentsList, { name: studentName }],
            }
          : monitor
      )
    );

    // console.log("Adding students...", monitorId, studentName);
  };

  const deleteStudentsVote = (monitorId, studentName) => {
    setMonitors((prevMonitors) =>
      prevMonitors.map((monitor) =>
        monitor.id === monitorId
          ? {
              ...monitor,
              vote: +(monitor.vote - 1), // Decrease vote by 1 and make sure it stay positive
              studentsList: monitor.studentsList.filter(
                (student) => student.name !== studentName
              ),
            }
          : monitor
      )
    );
  };



  return (
    <dataContext.Provider value={{ monitors, increaseVote, decreaseVote, addStudentsVote, deleteStudentsVote }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
