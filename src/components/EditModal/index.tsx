import { useState } from "react";
import type { EditModalProps } from "../../@types/EditModal";

export const EditModal = ({
  isOpen,
  post,
  onClose,
  onSave,
}: EditModalProps) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-125">
        <h2 className="text-lg font-bold mb-4 text-black">Edit item</h2>

        <p className="text-sm mb-1 text-black">Title</p>
        <input
          className="w-full border rounded-md p-2 mb-3 text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <p className="text-sm mb-1 text-black">Content</p>
        <textarea
          className="w-full border rounded-md p-2 mb-4 text-black"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border px-6 py-1 rounded-md text-black hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(title, content)}
            className="bg-green-500 hover:bg-green-400 text-white px-6 py-1 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
