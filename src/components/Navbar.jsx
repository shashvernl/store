import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { IconButtonWithBadge, AccountCircle} from '../components/Icons.jsx';
import { grey } from '@mui/material/colors';



export default function Navbar() {
    return (
        <div>
         <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{backgroundColor: grey[500]}}>
             <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                  PRAVDA STORE
                </Typography>

                <IconButton color="inherit" sx={{ mr: 1}}>
                <Badge badgeContent={1} color="success">
                <IconButtonWithBadge />
                </Badge>
                </IconButton>

                <IconButton color="inherit" sx={{ mr:1}}>
                  <AccountCircle />
                </IconButton>


             </Toolbar>
            </AppBar>
         </Box>
        </div>
    );
}