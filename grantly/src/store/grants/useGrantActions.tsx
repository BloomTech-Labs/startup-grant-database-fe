import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AxiosError, AxiosResponse } from "axios";
import { Grant, GrantTypes } from "./grantTypes";
import { FilterTypes } from "../filters/filterTypes";
import { axiosWithOutAuth as axios, axiosWithAuth } from "../utils/axiosConfig";
import GrantTable from "../../components/admin/GrantTable";

export const useGrantActions = () => {
  const dispatch = useDispatch();

  const fetchGrants = useCallback(() => {
    dispatch({ type: GrantTypes.FETCH_GRANTS_START });
    // @ts-ignore
    axios()
      .get(`/grants`)
      .then((res: AxiosResponse) => {
        dispatch({ type: GrantTypes.FETCH_GRANTS_SUCCESS, payload: res.data });
        dispatch({ type: FilterTypes.FILTER_GRANT, payload: res.data });
      })
      .catch((err: AxiosError) => {
        const data =
          err && err.response && err.response.data ? err.response.data : err;
        dispatch({ type: GrantTypes.FETCH_GRANTS_FAILURE, payload: data });
      });
  }, [dispatch]);

  const selectGrant = useCallback(
    (grant: Grant) => {
      dispatch({ type: GrantTypes.SELECT_GRANT, payload: grant });
    },
    [dispatch]
  );

  const postGrant = useCallback(
    (data, token) => {
      dispatch({ type: GrantTypes.POST_GRANTS_START, payload: data });
      axiosWithAuth(token)
        .post("/grants", data)
        .then((res: AxiosResponse) => {
          dispatch({ type: GrantTypes.POST_GRANTS_SUCCESS, payload: res.data });
        })
        .catch((err: AxiosError) => {
          const data =
            err && err.response && err.response.data ? err.response.data : err;
          dispatch({ type: GrantTypes.POST_GRANTS_FAILURE, payload: data });
        });
    },
    [dispatch]
  );

  const fetchAdminGrants = useCallback((token) => {
    dispatch({ type: GrantTypes.FETCH_ADMIN_GRANTS_START });
    // @ts-ignore
    axiosWithAuth(token)
      .get(`/admin`)
      .then((res: AxiosResponse) => {
        dispatch({ type: GrantTypes.FETCH_ADMIN_GRANTS_SUCCESS, payload: res.data });
      })
      .catch((err: AxiosError) => {
        const data =
          err && err.response && err.response.data ? err.response.data : err;
        dispatch({ type: GrantTypes.FETCH_ADMIN_GRANTS_FAILURE, payload: data });
      });
  }, [dispatch]);

  // const updateAdminGrant = useCallback((token, id, data) => {
  //   dispatch({ type: GrantTypes.UPDATE_ADMIN_GRANTS_START, payload: true});
  //   axiosWithAuth(token)
  //     .put(`/admin/${id}`)
  //     .then((res: AxiosResponse) => {
  //       dispatch({type: GrantTypes.UPDATE_ADMIN_GRANTS_SUCCESS, payload: res.data})
  //     })
  //     .catch((err: AxiosError) => {
  //       const data =
  //         err && err.response && err.response.data ? err.response.data : err;
  //       dispatch({ type: GrantTypes.UPDATE_ADMIN_GRANTS_FAILURE, payload: data });
  //     });
  // }, [dispatch])

  // const deleteAdminGrant = useCallback((token, id) => {
  //   dispatch({ type: GrantTypes.DELETE_ADMIN_GRANTS_START});
  //   axiosWithAuth(token)
  //     .put(`/admin/${id}`)
  //     .then((res: AxiosResponse) => {
  //       dispatch({type: GrantTypes.DELETE_ADMIN_GRANTS_SUCCESS,})
  //     })
  //     .catch((err: AxiosError) => {
  //       const data =
  //         err && err.response && err.response.data ? err.response.data : err;
  //       dispatch({ type: GrantTypes.DELETE_ADMIN_GRANTS_FAILURE, payload: data });
  //     });
  // }, [dispatch])

  
  // const selectAdminGrant = useCallback((token, id) => {
  //   dispatch({ type: GrantTypes.SELECT_ADMIN_GRANTS_START});
  //   axiosWithAuth(token)
  //     .get(`/admin/${id}`)
  //     .then((res: AxiosResponse) => {
  //       dispatch({type: GrantTypes.SELECT_ADMIN_GRANTS_SUCCESS})
  //     })
  //     .catch((err: AxiosError) => {
  //       const data =
  //         err && err.response && err.response.data ? err.response.data : err;
  //       dispatch({ type: GrantTypes.SELECT_ADMIN_GRANTS_FAILURE, payload: data });
  //     });
  // }, [dispatch])

  return { fetchGrants, selectGrant, postGrant, fetchAdminGrants,
    //  deleteAdminGrant,  updateAdminGrant, selectAdminGrant
    };
};

export interface UseGrantActions {
  fetchGrants: () => void;
  selectGrant: (grant: Grant) => void;
  postGrant: (data: Grant, token: string) => void;
  fetchAdminGrants: (token: string) => void
  // selectAdminGrant: (token: string) => void;
  // deleteAdminGrant: (token: string) => void;
  // updateAdminGrant: (data: Grant, token: string) => void;
}
