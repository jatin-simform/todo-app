import { Box, Button, Paper} from "@mui/material";
import { useContext } from "react";
import Header from "../Components/Header";
import TodoForm from "../Components/TodoForm";
import todoContext from "../Contexts/TodoContext";
import List from "../Components/List";

const Main: React.FC = () => {

    const { addTodo, todos, remove } = useContext(todoContext);

    return <>
        <Header title='todo app' />
        <Box marginTop={10} padding={10}>
            <Paper elevation={12}>
                <Box padding={1}>
                    <TodoForm onAdd={addTodo} />
                </Box>
                <Box>
                    <List items={todos} onDelete={remove} />
                </Box>
            </Paper>
        </Box>
    </>

}

export default Main

