import React from 'react'
import {Box,Text,Button, useToast} from '@chakra-ui/react'
interface TableProps {
    table : {form:{ [key: string]: string };table1:{ [key: string]: string };total:number};
}

const Table:React.FC<TableProps> = ({table}) => {
    const formData = {
        name: '',
        email: '',
        father_name: '',
        address: '',
        mobile_no: '',
      };
    const table1Data = {
        year:"",
        taxPayer:" "
    } 
    const toast = useToast()
    const handleReset = () => {
        toast({
            title: 'Thank You!',
            status: 'success',
            position: 'top-right',
            duration: 3000,
            isClosable: true,
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
    } 
  return (
    <div>
    <Box className='advanceTax_div bg'>
      <Text className='text'>Name</Text>
      <Text className='text tab'>{table.form.name || formData.name}</Text>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Email</Text>
      <Text className='text tab'>{table.form.email || formData.email}</Text>
    </Box>

    <Box className='advanceTax_div bg'>
      <Text className='text'>Father's Name</Text>
      <Text className='text tab'>{table.form.father_name || formData.father_name}</Text>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Address</Text>
      <Text className='text tab'>{table.form.address || formData.address}</Text>
    </Box>

    <Box className='advanceTax_div bg'>
      <Text className='text'>Mobile Number</Text>
      <Text className='text tab'>{table.form.mobile_no || formData.mobile_no}</Text>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Assessment Year</Text>
      <Text className='text tab'>{table.table1.year || table1Data.year}</Text>
    </Box>

    <Box className='advanceTax_div bg'>
      <Text className='text'>Tax Payer</Text>
      <Text className='text tab'>{table.table1.taxPayer || table1Data.taxPayer}</Text>
    </Box>

    <Box className='advanceTax_div'>
      <Text className='text'>Net Taxable Income</Text>
      <Text className='text tab'>{table.total || "00"}</Text>
    </Box>

    <Box display="flex" justifyContent="center" mt={4}>
      <Button colorScheme="blue" onClick={handleReset}> Reset</Button>
    </Box>
    </div>
  )
}

export default Table
