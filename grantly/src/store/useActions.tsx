import {useUserActions} from "./user/useUserActions";
import {useGrantActions} from "./grants/useGrantActions";

export const useActions = () => {
    const user = useUserActions();
    const grants = useGrantActions();
    return {user, grants};
};
