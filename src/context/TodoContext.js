import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "Todo List",
            completed: false,
        },
    ],
    addTodo: (todo) =>{},
    deleteTodo: (id)=>{},
    editTodo: (id, todo) =>{},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
