import {UseUserActions, useUserActions} from "./user/useUserActions";
import {UseGrantActions, useGrantActions} from "./grants/useGrantActions";
import {UseFilterActions, useFilterActions} from "./filters/useFilterActions";

export const useActions = () => {
    const user: UseUserActions = useUserActions();
    const grants: UseGrantActions = useGrantActions();
    const filters: UseFilterActions = useFilterActions();
    return {user, grants, filters};
};

interface UseActions {
    user: UseUserActions;
    grants: UseGrantActions;
    filters: UseFilterActions;
}

export type Actions = UseActions | null;
