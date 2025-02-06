import { Menu } from "@mui/icons-material"
import { AppBar, Toolbar, Stack, IconButton, Typography } from "@mui/material"

interface IHeaderProps{
    title:string
}

const Header: React.FC<IHeaderProps>= ({title}) => {

    return <>
        <AppBar data-testid="header">
            <Toolbar>
                <Stack direction={'row'}>
                    <IconButton >
                        <Menu/>
                    </IconButton>
                    <Typography variant='h5'>{title}</Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    </>

}

export default Header