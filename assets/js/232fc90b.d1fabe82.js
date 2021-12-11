"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),h=s(r),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85361:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>d,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>h});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],d={id:"ThirdPartyLanding",title:"Third-Party Hardware"},l=void 0,s={unversionedId:"ThirdParty/ThirdPartyLanding",id:"ThirdParty/ThirdPartyLanding",title:"Third-Party Hardware",description:"The directory to the left contains documents to explain the integration between OpenBCI and compatible third-party hardware. This landing page summarizes the variety of sampling modalities!",source:"@site/docs/ThirdParty/ThirdPartyLanding.md",sourceDirName:"ThirdParty",slug:"/ThirdParty/ThirdPartyLanding",permalink:"/ThirdParty/ThirdPartyLanding",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/ThirdParty/ThirdPartyLanding.md",tags:[],version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",frontMatter:{id:"ThirdPartyLanding",title:"Third-Party Hardware"},sidebar:"docs",previous:{title:"Electrode Guide",permalink:"/AddOns/Electrodes/ElectrodesLanding"},next:{title:"EmotiBit Guide",permalink:"/ThirdParty/EmotiBit/EmotiBit_Guide"}},c=[{value:"EmotiBit",id:"emotibit",children:[],level:2},{value:"HEGduino",id:"hegduino",children:[],level:2},{value:"IDUN Dryode",id:"idun-dryode",children:[],level:2},{value:"MyoWare",id:"myoware",children:[],level:2},{value:"Pulse Sensor",id:"pulse-sensor",children:[],level:2},{value:"ThinkPulse Active Electrodes",id:"thinkpulse-active-electrodes",children:[],level:2},{value:"Wifi Shield",id:"wifi-shield",children:[],level:2}],p={toc:c};function h(e){var t=e.components,d=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The directory to the left contains documents to explain the integration between OpenBCI and compatible third-party hardware. This landing page summarizes the variety of sampling modalities!"),(0,a.kt)("h2",{id:"emotibit"},"EmotiBit"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"EmotiBit",src:r(64228).Z})),(0,a.kt)("p",null,"Designed by our good friend Sean Montgomery and his team, ",(0,a.kt)("a",{parentName:"p",href:"https://emotibit.com"},"EmotiBit")," can stream 16+ signals from the body (EDA, 3-wavelength PPG, high-res body temperature, humidity and a 9-axis IMU). We think it's the perfect complement to add emotional, physiological and movement data to your EEG recordings!"),(0,a.kt)("p",null,"EmotiBit is a wearable sensor module for capturing high-quality emotional, physiological, and movement data. Easy-to-use and scientifically-validated sensing lets you enjoy wireless data streaming to any platform or direct data recording to the built-in SD card. Customize the Arduino-compatible hardware and fully open-source software to meet any project needs!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tutorial Coming Soon!")),(0,a.kt)("h2",{id:"hegduino"},"HEGduino"),(0,a.kt)("p",null,'The "HEG" in HEGduino stands for HemoEncephaloGraphy, a non-invasive biofeedback method. HEG detects regional changes in the brain\u2019s energy consumption via changes in blood-oxygen. HEGduino enables you to see in real time how your brain blood-oxygen levels respond to your thoughts and actions, resulting in a simple and elegant biofeedback system. You can easily affect and eventually control regional blood flow in your head by focusing, breathing, and relaxing, and watching the response on your screen. With the biofeedback provided by HEGduino, you can exercise your brain and make it healthier with mindful practice.'),(0,a.kt)("p",null,"We're partnering with HEGduino to bring you low-cost at-home HEG technology. Brain blood-flow biofeedback meets open-source IoT technology!  These kits are hand-assembled and tested by their team to run out-of-the box. No firmware tinkering or wire soldering needed!"),(0,a.kt)("p",null,"The open-source, extensively documented HEGduino Kit is now available at the ",(0,a.kt)("a",{parentName:"p",href:"https://shop.openbci.com/products/hegduino-kit"},"OpenBCI Shop"),"."),(0,a.kt)("h2",{id:"idun-dryode"},"IDUN Dryode"),(0,a.kt)("p",null,"Introducing research-validated dry electrodes for sampling frontal cortex EEG and facial/body EMG, compatible with OpenBCI boards and standard snap cables!"),(0,a.kt)("h2",{id:"myoware"},"MyoWare"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"myoware",src:r(17213).Z})),(0,a.kt)("p",null,"The MyoWare muscle sensor can be integrated with both the OpenBCI Cyton and Ganglion. To find out how, check out these tutorials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ThirdParty/Myoware/MyoCyton"},"Cyton + MyoWare")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ThirdParty/Myoware/MyoGanglion"},"Ganglion + MyoWare"))),(0,a.kt)("h2",{id:"pulse-sensor"},"Pulse Sensor"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pulse sensor",src:r(54197).Z})),(0,a.kt)("p",null,"The Pulse Sensor is one of the third-party add-ons offered in our store."),(0,a.kt)("p",null,"It can be connected to the ",(0,a.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/pre-order-ganglion-board"},"Ganglion"),", ",(0,a.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel"},"Cyton"),", or any Arduino board to easily obtain your heart rate using ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Photoplethysmogram"},"photoplethysmogram (PPG)"),"."),(0,a.kt)("h2",{id:"thinkpulse-active-electrodes"},"ThinkPulse Active Electrodes"),(0,a.kt)("p",null,"We are very excited to partner with Conscious Labs to offer this affordable, high-quality biosensing kit to our community. The ThinkPulse\u2122 kit offers research-grade dry, active electrode EEG sensors at an unprecedented price point and comfort level."),(0,a.kt)("h2",{id:"wifi-shield"},"Wifi Shield"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"wifi shield",src:r(63138).Z}),"\nThe Wifi Shield is an add-on module that allows you to connect an OpenBCI Board to the GUI and send data over Wifi rather than Radio/BLE.\nTo learn more about it, see these documents:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ThirdParty/WiFiShield/WiFiLanding"},"Wifi Shield")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ThirdParty/WiFiShield/WiFiAPI"},"OpenBCI Wifi Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ThirdParty/WiFiShield/WiFiSDK"},"OpenBCI Wifi SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ThirdParty/WiFiShield/WiFiProgam"},"Wifi Programming Tutorial"))))}h.isMDXComponent=!0},64228:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Emotibit-7f1de2bd7375b14ad7b42dd0b95dda9c.png"},54197:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Pulse_sensor-f1b163481a89e5771d2079125ebd56ce.jpg"},17213:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/myoware-52db5e2d3a053dd0e4dd8c96e187ad92.jpg"},63138:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/wifi_shield-6e2306dde6128567fc863de266d4cf3a.jpg"}}]);