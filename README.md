# Todo List Application

A simple and responsive To-Do List application built with **React** and **Tailwind CSS**. This app allows users to manage their todos by adding, editing, deleting, and marking them as completed. The todos are persisted across page refreshes using **localStorage**.

## Features

- **Add Todo**: Users can add new todos to the list.
- **Edit Todo**: Users can edit the content of a todo.
- **Delete Todo**: Users can delete a todo from the list.
- **Toggle Completion**: Users can mark a todo as completed or incomplete.
- **Persistence**: Todos are saved in **localStorage**, ensuring data persists across page refreshes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used for styling.
- **localStorage**: Used to persist todos across page refreshes.

## Installation

To get started with the project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-list-app.git
```

### 2. Navigate to the project directory:
```bash
cd Todo List App
```

### 3. Install dependencies:
```bash
npm install
```

### 4. Start the development server:
```bash
npm start
```
The app should now be running at http://localhost:5173.

## Usage

Once the app is running, you can:

- **Add a Todo**: Type in the input field and click the "Add" button to add a new todo.
- **Edit a Todo**: Click on the pencil icon next to a todo to edit its content.
- **Delete a Todo**: Click on the trash icon next to a todo to remove it from the list.
- **Toggle Completion**: Click on the checkbox to mark a todo as complete or incomplete.

The todos will be saved in your browser's **localStorage**, so even if you refresh the page, your todos will remain.


### File Structure
``` bash
/src
  ├── /component
  │     ├── TodoForm.jsx
  │     ├── TodoItem.jsx
  ├── /context
  │     └── TodoContext.js
  ├── App.jsx
  └── index.css
  └── index.js
  ```

  ## Component Breakdown

- **TodoForm**: Contains the form to add new todos.
- **TodoItem**: Displays individual todos with options to edit, delete, and toggle completion.
- **TodoContext**: Manages the global state for todos and provides context for the components to consume.

## Contributing

If you'd like to contribute to this project, feel free to fork it and create a pull request with your improvements or fixes.
