import { createContext } from "react";
import { ITodoContext } from "../interfaces/indext";



const initialValues: ITodoContext = {
    todos: [],
    addTodo: () => { },
    update: () => { },
    remove: () => { }
}

const todoContext = createContext<ITodoContext>(initialValues);

export default todoContext;