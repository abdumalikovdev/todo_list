import { type FC } from "react";
import { TaskFlagModal } from "../task-flag-modal/TaskFlagModal";

interface TaskItemProps {
  id: number;
  title: string;
  date: string;
  completed: boolean;
  onToggleComplete: (id: number) => void;
}

export const TaskItem: FC<TaskItemProps> = ({
  id,
  title,
  date,
  completed,
  onToggleComplete,
}) => {
  return (
    <div
      className={`bg-white shadow rounded px-4 py-2 flex justify-between items-center mb-2`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(id)}
          className="w-6 h-6 rounded-full border-gray-300 accent-gray-500"
        />

        <div>
          <p className={completed ? "line-through text-gray-400" : ""}>
            {title}
          </p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>

      <TaskFlagModal disabled={completed} />
    </div>
  );
};
