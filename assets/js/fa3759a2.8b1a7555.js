"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7340],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=o,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},25773:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>h});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],s={id:"MotorImagery",title:"Motor Imagery"},l=void 0,c={unversionedId:"Examples/EEGProjects/MotorImagery",id:"Examples/EEGProjects/MotorImagery",title:"Motor Imagery",description:"This tutorial was made by Rakesh C Jakati.",source:"@site/docs/Examples/EEGProjects/20-Motor_Imagery.md",sourceDirName:"Examples/EEGProjects",slug:"/Examples/EEGProjects/MotorImagery",permalink:"/Examples/EEGProjects/MotorImagery",editUrl:"https://github.com/OpenBCI/Documentation/edit/master/website/docs/Examples/EEGProjects/20-Motor_Imagery.md",tags:[],version:"current",lastUpdatedAt:1627405574,formattedLastUpdatedAt:"7/27/2021",sidebarPosition:20,frontMatter:{id:"MotorImagery",title:"Motor Imagery"},sidebar:"docs",previous:{title:"Send Focus Data from GUI to Arduino",permalink:"/Examples/EEGProjects/FocusArduino"},next:{title:"Frequently Asked Questions",permalink:"/FAQ/FAQLanding"}},d=[{value:"Materials Required",id:"materials-required",children:[],level:2},{value:"Hardware Setup",id:"hardware-setup",children:[{value:"Imagined Moments Classification",id:"imagined-moments-classification",children:[],level:3},{value:"Working with EEG Markers",id:"working-with-eeg-markers",children:[],level:3},{value:"Segmentation",id:"segmentation",children:[],level:3},{value:"Acquition of EEG Data and Markers",id:"acquition-of-eeg-data-and-markers",children:[],level:3},{value:"Recording Calibration Data",id:"recording-calibration-data",children:[],level:3},{value:"Import Calibration Data",id:"import-calibration-data",children:[],level:3},{value:"Picking up Marker Streams with LSL",id:"picking-up-marker-streams-with-lsl",children:[],level:3},{value:"Streaming the Data",id:"streaming-the-data",children:[],level:3},{value:"Running NeuroPype Pipeline",id:"running-neuropype-pipeline",children:[],level:3}],level:2}],p={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial was made by Rakesh C Jakati."),(0,i.kt)("p",null,"Motor imagery (MI)\u2013based brain-computer interface (BCI) is one of the standard concepts of BCI, in that the user can generate induced activity from the motor cortex by imagining motor movements without any limb movement or external stimulus.\nIn this tutorial, we will learn how to use OpenBCI equipment for motor imagery. For that, we will design a BCI system that allows a user to control a system by imagining different movements of their limbs. "),(0,i.kt)("h2",{id:"materials-required"},"Materials Required"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"OpenBCI ",(0,i.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542"},"Cyton Board")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/ultracortex-mark-iv"},"Ultracortex EEG headset")," or ",(0,i.kt)("a",{parentName:"li",href:"https://shop.openbci.com/collections/frontpage/products/openbci-eeg-electrocap-kit"},"EEG cap")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.mouser.com/ProductDetail/Espressif-Systems/ESP32-DevKitC-32D?qs=%252BEew9%252B0nqrDsObWEpDx6YQ%3D%3D&mgh=1&gclid=Cj0KCQiAv6yCBhCLARIsABqJTjYSYNAq2huvV-lF7V7lKuONcge-Uw2UY4cy9z42E52fUWGZIaLCYzEaAoEyEALw_wcB"},"NodeMCU")," "),(0,i.kt)("li",{parentName:"ol"},"NodeMCU constructed ",(0,i.kt)("a",{parentName:"li",href:"https://www.instructables.com/NodeMCU-ESP8266-WiFi-Robot-Car-Controlled-by-Appli/"},"car")),(0,i.kt)("li",{parentName:"ol"},"Computer with installed with ",(0,i.kt)("a",{parentName:"li",href:"https://www.neuropype.io/#editions"},"NeuroPype")),(0,i.kt)("li",{parentName:"ol"},"Computer with installed ","[OpenBCI GUI]"," ","(","https:)"),(0,i.kt)("li",{parentName:"ol"},"Computer with installed ",(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,i.kt)("h2",{id:"hardware-setup"},"Hardware Setup"),(0,i.kt)("p",null,"If you are using the assembled Ultracortex IV, all you need to do is place the spiky electrodes on the following 10-20 locations: C3 ,Cz, C4, P3, Pz, P4, O1, O2 and FPz. If you want to assemble the headset yourself follow this tutorial.\nNext, connect the electrodes to the Cyton board pins as shown on the table below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Electrode Chart",src:a(40788).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Electrode placement for Motor Imagery",src:a(97630).Z})),(0,i.kt)("p",null,"You can either use the EEG Electrode Cap or the Ultracortex Mark IV headset. This demonstration uses a ",(0,i.kt)("a",{parentName:"p",href:"https://shop.openbci.com/collections/frontpage/products/openbci-eeg-electrocap"},"dedicated EEG cap"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Using a Brain Product Easy Cap for Data Acquisition",src:a(93218).Z})),(0,i.kt)("h1",{id:"software-setup"},"Software Setup"),(0,i.kt)("p",null,"Let us design a two-class BCI using the software NeuroPype. NeuroPype is free for academic users and you can get a 30 day trial if you are an individual/startup. You can get started with NeuroPype by clicking ",(0,i.kt)("a",{parentName:"p",href:"https://www.neuropype.io/"},"here"),"."),(0,i.kt)("h3",{id:"imagined-moments-classification"},"Imagined Moments Classification"),(0,i.kt)("p",null,"To start open the Neuropype Pipeline Designer application. Go to file and open Simple Motor Imagery Prediction with CSP. We will use the example provided by Neuropype software."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Branch Layout",src:a(30795).Z})),(0,i.kt)("p",null,"This pipeline uses EEG to predict whether you\u2019re currently imagining one of the possible limb movements (default: left-hand movement vs. right-hand movement for two-class classification). The output of this pipeline at any tick is the probability that the person imagines each type of movement. Since the EEG patterns associated with these movements look different for any two people, several nodes (here: Common Spatial Patterns and Logistic Regression) must first adapt themselves based on some calibration data for the particular user. Moreover, it\u2019s not enough for the calibration data to be arbitrary EEG data, it must meet certain criteria (this same rule applies to pretty much any use of machine learning on EEG data). First, the node needs to obtain examples of EEG left-hand movement and right-hand movement, respectively. Also, a single trial per class of movement is not enough,  the node needs to see close to 20\u201350 repeats when using a full-sized EEG headset. Lastly, these trials must be in a randomized order, i.e., not simply a block of all-left trials followed by a block of all-right trials. Collecting data in that way is one of the most common beginner mistakes with machine learning on time series, and it is important to avoid it."),(0,i.kt)("h3",{id:"working-with-eeg-markers"},"Working with EEG Markers"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Assign Targets Node",src:a(66866).Z})),(0,i.kt)("p",null,"For the aforementioned reasons, the EEG signal must be annotated such that one can tell which data points correspond to Class 1 (subject imagines left-hand movement) and which ones correspond to Class 2 (subject imagines right-hand movement). One way to do this is to include a special \u2018trigger channel\u2019 in the EEG, which takes on pre-defined signal levels that encode different classes (e.g. 0=left, 1=right). In that case, the pipeline assumes that the data packets emitted by the LSL Input node are not just one EEG stream, but also a second stream that has a list of marker strings along with their timestamps (markers), i.e., they are multi-stream packets and there are consequently two data streams flowing through the entire pipeline. The markers are then interpreted by the rest of the pipeline to indicate the points in time around which the EEG is of a particular class (in this pipeline, a marker with the string \u2018left\u2019 and time-stamp 17.5 would indicate that the EEG at 17.5 seconds into the recording is of class 0, and if the marker had been \u2018right\u2019 it would indicate class 1).\nOf course, the data could contain any amount of other random markers (e.g., \u2018recording-started\u2019, \u2018user-was-sneezing\u2019, \u2018enter-pressed\u2019), so how does the pipeline know what markers encode classes, and which classes they encode? This binding is established by the Assign Targets node. The settings are shown below. The syntax means that \u2018left\u2019 strings map to class 0, \u2018right\u2019 maps to class 1, and all other strings don\u2019t map to anything."),(0,i.kt)("h3",{id:"segmentation"},"Segmentation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Segmentation Node",src:a(7245).Z})),(0,i.kt)("p",null,"The second question is, given that there\u2019s a marker at 17.5 seconds, how does the pipeline know where relative to that point in time we find the relevant pattern in the EEG that captures the imagined movement? Does it start a second before the marker and end a second after, or does it start at the marker and end 10 seconds later? Extracting the right portion of the data is usually handled by the Segmentation node, which extracts segments of a certain length relative to each marker. The picture above shows the settings for this pipeline, which are interpreted as follows: extract a segment that starts at 0.5 seconds after each marker and ends at 3.5 seconds after that marker (i.e., the segment is 3 seconds long). If you use negative numbers, you can place the segment before the marker."),(0,i.kt)("h3",{id:"acquition-of-eeg-data-and-markers"},"Acquition of EEG Data and Markers"),(0,i.kt)("p",null,"Plug in the RFduino dongle, connect electrodes to the cyton board pins. Wear the EEG headset and finally connect the ear clip to SRB. Open the OpenBCI GUI, select the appropriate port number and start streaming data from the Cyton board. Go to the networking tab and select the LSL protocol. Select \u201cTIME-SERIES\u201d data type and start streaming."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hardware setting in the GUI",src:a(36099).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The OpenBCI GUI",src:a(35048).Z})),(0,i.kt)("p",null,"Before we start classifying the Motor Imagery data, we need to calibrate the system."),(0,i.kt)("h3",{id:"recording-calibration-data"},"Recording Calibration Data"),(0,i.kt)("p",null,"The NeuroPype pipeline is doing a great job, but wouldn\u2019t it be nice if we didn\u2019t have to recollect the calibration data each time we run the pipeline? It\u2019s often more convenient to record calibration data into a file in the first session, and load that file every time we run our pipeline. For this, we need to use the Inject Calibration Data node, which has a second input port where one can pipe a calibration recording (which we import here using Import XDF).\nStart the Lab recorder and find the OpenBCI EEG stream in the window. Now run the python script motorimg_calibrate.py found in the extras folder in your Neuropype installation folder. Now update the streams in the lab recorder. You should now see MotorImag-Markers and obci_eeg1 stream along with your computer name."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lab Recorder",src:a(56228).Z})),(0,i.kt)("p",null,"The python script along with OpenBCI, lab recorder is used to record calibration data. The script sends markers matching what the person is imagining that is 'Left' or 'Right' and instructs the user when to imagine that movement which will be stored in the .xdf file along with the EEG data.\nRun the python script and start recording the OpenBCI stream and markers stream using the lab recorder. Follow the instructions shown on the window: when the window shows \u2018R\u2019\u200a imagine moving your right arm, and when it shows \u2018L\u2019\u200a\u200a imagine moving your left arm. \u200aIt takes about half a second for a person to read the instruction and begin imagining the movement, and he/she will finish about 3 seconds later and get ready for the next trial. This is why the segment time limits in the segmentation node are set to (0.5,3.5).\nYou can configure the number of trials per class and other parameters in motorimg_calibrate.py. "),(0,i.kt)("h3",{id:"import-calibration-data"},"Import Calibration Data"),(0,i.kt)("p",null,"You need to edit a few nodes in this pipeline. You should delete these three nodes (Import SET, Stream Data, LSL Output) at the bottom of the pipeline design as we will use our own recorded calibration data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Calibration Data",src:a(94342).Z}),"\nDelete these nodes from the Pipeline Design"),(0,i.kt)("p",null,"Delete the Import Set node that is connected to Inject Calibration Data and replace it with Import XDF as the calibration data is recorded in .xdf format."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Import XDF",src:a(51331).Z})),(0,i.kt)("p",null,"Replace the Import Set with Import XDF"),(0,i.kt)("p",null,"Enter the calibration data filename\nFill in the appropriate filename of the XDF file in the window."),(0,i.kt)("h3",{id:"picking-up-marker-streams-with-lsl"},"Picking up Marker Streams with LSL"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LSL Input",src:a(73594).Z})),(0,i.kt)("p",null,"The LSL Input node is responsible for returning a marker stream together with the EEG. Enter the name of the OpenBCI stream in the query and after you import the .xdf calibration data, you are ready to go."),(0,i.kt)("h3",{id:"streaming-the-data"},"Streaming the Data"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OSC Output",src:a(44851).Z})),(0,i.kt)("p",null,"Connect an OSC (Open sound control) Output node to the Logistic Regression node in the pipeline designer and configure it as shown below before you stream the data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OSC Number_Output",src:a(7326).Z})),(0,i.kt)("p",null,"OSC(Open Sound Control) output\nType in the IP address of the device to which you want to stream the data, which can be either an Arduino or a Raspberry Pi). Use 127.0.0.1 as an IP address if you want to receive the data on your local computer.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Tutorials/tree/master/Motor_Imagery"},"Here")," is a python code to receive the streamed data on the local computer."),(0,i.kt)("h3",{id:"running-neuropype-pipeline"},"Running NeuroPype Pipeline"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"NeuroPype Icon",src:a(27139).Z})),(0,i.kt)("p",null,"We are in the final stage of the Motor Imagery Classification pipeline design. Now right click on the NeuroPype icon in the taskbar and click run pipeline. Navigate to your file path and select your edited pipeline simplemotorimagery.pyp and run it. If everything is configured properly, you will get two windows showing the Classification and Misclassification Rate. You can now see real-time predictions of either left or right on the windows. Imagine moving your right arm to increase the amplitude power of the right prediction and imagine moving your left arm to increase the amplitude power of the left prediction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Classification Icon",src:a(25864).Z})),(0,i.kt)("p",null,"When you run the python script on your local computer, you should receive the prediction data as shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OSC output from python script",src:a(72786).Z})),(0,i.kt)("p",null,"The car above uses NodeMCU and L298N motor driver. The NodeMCU coded in ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"Arduino IDE")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenBCI/OpenBCI_Tutorials/tree/master/Motor_Imagery"},"code")," is mentioned below. To learn how to use NodeMCU click ",(0,i.kt)("a",{parentName:"p",href:"https://create.arduino.cc/projecthub/auggujarat/getting-started-with-nodemcu-esp8266-on-arduino-ide-b7e18e"},"here"),"."),(0,i.kt)("p",null,"This OSC protocol is widely used in fields like musical expression, robotics, video performance interfaces, distributed music systems, and inter-process communication. You can use it to drive motors, activate devices, and much more. This example video uses the OSC output to control the direction of rotation of the car.\nFollowing this tutorial, you will be able to design your own Motor Imagery Classification with your own calibration data and control cars, drones, and devices.\nStart using BCI technologies to bring products of your imagination to life - there is no limit to what you can imagine!"))}h.isMDXComponent=!0},66866:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Assign_Target_Node-b988dcbaf5b12d4f6f1f55e7a4d54624.png"},94342:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Calibration_Data-b6a5ad00f3389256d844e85fa412a867.png"},25864:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Classification-bc753efa312cada3555962a4eeabbec9.png"},93218:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EEG_Cap-9d7d81509006fed58175f45a5c62ada7.png"},40788:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Electrode_Chart-c414db6eaae4ba7e4431d6538999e970.png"},36099:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Hardware_Setting_in_the_GUI-46b1a8bc92315680c00306ab64f2f7fa.png"},51331:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Import_XDF-fa202ca311d219f70204b2cc55e737c9.png"},73594:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LSL_Input-ddbe636482b9e26440398aa107ae15e5.png"},56228:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Lab_Recorder-1108bb1fd52d5614965c075b8c78b998.png"},30795:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Neuropype_Branch_Layout-55c5044b4627f14a35dc6241099f4ef0.png"},27139:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Neuropype_Icon-b476af1f6472c81e95af8c3d660b6d65.png"},7326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OSC_Number_Output-5408bf688c773bea0cc53d61de500fbe.png"},44851:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OSC_Output-4e00481c344bc04a958f3bef0bed5f20.png"},72786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OSC_Python_output-182e82b6b8ebea55722d4710a5d8a955.png"},7245:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Segmentation_Node-a569e31068003d3489851cd1a7aabe58.png"},35048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/The_OpenBCI_GUI-e672676fefaab72a872dbc4d71289ccf.png"},97630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/electrode_placement-34b61bcd1d0a87bced722dc571c8028b.png"}}]);