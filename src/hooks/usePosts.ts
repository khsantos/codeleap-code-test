import { useEffect, useState } from "react";
import type { PostCardProps } from "../@types/PostCard";
import {
  fetchPosts,
  createPostApi,
  deletePostApi,
  updatePostApi,
} from "../services/api";

export const usePosts = () => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);

  const loadPosts = async () => {
    const data = await fetchPosts();

    const sortedPosts = data.results.sort(
      (a: PostCardProps, b: PostCardProps) =>
        new Date(b.created_datetime).getTime() -
        new Date(a.created_datetime).getTime(),
    );

    setPosts(sortedPosts);
  };

  useEffect(() => {
    let isMounted = true;

    const initializePosts = async () => {
      try {
        const data = await fetchPosts();

        const sortedPosts = data.results.sort(
          (a: PostCardProps, b: PostCardProps) =>
            new Date(b.created_datetime).getTime() -
            new Date(a.created_datetime).getTime(),
        );

        if (isMounted) {
          setPosts(sortedPosts);
        }
      } catch (error) {
        console.error("Failed to load posts:", error);
      }
    };

    initializePosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const createPost = async (
    username: string,
    title: string,
    content: string,
  ) => {
    await createPostApi(username, title, content);
    await loadPosts();
  };

  const deletePost = async (id: number) => {
    await deletePostApi(id);
    await loadPosts();
  };

  const updatePost = async (id: number, title: string, content: string) => {
    await updatePostApi(id, title, content);
    await loadPosts();
  };

  return {
    posts,
    createPost,
    deletePost,
    updatePost,
    loadPosts,
  };
};
