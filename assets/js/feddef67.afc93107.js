"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2734],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return o?a.createElement(m,i(i({ref:t},c),{},{components:o})):a.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<n;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},27879:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>c,default:()=>d});var a=o(87462),r=o(63366),n=(o(67294),o(3905)),i=["components"],l={id:"BioEra",title:"BioEra"},s=void 0,u={unversionedId:"Software/CompatibleThirdPartySoftware/BioEra",id:"Software/CompatibleThirdPartySoftware/BioEra",title:"BioEra",description:"From the BioEra homepage: BioEra is a visual designer useful for analyzing signals in real time. It can be used with any device with ability to stream data to a computer.",source:"@site/docs/Software/CompatibleThirdPartySoftware/06-BioEra.md",sourceDirName:"Software/CompatibleThirdPartySoftware",slug:"/Software/CompatibleThirdPartySoftware/BioEra",permalink:"/Software/CompatibleThirdPartySoftware/BioEra",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Software/CompatibleThirdPartySoftware/06-BioEra.md",tags:[],version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:6,frontMatter:{id:"BioEra",title:"BioEra"},sidebar:"docs",previous:{title:"BrainBay",permalink:"/Software/CompatibleThirdPartySoftware/BrainBay"},next:{title:"VirtualBox Windows Guide",permalink:"/Software/CompatibleThirdPartySoftware/VirtualBox"}},c=[{value:"Setting Up Your Environment",id:"setting-up-your-environment",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Streaming from OpenBCI within BioEra",id:"streaming-from-openbci-within-bioera",children:[],level:2},{value:"Quick Project: Using the Oscilloscoope Tool",id:"quick-project-using-the-oscilloscoope-tool",children:[],level:2},{value:"Documentation",id:"documentation",children:[],level:2}],p={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"From the BioEra homepage: BioEra is a visual designer useful for analyzing signals in real time. It can be used with any device with ability to stream data to a computer."),(0,n.kt)("p",null,"BioEra is used to create a design visually. A design represents data flow from input (e.g. biofeedback device) to output (e.g. visual or sound feedback). The flow can be customized with hundreds built-in objects (elements). For example an amplitude of alpha brainwaves can be filtered from input EEG signal, it can then trigger a MIDI, video or a computer task at a certain threshold level."),(0,n.kt)("h2",{id:"setting-up-your-environment"},"Setting Up Your Environment"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Windows:")," BioEra only works with Windows and Android systems."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MacOS and Linux:")," If you have Mac OS or Linux, you can use BioEra through a virtual machine program like VirtualBox. Check out our VirtualBox tutorial ",(0,n.kt)("a",{parentName:"p",href:"/Software/CompatibleThirdPartySoftware/VirtualBox"},"here!")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Click on the download link for the trial version of BioEra here: (http:). If you're using a virtual machine, be sure to download and set up BioEra from within the VM environment."),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"BioEra Trial 4.027 for Windows - full"),", or the equivalent link for the latest version, and follow the prompts to run the program."),(0,n.kt)("p",null,"During installation, you may get an error that your computer or virtual machine has the incorrect processor for the program; just disregard the warning and continue with the installation."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,'Once installation is complete, navigate to the new "BioEraTrial" folder and double-click the "bioera" executable file. This will run BioEra.'),(0,n.kt)("p",null,"A PacMan demo will pop up automatically. Play around with the demo, or take a look at the ",(0,n.kt)("a",{parentName:"p",href:"http://www.bioera.net/index.shtml"},"BioEra website"),", to learn more about the software's capabilites."),(0,n.kt)("h2",{id:"streaming-from-openbci-within-bioera"},"Streaming from OpenBCI within BioEra"),(0,n.kt)("p",null,"This section will show how to stream data live from your OpenBCI board within BioEra. We'll also show how to use the oscilloscope tool, as an introduction to BioEra's interface, as well as a way to verify your board is streaming data to BioEra."),(0,n.kt)("p",null,"Start BioEra. To start a new project, select System -",">"," New Design from the toolbar of one of the windows."),(0,n.kt)("p",null,'Two new windows will appear - one with a light gray background (the "design" window) and one with a dark gray background (the "output" window). In the design window, select Element -',">"," New."),(0,n.kt)("p",null,'In the New Element window, find the "FTDI Serial Port" object. Select it and click "OK".'),(0,n.kt)("p",null,"An FTDI icon should now be visible in the design window."),(0,n.kt)("p",null,"Navigate to Element -",">",' New again from the toolbar. Find the "OpenBCI" object. Select it and click "OK". An OpenBCI icon should now be visible in the design window.'),(0,n.kt)("p",null,"Connect the output of the FTDI object with the input of the OpenBCI object, as shown. To connect the two objects, click on the output of the FTDI object, the click on the input of the OpenBCI object."),(0,n.kt)("p",null,"You're ready to stream live data from your OpenBCI board! In the next section, we'll give an example for how to use and display your OpenBCI data using BioEra tools."),(0,n.kt)("h2",{id:"quick-project-using-the-oscilloscoope-tool"},"Quick Project: Using the Oscilloscoope Tool"),(0,n.kt)("p",null,"BioEra has a wide variety of useful tools for streaming EEG data. To get familiar with BioEra\u2019s interface, and to double-check our board is streaming data, we\u2019ll show how to use the oscilloscope tool. An oscilloscope is a tool that displays changes in signal voltage vs. time (just like the main display of the OpenBCI GUI)."),(0,n.kt)("p",null,"Select an oscilloscope object the same way you selected the FTDI and OpenBCI objects. In addition to the oscilloscope icon in the design window, an oscilloscope display will appear in the dark grey window, like below. Connect one of the OpenBCI channels to the oscilloscope icon input."),(0,n.kt)("p",null,'Select the "View" button at the top of the design window. The oscilloscope screen should look like below.'),(0,n.kt)("p",null,'Press the "play" button at the top of the design window. Data will start streaming from your board into BioEra (BioEra should automatically identify your board\'s serial port). A red light should appear on the OpenBCI Dongle; this means data is streaming from your OpenBCI board to your computer.'),(0,n.kt)("p",null,"Tap on the pins of your OpenBCI board. You should see the oscilloscope signal react accordingly."),(0,n.kt)("p",null,"You are now streaming live data from your OpenBCI board into BioEra! Check out the rest of BioEra's tools for EEG streaming and processing."),(0,n.kt)("h2",{id:"documentation"},"Documentation"),(0,n.kt)("p",null,"To learn more about BioEra, look through their ",(0,n.kt)("a",{parentName:"p",href:"http://www.proatech.com/be/manual.html"},"manual")," or ",(0,n.kt)("a",{parentName:"p",href:"http://www.bioera.net/support/forum.jsp"},"forum"),"."),(0,n.kt)("p",null,"Build something new using BioEra and OpenBCI hardware? Post about it on our ",(0,n.kt)("a",{parentName:"p",href:"http://openbci.com/community/"},"community page!")))}d.isMDXComponent=!0}}]);