import {FormControl} from "@material-ui/core";
import {FormControlLabel} from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    fieldset: {
        height: 600,
        width: '95%',
        padding: 20,
        border: '1px grey solid'
    },
    iconRadio: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIconRadio: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            backgroundColor: '#137cbd',
            opacity: '30%'
        }
    },
    disabledIconRadio: {
        backgroundColor: '#137cbd',
        opacity: '60%'
    },
    textFieldGroup: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    textField: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: 10,
        letterSpacing: '0.00938em',
    },
    enabledLabel: {
        paddingRight: 10
    },
    disabledLabel: {
        opacity: '60%'
    },
    enabledSpan: {
        color: 'red'
    },
    disabledSpan: {
        opacity: '60%'
    },
    disabledIcon: {
        opacity: '60%'
    },
    iconCheckbox: {
        borderRadius: 3,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIconCheckbox: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
    button: {
        margin: 10,
        width: 100,
        borderRadius: 25
    },
    buttonOutlined: {
        borderColor: '#137cbd',
        color: '#137cbd'
    },
    buttonContained: {
        backgroundColor: '#137cbd',
        '&:hover': {
            backgroundColor: '#106091'
        }
    },
    buttonGroup: {
        borderLeft: '1px solid grey',
        borderRight: '1px solid grey',
        borderBottom: '1px solid grey'
    },
    select: {
        height: 40
    }
});

export const StyledRadio = (props) => {
    const classes = useStyles();
    return (
        <Radio className={classes.root}
               icon={<span className={classes.iconRadio}/>}
               checkedIcon={<span className={clsx(classes.iconRadio, classes.checkedIconRadio)}/>}
               color="default"
               {...props}/>
    )
}

export const CustomizedRadioGroupIP = ({ input, children, isChecked, setIsChecked, ...rest }) => {
    return (
        <FormControl>
            <RadioGroup {...input} {...rest} onChange={()=>{setIsChecked(!isChecked)}}>
                <FormControlLabel checked={isChecked} control={<StyledRadio />} value="obtain an IP address automatically (DHCP/BootP)" label="Obtain an IP address automatically (DHCP/BootP)" />
                <FormControlLabel checked={!isChecked} control={<StyledRadio />}  value="use the following IP address" label="Use the following IP address" />
            </RadioGroup>
        </FormControl>
    )
}

export const CustomizedRadioGroupDNS = ({ input, children, isChecked, setIsChecked, ...rest }) => {
    return (
        <FormControl>
            <RadioGroup {...input} {...rest} onChange={()=>{setIsChecked(!isChecked)}}>
                <FormControlLabel checked={isChecked} control={<StyledRadio />} value="obtain DNS server address automatically" label="Obtain DNS server address automatically"/>
                <FormControlLabel checked={!isChecked} control={<StyledRadio />}  value="use the following DS server address" label="Use the following DS server address" />
            </RadioGroup>
        </FormControl>
    )
}