import { useState, type FC } from "react";

interface CreateCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string) => void;
}

export const CreateCategoryModal: FC<CreateCategoryModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (title.trim()) {
      onAdd(title.trim());
      setTitle("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-lg font-semibold mb-4">Create New Category</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Category name"
          className="w-full border px-3 py-2 rounded mb-4"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
