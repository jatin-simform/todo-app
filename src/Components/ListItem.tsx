import { Box, Button, Stack, Typography } from "@mui/material"
import { useCallback } from "react"

export interface IListItem {
    index: number,
    text: string
    onDelete: (index: number) => void
}

const ListItem: React.FC<IListItem> = ({ index, text, onDelete }) => {

    const handleDelete = useCallback(() => {

        onDelete(index);

    }, [index, onDelete])

    return <>
        <li role='list-item' key={index + "-" + text}>
            <Stack direction={'row'}>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} padding={2} alignItems={'center'} >
                    <Typography>{text}</Typography>
                    <Button  onClick={handleDelete}>Delete</Button>
                </Box>
            </Stack>
        </li>
    </>

}


export default ListItem

