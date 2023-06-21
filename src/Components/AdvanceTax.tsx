import {useState} from 'react'
import { Box, Input, Text,Select,Button,useToast} from '@chakra-ui/react'
import '../css/AdvanceTax.css'
import Detail1 from './Detail1'
import Detail2 from './Detail2'
import Detail3 from './Detail3'
import Detail4 from './Detail4'
import Table1 from './Table1'
import Table2 from './Table2'

const AdvanceTax = () => {
    const[tax,setTax] = useState("")
    const [relief,setRelief] = useState(0)
    const [creditUtilized,setCreditUtilized] = useState(0)
    const [detail1,setDetail1] = useState(false)
    const [detail2,setDetail2] = useState(false)
    const [detail3,setDetail3] = useState(false)
    const [detail4,setDetail4] = useState(false)
    const[detail1value,setDetail1value] = useState("")
    const[detail2value,setDetail2value] = useState("")
    const[detail3value,setDetail3value] = useState("")
    const[detail4value,setDetail4value] = useState("")
    const [submit,setSubmit] = useState(false)
    const toast = useToast()
    
    const acessedTax = isNaN(relief) || isNaN(creditUtilized) ? 0 : relief + creditUtilized;
    const handleSubmit = () => {
      if(relief >10000){
        toast({
          title: 'Success',
          status: 'success',
          position:'top-right',
          duration: 5000,
          isClosable: true,
        })
        setSubmit(true)
      }
      else{
        toast({
          title: 'value is less than Rs 10000',
          status: 'error',
          position:'top-right',
          duration: 5000,
          isClosable: true,
        })
      }
    }

  return (
    <div className="advanceTax" id='advance'>
    <Box className='advanceTax_div bg'>
      <Text className='text'>Tax Payer</Text>
      <Select  placeholder='Select' w='200px' border='1px solid #ccc' onChange={(e) => setTax(e.target.value)} bg='#fff'>
        <option value='Individual'>Individual</option>
         <option value='HUF'>HUF</option>
        <option value='AOPs/BOI'>AOPs/BOI</option>
        <option value='Domestic Company'>Domestic Company</option>
        <option value='Foreign Company'>Foreign Company</option>
        <option value='Firms'>Firms</option>
        <option value='LLP'>LLP</option>
        <option value='Co-opertive society'>Co-opertive society</option>
      </Select>
    </Box>

    {tax === "Individual" && <Box className='advanceTax_div'>
      <Text className='text'>Whether opting for taxation under Section 115BAC?</Text>
      <Select  placeholder='Select' w='140px' h='20px' border='1px solid #ccc' margin='0px 60px 0px 0px' p={'4px'}>
        <option value='YES'>YES</option>
         <option value='NO'>NO</option>
      </Select>
    </Box>}

    {tax === "Co-opertive society" && <Box className='advanceTax_div'>
      <Text className='text'>Co-operative society opted and qualify for section 115BAD</Text>
      <Select  placeholder='Select' w='140px' h='20px' border='1px solid #ccc' margin='0px 60px 0px 0px' p={'4px'}>
        <option value='YES'>YES</option>
         <option value='NO'>NO</option>
      </Select>
    </Box>}

    {tax === "Co-opertive society" && <Box className='advanceTax_div'>
      <Text className='text'>Co-operative society opted and qualify for section 115BA</Text>
      <Select  placeholder='Select' w='140px' h='20px' border='1px solid #ccc' margin='0px 60px 0px 0px' p={'4px'}>
        <option value='YES'>YES</option>
         <option value='NO'>NO</option>
      </Select>
    </Box>}

    {tax === "Individual" && <Box className='advanceTax_div bg'>
      <Text className='text'>Male / Female / Senior Citizen</Text>
      <Select  placeholder='Select' w='200px' border='1px solid #ccc' bg='#fff' >
        <option value='Male'>Male</option>
         <option value='Female'>Female</option>
        <option value='Senior Citizen'>Senior Citizen</option>
        <option value='Super Senior Citizen'>Super Senior Citizen</option>
      </Select>
    </Box>}

    {tax === "Individual" && <Box className='advanceTax_div'>
      <Text className='text'>Residential Status</Text>
      <Select  placeholder='Select' w='200px' border='1px solid #ccc' >
        <option value='Resident'>Resident</option>
         <option value='Non Resident'>Non Resident</option>
        <option value='Not ordinary Resident'>Not ordinary Resident</option>
      </Select>
    </Box>}

    {tax === "Individual" && <Box className='advanceTax_div bg'>
      <Text className='text'>Income from salary (Income from Salary before Exemptions/Deductions)</Text>
      <Input  type='number' bg='#fff'/>
    </Box>}

    {tax === "Individual" && <Box className='advanceTax_div'>
      <Text className='text'>Income From House Property</Text>
      <Box gap={'5px'} display={'flex'}>
      <button onClick = {() => setDetail1(!detail1)}>{detail1 === false ? "Show Details" : "Hide Detail"}</button>
      <Input  type='number' background={'#e0e0e0 !important'} fontWeight={'bold'} value={detail1value} />
      </Box>
    </Box>}

    {tax === "Individual" && detail1 === true && 
    <Detail1 data={setDetail1value} />
    }

    {tax === "Individual" && <Box className='advanceTax_div'>
      <Text className='text'>Capital Gains</Text>
      <Box gap={'5px'} display={'flex'}>
      <button onClick={() => setDetail2(!detail2)}>{detail2 === false ? "Show Details" : "Hide Detail"}</button>
      <Input type='number' background={'#e0e0e0 !important'} fontWeight={'bold'} value={detail2value}/>
      </Box>
    </Box>}

    { tax === "Individual" && detail2 === true && 
     <Detail2 data={setDetail2value} />
    }

    {tax === "Individual" && <Box className='advanceTax_div bg'>
      <Text className='text'>Income From Other Sources</Text>
      <Box gap={'5px'} display={'flex'}>
      <button onClick={()=>setDetail3(!detail3)}>{detail3 === false ? "Show Details" : "Hide Detail"}</button>
      <Input type='number' background={'#e0e0e0 !important'} fontWeight={'bold'} value={detail3value}/>
      </Box>
    </Box>}

    {tax === "Individual" && detail3 === true && 
    <Detail3 data={setDetail3value}/>
    }

    {tax === "Individual" && <Box className='advanceTax_div'>
    <Text className='text'>Profits and Gains of Business or Profession (enter profit only)</Text>
    <Input type='number'/>
    </Box>}

    {tax === "Individual" && <Box className='advanceTax_div bg'>
    <Text className='text'>Agricultural Income</Text>
    <Input type='number'/>
    </Box>}

    {tax === "Individual" && <Box className='advanceTax_div'>
      <Text className='text'>Deductions</Text>
      <Box gap={'5px'} display={'flex'}>
      <button onClick={()=>setDetail4(!detail4)}>{detail4 === false ? "Show Details" : "Hide Detail"}</button>
      <Input type='number' background={'#e0e0e0 !important'} fontWeight={'bold'} value={detail4value}/>
      </Box>
    </Box>}

    {tax === "Individual" && detail4 === true  && 
      <Detail4 data={setDetail4value}/>
    }



     <Box className='advanceTax_div'>
    <Text className='text'>Net Taxable Income</Text>
    <Input background={'#e0e0e0 !important'} value=" "  />
    </Box>

    {tax !== "Individual" ? <Box className='advanceTax_div bg'>
    <Text className='text'>Income Tax</Text>
    <Input background={'#e0e0e0 !important'} value=" "  />
    </Box> : null}


    {tax === "Individual" ? <Box className='advanceTax_div_input bg'>
     <Text className='text' w='200px'>Income Liable to Tax at Normal Rate ---</Text>
     <Input background={'#e0e0e0 !important'} value=" "  width={'50px'}/>
     <Input background={'#e0e0e0 !important'} value=" " width={'150px'} />
     </Box> : null
    }

    {tax === "Individual" ? <Box className='advanceTax_div_input'>
     <Text className='text' w='200px'>Short Term Capital Gains (Covered u/s 111A) 15%</Text>
     <Input background={'#e0e0e0 !important'} value=" "  width={'50px'}/>
     <Input background={'#e0e0e0 !important'} value=" " width={'150px'} />
     </Box> : null
    }

    {tax === "Individual" ? <Box className='advanceTax_div_input bg'>
     <Text className='text' w='200px'>Long Term Capital Gains (Covered u/s 112A) 10%</Text>
     <Input background={'#e0e0e0 !important'} value=" "  width={'50px'}/>
     <Input background={'#e0e0e0 !important'} value=" " width={'150px'} />
     </Box> : null
    }

    {tax === "Individual" ? <Box className='advanceTax_div_input'>
     <Text className='text' w='200px'>Long Term Capital Gains (Charged to tax @ 20%) 20%</Text>
     <Input background={'#e0e0e0 !important'} value=" "  width={'50px'}/>
     <Input background={'#e0e0e0 !important'} value=" " width={'150px'} />
     </Box> : null
    }

    {tax === "Individual" ? <Box className='advanceTax_div_input bg'>
     <Text className='text' w='200px'>Long Term Capital Gains (Charged to tax @ 10%) 10%</Text>
     <Input background={'#e0e0e0 !important'} value=" "  width={'50px'}/>
     <Input background={'#e0e0e0 !important'} value=" " width={'150px'} />
     </Box> : null
    }

    {tax === "Individual" ? <Box className='advanceTax_div_input'>
     <Text className='text' w='200px'>Winnings from Lottery, Crossword Puzzles, etc 30%</Text>
     <Input background={'#e0e0e0 !important'} value=" "  width={'50px'}/>
     <Input background={'#e0e0e0 !important'} value=" " width={'150px'} />
     </Box> : null
    }

   {tax === "Individual" && <Box className='advanceTax_div bg'>
    <Text className='text'>Income Tax after relief u/s 87A</Text>
    <Input background={'#e0e0e0 !important'} value=" "  />
    </Box>}

    <Box className='advanceTax_div'>
    <Text className='text'>Surcharge</Text>
    <Input background={'#e0e0e0 !important'} value=" "  />
    </Box>

    <Box className='advanceTax_div'>
    <Text className='text'>Health and Education Cess</Text>
    <Input background={'#e0e0e0 !important'} value=" "  />
    </Box>
    
    <Box className='advanceTax_div bg'>
    <Text className='text'>Total Tax Liability</Text>
    <Input background={'#e0e0e0 !important'} value=" "  />
    </Box>
    
    <Box className='advanceTax_div'>
    <Text className='text'>Relief</Text>
    <Input  value={relief == 0 ? " ": relief}  onChange={(e) => setRelief(parseFloat(e.target.value))} type='number'/>
    </Box>
    
    <Box className='advanceTax_div bg'>
    <Text className='text'>TDS/TCS/MAT (AMT) Credit Utilized</Text>
    <Input value={creditUtilized == 0 ? " ": creditUtilized}  onChange={(e) => setCreditUtilized(parseFloat(e.target.value))} type='number'
     bg='#fff'/>
    </Box>

    <Box className='advanceTax_div'>
    <Text className='text'>Assessed Tax</Text>
    <Input background={'#e0e0e0 !important'} value={acessedTax == 0  ? " " : acessedTax} fontWeight={'bold'}/>
    </Box>

    <Box display="flex" justifyContent="center" mt={4}>
    <Button colorScheme="green" mr={4} onClick={handleSubmit}>Submit</Button>
      <Button colorScheme="blue" onClick={()=>window.location.reload()}> Reset</Button>
    </Box>
    {submit === true ? <>
      <Table2 value={acessedTax} />
    <Table1 value={acessedTax} /> 
    </>: null}
    </div>
  )
}

export default AdvanceTax

