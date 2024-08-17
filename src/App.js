import { useEffect, useState } from "react";
import DailyDos from "./components/DailyDos";
import { addDailyDos, getAllDailyDos, updateDailyDos, deleteDailyDos } from "./utils/HandleApi";



function App() {

  const [dailyDos, setDailyDos] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setTodoId] = useState("")

  useEffect(() => {
    getAllDailyDos(setDailyDos)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Daily Do's App</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder="Add your Daily Do's..." 
          value={text}
          onChange = {(e) => setText(e.target.value)}
          />
          <div className="add" 
          onClick={isUpdating ? 
          () => updateDailyDos(toDoId, text, setDailyDos, setText, setIsUpdating ) 
          : () => addDailyDos(text, setText, setDailyDos)}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {dailyDos.map((item) => <DailyDos 
          key={item._id} 
          text={item.text} 
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo = {()=> deleteDailyDos(item._id, setDailyDos)}/>)}

        </div>
      </div>
    </div>
  );
}

export default App;
