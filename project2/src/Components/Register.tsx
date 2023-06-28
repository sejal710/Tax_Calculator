import { Box,Text, Input,Button, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

interface RegisterProps {
  table: React.Dispatch<React.SetStateAction<{ form: object; table1: object; total:number}>>;
}

const Register : React.FC<RegisterProps> = ({table}) => {
    const [data,setData] = useState({
        name : "",
        email : "",
        father_name:"",
        address:"",
        mobile_no:""
    })
    const toast = useToast()

    const handleSubmit = () => { 
        if(data.name == "" || data.email == "" || data.father_name == "" || data.address == "" || data.mobile_no == ""){
            toast({
                title: 'Oops fill Properly',
                status: 'error',
                position:'top-right',
                duration: 3000,
                isClosable: true,
              })
        }
        else{
          table((prevState: { form: object; table1: object; total:number }) => ({
            ...prevState,
            form: data
          }));
            toast({
                title: 'Step-1',
                status: 'success',
                position:'top-right',
                duration: 3000,
                isClosable: true,
              })
        }
    }
  return (
    <>
    <Box className='advanceTax_div bg'>
    <Text className='text'>Name</Text>
    <Input type="text" background={'#fff'} value={data.name} onChange={(e) => setData(prevState => ({
     ...prevState,
     name: e.target.value
     }))} />
    </Box>

    <Box className='advanceTax_div'>
    <Text className='text'>Email</Text>
    <Input type="text" background={'#fff'} value={data.email} onChange={(e) => setData(prevState => ({
     ...prevState,
     email: e.target.value
     }))}  />
    </Box>

    <Box className='advanceTax_div bg'>
    <Text className='text'>Father Name</Text>
    <Input type="text" background={'#fff'} value={data.father_name} onChange={(e) => setData(prevState => ({
     ...prevState,
     father_name: e.target.value
     }))}  />
    </Box>

    <Box className='advanceTax_div'>
    <Text className='text'>Address</Text>
    <Input type="text" background={'#fff'} value={data.address} onChange={(e) => setData(prevState => ({
     ...prevState,
     address: e.target.value
     }))}  />
    </Box>

    <Box className='advanceTax_div bg'>
    <Text className='text'>Mobile Number</Text>
    <Input type="number" background={'#fff'} value={data.mobile_no} onChange={(e) => setData(prevState => ({
     ...prevState,
     mobile_no: e.target.value
     }))}  />
    </Box>

    <Box display="flex" justifyContent="center" mt={4}>
    <Button colorScheme="green" mr={4} onClick={handleSubmit} >Submit</Button>
      <Button colorScheme="blue" onClick={()=>window.location.reload()}> Reset</Button>
    </Box>
    </>
  )
}

export default Register
