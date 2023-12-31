import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsightsIcon from '@mui/icons-material/Insights';
import { Link, useLocation } from "react-router-dom";
export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to={'expenses'} style={{"textDecoration": "none"}}><ListItemText primary="Expenses" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <Link to={'income'} style={{"textDecoration": "none"}}><ListItemText primary="Income" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <Link to={'investment'} style={{"textDecoration": "none"}}><ListItemText primary="Investments" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <InsightsIcon />
      </ListItemIcon>
      <ListItemText primary="Advanced Insights" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);