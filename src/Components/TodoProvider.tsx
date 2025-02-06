import todoContext from '../Contexts/TodoContext'
import useTodo from "../Hooks/useTodo"

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const data = useTodo();

    return <todoContext.Provider value={data} >
        {children}
    </todoContext.Provider>

}

export default TodoProvider
