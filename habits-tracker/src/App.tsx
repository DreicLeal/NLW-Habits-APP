import "./styles/global.css";
import { Habit } from "./components/Habits";

export const App = () => {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={12} />
    </>
  );
};
