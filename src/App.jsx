import { useState } from "react";
import Header from "./components/Header/Header"
import MonitorList from "./components/MonitorList/MonitorList"

function App() {
  const [monitors, setMonitors] = useState([
    { id: 1, name: "Suresh", vote: 0, studentsList: [{ name: "Tom" }] },
    { id: 2, name: "Deepank", vote: 0, studentsList: [{ name: "Jon" }] },
    { id: 3, name: "Abhik", vote: 0, studentsList: [{ name: "Ron" }] },
  ]);
  return (
    <>
      <Header monitors={monitors}/>
      <MonitorList monitors={monitors}/>
    </>
  )
}

export default App
