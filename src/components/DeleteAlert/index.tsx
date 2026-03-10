import type { DeleteModalProps } from "../../@types/DeleteModal";

export const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
}: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-125 shadow-lg">
        <h2 className="text-lg font-bold text-black mb-6">
          Are you sure you want to delete this post?
        </h2>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border border-gray-400 px-4 py-2 rounded-md text-black cursor-pointer hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
