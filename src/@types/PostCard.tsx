export type PostCardProps = {
  id: number;
  title: string;
  username: string;
  content: string;
  created_datetime: string;
  onDelete?: (id: number) => void;
  onEdit?: (post: PostCardProps) => void;
};
