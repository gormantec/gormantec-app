/*

  filename:git://gormantec:gormantec-app/new-file-4267652.mjs
  created: 2020-7-6T17:40:54
  splash: https://git.gormantec.com/gcode/images/android/android-launchericon-144-144.png
  splashColor: #005040
  splashDuration: 2000

*/

import { PWA } from 'https://git.gormantec.com/gcode/modules/pwa.mjs';

console.log('new javascript file!');

var aPWA=new PWA({
        title:"Hello World",
        footer:"https://www.gormantec.com",
        primaryColor:"#005040"
    });

aPWA.show();

aPWA.floatingActionButton.onclick(function(){
  console.log("button clicked");
  alert("Hello World!");
});
