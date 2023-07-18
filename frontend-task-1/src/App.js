import logo from './logo.svg';
import './App.css';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Center,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from "axios"



function App() {

  const [data,setData]=useState([])

  const [hide,setHide]=useState("none")

  useEffect(()=>
  {
    axios.get("https://hack2skillbackend.onrender.com/getData").then(r=>setData(r.data))
  },[])


  return (
   <>
   <Center mt={"50px"}> <Button onClick={()=>setHide("block")} display={hide=="none"? "block":"none"} >Show Data</Button> </Center>
   
   <Table display={hide}>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr >
        <Th >Full Name</Th>
        <Th>Email</Th>
        <Th>Number</Th>
        <Th>City</Th>
        <Th>Team</Th>
      </Tr>
    </Thead>
    <Tbody>
        {
          data?.map(ele=><Tr><Td>{ele.full_name}</Td>
          <Td>{ele.email}</Td>
          <Td>{ele.number}</Td>
          <Td>{ele.city}</Td>
          <Td>{ele.data2[0].team_name}</Td>
          </Tr>)
        }
      
    </Tbody>
   
  </Table>
   
   </>
  );
}

export default App;
