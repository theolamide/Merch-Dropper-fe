import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    jumboParent:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        border: "1px solid red",
        padding: 0
    },
    column: {
        border: "1px solid green",
        margin: 0,
        padding: 0
    },
    row: {
        border: "1px solid purple",
        width: "100%",
        margin: 0
    },
    container:{
        border: "1px solid orange",
        minWidth: 1000,
        margin: 0
        
    }
})