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

export const CustomizedRadioGroupIP = ({input, children, isChecked, setIsChecked, disabled, ...rest}) => {
    return (
        <RadioGroup {...input} {...rest} onChange={setIsChecked}>
            <FormControlLabel disabled={disabled}
                              checked={isChecked}
                              control={<StyledRadio/>}
                              value="obtain an IP address automatically (DHCP/BootP)"
                              label="Obtain an IP address automatically (DHCP/BootP)"/>
            <FormControlLabel disabled={disabled}
                              checked={!isChecked}
                              control={<StyledRadio/>}
                              value="use the following IP address"
                              label="Use the following IP address"/>
        </RadioGroup>
    )
}

export const CustomizedRadioGroupDNS = ({input, children, isChecked, setIsChecked, disabled, ...rest}) => {
    return (
        <FormControl>
            <RadioGroup {...input} {...rest} onChange={setIsChecked}>
                <FormControlLabel disabled={disabled}
                                  checked={isChecked}
                                  control={<StyledRadio/>}
                                  value="obtain DNS server address automatically"
                                  label="Obtain DNS server address automatically"/>
                <FormControlLabel disabled={disabled}
                                  checked={!isChecked}
                                  control={<StyledRadio/>}
                                  value="use the following DS server address"
                                  label="Use the following DS server address"/>
            </RadioGroup>
        </FormControl>
    )
}