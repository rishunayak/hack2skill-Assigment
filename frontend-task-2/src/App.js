import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { Box, Button, Center, Heading, Image, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function App() {

  const [qury,setQury]=useState("")
  const [data,setData]=useState({})
  const [page,setPage]=useState(1)
  const {currentPage,totalPage}=data

  useEffect(()=>
  {
    axios.get(`https://hack2skillbackend2.onrender.com/getVideo?page=${page}`).then(r=>setData(r.data))

  },[page])

  const handleSearch=()=>
  {
     axios.get(`https://hack2skillbackend2.onrender.com/searchVideo?query=${qury}`).then(r=>setData(r.data))
  }
 console.log(data)
  return (
   <>
   <Box width={"50%"}  display={"flex"} m={"auto"} mt="20px"  >
    <Input placeholder='Search' type='text' value={qury} onChange={(e)=>setQury(e.target.value)}/><Button onClick={handleSearch}>Search</Button>
   </Box>

     <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap={"10px"} padding={"10px"}>
       {
       data.videoData?.map((ele)=>
       <Box> 
         <Image src={ele.thumbnails.high.url} width={"100%"}/>
         <Text fontSize="12px">Publised On :- {ele.publishedDate}</Text>
         <Text fontSize={"20px"}>{ele.title}</Text>
         {/* <Text>{ele.description}</Text> */}
       </Box>)
       }
     </Box>
      <Center gap={"20px"} m={"20px 0px"}>
        <Button isDisabled={page==1} colorScheme='blue' onClick={()=>setPage(page-1)}>Prv</Button> <Button  colorScheme='blue' isDisabled={totalPage==page} onClick={()=>setPage(page+1)}>Nex</Button>
      </Center>
    
   </>
  );
}

export default App;
