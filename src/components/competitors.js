import '../App.css';
import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Competitors({competitors}) {
  return (
    <div className='competitors'>
      <h2>Competitors</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Features</StyledTableCell>
            <StyledTableCell>Stengths</StyledTableCell>
            <StyledTableCell>Weaknesses</StyledTableCell>
            <StyledTableCell>Opportunities</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {competitors.map((competitor) => (
            <StyledTableRow key={competitor.name}>
              <StyledTableCell component="th" scope="row">
                {competitor.name}
              </StyledTableCell>
              <StyledTableCell>
                {competitor.product}
              </StyledTableCell>
              <StyledTableCell>
                {competitor.price}
              </StyledTableCell>
              <StyledTableCell>
                {competitor.features}
              </StyledTableCell>
              <StyledTableCell>
                {competitor.strengths}
              </StyledTableCell>
              <StyledTableCell>
                {competitor.weaknesses}
              </StyledTableCell>
              <StyledTableCell>
                {competitor.opportunities}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}

export default Competitors;
