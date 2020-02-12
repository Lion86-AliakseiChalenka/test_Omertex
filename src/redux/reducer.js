const SET_IP_CHECKED_ES = 'SET_IP_CHECKED_ES/TEST_OMERTEX'
const SET_DNS_CHECKED_ES = 'SET_DNS_CHECKED_ES/TEST_OMERTEX'
const SET_IP_CHECKED_WS = 'SET_IP_CHECKED_WS/TEST_OMERTEX'
const SET_DNS_CHECKED_WS = 'SET_DNS_CHECKED_WS/TEST_OMERTEX'
const SET_WIFI_ENABLED_WS = 'SET_WIFI_ENABLED_WS/TEST_OMERTEX'
const SET_WIFI_SECURITY_CHECKED = 'SET_WIFI_SECURITY_CHECKED/TEST_OMERTEX'

export const setIsChecked_ip_es = () => ({type: SET_IP_CHECKED_ES})
export const setIsChecked_dns_es = () => ({type: SET_DNS_CHECKED_ES})
export const setIsChecked_ip_ws = () => ({type: SET_IP_CHECKED_WS})
export const setIsChecked_dns_ws = () => ({type: SET_DNS_CHECKED_WS})
export const setIsWifiSecurityChecked = () => ({type: SET_WIFI_SECURITY_CHECKED})
export const setIsWifiEnabled = () => ({type: SET_WIFI_ENABLED_WS})

let initialState = {
    isChecked_ip_es: true,
    isChecked_dns_es: true,
    isChecked_ip_ws: true,
    isChecked_dns_ws: true,
    isWifiSecurityChecked: false,
    isWifiEnabled: false
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IP_CHECKED_ES:
            return {...state, isChecked_ip_es: !state.isChecked_ip_es}
        case SET_DNS_CHECKED_ES:
            return {...state, isChecked_dns_es: !state.isChecked_dns_es}
        case SET_IP_CHECKED_WS:
            return {...state, isChecked_ip_ws: !state.isChecked_ip_ws}
        case SET_DNS_CHECKED_WS:
            return {...state, isChecked_dns_ws: !state.isChecked_dns_ws}
        case SET_WIFI_ENABLED_WS:
            return {...state, isWifiEnabled: !state.isWifiEnabled}
        case SET_WIFI_SECURITY_CHECKED:
            return {...state, isWifiSecurityChecked: !state.isWifiSecurityChecked}
        default:
            return {...state}
    }
}

export default reducer