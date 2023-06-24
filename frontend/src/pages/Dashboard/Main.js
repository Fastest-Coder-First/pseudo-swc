import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listitems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

const Main = () => {
  const expenses = [
    {
      user_id: '64969239bf68911b25345745',
      date: '2023-06-24',
      amount: 800,
      description: 'Groceries',
      currency: 'INR',
      category: 5,
      type: 2,
      status: 12,
      method: 7,
      card: 'Visa',
      bank: 'Chase Bank',
      merchant: 'Supermarket',
      comments: '',
    },
    {
      user_id: '64969239bf68911b25345745',
      date: '2023-06-24',
      amount: 2500,
      description: 'Dinner with friends',
      currency: 'INR',
      category: 9,
      type: 1,
      status: 3,
      method: 17,
      card: 'Mastercard',
      bank: 'Wells Fargo',
      merchant: 'Restaurant',
      comments: '',
    },
    {
      user_id: '64969239bf68911b25345745',
      date: '2023-06-24',
      amount: 5500,
      description: 'Holiday accommodation',
      currency: 'INR',
      category: 14,
      type: 3,
      status: 6,
      method: 5,
      card: 'American Express',
      bank: 'CitiBank',
      merchant: 'Hotel',
      comments: '',
    },
    {
      user_id: '64969239bf68911b25345745',
      date: '2023-06-24',
      amount: 120,
      description: 'Books',
      currency: 'INR',
      category: 3,
      type: 2,
      status: 10,
      method: 9,
      card: 'Visa',
      bank: 'US Bank',
      merchant: 'Online Bookstore',
      comments: '',
    },
    {
      user_id: '64969239bf68911b25345745',
      date: '2023-06-24',
      amount: 9200,
      description: 'Vacation expenses',
      currency: 'INR',
      category: 17,
      type: 1,
      status: 2,
      method: 11,
      card: 'Discover',
      bank: 'Wells Fargo',
      merchant: 'Travel Agency',
      comments: '',
    },
    {
      user_id: '64969239bf68911b25345745',
      date: '2023-06-24',
      amount: 75,
      description: 'Movie tickets',
      currency: 'INR',
      category: 11,
      type: 3,
      status: 15,
      method: 19,
      card: 'Visa',
      bank: 'Bank of America',
      merchant: 'Cinema',
      comments: '',
    },
    {
      user_id: '64969239bf68911b25345745',
      date: '2023-06-24',
      amount: 3100,
      description: 'Home improvement',
      currency: 'INR',
      category: 6,
      type: 2,
      status: 8,
      method: 16,
      card: 'Mastercard',
      bank: 'Chase Bank',
      merchant: 'Home Improvement Store',
      comments: '',
    },
    {
      user_id: '64969239bf68911b25345745',
      date: '2023-06-24',
      amount: 95,
      description: 'Gym membership',
      currency: 'INR',
      category: 10,
      type: 1,
      status: 5,
      method: 4,
      card: 'American Express',
      bank: 'CitiBank',
      merchant: 'Fitness Center',
      comments: '',
    },
    {
      user_id: '64969239bf68911b25345745',
      date: '2023-06-24',
      amount: 680,
      description: 'Restaurant lunch',
      currency: 'INR',
      category: 8,
      type: 3,
      status: 13,
      method: 18,
      card: 'Visa',
      bank: 'US Bank',
      merchant: 'Restaurant',
      comments: '',
    },
    {
      user_id: '64969239bf68911b25345745',
      date: '2023-06-24',
      amount: 4200,
      description: 'Electronics purchase',
      currency: 'INR',
      category: 16,
      type: 2,
      status: 4,
      method: 14,
      card: 'Discover',
      bank: 'Bank of America',
      merchant: 'Electronics Store',
      comments: '',
    }
  ];
  const [transactions, setTransactions] = React.useState(expenses);
    return (
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders data={transactions}/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
    );
}
export default Main;