import { Container } from "@mui/material"
import Navbar from "./Navbar"
import React from "react"

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <Container>
      <Navbar />

      <Container
        maxWidth="md"
        style={{
          background: "white",
          marginTop: "100px",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        {props.children}
      </Container>
    </Container>
  )
}

export default Layout
