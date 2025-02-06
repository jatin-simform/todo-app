import { useCallback, useState } from "react"
import todoContext from '../Contexts/TodoContext'

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = useCallback((item: string) => {

        setTodos([item, ...todos]);

    }, [todos]);

    const update = useCallback((item: string, index: number) => {

        setTodos((items) => {
            const updated = [...items];
            updated[index] = item;
            return updated
        });

    }, []);

    const remove = useCallback((index: number) => {

        setTodos((items) =>items.filter((_, tindex) => (index !== tindex)));

    }, [])


    return <todoContext.Provider value={{ todos, addTodo, update, remove }} >
        {children}
    </todoContext.Provider>

}

export default TodoProvider
