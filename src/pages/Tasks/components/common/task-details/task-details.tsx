import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, type FC } from "react";
import { HEADER_TABS } from "@/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoMdArrowBack, IoMdCalendar } from "react-icons/io";
import { MdRepeat, MdNotes, MdAttachment, MdRestore } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { RiFeedbackLine } from "react-icons/ri";
import { DateModal } from "@/components/common/modals/date-modal";

interface SubTask {
  id: number;
  title: string;
  completed: boolean;
}

export const TaskDetailsPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const task = location.state?.task;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const [isDueDateOpen, setDueDateOpen] = useState(false);
  const [subTasks, setSubTasks] = useState<SubTask[]>([]);
  const [newSubTask, setNewSubTask] = useState("");
  const [showDateModal, setShowDateModal] = useState(false);

  const [dueDate, setDueDate] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleAddSubTask = () => {
    if (newSubTask.trim() === "") return;
    const newTask: SubTask = {
      id: subTasks.length + 1,
      title: newSubTask,
      completed: false,
    };
    setSubTasks([...subTasks, newTask]);
    setNewSubTask("");
  };

  const toggleSubTask = (id: number) => {
    setSubTasks((prev) =>
      prev.map((sub) =>
        sub.id === id ? { ...sub, completed: !sub.completed } : sub
      )
    );
  };

  const deleteSubTask = (id: number) => {
    setSubTasks((prev) => prev.filter((sub) => sub.id !== id));
  };

  if (!task) {
    return (
      <div className="p-4">
        <div className="flex items-center w-full mb-4 gap-4">
          <button onClick={() => navigate("/tasks")}>
            <IoMdArrowBack size={24} />
          </button>
          <h1 className="text-2xl font-semibold">back</h1>
        </div>
        <div>Task not found.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={() => navigate(-1)}>
          <IoMdArrowBack size={24} />
        </button>

        <div className="relative">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <PiDotsThreeOutlineVerticalFill size={18} color="gray" />
          </button>

          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
            >
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                onClick={() => {
                  navigate("/restore");
                  setIsMenuOpen(false);
                }}
              >
                <MdRestore color="gray" size={23} /> Restore Purchase
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                onClick={() => {
                  navigate("/faq");
                  setIsMenuOpen(false);
                }}
              >
                <div className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center text-gray-500">
                  ?
                </div>
                FAQ
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 flex items-center gap-2"
                onClick={() => {
                  navigate("/feedback");
                  setIsMenuOpen(false);
                }}
              >
                <RiFeedbackLine color="gray" size={20} /> Send Feedback
              </button>
            </div>
          )}
        </div>
      </div>

      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={task.category || "No Category"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="bg-white">
              {HEADER_TABS.filter((tab) => tab.title !== "Create New").map(
                (tab) => (
                  <SelectItem key={tab.id} value={tab.title.toLowerCase()}>
                    {tab.title}
                  </SelectItem>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="text-xl font-bold">{task.title}</div>
      <div className="flex flex-col gap-2">
        {subTasks.map((sub) => (
          <div key={sub.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={sub.completed}
                onChange={() => toggleSubTask(sub.id)}
              />
              <span
                className={sub.completed ? "line-through text-gray-500" : ""}
              >
                {sub.title}
              </span>
            </div>
            <button
              onClick={() => deleteSubTask(sub.id)}
              className="text-gray-400 text-xl"
            >
              x
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={newSubTask}
          onChange={(e) => setNewSubTask(e.target.value)}
          placeholder="Input the sub-task"
          className="border-b focus:outline-none flex-1"
        />
      </div>

      <button
        onClick={handleAddSubTask}
        className="text-pink-500 flex items-center space-x-2"
      >
        <span>Add Sub-task</span>
      </button>

      <div className="border-t" />

      <div className="space-y-4">
        <div
          className="flex items-center justify-between"
          onClick={() => setShowDateModal(true)}
        >
          <div className="flex items-center space-x-3">
            <IoMdCalendar size={20} />
            <span>Due Date</span>
          </div>
          <span className="bg-pink-100 px-3 py-1 rounded-full text-pink-500">
            {dueDate ? `Due Date: ${dueDate}` : "Set Due Date"}
          </span>
        </div>
        <DateModal
          open={showDateModal}
          onClose={() => setShowDateModal(false)}
          onSelect={(date) => setDueDate(date)}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MdRepeat size={20} />
            <span>Repeat Task</span>
          </div>
          <span className="bg-gray-200 px-3 py-1 rounded-full">No</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MdNotes size={20} />
            <span>Notes</span>
          </div>
          <button className="text-gray-500">EDIT</button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MdAttachment size={20} />
            <span>Attachment</span>
          </div>
          <button className="text-gray-500">ADD</button>
        </div>
      </div>
    </div>
  );
};
