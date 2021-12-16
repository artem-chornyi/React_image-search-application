import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles((theme) => styles(theme));

const ViewContainer = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
    <div className={classes.viewContainer}>
            <div className={classes.wrapper} >
                { children }
            </div>
    </div>
    )
};

export default ViewContainer;
