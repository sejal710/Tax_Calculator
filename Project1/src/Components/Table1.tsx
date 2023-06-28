import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td,Text } from '@chakra-ui/react';

interface Table1Props {
   value:number
}

const Table1:React.FC<Table1Props> = ({value}) => {
  return (
    <Box mt={4} border={'1px solid #ccc'} m='20px'>
        <Text size='30px' fontWeight={'bold'} textAlign={'center'}>Advance Tax liability</Text>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th isNumeric>Advance Tax liability</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Advance tax payable upto June 15, 2023 (Cumulative)</Td>
            <Td isNumeric>0.00</Td>
          </Tr>
          <Tr>
            <Td>Advance tax payable upto September 15, 2022 (Cumulative)</Td>
            <Td isNumeric>0.00</Td>
          </Tr>
          <Tr>
            <Td>Advance tax payable upto December 15, 2022 (Cumulative)</Td>
            <Td isNumeric>0.00</Td>
          </Tr>
          <Tr>
            <Td>Advance tax payable upto March 15, 2023 (Cumulative)</Td>
            <Td isNumeric>0.00</Td>
          </Tr>
          <Tr>
            <Td>Advance tax payable upto March 31, 2024 (Cumulative)</Td>
            <Td isNumeric>{value}.00</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default Table1
