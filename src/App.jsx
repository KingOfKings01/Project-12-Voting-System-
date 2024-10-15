import Header from "./components/Header/Header"
import MonitorList from "./components/MonitorList/MonitorList"
import DataProvider from "./store/DataProvider"

function App() {

  return (
    <DataProvider>
      <div className="container">
        <Header />
        <MonitorList />
      </div>
    </DataProvider>

  )
}

export default App
