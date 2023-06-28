import React, { useState } from 'react'
import {Box,Select,Text, useToast,Button} from '@chakra-ui/react'


interface Table1Props {
    table: React.Dispatch<React.SetStateAction<{ form: object; table1: object; total:number }>>;
  }

const Table1: React.FC<Table1Props> = ({table}) => {
    const year = ['2010-11','2011-12','2012-13','2013-14','2014-15','2015-16','2016-17','2018-19','2019-20','2020-21',
      '2021-22','2022-23','2023-24']
    const [data,setData] = useState({
        year:"",
        taxPayer:" "
    })
    const toast = useToast()
    const handleSubmit = () => {
        if(data.year == "" || data.taxPayer == ""){
            toast({
                title: 'Oops fill Properly',
                status: 'error',
                position:'top-right',
                duration: 3000,
                isClosable: true,
              })
        }
        else{
          table((prevState: { form: object; table1: object; total:number}) => ({
            ...prevState,
            table1 : data
          }));
            toast({
                title: 'Step-2',
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
    <Text className='text'>Assessment Year</Text>
    <Select
  placeholder="Select"
  w="200px"
  border="1px solid #ccc"
  bg="#fff"
  onChange={(e) =>
    setData((prev) => ({
      ...prev,
      year: e.target.value
    }))
  }
>
  {year &&
    year.map((el, i) => (
      <option value={el} key={i}>
        {el}
      </option>
    ))}
</Select>

    </Box>
    
    <Box className='advanceTax_div'>
      <Text className='text'>Tax Payer</Text>
      <Select  placeholder='Select' w='200px' border='1px solid #ccc' bg='#fff'
       onChange={(e) =>
        setData((prev) => ({
          ...prev,
          taxPayer: e.target.value
        }))
      }
      >
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
     
    <Box display="flex" justifyContent="center" mt={4}>
    <Button colorScheme="green" mr={4} onClick={handleSubmit} >Submit</Button>
      <Button colorScheme="blue" onClick={()=>window.location.reload()}> Reset</Button>
    </Box>
    </div>
  )
}

export default Table1
