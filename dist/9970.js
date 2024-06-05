"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[9970],{9970:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var i,o=t(420);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,d(i.key),i)}}function d(e){var a=function(e,a){if("object"!=r(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(a)?a:a+""}function l(e,a,t){return a=c(a),function(e,a){if(a&&("object"===r(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(a,t||[],c(e).constructor):a.apply(e,t))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function m(e,a){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},m(e,a)}var g=function(e){function a(){var e;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),(e=l(this,a)).columns=[{name:"id",label:"ID",width:112,sortable:!0,selected:!0},{name:"patient_name",label:"Patient Name",width:280,sortable:!0,selected:!0},{name:"age",label:"Age",width:112,sortable:!0,selected:!0},{name:"gender",label:"Gender",width:168,sortable:!0,selected:!0},{name:"admission_date",label:"Admission Date",width:224,sortable:!0,selected:!0},{name:"discharge_date",label:"Discharge Date",width:224,sortable:!0,selected:!0},{name:"diagnosis",label:"Diagnosis",width:336,sortable:!0,selected:!0},{name:"doctor",label:"Doctor",width:224,sortable:!0,selected:!0},{name:"ward",label:"Ward",width:168,sortable:!0,selected:!0},{name:"total_bill",label:"Total Bill ($)",width:224,sortable:!0,selected:!0}],e.rows=[{id:1,patient_name:"John Doe",age:45,gender:"Male",admission_date:"2024-05-01",discharge_date:"2024-05-10",diagnosis:"Pneumonia",doctor:"Dr. Smith",ward:"ICU",total_bill:5e3},{id:2,patient_name:"Jane Smith",age:35,gender:"Female",admission_date:"2024-05-03",discharge_date:"2024-05-08",diagnosis:"Fractured Leg",doctor:"Dr. Johnson",ward:"Orthopedic",total_bill:3e3},{id:3,patient_name:"Michael Brown",age:60,gender:"Male",admission_date:"2024-05-05",discharge_date:"2024-05-15",diagnosis:"Heart Attack",doctor:"Dr. Williams",ward:"Cardiology",total_bill:8e3},{id:4,patient_name:"Emily Davis",age:22,gender:"Female",admission_date:"2024-05-02",discharge_date:"2024-05-07",diagnosis:"Appendicitis",doctor:"Dr. Anderson",ward:"Surgery",total_bill:4e3},{id:5,patient_name:"David Johnson",age:50,gender:"Male",admission_date:"2024-05-06",discharge_date:"2024-05-12",diagnosis:"Stroke",doctor:"Dr. Martinez",ward:"Neurology",total_bill:7e3},{id:6,patient_name:"Susan Williams",age:55,gender:"Female",admission_date:"2024-05-08",discharge_date:"2024-05-16",diagnosis:"Cancer",doctor:"Dr. Thompson",ward:"Oncology",total_bill:1e4},{id:7,patient_name:"Robert Taylor",age:65,gender:"Male",admission_date:"2024-05-10",discharge_date:"2024-05-20",diagnosis:"Diabetes",doctor:"Dr. Brown",ward:"Endocrinology",total_bill:6e3},{id:8,patient_name:"Linda Clark",age:40,gender:"Female",admission_date:"2024-05-12",discharge_date:"2024-05-18",diagnosis:"Gallstones",doctor:"Dr. Garcia",ward:"Gastroenterology",total_bill:4500},{id:9,patient_name:"James White",age:30,gender:"Male",admission_date:"2024-05-14",discharge_date:"2024-05-19",diagnosis:"Migraine",doctor:"Dr. Lee",ward:"Neurology",total_bill:3500},{id:10,patient_name:"Mary Martinez",age:70,gender:"Female",admission_date:"2024-05-18",discharge_date:"2024-05-25",diagnosis:"Hypertension",doctor:"Dr. Harris",ward:"Cardiology",total_bill:9e3},{id:11,patient_name:"Daniel Garcia",age:28,gender:"Male",admission_date:"2024-05-21",discharge_date:"2024-05-28",diagnosis:"Asthma",doctor:"Dr. Robinson",ward:"Pulmonology",total_bill:3200},{id:12,patient_name:"Karen Hall",age:48,gender:"Female",admission_date:"2024-05-25",discharge_date:"2024-06-02",diagnosis:"Arthritis",doctor:"Dr. Hall",ward:"Rheumatology",total_bill:5200},{id:13,patient_name:"Steven Walker",age:58,gender:"Male",admission_date:"2024-05-29",discharge_date:"2024-06-05",diagnosis:"Kidney Stones",doctor:"Dr. Lopez",ward:"Nephrology",total_bill:4800},{id:14,patient_name:"Sarah Wilson",age:38,gender:"Female",admission_date:"2024-06-01",discharge_date:"2024-06-08",diagnosis:"Depression",doctor:"Dr. King",ward:"Psychiatry",total_bill:3800},{id:15,patient_name:"Mark Thompson",age:55,gender:"Male",admission_date:"2024-06-03",discharge_date:"2024-06-10",diagnosis:"Obesity",doctor:"Dr. Adams",ward:"Bariatrics",total_bill:5500},{id:16,patient_name:"Jessica Young",age:25,gender:"Female",admission_date:"2024-06-06",discharge_date:"2024-06-11",diagnosis:"Anemia",doctor:"Dr. Wright",ward:"Hematology",total_bill:2900},{id:17,patient_name:"Paul Harris",age:32,gender:"Male",admission_date:"2024-06-09",discharge_date:"2024-06-15",diagnosis:"Concussion",doctor:"Dr. Garcia",ward:"Neurology",total_bill:3700},{id:18,patient_name:"Nancy Lewis",age:42,gender:"Female",admission_date:"2024-06-12",discharge_date:"2024-06-18",diagnosis:"Rheumatoid Arthritis",doctor:"Dr. Taylor",ward:"Rheumatology",total_bill:4800},{id:19,patient_name:"William Clark",age:62,gender:"Male",admission_date:"2024-06-15",discharge_date:"2024-06-22",diagnosis:"COPD",doctor:"Dr. Miller",ward:"Pulmonology",total_bill:6200},{id:20,patient_name:"Rebecca Baker",age:44,gender:"Female",admission_date:"2024-06-18",discharge_date:"2024-06-25",diagnosis:"Gastritis",doctor:"Dr. Thomas",ward:"Gastroenterology",total_bill:4300}],e}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&m(e,a)}(a,e),t=a,(r=[{key:"render",value:function(){return(0,o.qy)(i||(e=['\n            <div\n                style="height:100%;overflow:auto;"\n                class="md-layout-column"\n            >\n                <div\n                    style="height:100%;overflow:auto;"\n                    class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4"\n                >\n                    <md-data-table\n                        id="table"\n                        .columns="','"\n                        .rows="','"\n                        .checkbox="','"\n                    ></md-data-table>\n                </div>\n            </div>\n        '],a||(a=e.slice(0)),i=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))),this.columns,this.rows,!0);var e,a}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r}(t(7184).U);customElements.define("app-data-table",g);const u=document.createElement("app-data-table")}}]);