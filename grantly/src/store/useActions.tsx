import {useUserActions} from "./user/useUserActions";
import {useGrantActions} from "./grants/useGrantActions";
import {useFilterActions} from "./filters/useFilterActions";

export const useActions = () => {
    const user = useUserActions();
    const grants = useGrantActions();
    const filters = useFilterActions();
    return {user, grants, filters};
};
