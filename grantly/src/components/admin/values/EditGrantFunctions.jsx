import React from 'react'

// this is passed in to the MaterialTable component on ../GrantTable
export const EditGrantFunctions = [
          //   {
          //   onRowAdd: newData =>
          //     new Promise(resolve => {
          //       setTimeout(() => {
          //         resolve();
          //         let filteredData = Object.assign({}, newData);
          //         delete filteredData.requests;
          //         props.postGrants(filteredData, props.currentUser.token);
          //       }, 600);
          //     }),
          //   onRowUpdate: (newData, oldData) =>
          //     new Promise(resolve => {
          //       setTimeout(() => {
          //         resolve();
          //         if (oldData) {
          //           let filteredData = Object.assign({}, newData);
          //           delete filteredData.requests;
          //           props.putGrants(
          //             {
          //               ...filteredData,
          //               details_last_updated: moment().format("YYYY-MM-DD")
          //             },
          //             props.currentUser.token
          //           );
          //         }
          //       }, 600);
          //     }),
          //   onRowDelete: oldData =>
          //     new Promise(resolve => {
          //       setTimeout(() => {
          //         resolve();
          //         if (oldData) {
          //           delete oldData.requests;
          //           props.deleteGrants(oldData.id, props.currentUser.token);
          //         }
          //       }, 600);
          //     })
          // }
]