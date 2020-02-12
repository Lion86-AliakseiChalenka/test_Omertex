import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';

export const CustomizedTextField = ({input, label, meta: {touched, error}, required, disabled, ...custom}) => {
    return (<>
            <TextField
                variant="outlined"
                size={'small'}
                required={required}
                disabled={disabled}
                {...input}
                {...custom}
            />
            {touched && ((error && <span style={{color: '#bf4557', fontSize: '0.8rem'}}><span><ErrorIcon fontSize={'small'}/></span>{error}</span>))}
        </>
        )
    }



