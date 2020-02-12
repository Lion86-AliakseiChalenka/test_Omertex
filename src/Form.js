import {MenuItem} from "@material-ui/core";
import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import LoopRoundedIcon from '@material-ui/icons/LoopRounded';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {Field, reduxForm} from "redux-form";
import {CustomizedRadioGroupIP, CustomizedRadioGroupDNS} from "./styledRadio.js";
import {CustomizedSelect} from "./customizedSelect.js";
import {CustomizedCheckbox} from "./customizedCheckbox.js";
import {CustomizedTextField} from "./customizedTextField.js";
import {StyledRadio} from "./styledRadio.js";
import {validate} from "./validate.js";

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },
    enabledSpan: {
        color: 'red'
    },
    disabledSpan: {
        opacity: '60%'
    }})


const TestForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props
    const [isChecked_ip_es, setIsChecked_ip_es] = useState(true)
    const [isChecked_dns_es, setIsChecked_dns_es] = useState(true)
    const [isChecked_ip_ws, setIsChecked_ip_ws] = useState(true)
    const [isChecked_dns_ws, setIsChecked_dns_ws] = useState(true)
    const classes = useStyles()
    return (
        <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Field name="IP-settings-es" component={CustomizedRadioGroupIP} isChecked={isChecked_ip_es}
                           setIsChecked={setIsChecked_ip_es}>
                        <StyledRadio value="obtain an IP address automatically (DHCP/BootP)"
                                     label="Obtain an IP address automatically (DHCP/BootP)"/>
                        <StyledRadio value="use the following IP address" label="Use the following IP address"/>
                    </Field>
                    <div>
                        <label htmlFor="IP adress">
                        <span>
                            IP Adress: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                        <Field
                            name="ipAdress-es"
                            component={CustomizedTextField}
                            label="IP adress"
                            required={true}
                        />
                    </div>
                    <div>
                        <label htmlFor="Subnet Mask">
                        <span>
                            Subnet Mask: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                        <Field name="subnetMask-es"
                               component={CustomizedTextField}
                               required={true}
                               label="Subnet Mask"/>
                    </div>
                    <div>
                        <label htmlFor="Default Gateway">
                        <span>
                            Default Gateway:
                        </span>
                        </label>
                        <Field name="defaultGateway-es"
                               component={CustomizedTextField}
                               label="Default Gateway"/>
                    </div>
                    <Field name="DNS-settings-es" component={CustomizedRadioGroupDNS} isChecked={isChecked_dns_es}
                           setIsChecked={setIsChecked_dns_es}>
                        <StyledRadio value="obtain DNS server address automatically"
                                     label="Obtain DNS server address automatically"/>
                        <StyledRadio value="use the following DS server address"
                                     label="Use the following DS server address"/>
                    </Field>
                    <div>
                        <label htmlFor="Preferred DNS server">
                        <span>
                            Preferred DNS server: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                        <Field name="preferredDNSServer-es"
                               component={CustomizedTextField}
                               required={true}
                               label="Preferred DNS server"/>
                    </div>
                    <div>
                        <label htmlFor="Alternative DNS server">
                        <span>
                            Alternative DNS server:
                        </span></label>
                        <Field name="alternativeDNSServer-es"
                               component={CustomizedTextField}
                               label="Alternative DNS server"/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <label htmlFor="Enable wifi">
                        <span>
                            Enable wifi:
                        </span>
                            <Field name="enableWifi-ws" component={CustomizedCheckbox} label="Enable wifi"/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="Wireless Network Name">
                        <span>
                            Wireless Network Name: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                        <Field
                            name="wirelessNetworkName-ws"
                            component={CustomizedSelect}
                            required={true}
                            label="Wireless Network Name"
                        >
                            <option value=""/>
                            <option value={'Boing747'}>Boing747</option>
                            <option value={'Airbus380'}>Airbus380</option>
                            <option value={'SuperJet'}>SuperJet</option>
                        </Field><span><LoopRoundedIcon
                        onClick={() => alert('Searching new wifi connections...')}/></span>
                    </div>
                    <div>
                        <label htmlFor="Enable wireless security">
                        <span>
                           Enable wireless security:
                        </span>
                            <Field name="enableWirelessSecurity-ws" component={CustomizedCheckbox}
                                   label="Enable wireless security"/>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="Security Key">
                        <span>
                           Security Key: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                        <Field
                            name="securitKey-ws"
                            component={CustomizedTextField}
                            required={true}
                            label="Security Key"
                        />
                        <Field name="IP-settings-ws" component={CustomizedRadioGroupIP} isChecked={isChecked_ip_ws}
                               setIsChecked={setIsChecked_ip_ws}>
                            <StyledRadio value="obtain an IP address automatically (DHCP/BootP)"
                                         label="Obtain an IP address automatically (DHCP/BootP)"/>
                            <StyledRadio value="use the following IP address" label="Use the following IP address"/>
                        </Field>
                        <div>
                            <label htmlFor="IP adress">
                        <span>
                            IP Adress: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field
                                name="ipAdress-ws"
                                component={CustomizedTextField}
                                required={true}
                                label="IP adress"
                            />
                        </div>
                        <div>
                            <label htmlFor="IP adress">
                        <span>
                            Subnet Mask: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field name="subnetMask-ws"
                                   component={CustomizedTextField}
                                   required={true}
                                   label="Subnet Mask"/>
                        </div>
                        <div>
                            <label htmlFor="IP adress">
                        <span>
                            Default Gateway:
                        </span>
                            </label>
                            <Field name="defaultGateway-ws"
                                   component={CustomizedTextField}
                                   label="Default Gateway"/>
                        </div>
                        <Field name="DNS-settings-ws" component={CustomizedRadioGroupDNS} isChecked={isChecked_dns_ws}
                               setIsChecked={setIsChecked_dns_ws}>
                            <StyledRadio value="obtain DNS server address automatically"
                                         label="Obtain DNS server address automatically"/>
                            <StyledRadio value="use the following DS server address"
                                         label="Use the following DS server address"/>
                        </Field>
                        <div>
                            <label htmlFor="Preferred DNS server">
                        <span>
                            Preferred DNS server: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field name="preferredDNSServer-ws"
                                   component={CustomizedTextField}
                                   required={true}
                                   label="Preferred DNS server"/>
                        </div>
                        <div>
                            <label htmlFor="Alternative DNS server">
                        <span>
                            Alternative DNS server:
                        </span></label>
                            <Field name="alternativeDNSServer-ws"
                                   component={CustomizedTextField}
                                   label="Alternative DNS server"/>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <button type="submit" disabled={submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </Grid>
            </Grid>
        </form>
    )
}

export default reduxForm({
    form: 'test-task-omertex', // a unique identifier for this form
    validate // <--- validation function given to redux-form
    //warn // <--- warning function given to redux-form
})(TestForm)
