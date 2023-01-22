import "./App.css";
import { Habit } from "./components/Habits";

function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={12} />
    </>
  );
}

export default App;
