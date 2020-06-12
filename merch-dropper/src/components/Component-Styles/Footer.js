import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    jumboParent:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            border: "1px solid red",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "80%"
        }
    },
    column: {      
        padding: 50,        
        textAlign: "center"
    },
    text:{
        paddingTop: 100,
         [theme.breakpoints.down('md')]: {
             padding: 0
         }
    },
    row: {
        width: "70%"
    },
}));
