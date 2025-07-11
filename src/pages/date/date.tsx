import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { TaskFlagModal } from "../Tasks/components/common/task-flag-modal/TaskFlagModal";

export const DatePage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<
    {
      id: number;
      title: string;
      date: string | undefined;
      completed: boolean;
    }[]
  >([]);
  const [open, setOpen] = useState(false);

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;

    const newTask = {
      id: todos.length + 1,
      title: newTodo.trim(),
      date: date?.toISOString().split("T")[0],
      completed: false,
    };

    setTodos((prev) => [...prev, newTask]);
    setNewTodo("");
    setOpen(false); // modalni yopish
  };

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/your-calendar-background.jpg')" }}
    >
      <div className="backdrop-blur-sm bg-white/60 w-full min-h-screen flex flex-col">
        <div className="p-4 flex flex-col items-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-full max-w-md bg-white 
              [&_.rdp-day_selected]:bg-blue-500 
              [&_.rdp-day_selected]:text-white 
              [&_.rdp-day_selected]:rounded-full 
              [&_.rdp-day_selected]:w-10 
              [&_.rdp-day_selected]:h-10 
              [&_.rdp-day_selected]:flex 
              [&_.rdp-day_selected]:items-center 
              [&_.rdp-day_selected]:justify-center"
          />
        </div>

        {/* Todo list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white shadow rounded px-4 py-2 flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="form-checkbox rounded-full"
                />
                <p>{todo.title}</p>
              </div>

              {/* Tasks page dagi Flag modal */}
              <TaskFlagModal disabled={todo.completed} />
            </div>
          ))}
        </div>

        {/* Add New Todo Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="w-16 h-16 rounded-full bg-blue-400 cursor-pointer fixed bottom-[100px] right-[25px] shadow-lg">
              <FaPlus color="white" />
            </Button>
          </SheetTrigger>

          <SheetContent side="bottom" className="p-4 space-y-4">
            <SheetTitle>Add New Todo</SheetTitle>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="New todo title"
              className="border px-3 py-2 rounded w-full"
            />
            <Button
              onClick={handleAddTodo}
              className="bg-blue-500 hover:bg-blue-400 text-white w-full"
            >
              Add
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
