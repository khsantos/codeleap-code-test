# CodeLeap Network – React Challenge

This project is a solution for the **CodeLeap Frontend Challenge**.
It is a simple social feed where users can create, edit, and delete posts.

The application interacts with the CodeLeap public API and displays posts in a timeline format.

## Features

* Create a new post
* View all posts from the API
* Edit your own posts
* Delete your own posts with confirmation modal
* Posts sorted by most recent
* Relative time display (e.g., "5 minutes ago")

## Technologies Used

* **React**
* **TypeScript**
* **Tailwind CSS**
* **React Hooks**
* **Fetch API**

## Project Structure

```
src
 ├ components
 │   ├ PostCard
 │   ├ DeleteModal
 │   └ EditModal
 │
 ├ hooks
 │   └ usePosts
 │
 ├ services
 │   └ api
 │
 ├ context
 │   └ UserContext
 │
 └ pages
     └ MainScreen
```

## API

This project uses the official CodeLeap API:

```
https://dev.codeleap.co.uk/careers/
```

Endpoints used:

* `GET /careers/` – fetch posts
* `POST /careers/` – create post
* `PATCH /careers/{id}/` – update post
* `DELETE /careers/{id}/` – delete post

## Running the Project

1. Clone the repository

```
git clone https://github.com/your-username/your-repository
```

2. Install dependencies

```
npm install
```

3. Start the development server

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

## Author

Developed by **Kauã Heidemann Santos**.
