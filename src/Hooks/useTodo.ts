import { useState, useCallback } from "react";

const useTodo=()=>{
    
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

    return { todos, addTodo, update, remove } 
}


export default useTodo;

