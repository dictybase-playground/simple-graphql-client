import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const Navbar = () => {
  return (
    <Box width="100%" position="fixed" top="0" left="0">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GraphQL Client
          </Typography>
          <Button color="inherit">Button</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
