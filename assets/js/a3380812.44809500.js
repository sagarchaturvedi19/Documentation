"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75373:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>c});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"FocusArduino",title:"Send Focus Data from GUI to Arduino"},s=void 0,p={unversionedId:"Examples/EEGProjects/FocusArduino",id:"Examples/EEGProjects/FocusArduino",title:"Send Focus Data from GUI to Arduino",description:"Starting with GUI v5.0.0, this feature is temporarily deprecated until a more reliable and research-based Focus algorithm is implemented. If you would still like to use this widget, you can download and run GUI v4.2.0.",source:"@site/docs/Examples/EEGProjects/17-Arduino_Focus_Example.md",sourceDirName:"Examples/EEGProjects",slug:"/Examples/EEGProjects/FocusArduino",permalink:"/Examples/EEGProjects/FocusArduino",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Examples/EEGProjects/17-Arduino_Focus_Example.md",tags:[],version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:17,frontMatter:{id:"FocusArduino",title:"Send Focus Data from GUI to Arduino"},sidebar:"docs",previous:{title:"EMG-controlled Tetris",permalink:"/Examples/EMGProjects/EMG_Tetris"},next:{title:"Motor Imagery",permalink:"/Examples/EEGProjects/MotorImagery"}},u=[{value:"What do I need?",id:"what-do-i-need",children:[],level:2},{value:"Helpful Background Skills",id:"helpful-background-skills",children:[{value:"Step 1 - Load the Example in the Arduino IDE",id:"step-1---load-the-example-in-the-arduino-ide",children:[],level:3},{value:"Step 2 - Upload the Arduino sketch",id:"step-2---upload-the-arduino-sketch",children:[],level:3},{value:"Step 3 - Open OpenBCI_GUI in Synthetic Mode",id:"step-3---open-openbci_gui-in-synthetic-mode",children:[],level:3},{value:"Step 4 - Start Streaming",id:"step-4---start-streaming",children:[{value:"Open and Setup the Networking Widget",id:"open-and-setup-the-networking-widget",children:[],level:4},{value:"Open the Focus Widget. Then, click &quot;Start Data Stream&quot; and then &quot;Start&quot; in the Networking Widget",id:"open-the-focus-widget-then-click-start-data-stream-and-then-start-in-the-networking-widget",children:[],level:4},{value:"Next, turn off channel one to simulate Focused state.",id:"next-turn-off-channel-one-to-simulate-focused-state",children:[],level:4}],level:3},{value:"Step 5 - Learn! Create! Share!",id:"step-5---learn-create-share",children:[],level:3}],level:2}],d={toc:u};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Starting with GUI v5.0.0, this feature is temporarily deprecated until a more reliable and research-based Focus algorithm is implemented. If you would still like to use this widget, you can download and run ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/OpenBCI/OpenBCI_GUI/releases/tag/v4.2.0"},"GUI v4.2.0"),".")),(0,o.kt)("p",null,"This tutorial shows you how to get started streaming data from the OpenBCI_GUI's Focus Widget via Serial connection to an ",(0,o.kt)("a",{parentName:"p",href:"https://store.arduino.cc/usa/arduino-uno-rev3"},"Arduino UNO Rev3"),".\nHead ",(0,o.kt)("a",{parentName:"p",href:"https://www.instructables.com/id/Send-Focus-Data-From-OpenBCI-GUI-to-Arduino/"},(0,o.kt)("strong",{parentName:"a"},"HERE"))," to find the OpenBCI/Arduino Focus Data tutorial in the updated Instructable format!"),(0,o.kt)("h2",{id:"what-do-i-need"},"What do I need?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenBCI/OpenBCI_GUI/releases/latest"},"OpenBCI_GUI")," standalone app or Processing sketch"),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://store.arduino.cc/usa/arduino-uno-rev3"},"Arduino UNO"),", or other similar device"),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage"},"OpenBCI Board")," ",(0,o.kt)("em",{parentName:"li"},"(Optional)"))),(0,o.kt)("h2",{id:"helpful-background-skills"},"Helpful Background Skills"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Guide/HomePage"},"Arduino Basics")),(0,o.kt)("li",{parentName:"ul"},"Knowledge of ",(0,o.kt)("a",{parentName:"li",href:"https://www.arduino.cc/reference/en/"},"Arduino")," or C-based programming"),(0,o.kt)("li",{parentName:"ul"},"Experience running the OpenBCI GUI ",(0,o.kt)("a",{parentName:"li",href:"/Software/OpenBCISoftware/GUIDocs"},"from the Processing IDE")," ",(0,o.kt)("em",{parentName:"li"},"(Optional)"))),(0,o.kt)("h3",{id:"step-1---load-the-example-in-the-arduino-ide"},"Step 1 - Load the Example in the Arduino IDE"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/Documentation/blob/master/OpenBCI_files/OpenBCI_GUI-FocusArduino/OpenBCI_GUI-FocusArduino.ino"},"OpenBCI_GUI-FocusArduino.ino")," file is designed to serve as a simple starting point for creating your own Arduino project using data from the GUI over serial."),(0,o.kt)("p",null,"You can copy/paste the code from Github into the Arduino IDE or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/Documentation/archive/master.zip"},"download the Docs")," and navigate to the example ",(0,o.kt)("inlineCode",{parentName:"p"},"/OpenBCI_files/OpenBCI_GUI-FocusArduino/OpenBCI_GUI-FocusArduino.ino"),"."),(0,o.kt)("h3",{id:"step-2---upload-the-arduino-sketch"},"Step 2 - Upload the Arduino sketch"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Upload Arduino Sketch",src:n(56359).Z})),(0,o.kt)("p",null,"After uploading the sketch, you can close or minimize the Arduino IDE, but keep the Arduino connected to the computer. The sketch we just uploaded is running!"),(0,o.kt)("h3",{id:"step-3---open-openbci_gui-in-synthetic-mode"},"Step 3 - Open OpenBCI_GUI in Synthetic Mode"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open GUI Synthetic Mode",src:n(86232).Z})),(0,o.kt)("h3",{id:"step-4---start-streaming"},"Step 4 - Start Streaming"),(0,o.kt)("h4",{id:"open-and-setup-the-networking-widget"},"Open and Setup the Networking Widget"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setup Networking Widget",src:n(3402).Z})),(0,o.kt)("h4",{id:"open-the-focus-widget-then-click-start-data-stream-and-then-start-in-the-networking-widget"},'Open the Focus Widget. Then, click "Start Data Stream" and then "Start" in the Networking Widget'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"OpenBCI Serial Not Focused",src:n(20825).Z})),(0,o.kt)("h4",{id:"next-turn-off-channel-one-to-simulate-focused-state"},"Next, turn off channel one to simulate Focused state."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"OpenBCI Serial Focused",src:n(10362).Z})),(0,o.kt)("p",null,'The Arduino\'s built-in LED should blink when the Focus Widget reads "focused!"'),(0,o.kt)("p",null,"How does the Focus Widget work? ",(0,o.kt)("a",{parentName:"p",href:"https://openbci.com/community/focus-visualization-widget/"},"Check out this community post!")),(0,o.kt)("p",null,"How can this be used to ",(0,o.kt)("em",{parentName:"p"},"make")," something? ",(0,o.kt)("a",{parentName:"p",href:"https://openbci.com/community/using-openbci-guis-focus-widget-to-harness-alpha-and-beta-waves/"},"Here's an example!")),(0,o.kt)("h3",{id:"step-5---learn-create-share"},"Step 5 - Learn! Create! Share!"),(0,o.kt)("p",null,"From here, you can add more to your new Arduino project to react to Focus data from the OpenBCI_GUI:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use Live Data from a ",(0,o.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton")," or ",(0,o.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/ganglion-board"},"Ganglion"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Try controlling even more LEDs using the Arduino")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Try controlling a motor or group of motors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make a second copy of your project and make it a two player game!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://openbci.com/community/"},"Share what you've made in a community post!")))))}c.isMDXComponent=!0},86232:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gui_arduino_selectSyntheticMode-43609871b25724ca06803e1d4051d28d.png"},10362:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gui_arduino_serial_Focused-8e4d3cd0638d198894996f03f8f5642d.png"},20825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gui_arduino_serial_notFocused-a93bc1e2a323f07e0af38379f8fa9622.png"},3402:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gui_arduino_setupNetworkingWidgetSerial-4758aa1c93d865aa756da625dc6d4f65.png"},56359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gui_arduino_uploadArduinoSketchIDE-10148a4d0ba99f80d181695fc8846c2a.png"}}]);