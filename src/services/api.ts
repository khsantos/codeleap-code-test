export const API_URL = "https://dev.codeleap.co.uk/careers/";

export const fetchPosts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createPostApi = async (
  username: string,
  title: string,
  content: string,
) => {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      title,
      content,
    }),
  });
};

export const deletePostApi = async (id: number) => {
  await fetch(`${API_URL}${id}/`, {
    method: "DELETE",
  });
};

export const updatePostApi = async (
  id: number,
  title: string,
  content: string,
) => {
  await fetch(`${API_URL}${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });
};
