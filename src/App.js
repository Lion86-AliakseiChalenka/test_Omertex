import React, {useState} from 'react';
import TestForm from './Form.js'
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

// const useStyles = makeStyles({
//     root: {
//         '&:hover': {
//             backgroundColor: 'transparent',
//         },
//     },
//     fieldset: {
//         height: 600,
//         width: '95%',
//         padding: 20,
//         border: '1px grey solid'
//     },
//     iconRadio: {
//         borderRadius: '50%',
//         width: 16,
//         height: 16,
//         boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//         backgroundColor: '#f5f8fa',
//         backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//         '$root.Mui-focusVisible &': {
//             outline: '2px auto rgba(19,124,189,.6)',
//             outlineOffset: 2,
//         },
//         'input:disabled ~ &': {
//             boxShadow: 'none',
//             background: 'rgba(206,217,224,.5)',
//         },
//     },
//     checkedIconRadio: {
//         backgroundColor: '#137cbd',
//         backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//         '&:before': {
//             display: 'block',
//             width: 16,
//             height: 16,
//             backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
//             content: '""',
//         },
//         'input:disabled ~ &': {
//             boxShadow: 'none',
//             backgroundColor: '#137cbd',
//             opacity: '30%'
//         }
//     },
//     disabledIconRadio: {
//         backgroundColor: '#137cbd',
//         opacity: '60%'
//     },
//     textFieldGroup: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         alignItems: 'flex-end'
//     },
//     textField: {
//         display: 'flex',
//         alignItems: 'center',
//         fontSize: '1rem',
//         fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//         fontWeight: 400,
//         lineHeight: 1.5,
//         marginBottom: 10,
//         letterSpacing: '0.00938em',
//     },
//     enabledLabel: {
//         paddingRight: 10
//     },
//     disabledLabel: {
//         opacity: '60%'
//     },
//     enabledSpan: {
//         color: 'red'
//     },
//     disabledSpan: {
//         opacity: '60%'
//     },
//     disabledIcon: {
//         opacity: '60%'
//     },
//     iconCheckbox: {
//         borderRadius: 3,
//         width: 16,
//         height: 16,
//         boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//         backgroundColor: '#f5f8fa',
//         backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//         '$root.Mui-focusVisible &': {
//             outline: '2px auto rgba(19,124,189,.6)',
//             outlineOffset: 2,
//         },
//         'input:hover ~ &': {
//             backgroundColor: '#ebf1f5',
//         },
//         'input:disabled ~ &': {
//             boxShadow: 'none',
//             background: 'rgba(206,217,224,.5)',
//         },
//     },
//     checkedIconCheckbox: {
//         backgroundColor: '#137cbd',
//         backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//         '&:before': {
//             display: 'block',
//             width: 16,
//             height: 16,
//             backgroundImage:
//             "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//             " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//             "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//             content: '""',
//         },
//         'input:hover ~ &': {
//             backgroundColor: '#106ba3',
//         },
//     },
//     button: {
//         margin: 10,
//         width: 100,
//         borderRadius: 25
//     },
//     buttonOutlined: {
//         borderColor: '#137cbd',
//         color: '#137cbd'
//     },
//     buttonContained: {
//         backgroundColor: '#137cbd',
//         '&:hover': {
//             backgroundColor: '#106091'
//         }
//     },
//     buttonGroup: {
//         borderLeft: '1px solid grey',
//         borderRight: '1px solid grey',
//         borderBottom: '1px solid grey'
//     },
//     select: {
//         height: 40
//     }
// });
//
// function StyledRadio(props) {
//     const classes = useStyles();
//     return (
//         <Radio className={classes.root}
//                icon={<span className={classes.iconRadio}/>}
//                checkedIcon={<span className={clsx(classes.iconRadio, classes.checkedIconRadio, !props.isWifiEnable && classes.disabledIconRadio)}/>}
//                color="default"
//                {...props}/>
//     )
// }
//
// function CustomizedRadios(props) {
//     const classes = useStyles();
//     const [isDisabled, setIsDisabled] = useState(true)
//     const handleChange = event => {
//         setIsDisabled(!isDisabled);
//     };
//     return (
//         {/*<RadioGroup*/}
{/*defaultValue="obtain an IP address automatically (DHCP/BootP)" aria-label="gender"*/
}
{/*name="customized-radios"*/
}
{/*onChange={handleChange}>*/
}
{/*<FormControlLabel value="obtain an IP address automatically (DHCP/BootP)" control={<StyledRadio/>}*/
}
{/*disabled={!props.isWifiEnable}*/
}
{/*label="Obtain an IP address automatically (DHCP/BootP)" />*/
}
{/*<FormControlLabel value="use the following IP address" control={<StyledRadio isWifiEnable={props.isWifiEnable}/>}*/
}
{/*disabled={!props.isWifiEnable}*/
}
{/*label="Use the following IP address" />*/
}
{/*<div className={classes.textFieldGroup}>*/
}
{/*{props.data.map((el, i) => <div key={i} className={classes.textField}>*/
}
{/*<FieldLabel isFieldRequired={el.isRequired} name={el.name} disabled={isDisabled}/>*/
}
{/*<TextField variant="outlined" size="small" required={el.isRequired} disabled={isDisabled}/>*/
}
{/*</div>)}*/
}
{/*</div>*/
}
{/*</RadioGroup>*/
}
{/*)*/
}
{/*}*/
}

{/*function StyledCheckbox(props) {*/
}
{/*const classes = useStyles();*/
}
{/*return (*/
}
{/*<>*/
}
{/*<FormControlLabel*/
}
{/*control={<Checkbox checked={props.checked} onChange={props.onChange}*/
}
{/*disabled={!props.isWifiEnable}*/
}
{/*className={classes.root}*/
}
{/*checkedIcon={<span*/
}
{/*className={clsx(classes.iconCheckbox, classes.checkedIconCheckbox)}/>}*/
}
{/*icon={<span className={classes.iconCheckbox}/>} value={props.name}/>}*/
}
{/*label={props.name}*/
}
{/*/>*/
}
{/*</>*/
}
{/*)*/
}
{/*}*/
}

{/*function CustomizedCheckBoxWithSelect(props) {*/
}
{/*const classes = useStyles();*/
}
{/*const [value, setValue] = useState('')*/
}
{/*const handleAccessChange = value => {*/
}
{/*setValue(value);*/
}
{/*};*/
}

{/*return (*/
}
{/*<>*/
}
{/*<StyledCheckbox isWifiEnable={true} onChange={()=>props.toggleWifiEnable(!props.isWifiEnable)} checked={props.isWifiEnable} name={'Enable wifi:'}/>*/
}
{/*<FormControl variant="outlined" className={classes.formControl}>*/
}
{/*<div className={classes.textFieldGroup}>*/
}
{/*<div className={classes.textField}>*/
}
{/*<FieldLabel isFieldRequired={true} name={'Wireless Network Name:'} disabled={!props.isWifiEnable}/>*/
}
{/*<Select*/
}
{/*className={classes.select}*/
}
{/*native*/
}
{/*value={value}*/
}
{/*disabled={!props.isWifiEnable}*/
}
{/*onChange={() => handleAccessChange('wifiName')}*/
}
{/*inputProps={{*/
}
{/*name: 'wifiName',*/
}
{/*id: 'outlined-native-wifi-name',*/
}
{/*}}*/
}
{/*>*/
}
{/*<option value=""/>*/
}
{/*<option value={'A'}>A</option>*/
}
{/*<option value={'B'}>B</option>*/
}
{/*<option value={'C'}>C</option>*/
}
{/*</Select>*/
}
{/*{props.isWifiEnable ? <span><LoopRoundedIcon/></span> :*/
}
{/*<span><LoopRoundedIcon className={classes.disabledIcon}/></span>}*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</FormControl>*/
}
{/*</>*/
}
{/*)*/
}
{/*}*/
}

{/*function CustomizedCheckBoxWithInput(props) {*/
}
{/*const classes = useStyles();*/
}
{/*const [isChecked, setIsChecked] = useState(false)*/
}
{/*const [value, setValue] = useState('')*/
}
{/*const handleAccessChange = value => {*/
}
{/*setValue(value);*/
}
{/*};*/
}
{/*const handleChange = () => {*/
}
{/*setIsChecked(!isChecked);*/
}
{/*};*/
}
{/*return (*/
}
{/*<>*/
}
{/*<StyledCheckbox isWifiEnable={props.isWifiEnable} onChange={handleChange} checked={isChecked} name={'Enable Wireless Security:'}/>*/
}
{/*<FormControl variant="outlined" className={classes.formControl}>*/
}
{/*<div className={classes.textFieldGroup}>*/
}
{/*<div className={classes.textField}>*/
}
{/*<FieldLabel isFieldRequired={true} name={'Security Key:'} disabled={!isChecked}/>*/
}
{/*<TextField variant="outlined" size="small" required disabled={!isChecked} />*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*</FormControl>*/
}
{/*</>*/
}
{/*)*/
}
{/*}*/
}

{/*function FieldLabel(props) {*/
}
{/*const classes = useStyles();*/
}
{/*return (*/
}
{/*<>*/
}
{/*{!props.disabled ?*/
}
{/*<label className={classes.enabledLabel}>*/
}
{/*{props.name} {props.isFieldRequired ? <span className={classes.enabledSpan}>*</span> : null}*/
}
{/*</label>*/
}
{/*: <label className={clsx(classes.enabledLabel, classes.disabledLabel)}>*/
}
{/*{props.name} {props.isFieldRequired ?*/
}
{/*<span className={clsx(classes.enabledSpan, classes.disabledSpan)}>*</span> : null}*/
}
{/*</label>*/
}
{/*}*/
}
{/*</>*/
}
{/*)*/
}

{/*}*/
}

{/*function TestForm(props) {*/
}
{/*const classes = useStyles();*/
}
{/*const [isChecked, setIsChecked] = useState(false)*/
}
{/*const handleChange = () => setIsChecked(!isChecked)*/
}
{/*const [isWifiEnable, toggleWifiEnable] = useState(false)*/
}
{/*const { handleSubmit, pristine, reset, submitting } = props*/
}
{/*const ipData = [*/
}
{/*{*/
}
{/*name: 'IP adress',*/
}
{/*isRequired: true*/
}
{/*},*/
}
{/*{*/
}
{/*name: 'Subnet Mask',*/
}
{/*isRequired: true*/
}
{/*},*/
}
{/*{*/
}
{/*name: 'Default Gateway',*/
}
{/*isRequired: false*/
}
{/*}*/
}
{/*]*/
}
{/*const dnsData = [*/
}
{/*{*/
}
{/*name: 'Preffered DNS server',*/
}
{/*isRequired: true*/
}
{/*},*/
}
{/*{*/
}
{/*name: 'Alternative DNS adress',*/
}
{/*isRequired: false*/
}
{/*},*/
}
{/*]*/
}
{/*return (*/
}
{/*<form onSubmit={handleSubmit}>*/
}
{/*<Field*/
}
{/*name="username"*/
}
{/*type="text"*/
}
{/*component={renderField}*/
}
{/*label="Username"*/
}
{/*/>*/
}
{/*<Field name="email" type="email" component={renderField} label="Email" />*/
}
{/*<Field name="age" type="number" component={renderField} label="Age" />*/
}
{/*<div>*/
}
{/*<button type="submit" disabled={submitting}>*/
}
{/*Submit*/
}
{/*</button>*/
}
{/*<button type="button" disabled={pristine || submitting} onClick={reset}>*/
}
{/*Clear Values*/
}
{/*</button>*/
}
{/*</div>*/
}
{/*</form>*/
}
{/*<div>*/
}
{/*<Grid container spacing={0}>*/
}
{/*<Grid className={classes.fieldset} item xs={6}>*/
}
{/*<FormControl>*/
}
{/*<FormLabel component="legend"><b>Ethernet Settings</b></FormLabel>*/
}
{/*<FormGroup>*/
}
{/*<CustomizedRadios isWifiEnable={true} data={ipData}/>*/
}
{/*<CustomizedRadios isWifiEnable={true} data={dnsData}/>*/
}
{/*</FormGroup>*/
}
{/*</FormControl>*/
}
{/*</Grid>*/
}
{/*<Grid item xs={6} className={classes.fieldset}>*/
}
{/*<FormControl>*/
}
{/*<FormLabel component="legend"><b>Wireless Settings</b></FormLabel>*/
}
{/*<FormGroup>*/
}
{/*<CustomizedCheckBoxWithSelect toggleWifiEnable={toggleWifiEnable}*/
}
{/*isWifiEnable={isWifiEnable}*/
}
{/*/>*/
}
{/*<CustomizedCheckBoxWithInput isWifiEnable={isWifiEnable}/>*/
}
{/*<CustomizedRadios data={ipData} isWifiEnable={isWifiEnable}/>*/
}
{/*<CustomizedRadios data={dnsData} isWifiEnable={isWifiEnable}/>*/
}
{/*</FormGroup>*/
}
{/*</FormControl>*/
}
{/*</Grid>*/
}
{/*<Grid className={classes.buttonGroup} item xs={12}>*/
}
{/*<Button className={clsx(classes.button, classes.buttonContained)} variant="contained"*/
}
{/*color='primary'>*/
}
{/*Save*/
}
{/*</Button>*/
}
{/*<Button className={clsx(classes.button, classes.buttonOutlined)} variant="outlined">*/
}
{/*Cancel*/
}
{/*</Button>*/
}
{/*</Grid>*/
}
{/*</Grid>*/
}
{/*</div>*/
}
{/*);*/
}
{/*}*/
}


const App = (props) => {
    const getResults = (value) => {
        console.log(JSON.stringify(value, null, 2))
    }
    return (
        <TestForm onSubmit={getResults}/>
    )
}


export default App
