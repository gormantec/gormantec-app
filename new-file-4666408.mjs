/*

  filename:git://gormantec:gormantec-app/new-file-4666408.mjs
  created: 2020-7-4T08:26:49
  splash: https://git.gormantec.com/gcode/images/android/android-launchericon-144-144.png
  splashColor: #005040
  splashDuration: 2000

*/

import { PWA, Page, Div } from 'https://git.gormantec.com/gcode/modules/pwa.mjs';

var homePage=new Page({ color:"white", backgroundColor:"black", backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundImage:"url(https://c7.uihere.com/files/614/185/190/sun-solar-flare-uv-uv-light.jpg)"});

var secondPage=new Page({ color:"black", backgroundColor:"white", navigateBackPage:homePage, child: new Div({innerHTML:"url(https://git.gormantec.com/gcode/html/test.html)"})});

var aPWA=new PWA({ title:"Gorman Technology", footer:"https://www.gormantec.com", primaryColor:"#005040" });

aPWA.floatingActionButton.onclick(function(){ aPWA.setPage(secondPage); });

aPWA.pwaBody.style.backgroundColor="black";

window.setTimeout(function(){ aPWA.setPage(homePage); },1000);

aPWA.show();