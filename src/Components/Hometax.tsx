import {useState} from 'react'
import '../css/AdvanceTax.css'
import {Box,Text,Input,Button,Checkbox,useToast} from '@chakra-ui/react'

const Hometax = () => {
    const [sum1,setSum1] = useState(0);
    const [sum2,setSum2] = useState(0);
    const [sum3,setSum3] = useState(0);
    const [sum4,setSum4] = useState(0);
    const [sum5,setSum5] = useState(0);
    const [check,setCheck] = useState(false)
    const [submit,setSubmit] = useState(false)
    const toast = useToast()
    const tenPercent = (sum1 + sum2)*0.1;
    const a = sum4;
    const b=sum5 - tenPercent;
    let c
    if(check){
      c = (sum1 + sum2)*0.5;
    } 
    else {
      c = (sum1 + sum2)*0.4;
    }
    const exempted = Math.min(a,b,c) > 0 ? Math.min(a,b,c) : 0;
    const taxable = sum4 - exempted;

  return (
    <Box className="advanceTax">
    <Box className='advanceTax_div bg'>
    <Text className='text'>Basic salary</Text>
    <Input type='number' bg='#fff'value={sum1 == 0 ? "" : sum1} onChange={(e) => setSum1(parseFloat(e.target.value))}/>
    </Box>

    <Box className='advanceTax_div'>
    <Text className='text'>DA forming part of salary</Text>
    <Input type='number' bg='#fff'value={sum2 == 0 ? "" : sum2} onChange={(e) => setSum2(parseFloat(e.target.value))}/>
    </Box>

    <Box className='advanceTax_div bg'>
    <Text className='text'>Commission (as % of turnover achieved by the employee)</Text>
    <Input type='number' bg='#fff' value={sum3 == 0 ? "" : sum3}  onChange={(e) => setSum3(parseFloat(e.target.value))}/>
    </Box>

    <Box className='advanceTax_div'>
    <Text className='text'>HRA Received</Text>
    <Input type='number' bg='#fff' value={sum4 == 0 ? "" : sum4}  onChange={(e) => setSum4(parseFloat(e.target.value))}/>
    </Box>

    <Box className='advanceTax_div bg'>
    <Text className='text'>Rent Paid</Text>
    <Input type='number' bg='#fff' value={sum5 == 0 ? "" : sum5}  onChange={(e) => setSum5(parseFloat(e.target.value))}/>
    </Box>

    <Box className='advanceTax_div'>
    <Text className='text'>Tick if residing in metro city.</Text>
    <Checkbox mr={'100px'} onChange={(e) => {
        if(e.target.checked == true){
            setCheck(true)
        }
    }}>(Tick if Yes)</Checkbox>
    </Box>

    <Box className='advanceTax_div bg'>
    <Text className='text'>Exempted House Rent Allowance</Text>
    <Input type='string' background={'#e0e0e0 !important'} fontWeight={'bold'} value={submit ? `${exempted}.00` : "0.00"} />
    </Box>

    <Box className='advanceTax_div'>
    <Text className='text'>Taxable House Rent Allowance</Text>
    <Input type='string' background={'#e0e0e0 !important'} fontWeight={'bold'} value={submit ? `${taxable}.00` : "0.00"}/>
    </Box>

    <Box display="flex" justifyContent="center" mt={4}>
    <Button colorScheme="green" mr={4} onClick={() => {
      toast({
        title: 'Success',
        status: 'success',
        position:'top-right',
        duration: 5000,
        isClosable: true,
      })
      setSubmit(true)
    }} >Submit</Button>
      <Button colorScheme="blue" onClick={()=>window.location.reload()}> Reset</Button>
    </Box>
    </Box>
  )
}

export default Hometax
