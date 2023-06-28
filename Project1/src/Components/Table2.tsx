
import { Box, Table, Thead, Tbody, Tr, Th, Td,Text } from '@chakra-ui/react';
import React from 'react';

interface Table2Props {
  value:number
}

const Table2:React.FC<Table2Props> = ({value}) => {
  return (
    <Box mt={4} border={'1px solid #ccc'} m='20px'>
        <Text size='30px' fontWeight={'bold'} textAlign={'center'}>Advance Tax Installments</Text>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th isNumeric>Advance Tax Intallments</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>First installment payable for the period April 1, 2023 to June 15, 2023</Td>
            <Td isNumeric>{Math.floor(value * 0.15)}.00</Td>
          </Tr>
          <Tr>
            <Td>Second installment payable for the period June 16, 2023 to September 15, 2023</Td>
            <Td isNumeric>{Math.floor(value * 0.25)}.00</Td>
          </Tr>
          <Tr>
            <Td>Third installment payable for the period September 16, 2023 to December 15, 2023</Td>
            <Td isNumeric>{Math.floor(value * 0.25)}.00</Td>
          </Tr>
          <Tr>
            <Td>Fourth installment payable for the period December 16, 2023 to March 15, 2024</Td>
            <Td isNumeric>{Math.floor(value * 0.25)}.00</Td>
          </Tr>
          <Tr>
            <Td>Last installment payable for the period March 16, 2024 to March 31, 2024</Td>
            <Td isNumeric>{Math.floor(value * 0.10)}.00</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
  }

export default Table2;