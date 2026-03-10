import type { PostCardProps } from "./PostCard";

export type EditModalProps = {
  isOpen: boolean;
  post: PostCardProps | null;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
};
