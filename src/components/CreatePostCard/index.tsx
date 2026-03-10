import { BiPencil, BiTrash } from "react-icons/bi";
import type { PostCardProps } from "../../@types/PostCard";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { timeAgo } from "../../utils/timeConverter";

export const PostCard = ({
  id,
  title,
  username,
  content,
  created_datetime,
  onDelete,
  onEdit,
}: PostCardProps) => {
  const userContext = useContext(UserContext);

  if (!userContext) return null;

  const isOwner = userContext.username === username;

  return (
    <div className="bg-white border border-gray-400 rounded-xl overflow-hidden mb-6 mt-8">
      <div className="bg-[#7695EC] text-white flex justify-between items-center px-4 py-3">
        <h3 className="font-bold text-lg"> {title}</h3>
        {isOwner && (
          <div className="flex gap-3 cursor-pointer">
            <BiTrash className="h-5 w-5" onClick={() => onDelete?.(id)} />

            <BiPencil
              className="h-5 w-5"
              onClick={() =>
                onEdit?.({ id, title, username, content, created_datetime })
              }
            />
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between text-gray-500 text-sm mb-3">
          <span>@{username}</span>
          <span>{timeAgo(created_datetime)}</span>
        </div>

        <p className="text-black whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
};
