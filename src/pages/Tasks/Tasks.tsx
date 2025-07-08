import { useState, type FC } from "react";
import { TasksHeader } from "./components/task-header/task-header";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { TaskItem } from "./components/common/task-item/TaskItem";

interface Todo {
  id: number;
  title: string;
  category: string;
  date: string;
  completed: boolean;
}

export const Tasks: FC = () => {
  const [activePage, setActivePage] = useState("All");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const todayDate = new Date().toISOString().split("T")[0];

    const newTask: Todo = {
      id: todos.length + 1,
      title: newTodo.trim(),
      category: activePage,
      date: todayDate,
      completed: false,
    };

    setTodos((prev) => [...prev, newTask]);
    setNewTodo("");
  };

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos =
    activePage === "All"
      ? todos
      : todos.filter((todo) => todo.category === activePage);

  const previousTodos = filteredTodos.filter(
    (todo) => todo.date !== new Date().toISOString().split("T")[0]
  );
  const todayTodos = filteredTodos.filter(
    (todo) =>
      todo.date === new Date().toISOString().split("T")[0] && !todo.completed
  );
  const completedTodos = filteredTodos.filter(
    (todo) =>
      todo.date === new Date().toISOString().split("T")[0] && todo.completed
  );

  return (
    <div className="flex flex-col pb-20">
      <TasksHeader activePage={activePage} setActivePage={setActivePage} />

      <Accordion type="multiple" className="px-4">
        {previousTodos.length > 0 && (
          <AccordionItem value="previous">
            <AccordionTrigger>Previous</AccordionTrigger>
            <AccordionContent>
              {previousTodos.map((task) => (
                <TaskItem
                  key={task.id}
                  {...task}
                  onToggleComplete={toggleComplete}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        )}

        {todayTodos.length > 0 && (
          <AccordionItem value="today">
            <AccordionTrigger>Today</AccordionTrigger>
            <AccordionContent>
              {todayTodos.map((task) => (
                <TaskItem
                  key={task.id}
                  {...task}
                  onToggleComplete={toggleComplete}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        )}

        {completedTodos.length > 0 && (
          <AccordionItem value="completed">
            <AccordionTrigger>Completed Today</AccordionTrigger>
            <AccordionContent>
              {completedTodos.map((task) => (
                <TaskItem
                  key={task.id}
                  {...task}
                  onToggleComplete={toggleComplete}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>

      <Sheet>
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
  );
};
