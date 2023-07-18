import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function App() {

  const [data,setData]=useState({})
  const [page,setPage]=useState(1)
  const {videoData,currentPage,totalPage}=data

  useEffect(()=>
  {
    axios.get(`http://localhost:3001/getVideo?page=${page}`).then(r=>setData(r.data))

  },[page])
  console.log(videoData)
  return (
   <>

     <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap={"10px"} padding={"10px"}>
       {
       videoData?.map((ele)=>
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
