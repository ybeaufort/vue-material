webpackJsonp([29,32],{104:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{checkbox:!0,checkbox2:!1}}},e.exports=t.default},346:function(e,t,c){var o,m;o=c(104);var a=c(446);m=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(m=o=o.default),"function"==typeof m&&(m=m.options),"undefined"==typeof m.name&&(m.name="Checkbox"),m.render=a.render,m.staticRenderFns=a.staticRenderFns,e.exports=o},446:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("page-content",{attrs:{"page-title":"Components - Checkbox"}},[c("docs-component",[c("div",{slot:"description"},[c("p",[e._v("Checkboxes allow the user to select multiple options from a set.")]),e._v(" "),c("p",[e._v("The following classes can be applied to change the color palette:")]),e._v(" "),c("ul",{staticClass:"md-body-2"},[c("li",[c("code",[e._v("md-primary")])]),e._v(" "),c("li",[c("code",[e._v("md-warn")])])])]),e._v(" "),c("div",{slot:"api"},[c("api-table",{attrs:{name:"md-checkbox"}},[c("md-table",{slot:"properties"},[c("md-table-header",[c("md-table-row",[c("md-table-head",[e._v("Name")]),e._v(" "),c("md-table-head",[e._v("Type")]),e._v(" "),c("md-table-head",[e._v("Description")])],1)],1),e._v(" "),c("md-table-body",[c("md-table-row",[c("md-table-cell",[e._v("v-model")]),e._v(" "),c("md-table-cell",[c("code",[e._v("String")])]),e._v(" "),c("md-table-cell",[e._v("A required model object to bind the value.")])],1),e._v(" "),c("md-table-row",[c("md-table-cell",[e._v("name")]),e._v(" "),c("md-table-cell",[c("code",[e._v("String")])]),e._v(" "),c("md-table-cell",[e._v("Set the checkbox name.")])],1),e._v(" "),c("md-table-row",[c("md-table-cell",[e._v("id")]),e._v(" "),c("md-table-cell",[c("code",[e._v("String")])]),e._v(" "),c("md-table-cell",[e._v("Set the checkbox id.")])],1),e._v(" "),c("md-table-row",[c("md-table-cell",[e._v("disabled")]),e._v(" "),c("md-table-cell",[c("code",[e._v("Boolean")])]),e._v(" "),c("md-table-cell",[e._v("Disable the checkbox and prevent his actions. Default "),c("code",[e._v("false")])])],1)],1)],1),e._v(" "),c("md-table",{slot:"events"},[c("md-table-header",[c("md-table-row",[c("md-table-head",[e._v("Name")]),e._v(" "),c("md-table-head",[e._v("Value")]),e._v(" "),c("md-table-head",[e._v("Description")])],1)],1),e._v(" "),c("md-table-body",[c("md-table-row",[c("md-table-cell",[e._v("change")]),e._v(" "),c("md-table-cell",[e._v("Receive the state of the checkbox")]),e._v(" "),c("md-table-cell",[e._v("Triggered when the checkbox changes his value.")])],1)],1)],1)],1)],1),e._v(" "),c("div",{slot:"example"},[c("example-box",{attrs:{"card-title":"Default"}},[c("div",{slot:"demo"},[c("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],attrs:{id:"my-test1",name:"my-test1"},domProps:{value:e.checkbox},on:{input:function(t){e.checkbox=t}}},[e._v("Regular Checkbox")]),e._v(" "),c("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],staticClass:"md-primary",attrs:{id:"my-test2",name:"my-test2"},domProps:{value:e.checkbox},on:{input:function(t){e.checkbox=t}}},[e._v("Primary Color")]),e._v(" "),c("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],staticClass:"md-warn",attrs:{id:"my-test3",name:"my-test3"},domProps:{value:e.checkbox},on:{input:function(t){e.checkbox=t}}},[e._v("Warn Color")]),e._v(" "),c("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],attrs:{id:"my-test4",name:"my-test4",disabled:""},domProps:{value:e.checkbox},on:{input:function(t){e.checkbox=t}}},[e._v("Disabled")])],1),e._v(" "),c("div",{slot:"code"},[c("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-checkbox id="my-test1" name="my-test1" v-model="checkbox">Regular Checkbox</md-checkbox>\n            <md-checkbox id="my-test2" name="my-test2" v-model="checkbox" class="md-primary">Primary Color</md-checkbox>\n            <md-checkbox id="my-test3" name="my-test3" v-model="checkbox" class="md-warn">Warn Color</md-checkbox>\n            <md-checkbox id="my-test4" name="my-test4" v-model="checkbox" disabled>Disabled</md-checkbox>\n          ')])],1)]),e._v(" "),c("example-box",{attrs:{"card-title":"Themes"}},[c("div",{slot:"demo"},[c("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox2,expression:"checkbox2"}],staticClass:"md-primary",attrs:{"md-theme":"orange",id:"my-test5",name:"my-test5"},domProps:{value:e.checkbox2},on:{input:function(t){e.checkbox2=t}}},[e._v("Primary Orange")]),e._v(" "),c("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox2,expression:"checkbox2"}],staticClass:"md-primary",attrs:{"md-theme":"green",id:"my-test6",name:"my-test6"},domProps:{value:e.checkbox2},on:{input:function(t){e.checkbox2=t}}},[e._v("Primary Green")]),e._v(" "),c("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox2,expression:"checkbox2"}],staticClass:"md-primary",attrs:{"md-theme":"light-blue",id:"my-test7",name:"my-test7"},domProps:{value:e.checkbox2},on:{input:function(t){e.checkbox2=t}}},[e._v("Primary Light Blue")]),e._v(" "),c("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox2,expression:"checkbox2"}],staticClass:"md-primary",attrs:{"md-theme":"indigo",id:"my-test8",name:"my-test8"},domProps:{value:e.checkbox2},on:{input:function(t){e.checkbox2=t}}},[e._v("Primary Indigo")]),e._v(" "),c("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checkbox2,expression:"checkbox2"}],staticClass:"md-primary",attrs:{"md-theme":"brown",id:"my-test9",name:"my-test9",disabled:""},domProps:{value:e.checkbox2},on:{input:function(t){e.checkbox2=t}}},[e._v("Primary Brown Disabled")])],1),e._v(" "),c("div",{slot:"code"},[c("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-checkbox md-theme="orange"  id="my-test5" name="my-test5" v-model="checkbox2" class="md-primary">Primary Orange</md-checkbox>\n            <md-checkbox md-theme="green"  id="my-test6" name="my-test6" v-model="checkbox2" class="md-primary">Primary Green</md-checkbox>\n            <md-checkbox md-theme="light-blue" id="my-test7" name="my-test7" v-model="checkbox2" class="md-primary">Primary Light Blue</md-checkbox>\n            <md-checkbox md-theme="indigo"  id="my-test8" name="my-test8" v-model="checkbox2" class="md-primary">Primary Indigo</md-checkbox>\n            <md-checkbox md-theme="brown"  id="my-test9" name="my-test9" v-model="checkbox2" class="md-primary" disabled>Primary Brown Disabled</md-checkbox>\n          ')])],1)])],1)])],1)},staticRenderFns:[]}}});