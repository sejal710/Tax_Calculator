import React,{useState} from 'react'
import {Box,Text,Input} from '@chakra-ui/react'

interface Detail2Props {
    data: (value:string) => void;
}

const Detail2:React.FC<Detail2Props> = ({data}) => {
    const [sum1,setsum1] = useState(0)
    const [sum2,setsum2] = useState(0)
    const [sum3,setsum3] = useState(0)
    const [sum4,setsum4] = useState(0)
    const [sum5,setsum5] = useState(0);
    data(`${sum1+sum2+sum3+sum4+sum5}`)
  return (
    <Box className='advanceTax_showDetail'>

     <Box className='advanceTax_showDetail_sum'>
        <Box>
            <Text>Short Term Capital GainS (Other than covered under section 111A)</Text>
        </Box>
        <Box className='advanceTax_showDetail_m'>
            <Sum sum ={setsum1} />
            <Box className='advanceTax_showDetail_min'>
            <Text fontWeight={'bold'}>Total</Text>
            <Input type='number' background={'#e0e0e0 !important'}id='totalInput-1' fontWeight={'bold'} value={sum1}/>
            </Box>
        </Box>
     </Box>

     <Box className='advanceTax_showDetail_sum'>
        <Box>
            <Text>Short Term Capital GainS (Covered under section 111A)</Text>
        </Box>
        <Box className='advanceTax_showDetail_m'>
        <Sum sum ={setsum2} />
            <Box className='advanceTax_showDetail_min'>
            <Text fontWeight={'bold'}>Total</Text>
            <Input type='number' background={'#e0e0e0 !important'}id='totalInput-1' fontWeight={'bold'} value={sum2}/>
            </Box>
        </Box>
     </Box>

     <Box className='advanceTax_showDetail_sum'>
        <Box>
            <Text>Long Term Capital Gains (Charged to tax @ 20%)</Text>
        </Box>
        <Box className='advanceTax_showDetail_m'>
        <Sum sum ={setsum3} />
            <Box className='advanceTax_showDetail_min'>
            <Text fontWeight={'bold'}>Total</Text>
            <Input type='number' background={'#e0e0e0 !important'}id='totalInput-1' fontWeight={'bold'} value={sum3}/>
            </Box>
        </Box>
     </Box>

     <Box className='advanceTax_showDetail_sum'>
        <Box>
            <Text>Long Term Capital Gains (Charged to tax @ 10%)</Text>
        </Box>
        <Box className='advanceTax_showDetail_m'>
        <Sum sum ={setsum4} />
            <Box className='advanceTax_showDetail_min'>
            <Text fontWeight={'bold'}>Total</Text>
            <Input type='number' background={'#e0e0e0 !important'}id='totalInput-1' fontWeight={'bold'} value={sum4}/>
            </Box>
        </Box>
     </Box>

     <Box className='advanceTax_showDetail_sum'>
        <Box>
            <Text>Long Term Capital GainS (Covered under section 112A)</Text>
        </Box>
        <Box className='advanceTax_showDetail_m'>
        <Sum sum ={setsum5} />
            <Box className='advanceTax_showDetail_min'>
            <Text fontWeight={'bold'}>Total</Text>
            <Input type='number' background={'#e0e0e0 !important'}id='totalInput-1' fontWeight={'bold'} value={sum5}/>
            </Box>
        </Box>
     </Box>

     </Box>
  )
}

type SumProps = {
    sum: (value: number) => void;
  };

const Sum = ({sum}: SumProps) => {
    const [value1,setValue1] = useState(0)
    const [value2,setValue2] = useState(0)
    const [value3,setValue3] = useState(0)
    const [value4,setValue4] = useState(0)
    const [value5,setValue5] = useState(0)
     sum(value1+value2+value3+value4+value5)
    return(
        <>
        <Box className='advanceTax_showDetail_min'>
            <Text>From 01/04/2023 to 15/06/2023</Text>
            <Input type='number' bg='#fff' value={value1 ==0 ? " ":value1} onChange={(e) =>setValue1(parseFloat(e.target.value))} />
            </Box>
            <Box className='advanceTax_showDetail_min'>
            <Text>From 16/06/2023 to 15/09/2023</Text>
            <Input type='number' bg='#fff' value={value2 ==0 ? " ":value2} onChange={(e) =>setValue2(parseFloat(e.target.value))}/>
            </Box>
            <Box className='advanceTax_showDetail_min'>
            <Text>From 16/09/2023 to 15/12/2023</Text>
            <Input type='number' bg='#fff' value={value3==0 ? " ":value3} onChange={(e) =>setValue3(parseFloat(e.target.value))} />
            </Box>
            <Box className='advanceTax_showDetail_min'>
            <Text>From 16/12/2023 to 15/03/2024</Text>
            <Input type='number' bg='#fff' value={value4==0 ? " ":value4} onChange={(e) =>setValue4(parseFloat(e.target.value))} />
            </Box>
            <Box className='advanceTax_showDetail_min'>
            <Text>From 16/03/2024 to 31/03/2024</Text>
            <Input type='number' bg='#fff'value={value5==0 ? " ":value5} onChange={(e) =>setValue5(parseFloat(e.target.value))}/>
            </Box>
        </>
    )
}

export default Detail2
