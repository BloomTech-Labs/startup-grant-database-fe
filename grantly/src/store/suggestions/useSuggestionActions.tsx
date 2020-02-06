import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {AxiosError, AxiosResponse} from "axios";
import {Suggestion, SuggestionTypes} from "./suggestionTypes";
import {FilterTypes} from "../filters/filterTypes";
import {axiosWithAuth, axiosWithOutAuth as axios} from "../utils/axiosConfig";
export const useSuggestionActions = () => {
    const dispatch = useDispatch()
    
};


export interface UseSuggestionActions {

}
