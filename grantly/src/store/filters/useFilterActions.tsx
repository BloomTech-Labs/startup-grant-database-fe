import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Filters, FilterTypes} from "./filterTypes";
import {Grant} from "../grants/grantTypes";

export const useFilterActions = () => {
    const dispatch = useDispatch();

    const changeFilter = useCallback((newFilter: Filters) => {
        dispatch({type: FilterTypes.FILTER_CHANGE, payload: newFilter});
    }, [dispatch]);

    const resetFilter = useCallback(() => {
        dispatch({type: FilterTypes.FILTER_RESET});
    }, [dispatch]);

    const grantFilter = useCallback((grants: Grant[]) => {
        dispatch({type: FilterTypes.FILTER_GRANT, payload: grants})
    }, [dispatch]);

    return {changeFilter, resetFilter, grantFilter};
};

export interface UseFilterActions {
    changeFilter: (newFilters: Filters) => void;
    resetFilter: () => void;
    grantFilter: (grants: Grant[]) => void;
}
