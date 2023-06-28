import {Box,Input,Text} from '@chakra-ui/react'
import React,{useState} from 'react'


interface Detail1Props {
    data: (value:string) => void;
}

const Detail1: React.FC<Detail1Props> = ({data}) => {
   
    const [housingLoan,setHousingLoan] = useState(0);
    const [netAnnum1,setNetAnnum1] = useState("");
    const [netAnnum2,setNetAnnum2] = useState("");
    const [netAnnum3,setNetAnnum3] = useState("");
    const [netAnnum,setNetAnnum] = useState("");
    const [intrestLoan,setIntrestLoan] = useState("")
    data(`${Number(netAnnum) - ((Number(netAnnum)* 0.3) + Number(intrestLoan))}`)
    const handleInputAnnum = (e: React.ChangeEvent<HTMLInputElement>, inputNumber: number) => {
        const inputValue = parseFloat(e.target.value) || 0;

        switch (inputNumber) {
          case 1:
            setNetAnnum1(inputValue.toString());
            setNetAnnum(`${inputValue - (parseFloat(netAnnum2) + parseFloat(netAnnum3))}`)
            break;
          case 2:
            setNetAnnum2(inputValue.toString());
            setNetAnnum(`${(parseFloat(netAnnum1) || 0) - (inputValue + parseFloat(netAnnum3))}`);
            break;
          case 3:
            setNetAnnum3(inputValue.toString());
            setNetAnnum(`${(parseFloat(netAnnum1) || 0) - (parseFloat(netAnnum2) + inputValue)}`);
            break;
          default:
            break;
        }
    }
  return (
    <Box className='advanceTax_showDetail'>
    
    <Box className='advanceTax_div'>
      <Text className='text'>a. Income from Self-occupied Property</Text>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Interest Paid/Payable on Housing Loan</Text>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>1. Interest on Housing Loan</Text>
      <Input  type='number' bg='#fff' onChange={(e) => setHousingLoan(parseFloat(e.target.value))}/>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Income from self-occupied house property</Text>
      <Input  type='number'value={-housingLoan} background={'#e0e0e0 !important'} fontWeight={'bold'}/>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>b. Income from Let-out Property</Text>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>1. Annual Letable Value/Rent Received or Receivable</Text>
      <Input  type='number' bg='#fff' value={netAnnum1} onChange={(e) => handleInputAnnum(e, 1)}  />
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>2. Less: Municipal Taxes Paid During the Year</Text>
      <Input  type='number' bg='#fff' value={netAnnum2} onChange={(e) => handleInputAnnum(e, 2)}   />
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>3. Less:Unrealized Rent</Text>
      <Input  type='number' bg='#fff' value={netAnnum3} onChange={(e) => handleInputAnnum(e, 3)}  />
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>4. Net Annual Value (1-(2+3))</Text>
      <Input  background={'#e0e0e0 !important'} fontWeight={'bold'} type='number' value={netAnnum} readOnly/>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Less: Deductions from Net Annual Value</Text>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>i. Standard Deduction @ 30% of Net Annual Value</Text>
      <Input  background={'#e0e0e0 !important'} fontWeight={'bold'} type='number' value={Number(netAnnum) * 0.3} readOnly/>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>ii. Interest on Housing Loan</Text>
      <Input  type='number' bg='#fff' onChange={(e) => setIntrestLoan(e.target.value)}/>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Income from Let-out House Property</Text>
      <Input  background={'#e0e0e0 !important'} fontWeight={'bold'} type='number' value={Number(netAnnum) - ((Number(netAnnum)* 0.3) + Number(intrestLoan))}/>
    </Box>


    </Box>
  )
}

export default Detail1
