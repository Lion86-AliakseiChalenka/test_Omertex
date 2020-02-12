import ErrorIcon from '@material-ui/icons/Error';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    select: {
        height: 40,
        marginLeft: 10,
        width: 150,
        borderRadius: 3,
        borderColor: '#c4c4c4',
        fontSize: '1rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: 10,
        letterSpacing: '0.00938em'
    },
    activeSelect: {
        '&:hover': {
            borderColor: 'black'
        }
    },
    error: {
        position: 'absolute',
        left: '10%', top: '7px',
        color: '#bf4557',
        fontSize: '0.8rem'
    }
});

export const CustomizedSelect = ({
                                     input,
                                     disabled,
                                     label,
                                     meta: {touched, error},
                                     children, required
                                 }) => {
    const classes = useStyles()
    return (
        <>
            <select
                className={clsx(classes.select, !disabled && classes.activeSelect)}
                required={required}
                children={children}
                disabled={disabled}
                {...input}
                onChange={(event, value) => {
                    input.onChange(event.target.value)
                }}>
            </select>
            {touched && ((error &&
                <span className={classes.error}>
                    <span>
                        <ErrorIcon fontSize={'small'}/>
                    </span>{error}
                    </span>))}
        </>
    )
}




