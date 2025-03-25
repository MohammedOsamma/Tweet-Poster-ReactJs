# React Poster - Share Your Thoughts Instantly!

# 📝 Project Description 
A simple React-based social posting app that allows users to create and view posts. The app integrates routing, modals, and dynamic state management to provide an interactive experience. Users can add new posts through a modal form, which updates the UI in real time. The app also fetches posts from a backend server, making it scalable for future enhancements.



# 🔧 Functions Used 
- 1️⃣ fetchPosts()

- Fetches posts from the backend when the app loads.
- Updates the post list dynamically.

- 2️⃣ addPostHandler(postData)
  
- Sends a new post to the backend.
- Updates the post list by adding the new post to the UI.

- 3️⃣ submitHandler(e)

- Handles form submission for a new post.
- Sends post data to the addPostHandler.

- 4️⃣ isPostingHandler()
  
- Toggles the modal form for adding a new post.


- 5️⃣ hideModeHandler() & ShowModeHandler()

- Controls the visibility of the modal form in the App component.


# ⚡ Hooks Used 
- 🔹 useState → Manages states for posts, form inputs, and UI toggles.
- 🔹 useEffect → Fetches posts from the backend when the component loads.




# 🌍 Routing in the Project:
- Uses React Router for navigation.

R- outes Defined:

- / → Displays the home page with posts.

- /create-post → Opens the post creation page.

- RootLayout component wraps the routes using <Outlet />.



