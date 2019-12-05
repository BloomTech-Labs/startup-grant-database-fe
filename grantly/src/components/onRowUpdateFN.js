import { fetchApi, adminFetchApi, postGrants, putGrants, deleteGrants } from "../";

export const onRowUpdate = (newData, oldData) => {
    if (oldData) {
      console.log('old data: ', oldData)
      console.log('new data: ', newData)
      props.putGrants(newData, props.currentUser)
      // setState(prevState => {
      //   const data = [...prevState.data];
      //   data[data.indexOf(oldData)] = newData;
      //   return { ...prevState, data };
      // });
    }
  };
  