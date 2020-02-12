import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles({
    textField: {
        paddingLeft: 10
    },
    error: {
        position: 'absolute',
        left: '10%', top: '5px',
        color: '#bf4557',
        fontSize: '0.8rem'
    }
});

export const CustomizedTextField = ({input, label, meta: {touched, error}, required, disabled, ...custom}) => {
    const classes = useStyles()
    return (<>
            <TextField
                className={classes.textField}
                variant="outlined"
                size={'small'}
                required={required}
                disabled={disabled}
                {...input}
                {...custom}
            />
            {touched && ((error &&
                <span className={classes.error}>
                    <span>
                        <ErrorIcon fontSize={'small'}/>
                    </span>
                    {error}
                    </span>))
            }
        </>
    )
}



