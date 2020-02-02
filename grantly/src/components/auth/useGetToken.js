import { useState, useEffect } from "react";
import {useAuth0} from "../auth0/Auth0Wrapper";function useGetToken() {
    const [token, setToken] = useState(null);
    const { getTokenSilently } = useAuth0();
    useEffect(() => {
        const fetchToken = async () => {
            const result = await getTokenSilently()
            setToken(result)
        }
        fetchToken()
    })
    return ([token])
}
export default useGetToken;