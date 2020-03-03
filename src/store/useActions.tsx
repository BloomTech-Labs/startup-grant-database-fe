import {UseUserActions, useUserActions} from "./user/useUserActions";
import {UseGrantActions, useGrantActions} from "./grants/useGrantActions";
import {UseFilterActions, useFilterActions} from "./filters/useFilterActions";
import {UseSuggestionActions, useSuggestionActions} from "./suggestions/useSuggestionActions";
import {useAdminActions, UseAdminActions} from "./admin/useAdminActions";

export const useActions = () => {
    const user: UseUserActions = useUserActions();
    const grants: UseGrantActions = useGrantActions();
    const filters: UseFilterActions = useFilterActions();
    const admin: UseAdminActions = useAdminActions();
    const suggestion: UseSuggestionActions = useSuggestionActions();
    return {
        user,
        grants,
        filters,
        admin,
        suggestion
    };
};

interface UseActions {
    user: UseUserActions;
    grants: UseGrantActions;
    filters: UseFilterActions;
    suggestion: UseSuggestionActions;
    admin: UseAdminActions;
}

export type Actions = UseActions | null;
