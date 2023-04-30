import { SnotifyPosition } from 'ng-snotify';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyCA37oSBDwwNbA7V2XQb9-IFr5GO6-yUBk",
    authDomain: "ngmol-portfolio.firebaseapp.com",
    projectId: "ngmol-portfolio",
    storageBucket: "ngmol-portfolio.appspot.com",
    messagingSenderId: "722029258198",
    appId: "1:722029258198:web:cf991e81fcc21cb841f077",
    measurementId: "G-9YS79F725M"
  },

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
