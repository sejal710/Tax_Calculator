import React,{useState} from 'react'
import {Box,Text,Input} from '@chakra-ui/react'
interface Detail1Props {
    data: (value:string) => void;
}

const Detail1:React.FC<Detail1Props> = ({data}) => {
   const [sum1,setsum1] = useState(0);
   const [sum2,setsum2] = useState(0);
   const [sum3,setsum3] = useState(0);
    data(`${sum1+sum2+sum3}`)
  return (
    <Box className='advanceTax_showDetail'>
    <Box className='advanceTax_div'>
      <Text className='text'>Interest</Text>
      <Input  type='number' bg='#fff' value={sum1 == 0 ? " " : sum1} onChange={(e) => setsum1(parseFloat(e.target.value))} />
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Commission/Other Income</Text>
      <Input  type='number' bg='#fff' value={sum2 == 0 ? " " : sum2} onChange={(e) => setsum2(parseFloat(e.target.value))}/>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Winnings from Lottery, Crossword Puzzles, etc.</Text>
      <Input  type='number' bg='#fff'value={sum3 == 0 ? " " : sum3} onChange={(e) => setsum3(parseFloat(e.target.value))}/>
    </Box>

    </Box>
  )
}

export default Detail1
