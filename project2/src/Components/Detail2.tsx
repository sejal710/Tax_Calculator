import React,{useState} from 'react'
import { Text,Box,Input,Checkbox} from '@chakra-ui/react'

interface Detail2Props {
    data: (value:string) => void;
}

const Detail2:React.FC<Detail2Props> = ({data}) => {
    const [first,setFirst] = useState("");
    const [secound,setSecound] = useState("");
    const [third,setThird] = useState("");
    const [fourth,setFourth] = useState("")
    const [check1,setCheck1] = useState(0)
    const [check2,setCheck2] = useState(0);
    data(`${(check1+check2)+(Number(first)+Number(secound)+Number(third)+Number(fourth))}`);
  return (
    <Box className='advanceTax_showDetail'>
    <First sum = {setFirst}/>
    <Box className='advanceTax_div' bg='#333 !important'>
      <Text className='text' color={'#fff'}>Total</Text>
      <Input  type='number' background={'#e0e0e0 !important'} fontWeight={'bold'} value={first}/>
    </Box>
    <Secound sum={setSecound} />
    <Box className='advanceTax_div'>
      <Text className='text'>Deduction for maintenance / medical treatment of dependent (u/s 80DD)</Text>
      <Input  type='number' background={'#e0e0e0 !important'} fontWeight={'bold'} value={check1}/>
    </Box>
    <Box className='advanceTax_div'>
      <Text className='text' fontWeight={'bold'}><Checkbox onChange={(e) => {
        if(e.target.checked === true){
            setCheck1(75000)
        }
        else{
            setCheck1(0)
        }
      }} >Checkbox</Checkbox>Tick if 80DD is claimed</Text>
    </Box>
    <Box className='advanceTax_div'>
      <Text className='text' fontWeight={'bold'}><Checkbox onChange={(e) => {
        if(e.target.checked === true && check1 === 75000){
            setCheck1(125000)
        }
        else if(e.target.checked === false && check1 >= 75000){
            setCheck1(75000);
        }
      }}  >Checkbox</Checkbox>Tick if severe disability</Text>
    </Box>
     <Third sum={setThird}/>

    <Box className='advanceTax_div'>
      <Text className='text'>Deduction for maintenance / medical treatment of dependent (u/s 80DD)</Text>
      <Input  type='number' background={'#e0e0e0 !important'} fontWeight={'bold'} value={check2}/>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text' fontWeight={'bold'}><Checkbox onChange={(e) => {
        if(e.target.checked === true){
            setCheck2(75000)
        }
        else{
            setCheck2(0)
        }
      }} >Checkbox</Checkbox>Tick if 80DD is claimed</Text>
    </Box>
    <Box className='advanceTax_div'>
      <Text className='text' fontWeight={'bold'}><Checkbox onChange={(e) => {
        if(e.target.checked === true && check2 === 75000){
            setCheck2(125000)
        }
        else if(e.target.checked === false && check2 >= 75000){
            setCheck2(75000);
        }
      }}  >Checkbox</Checkbox>Tick if severe disability</Text>
    </Box> 
    <Fourth sum={setFourth} />
    
    </Box>
  )
}

type FirstProps = {
    sum: (value: string) => void;
};

