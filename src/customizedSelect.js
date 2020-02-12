import {Select} from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    select: {
        height: 40,
        borderRadius: 3,
        borderColor: 'light-dark',
        fontSize: '1rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: 10,
        letterSpacing: '0.00938em',
        '&:hover': {
            borderColor: 'black'
        },
    }
});

export const CustomizedSelect = ({
                                     input,
                                     label,
                                     meta: {touched, error},
                                     children, required
                                 }) => {
    const classes = useStyles()
    return (
        <>
            <select
                className={classes.select}
                required={required}
                children={children}
                disabled={false}
                {...input}
                onChange={(event, value) => {
                    input.onChange(event.target.value)
                }}
                inputProps={{
                    name: 'wirelessNetworkName-ws',
                    id: 'filled-age-native-simple',
                }}>
            </select>
            {touched && ((error &&
                <span style={{color: '#bf4557', fontSize: '0.8rem'}}><span><ErrorIcon fontSize={'small'}/></span>{error}</span>))}
        </>
    )
}




