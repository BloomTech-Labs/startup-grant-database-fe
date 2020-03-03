import {useEffect, useState} from "react";
import {useAuth0} from "./Auth0Wrapper";

export const useGetToken = () => {
    const [token, setToken] = useState(null);
    const {isAuthenticated, getTokenSilently} = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            const fetchToken = async () => {
                const result = await getTokenSilently();
                setToken(result);
            };
            fetchToken();
        } else {
            setToken(null);
        }
    }, [isAuthenticated]);

    return [token];
};
