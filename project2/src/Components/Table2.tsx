import React, { useState } from 'react'
import {Box,Input,Text,Button, useToast} from '@chakra-ui/react'
import Detail1 from './Detail1';
import Detail2 from './Detail2'
interface Table2Props {
  table: React.Dispatch<React.SetStateAction<{ form: object; table1: object; total:number }>>;
}

const Table2: React.FC<Table2Props> = ({table}) => {
    const [show1,setShow1] = useState(true);
    const [show2,setShow2] = useState(true);
    const [data1,setData1] = useState("");
    const [data2,setData2] = useState("")
    const [sum1,setSum1] = useState(0);
    const [sum2,setSum2] = useState(0);
    const toast = useToast()
    const handleSubmit = () => {
      if(data1 == "" || data2 == "" || sum1 == 0 || sum2 == 0){
        toast({
          title: 'Oops fill Properly',
          status: 'error',
          position:'top-right',
          duration: 3000,
          isClosable: true,
        })
      }
      else{
        const k = Number(data2);
        const total = (sum1 + sum2 + Number(data1)) - k;
        table((prevState: { form: object; table1: object; total:number}) => ({
          ...prevState,
          total : total
        }));

          toast({
              title: 'Successfully Done🎉',
              status: 'success',
              position:'top-right',
              duration: 3000,
              isClosable: true,
            })
      }
    }
  return (
    <div>
      <Box className='advanceTax_div bg'>
      <Text className='text'>Income From Other Sources</Text>
      <Box gap={'5px'} display={'flex'}>
      <button onClick={()=>setShow1(!show1)}>{show1 ? "Show Details" : "Hide Detail"}</button>
      <Input type='number' background={'#e0e0e0 !important'} value={data1} fontWeight={'bold'} />
      </Box>
    </Box>
    {
      !show1 &&  <Detail1 data={setData1} />
    }

    <Box className='advanceTax_div'>
    <Text className='text'>Profits and Gains of Business or Profession (enter profit only)</Text>
    <Input type="number" background={'#fff'} value={sum1} onChange={(e) => setSum1(parseFloat(e.target.value))} />
    </Box>

    <Box className='advanceTax_div bg'>
    <Text className='text'>Agricultural Income</Text>
    <Input type="number" background={'#fff'} value={sum2} onChange={(e) => setSum2(parseFloat(e.target.value))} />
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Deductions</Text>
      <Box gap={'5px'} display={'flex'}>
      <button onClick={()=>setShow2(!show2)}>{show2 ? "Show Details" : "Hide Detail"}</button>
      <Input type='number' background={'#e0e0e0 !important'} value={data2} fontWeight={'bold'} />
      </Box>
    </Box>

    {
      !show2 &&  <Detail2 data={setData2} />
    }

   <Box display="flex" justifyContent="center" mt={4}>
    <Button colorScheme="green" mr={4} onClick={handleSubmit} >Submit</Button>
      <Button colorScheme="blue" onClick={()=>window.location.reload()}> Reset</Button>
    </Box>
    </div>
  )
}

export default Table2
