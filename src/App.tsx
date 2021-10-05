import { Container, Typography } from "@mui/material"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <Layout>
      <Typography variant="h4">Hello</Typography>
      <Typography>
        This is the GraphQL client for Simple GraphQL Server
      </Typography>
    </Layout>
  )
}

export default App
