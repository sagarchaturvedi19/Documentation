"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3797],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,h=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return t?n.createElement(h,o(o({ref:r},d),{},{components:t})):n.createElement(h,o({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},32139:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>d,default:()=>s});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"HardwareDevelopment",title:"Hardware Development"},c="Overview",p={unversionedId:"ForDevelopers/HardwareDevelopment",id:"ForDevelopers/HardwareDevelopment",title:"Hardware Development",description:"Welcome all Hardware Developers! Are you interested in how an OpenBCI board is made? Do you want to make one yourself or incorporate one into a project? This is the place for you! Here you will find resources, including full schematics, for current and past hardware.",source:"@site/docs/ForDevelopers/03-HardwareDevelopment.md",sourceDirName:"ForDevelopers",slug:"/ForDevelopers/HardwareDevelopment",permalink:"/ForDevelopers/HardwareDevelopment",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/ForDevelopers/03-HardwareDevelopment.md",tags:[],version:"current",lastUpdatedAt:1637097781,formattedLastUpdatedAt:"11/16/2021",sidebarPosition:3,frontMatter:{id:"HardwareDevelopment",title:"Hardware Development"},sidebar:"docs",previous:{title:"Firmware Development",permalink:"/ForDevelopers/FirmwareDevelopment"},next:{title:"Deprecated Docs",permalink:"/Deprecated/DeprecatedLanding"}},d=[{value:"OpenBCI Hardware",id:"openbci-hardware",children:[{value:"Cyton",id:"cyton",children:[],level:3},{value:"Cyton Dongle (RFDuino)",id:"cyton-dongle-rfduino",children:[],level:3},{value:"Ganglion",id:"ganglion",children:[],level:3}],level:2},{value:"OpenBCI Headwear",id:"openbci-headwear",children:[{value:"Ultracortex Mark IV (June 2016 - Present)",id:"ultracortex-mark-iv-june-2016---present",children:[],level:3},{value:"Ultracortex Mark III (June 2016)",id:"ultracortex-mark-iii-june-2016",children:[],level:3}],level:2},{value:"Third-Party Hardware",id:"third-party-hardware",children:[{value:"WiFi Shield",id:"wifi-shield",children:[],level:3}],level:2},{value:"OpenBCI Forum",id:"openbci-forum",children:[],level:2}],u={toc:d};function s(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Welcome all Hardware Developers! Are you interested in how an OpenBCI board is made? Do you want to make one yourself or incorporate one into a project? This is the place for you! Here you will find resources, including full schematics, for current and past hardware."),(0,i.kt)("p",null,"All information provided here is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},"MIT License"),"!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"openbci-hardware"},"OpenBCI Hardware"),(0,i.kt)("h3",{id:"cyton"},"Cyton"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Cyton/CytonSpecs"},"Cyton Board")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Cyton/CytonSpecs#openbci-cyton-board-circuit-schematic"},"Cyton Board Schematic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Cyton/CytonExternal"},"External Trigger on OpenBCI Cyton Board"))),(0,i.kt)("h3",{id:"cyton-dongle-rfduino"},"Cyton Dongle (RFDuino)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Cyton/CytonSpecs#openbci-usb-dongle"},"OpenBCI USB Dongle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Cyton/CytonSpecs#openbci-dongle-circuit-schematic"},"OpenBCI USB Dongle Schematic"))),(0,i.kt)("h3",{id:"ganglion"},"Ganglion"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Ganglion/GanglionSpecs"},"Ganglion Board")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Ganglion/GanglionSpecs#ganglion-board-circuit-schematic"},"Ganglion Board Schematic"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"openbci-headwear"},"OpenBCI Headwear"),(0,i.kt)("h3",{id:"ultracortex-mark-iv-june-2016---present"},"Ultracortex Mark IV (June 2016 - Present)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/AddOns/Headwear/MarkIV"},"Mark IV Documentation"))),(0,i.kt)("h3",{id:"ultracortex-mark-iii-june-2016"},"Ultracortex Mark III (June 2016)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Deprecated/MarkIII"},"Mark III Documentation"),". This hardware is now deprecated.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"third-party-hardware"},"Third-Party Hardware"),(0,i.kt)("h3",{id:"wifi-shield"},"WiFi Shield"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ThirdParty/WiFiShield/WiFiLanding"},"WiFi Board")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ThirdParty/WiFiShield/WiFiLanding#wifi-board-circuit-schematic"},"WiFi Board Schematic"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"openbci-forum"},"OpenBCI Forum"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For anyone interested in building hardware from scratch, we recommend joining the OpenBCI Forum to learn and discuss the process with others."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://openbci.com/forum/index.php?p=/categories/hardware"},"Hardware Discussions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://openbci.com/forum/index.php?p=/categories/headware"},"Headwear Discussions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://openbci.com/forum/index.php?p=/categories/electrodes"},"Electrodes Discussions"))))}s.isMDXComponent=!0}}]);