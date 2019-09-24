import React from "react"
import * as rtl from "@testing-library/react"
import { NavBar } from "./Navbar"


test('it renders without crashing', () => {
    const container = rtl.render(<NavBar  />)
})