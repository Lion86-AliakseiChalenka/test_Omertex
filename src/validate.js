export const validate = values => {
    let errors = {}
    const requiredFields = [
        'ipAdress-es',
        'subnetMask-es',
        'preferredDNSServer-es',
        'wirelessNetworkName-ws',
        'securitKey-ws',
        'ipAdress-ws',
        'subnetMask-ws',
        'preferredDNSServer-ws'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
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
            errors[field] = 'Incorrected address'
        }
    })
    return errors
}