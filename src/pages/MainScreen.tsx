import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { PostCard } from "../components/CreatePostCard";
import type { PostCardProps } from "../@types/PostCard";
import { DeleteModal } from "../components/DeleteAlert";
import { EditModal } from "../components/EditModal";
import { usePosts } from "../hooks/usePosts";

export default function MainScreen() {
  const userContext = useContext(UserContext);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostCardProps | null>(null);

  const openDeleteModal = (id: number) => {
    setSelectedPostId(id);
    setIsDeleteOpen(true);
  };

  const openEditModal = (post: PostCardProps) => {
    setSelectedPost(post);
    setIsEditOpen(true);
  };

  const { posts, createPost, deletePost, updatePost } = usePosts();

  if (!userContext) return null;

  const handleCreatePost = async () => {
    await createPost(userContext.username, title, content);
    setTitle("");
    setContent("");
  };

  const handleUpdatePost = async (title: string, content: string) => {
    if (!selectedPost) return;

    await updatePost(selectedPost.id, title, content);

    setIsEditOpen(false);
    setSelectedPost(null);
  };

  const handleDeletePost = async () => {
    if (selectedPostId === null) return;

    await deletePost(selectedPostId);
    setIsDeleteOpen(false);
    setSelectedPostId(null);
  };

  return (
    <>
      <div className="flex justify-center bg-gray-200 min-h-screen py-10">
        <div className="w-175 bg-white border border-gray-300">
          <div className="bg-[#7695EC] text-white p-4 font-bold text-lg">
            CodeLeap Network
          </div>

          <div className="bg-white border border-gray-400 rounded-xl p-6 m-4">
            <h2 className="text-xl font-bold text-black mb-4">
              What’s on your mind?
            </h2>

            <p className="text-black mb-1">Title</p>
            <input
              className="w-full border border-gray-400 rounded-md p-2 text-black outline-none mb-2"
              placeholder="Hello World"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <p className="text-sm text-black mb-1">Content</p>
            <textarea
              className="w-full border border-gray-400 rounded-md p-2 text-black h-28 resize-none outline-none mb-2"
              placeholder="Content Here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <div className="flex justify-end">
              <button
                disabled={!title || !content}
                className="bg-[#7695EC] text-white px-6 py-2 rounded-md disabled:bg-gray-300 cursor-pointer hover:bg-[#3966e0]"
                onClick={handleCreatePost}
              >
                Create
              </button>
            </div>

            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                username={post.username}
                content={post.content}
                created_datetime={post.created_datetime}
                onDelete={openDeleteModal}
                onEdit={openEditModal}
              />
            ))}
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeletePost}
      />

      <EditModal
        isOpen={isEditOpen}
        post={selectedPost}
        onClose={() => setIsEditOpen(false)}
        onSave={handleUpdatePost}
      />
    </>
  );
}
