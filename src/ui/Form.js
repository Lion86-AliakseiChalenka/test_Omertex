import Button from "@material-ui/core/Button";
import {FormLabel} from "@material-ui/core";
import clsx from "clsx";
import React, {useRef} from 'react';
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import reload from './../icons/reload.svg';
import {Field, reduxForm} from "redux-form";
import {
    setIsChecked_dns_es,
    setIsChecked_dns_ws,
    setIsChecked_ip_es,
    setIsChecked_ip_ws, setIsWifiEnabled,
    setIsWifiSecurityChecked
} from "../redux/reducer.js";
import {CustomizedRadioGroupIP, CustomizedRadioGroupDNS} from "./customizedComponents/styledRadio.js";
import {CustomizedSelect} from "./customizedComponents/customizedSelect.js";
import {CustomizedCheckbox} from "./customizedComponents/customizedCheckbox.js";
import {CustomizedTextField} from "./customizedComponents/customizedTextField.js";
import {StyledRadio} from "./customizedComponents/styledRadio.js";
import {validate} from "../validation/validate.js";

const useStyles = makeStyles({
    root: {
        margin: 10,
        fontSize: '1rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },
    fieldset1: {
        height: 580,
        padding: 20,
        border: '1px grey solid'
    },
    fieldset2: {
        height: 580,
        padding: 20,
        border: '1px grey solid',
        borderLeft: 0
    },
    enabledSpan: {
        color: 'red'
    },
    icons: {
        height: 30,
        paddingLeft: 10,
        opacity: '60%'
    },
    disabledSpan: {
        opacity: '60%'
    },
    gridContainer: {
        margin: 10,
        padding: 10,
        border: '1px solid grey'
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
    textFieldWrap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        overflow: 'hidden'
    },
    textField: {
        position: 'relative',
        width: 600,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 5,
        overflow: 'hidden'
    },
    legend: {
        paddingBottom: 5
    }
})

const TestForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const {
        setIsChecked_dns_es, setIsChecked_dns_ws, setIsChecked_ip_es, setIsChecked_ip_ws, setIsWifiEnabled,
        setIsWifiSecurityChecked
    } = props
    const {
        isChecked_ip_es, isChecked_dns_es, isChecked_ip_ws, isChecked_dns_ws,
        isWifiSecurityChecked, isWifiEnabled
    } = props.elemConditions
    const classes = useStyles()
    return (
        <form className={classes.root} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={0}>
                <Grid className={classes.fieldset1} item xs={6}>
                    <FormLabel component="legend"
                               className={classes.legend}><b>Ethernet Settings</b></FormLabel>
                    <Field name="IP-settings-es"
                           component={CustomizedRadioGroupIP}
                           isChecked={isChecked_ip_es}
                           setIsChecked={setIsChecked_ip_es}>
                        <StyledRadio value="obtain an IP address automatically (DHCP/BootP)"
                                     label="Obtain an IP address automatically (DHCP/BootP)"/>
                        <StyledRadio value="use the following IP address" label="Use the following IP address"/>
                    </Field>
                    <div style={isChecked_ip_es ? {opacity: '0.6'} : null} className={classes.textFieldWrap}>
                        <div className={classes.textField}>
                            <label htmlFor="IP adress">
                        <span>
                            IP Adress: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field
                                name="ipAdress-es"
                                component={CustomizedTextField}
                                label="IP adress"
                                disabled={isChecked_ip_es}
                            />
                        </div>
                        <div className={classes.textField}>
                            <label htmlFor="Subnet Mask">
                        <span>
                            Subnet Mask: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field name="subnetMask-es"
                                   component={CustomizedTextField}
                                   disabled={isChecked_ip_es}
                                   label="Subnet Mask"/>
                        </div>
                        <div className={classes.textField}>
                            <label htmlFor="Default Gateway">
                        <span>
                            Default Gateway:
                        </span>
                            </label>
                            <Field name="defaultGateway-es"
                                   component={CustomizedTextField}
                                   disabled={isChecked_ip_es}
                                   label="Default Gateway"/>
                        </div>
                    </div>
                    <Field name="DNS-settings-es"
                           component={CustomizedRadioGroupDNS}
                           isChecked={isChecked_dns_es}
                           setIsChecked={setIsChecked_dns_es}>
                        <StyledRadio value="obtain DNS server address automatically"
                                     label="Obtain DNS server address automatically"/>
                        <StyledRadio value="use the following DS server address"
                                     label="Use the following DS server address"/>
                    </Field>
                    <div style={isChecked_dns_es ? {opacity: '0.6'} : null}
                         className={classes.textFieldWrap}>
                        <div className={classes.textField}>
                            <label htmlFor="Preferred DNS server">
                        <span>
                            Preferred DNS server: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field name="preferredDNSServer-es"
                                   component={CustomizedTextField}
                                   disabled={isChecked_dns_es}
                                   label="Preferred DNS server"/>
                        </div>
                        <div className={classes.textField}>
                            <label htmlFor="Alternative DNS server">
                        <span>
                            Alternative DNS server:
                        </span></label>
                            <Field name="alternativeDNSServer-es"
                                   component={CustomizedTextField}
                                   disabled={isChecked_dns_es}
                                   label="Alternative DNS server"/>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.fieldset2} item xs={6}>
                    <FormLabel component="legend"
                               className={classes.legend}><b>Wireless Settings</b></FormLabel>
                    <div>
                        <label htmlFor="Enable wifi">
                        <span>
                            Enable wifi:
                        </span>
                            <Field name="enableWifi-ws"
                                   ref={ref1}
                                   onChange={() => setIsWifiEnabled(!ref1.current.value)}
                                   component={CustomizedCheckbox}
                                   label="Enable wifi"/>
                        </label>
                    </div>
                    <div style={!isWifiEnabled ? {opacity: '0.6'} : null} className={classes.textFieldWrap}>
                        <div className={classes.textField}>
                            <label htmlFor="Wireless Network Name">
                        <span>
                            Wireless Network Name: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field
                                name="wirelessNetworkName-ws"
                                component={CustomizedSelect}
                                disabled={!isWifiEnabled}
                                label="Wireless Network Name"
                            >
                                <option value=""/>
                                <option value={'Boing747'}>Boing747</option>
                                <option value={'Airbus380'}>Airbus380</option>
                                <option value={'SuperJet'}>SuperJet</option>
                            </Field>


                            <span
                                onClick={() => alert('Searching new wifi connections...')}><img
                                src={reload}
                                className={classes.icons}
                                alt="Reload"/></span>
                        </div>
                    </div>
                    <div style={!isWifiEnabled ? {opacity: '0.6'} : null}>
                        <label htmlFor="Enable wireless security">
                        <span>
                           Enable wireless security:
                        </span>
                            <Field name="enableWirelessSecurity-ws" component={CustomizedCheckbox}
                                   ref={ref2}
                                   onChange={() => setIsWifiSecurityChecked(!ref2.current.value)}
                                   disabled={!isWifiEnabled}
                                   label="Enable wireless security"/>
                        </label>
                    </div>
                    <div style={(!isWifiEnabled || !isWifiSecurityChecked) ? {opacity: '0.6'} : null}
                         className={classes.textFieldWrap}>
                        <div className={classes.textField}>
                            <label htmlFor="Security Key">
                        <span>
                           Security Key: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field
                                name="securitKey-ws"
                                component={CustomizedTextField}
                                disabled={!isWifiSecurityChecked || !isWifiEnabled}
                                label="Security Key"
                            />
                        </div>
                    </div>
                    <Field name="IP-settings-ws" component={CustomizedRadioGroupIP} isChecked={isChecked_ip_ws}
                           setIsChecked={setIsChecked_ip_ws}
                           disabled={!isWifiEnabled}>
                        <StyledRadio value="obtain an IP address automatically (DHCP/BootP)"
                                     label="Obtain an IP address automatically (DHCP/BootP)"/>
                        <StyledRadio value="use the following IP address" label="Use the following IP address"/>
                    </Field>
                    <div style={(!isWifiEnabled || isChecked_ip_ws) ? {opacity: '0.6'} : null}
                         className={classes.textFieldWrap}>
                        <div className={classes.textField}>
                            <label htmlFor="IP adress">
                        <span>
                            IP Adress: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field
                                name="ipAdress-ws"
                                component={CustomizedTextField}
                                disabled={isChecked_ip_ws || !isWifiEnabled}
                                label="IP adress"
                            />
                        </div>
                        <div className={classes.textField}>
                            <label htmlFor="Subnet Mask">
                        <span>
                            Subnet Mask: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field name="subnetMask-ws"
                                   component={CustomizedTextField}
                                   disabled={isChecked_ip_ws || !isWifiEnabled}
                                   label="Subnet Mask"/>
                        </div>
                        <div className={classes.textField}>
                            <label htmlFor="Default Gateway">
                        <span>
                            Default Gateway:
                        </span>
                            </label>
                            <Field name="defaultGateway-ws"
                                   component={CustomizedTextField}
                                   disabled={isChecked_ip_ws || !isWifiEnabled}
                                   label="Default Gateway"/>
                        </div>
                    </div>
                    <Field name="DNS-settings-ws"
                           component={CustomizedRadioGroupDNS}
                           disabled={!isWifiEnabled}
                           isChecked={isChecked_dns_ws}
                           setIsChecked={setIsChecked_dns_ws}>
                        <StyledRadio value="obtain DNS server address automatically"
                                     label="Obtain DNS server address automatically"/>
                        <StyledRadio value="use the following DS server address"
                                     label="Use the following DS server address"/>
                    </Field>
                    <div style={(!isWifiEnabled || isChecked_dns_ws) ? {opacity: '0.6'} : null}
                         className={classes.textFieldWrap}>
                        <div className={classes.textField}>
                            <label htmlFor="Preferred DNS server">
                        <span>
                            Preferred DNS server: <span className={classes.enabledSpan}>*</span>
                        </span></label>
                            <Field name="preferredDNSServer-ws"
                                   component={CustomizedTextField}
                                   disabled={isChecked_dns_ws || !isWifiEnabled}
                                   label="Preferred DNS server"/>
                        </div>
                        <div className={classes.textField}>
                            <label htmlFor="Alternative DNS server">
                        <span>
                            Alternative DNS server:
                        </span></label>
                            <Field name="alternativeDNSServer-ws"
                                   component={CustomizedTextField}
                                   disabled={isChecked_dns_ws || !isWifiEnabled}
                                   label="Alternative DNS server"/>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.buttonGroup}
                      item xs={12}>
                    <Button className={clsx(classes.button, classes.buttonContained)}
                            variant="contained"
                            color='primary'
                            type="submit"
                            disabled={submitting}>
                        Save
                    </Button>
                    <Button className={clsx(classes.button, classes.buttonOutlined)}
                            variant="outlined"
                            type="button"
                            disabled={pristine || submitting}
                            onClick={reset}>
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}


const mapDispatchToProps = (state) => ({
    elemConditions: state.reducer
})

const connectedReduxForm = connect(mapDispatchToProps, {
    setIsChecked_ip_es, setIsChecked_dns_es, setIsChecked_ip_ws,
    setIsChecked_dns_ws, setIsWifiSecurityChecked, setIsWifiEnabled
})(TestForm)

export default reduxForm({
    form: 'test-task-omertex',
    validate
})(connectedReduxForm)
