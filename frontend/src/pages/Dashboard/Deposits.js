import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Title from './Title';
import CreateTransactionModal from './CreateTransactionModal';


export default function Deposits() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClink = () => {
    setIsOpen(!isOpen);
  }
  const handleClose = () => {
    setIsOpen(false);
  }
  return (
    <React.Fragment>
      <Title>Recent Expenses</Title>
      <Typography component="p" variant="h4">
        30240.00 INR
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {new Date().toDateString()}
      </Typography>
      <div>
        <Button color="primary" href="#" onClick={handleClink}>
          Add Expense
        </Button>
      </div>
      {isOpen && <div>
        <CreateTransactionModal handleClose = {handleClose} open ={isOpen}/>
      </div>}
    </React.Fragment>
  );
}