const First = ({sum}:FirstProps) => {
    const [sum1,setSum1] = useState(0);
    const [sum2,setSum2] = useState(0);
    const [sum3,setSum3] = useState(0);
    const [sum4,setSum4] = useState(0);
    const [sum5,setSum5] = useState(0);
    const [sum6,setSum6] = useState(0);
    const [sum7,setSum7] = useState(0);
    const [sum8,setSum8] = useState(0);
    const [sum9,setSum9] = useState(0);
    const [sum10,setSum10] = useState(0);
    const [sum11,setSum11] = useState(0);
    const [sum12,setSum12] = useState(0);
    const [sum13,setSum13] = useState(0);
    const [sum14,setSum14] = useState(0);
    const [sum15,setSum15] = useState(0);
    sum(`${sum1+sum2+sum3+sum4+sum5+sum6+sum7+sum8+sum9+sum10+sum11+sum12+sum13+sum14+sum15}`)

    return(
        <>
        <Box className='advanceTax_div'>
        <Text className='text'>Life Insurance premium paid</Text>
        <Input  type='number' bg='#fff' value={sum1 == 0 ? " " : sum1} onChange={(e) => setSum1(parseFloat(e.target.value))} />
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Payment for annuity plan</Text>
        <Input  type='number' bg='#fff' value={sum2 == 0 ? " " : sum2} onChange={(e) => setSum2(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Contribution toward provident fund / PPF</Text>
        <Input  type='number' bg='#fff'value={sum3 == 0 ? " " : sum3} onChange={(e) => setSum3(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Investment in NSC (VIII issue) + Interest</Text>
        <Input  type='number' bg='#fff' value={sum4 == 0 ? " " : sum4} onChange={(e) => setSum4(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Contribution toward ULIP</Text>
        <Input  type='number' bg='#fff' value={sum5 == 0 ? " " : sum5} onChange={(e) => setSum5(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Contribution toward notified pension fund by MF/UTI</Text>
        <Input  type='number' bg='#fff' value={sum6 == 0 ? " " : sum6} onChange={(e) => setSum6(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Re-payment of housing loan etc</Text>
        <Input  type='number' bg='#fff' value={sum7 == 0 ? " " : sum7} onChange={(e) => setSum7(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Tuition fees paid for children</Text>
        <Input  type='number' bg='#fff'value={sum8 == 0 ? " " : sum8} onChange={(e) => setSum8(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>5 Years fixed deposit with PO or Schedule Bank</Text>
        <Input  type='number' bg='#fff'value={sum9 == 0 ? " " : sum9} onChange={(e) => setSum9(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Contribution toward NPF</Text>
        <Input  type='number' bg='#fff' value={sum10 == 0 ? " " : sum10} onChange={(e) => setSum10(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Employee's / Self-employed contribution toward NPS (up to 20%) (u/s 80CCD)</Text>
        <Input  type='number' bg='#fff' value={sum11 == 0 ? " " : sum11} onChange={(e) => setSum11(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Additional contribution towards NPS [u/s 80CCD(1B)]</Text>
        <Input  type='number' bg='#fff'value={sum12 == 0 ? " " : sum12} onChange={(e) => setSum12(parseFloat(e.target.value))}/>
        </Box>


        <Box className='advanceTax_div'>
        <Text className='text'>Employer's contribution toward NPS (u/s 80CCD)</Text>
        <Input  type='number' bg='#fff' value={sum13 == 0 ? " " : sum13} onChange={(e) => setSum13(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Deposit with Sukanya Samridhi Accounts</Text>
        <Input  type='number' bg='#fff'value={sum14 == 0 ? " " : sum14} onChange={(e) => setSum14(parseFloat(e.target.value))}/>
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Any other deductable (u/s 80C)</Text>
        <Input  type='number' bg='#fff'value={sum15 == 0 ? " " : sum15} onChange={(e) => setSum15(parseFloat(e.target.value))}/>
        </Box>
        </>
    )
}

type SecoundProps = {
    sum: (value: string) => void;
};
const Secound = ({sum}:SecoundProps) => {
    const [sum1,setSum1] = useState(0);
    const [sum2,setSum2] = useState(0);
    const [sum3,setSum3] = useState(0);
    const [sum4,setSum4] = useState(0);
    const [sum5,setSum5] = useState(0)
    sum(`${sum1+sum2+sum3+sum4+sum5}`)
    return(
        <>
        <Box className='advanceTax_div'>
        <Text className='text'>Medi-claim premium (u/s 80D)</Text>
        <Input  type='number' bg='#fff' value={sum1 == 0 ? " " : sum1} onChange={(e) => setSum1(parseFloat(e.target.value))} />
        </Box>
        <Box className='advanceTax_div'>
        <Text className='text'>Actual payment towards medical treatment (u/s 80DDB )</Text>
        <Input  type='number' bg='#fff' value={sum2 == 0 ? " " : sum2} onChange={(e) => setSum2(parseFloat(e.target.value))} />
        </Box>
        <Box className='advanceTax_div'>
        <Text className='text'>Interest payable on loan for residentials house property (u/s 80EEA )</Text>
        <Input  type='number' bg='#fff' value={sum3 == 0 ? " " : sum3} onChange={(e) => setSum3(parseFloat(e.target.value))} />
        </Box>
        <Box className='advanceTax_div'>
        <Text className='text'>Interest payable on loan for purchase of electric vehicles(u/s 80EEB )</Text>
        <Input  type='number' bg='#fff' value={sum4 == 0 ? " " : sum4} onChange={(e) => setSum4(parseFloat(e.target.value))} />
        </Box>
        <Box className='advanceTax_div'>
        <Text className='text'>Donations (u/s 80G)</Text>
        <Input  type='number' bg='#fff' value={sum5 == 0 ? " " : sum5} onChange={(e) => setSum5(parseFloat(e.target.value))} />
        </Box>
        </>
    )
}

type ThirdProps = {
    sum: (value: string) => void;
};
const Third = ({sum}:ThirdProps) => {
    const [sum1,setSum1] = useState(0);
    const [sum2,setSum2] = useState(0);

    sum(`${sum1+sum2}`)
    return(
        <>
        <Box className='advanceTax_div'>
        <Text className='text'>Medi-claim premium (u/s 80D)</Text>
        <Input  type='number' bg='#fff' value={sum1 == 0 ? " " : sum1} onChange={(e) => setSum1(parseFloat(e.target.value))} />
        </Box>
        <Box className='advanceTax_div'>
        <Text className='text'>Actual payment towards medical treatment (u/s 80DDB )</Text>
        <Input  type='number' bg='#fff' value={sum2 == 0 ? " " : sum2} onChange={(e) => setSum2(parseFloat(e.target.value))} />
        </Box>
        </>
    )
}

type FourthProps = {
    sum: (value: string) => void;
};
const Fourth = ({sum}:FourthProps) => {
    const [sum1,setSum1] = useState(0);
    const [sum2,setSum2] = useState(0);
    const [sum3,setSum3] = useState(0);

    sum(`${sum1+sum2+sum3}`)
    return(
        <>
        <Box className='advanceTax_div'>
        <Text className='text'>Medi-claim premium (u/s 80D)</Text>
        <Input  type='number' bg='#fff' value={sum1 == 0 ? " " : sum1} onChange={(e) => setSum1(parseFloat(e.target.value))} />
        </Box>
        <Box className='advanceTax_div'>
        <Text className='text'>Actual payment towards medical treatment (u/s 80DDB )</Text>
        <Input  type='number' bg='#fff' value={sum2 == 0 ? " " : sum2} onChange={(e) => setSum2(parseFloat(e.target.value))} />
        </Box>

        <Box className='advanceTax_div'>
        <Text className='text'>Actual payment towards medical treatment (u/s 80DDB )</Text>
        <Input  type='number' bg='#fff' value={sum3 == 0 ? " " : sum3} onChange={(e) => setSum3(parseFloat(e.target.value))} />
        </Box>
        </>
    )
}
export default Detail2
