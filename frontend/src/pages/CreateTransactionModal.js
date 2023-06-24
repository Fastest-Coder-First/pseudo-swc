import React from 'react';
import { useFormik } from 'formik';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const CreateTransactionModal = ({ open, onClose }) => {
  const formik = useFormik({
    initialValues: {
      amount: '',
      currency: '',
      status: '',
      category: '',
      type: '',
      description: '',
      method: '',
      card: '',
      bank: '',
      merchant: '',
      comments: '',
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // Perform form submission logic here
      onClose();
    },
  });

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create Transaction</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Amount"
            name="amount"
            type="number"
            value={formik.values.amount}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            label="Currency"
            name="currency"
            value={formik.values.currency}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            label="Status"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            label="Category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            label="Type"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            label="Method"
            name="method"
            value={formik.values.method}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            label="Card"
            name="card"
            value={formik.values.card}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            label="Bank"
            name="bank"
            value={formik.values.bank}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            label="Merchant"
            name="merchant"
            value={formik.values.merchant}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            label="Comments"
            name="comments"
            value={formik.values.comments}
            onChange={formik.handleChange}
            fullWidth
          />
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Create
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTransactionModal;