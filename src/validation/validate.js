import {store} from '../index.js'

export const validate = values => {
    let data = store.getState().reducer
    let errors = {}
    const requiredFields = [
        {
            name: 'ipAdress-es',
            isEnabled: !data.isChecked_ip_es
        },
        {
            name: 'subnetMask-es',
            isEnabled: !data.isChecked_ip_es
        },

        {
            name: 'preferredDNSServer-es',
            isEnabled: !data.isChecked_dns_es
        },

        {
            name: 'subnetMask-ws',
            isEnabled: !data.isChecked_ip_ws
        },

        {
            name: 'ipAdress-ws',
            isEnabled: !data.isChecked_ip_ws
        },

        {
            name: 'preferredDNSServer-ws',
            isEnabled: !data.isChecked_dns_ws
        },

        {
            name: 'wirelessNetworkName-ws',
            isEnabled: data.isWifiEnabled
        },

        {
            name: 'securitKey-ws',
            isEnabled: data.isWifiEnabled && data.isWifiSecurityChecked
        }
    ]

    requiredFields.forEach(field => {
        if (!values[field.name] && field.isEnabled) {
            errors[field.name] = 'Required'
        }
        if (!field.isEnabled) {
            errors[field.name] = undefined
    }})
    const validatedFields = [
        'ipAdress-es',
        'subnetMask-es',
        'preferredDNSServer-es',
        'alternativeDNSServer-es',
        'ipAdress-ws',
        'subnetMask-ws',
        'preferredDNSServer-ws',
        'alternativeDNSServer-ws'
    ]
    validatedFields.forEach(field => {
        if (
            values[field] && !/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/i.test(values[field])
        ) {
            errors[field] = 'Incorrected'
        }
    })
    return errors
}

