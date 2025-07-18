import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const StarredTasks = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-4">
      <div className="flex items-center w-full mb-4 gap-4">
        <button onClick={() => navigate("/tasks")}>
          <IoMdArrowBack size={24} />
        </button>
        <h1 className="text-2xl font-semibold">Starred Tasks</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-[150px]">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3468/3468360.png"
          alt="Empty"
          className="w-40 h-40"
        />
        <p className="text-center text-gray-500 mt-4 px-6">
          There are no starred tasks. <br />
          Swipe left on a task on the homepage to star it!
        </p>
      </div>
    </div>
  );
};
