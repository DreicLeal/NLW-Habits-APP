interface HabitProps {
  completed: number;
}

export const Habit = ({completed}: HabitProps) => {
  return <div className="bg-zinc-900 text-white w-5 h-5 rounded m-2 flex items-center justify-center">{completed}</div>;
};
