import Radio from "@material-ui/core/Radio";
import clsx from "clsx";
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles({
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
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
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
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
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
    }
});

function StyledRadio (props) {
    const classes = useStyles();
    return (
        <Radio className={classes.root}
               disableRipple
               icon={<span className={classes.iconRadio} />}
               checkedIcon={<span className={clsx(classes.iconRadio, classes.checkedIconRadio)} />}
               color="default"
               {...props}/>
    )
}

function FieldLabel (props) {
    const classes = useStyles();
    return (
        <>
            {!props.disabled ?
                <label className={classes.enabledLabel}>
                    {props.name} {props.isFieldRequired ? <span className={classes.enabledSpan}>*</span> : null}
                </label>
                : <label className={clsx(classes.enabledLabel, classes.disabledLabel)}>
                    {props.name} {props.isFieldRequired ? <span className={clsx(classes.enabledSpan, classes.disabledSpan)}>*</span> : null}
                </label>
            }
        </>
    )

}

const CustomizedRadios = (props) => {
    const classes = useStyles();
    const [isDisabled, setIsDisabled] = useState(true)
    const handleChange = event => {
        setIsDisabled(!isDisabled); };
    return (
        <RadioGroup defaultValue="obtain an IP address automatically (DHCP/BootP)" aria-label="gender" name="customized-radios"
                    onChange={handleChange}>
            <FormControlLabel value="obtain an IP address automatically (DHCP/BootP)" control={<StyledRadio />} label="Obtain an IP address automatically (DHCP/BootP)" />
            <FormControlLabel value="use the following IP address" control={<StyledRadio />} label="Use the following IP address"/>
            <div className={classes.textFieldGroup} >
                {props.data.map((el, i)=><div key={i} className={classes.textField}>
                    <FieldLabel isFieldRequired={el.isRequired} name={el.name} disabled={isDisabled}/>
                    <TextField  variant="outlined" size="small" required={el.isRequired} disabled={isDisabled}/>
                </div>)}
            </div>
        </RadioGroup>
    )
}

export default CustomizedRadios