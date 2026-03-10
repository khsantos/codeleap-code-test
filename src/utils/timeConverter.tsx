export function timeAgo(dateString: string) {
  const now = new Date();
  const postDate = new Date(dateString);

  const seconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(seconds / 86400);

  if (seconds <= 1) return `1 second ago`;
  if (seconds < 60) return `${seconds} seconds ago`;
  if (minutes <= 1) return `1 minute ago`;
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours <= 1) return `1 hour ago`;
  if (hours < 24) return `${hours} hours ago`;
  return `${days} days ago`;
}
