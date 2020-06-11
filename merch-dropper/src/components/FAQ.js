import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    height: "auto",
    margin: 50 
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
  panel: {
    borderBottom: "1px solid F3F3F3"
  },
  

}));

const FAQ = () =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1 style={{textAlign: "center", marginBottom: 50, fontSize: 34, color: "#262626"}}>Frequently Asked Questions</h1>
      <ExpansionPanel className={classes.expansion}>
      <ExpansionPanelSummary
        className={classes.panel}
          expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>What is Stripe?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Stripe is a software that allows stores to accept payments online.  There is a 2.9% + $0.30 fee from stripe for each transaction.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.expansion}>
        <ExpansionPanelSummary
        className={classes.panel}
          expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>How do I add products to my store?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            From your dashboard, you will click on "Add Product".  From there you will upload the design that you would like to have on your merchandise, and select a color.  Then click on preview design.  If you are satisfied, click on Save & Continue.  This will take you to a page where you can name your item, give it a price, and set a description.  It is as easy at that.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel >
      <ExpansionPanel className={classes.expansion}>
      <ExpansionPanelSummary
      className={classes.panel}
          expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>How do I share my store with others?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            When you create a store, you are able to chose a personalized name for your store.  You can share the address with anyone that you would like to purchase from your website.  The link will be merchdropper.store/"YourStore"
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.expansion}>
      <ExpansionPanelSummary
      className={classes.panel}
          expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>When a buyer buys one of my products, how will my order be fulfilled?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            MerchDropper works with a drop shipment company.  When the buyer places their order, the order gets sent to scalable press.  Then scalable press will print the merchandise as ordered and will also ship to the buyer.  Leaving it hands-free for you.  
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
      <ExpansionPanelSummary
      className={classes.panel}
          expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>How is my profit per item calculated?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Profit is calculated by taking the price you are setting, subtracting the fee for the product from scalable press, and lastly taking the 2.9% fee into account from Stripe.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  )
}

  export default FAQ;