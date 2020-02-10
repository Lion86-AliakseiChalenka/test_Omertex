import Radio from "@material-ui/core/Radio";
import clsx from "clsx";
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles({
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
});

function StyledCheckbox(props) {
    const classes = useStyles();
    return (
        <Checkbox
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.iconCheckbox, classes.checkedIconCheckbox)} />}
            icon={<span className={classes.iconCheckbox} />}
            inputProps={{ 'aria-label': 'decorative checkbox' }}
            {...props}
        />
    );
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

const CustomizedSelect = (props) => {
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