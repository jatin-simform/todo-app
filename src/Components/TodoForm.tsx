import { Button, TextField } from "@mui/material";
import { ChangeEvent, useCallback, useState } from "react";

interface ITodoFormProps {
    onAdd: (item: string) => void
}

const TodoForm: React.FC<ITodoFormProps> = ({ onAdd }) => {
    const [text, setText] = useState("");

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

        const { value } = e.target;
        setText(value)

    }, [])

    const handleAdd = useCallback(() => {

        if (text !== '') {
            onAdd(text);
        }

    }, [text, onAdd]);

    return <>
        <TextField value={text} size="small" placeholder="Todo text" label="Todo Text" onChange={handleChange} />
        <Button data-testid="add-btn" id="add-btn" variant="contained" onClick={handleAdd} color="primary">Add</Button>
    </>

}

export default TodoForm;
