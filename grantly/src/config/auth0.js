

import Auth0Lock from "auth0-lock";



const clientId = "F7IQ07DmUMWVnqKE0D34lJx67vAd3a2e";
const domain = "founder-grants.auth0.com";
export const lock = new Auth0Lock(clientId, domain);

lock.on("authenticated", function(authResult) {
  lock.getUserInfo(authResult.accessToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }
 
    localStorage.setItem("accessToken", authResult.accessToken);
    localStorage.setItem("profile", JSON.stringify(profile));
    console.log("PRofile", JSON.stringify(profile))
 
    // Update DOM
  });
});

// const lock = new Auth0Lock(
//   "F7IQ07DmUMWVnqKE0D34lJx67vAd3a2e",
//   "founder-grants.auth0.com"
// );
//  const Auth = (function() {
//   let wm = new WeakMap();
//   let privateStore = {};
//   let lock;

//   function Auth() {
//     this.lock = new Auth0Lock(
//       "F7IQ07DmUMWVnqKE0D34lJx67vAd3a2e",
//       "founder-grants.auth0.com"
//     );
//     wm.set(privateStore, {
//       appName: "example"
//     });
//   }

//   Auth.prototype.getProfile = function() {
//     return wm.get(privateStore).profile;
//   };

//   Auth.prototype.authn = function() {
//     // Listening for the authenticated event
//     this.lock.on("authenticated", function(authResult) {
//       // Use the token in authResult to getUserInfo() and save it if necessary
//       this.getUserInfo(authResult.accessToken, function(error, profile) {
//         if (error) {
//           // Handle error
//           return;
//         }

//         //we recommend not storing Access Tokens unless absolutely necessary
//         wm.set(privateStore, {
//           accessToken: authResult.accessToken
//         });

//         wm.set(privateStore, {
//           profile: profile
//         });
//       });
//     });
//   };
//   return Auth;
// })();
