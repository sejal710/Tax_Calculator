import Navbar from "./Components/Navbar"
import './App.css'
import Heading from "./Components/Heading"
import Register from "./Components/Register"
import { useState } from "react"
import Table1 from "./Components/Table1"
import './css/Form.css'
import Table2 from "./Components/Table2"
import Table from "./Components/Table"
import Footer from "./Components/Footer"
import { Box } from "@chakra-ui/react"
function App() {
   const [table,setTable] = useState({
    form : {},
    table1:{},
    total : 0,
   })
   console.log(table);
   const form = Object.keys(table.form).length === 0;
   const table1 = Object.keys(table.table1).length === 0
   
  return (
    <div className="app">
    <Navbar />
    <Box width={'100%'} display={"flex"}>
      <Box border={form ?"1px solid black ":"1px solid red"} width={'33%'}></Box>
      <Box border={table1 ?"1px solid black ":"1px solid red"} width={'33%'}></Box>
      <Box border={table.total == 0 ?"1px solid black ":"1px solid red"} width={'34%'}></Box>
    </Box>
    <div className="advanceTax">
      <Heading />
      {
        form && <Register table = {setTable} />
      }
      {
        !form && table1 && <Table1 table={setTable} />
      }
      {
        !form && !table1 && table.total === 0 && <Table2 table={setTable} />
      }
      {
        !form && !table1 && table.total !== 0 && <Table table={table} />
      }
    </div>
    <Footer />
    </div>
  )
}

export default App
