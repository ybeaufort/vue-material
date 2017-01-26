webpackJsonp([17,32],{240:function(t,a,e){a=t.exports=e(1)(),a.push([t.id,"section[data-v-5be2a636]{max-width:960px}section+section[data-v-5be2a636]{margin-top:56px}.app-example .page-layout[data-v-5be2a636]{display:-ms-flexbox;display:flex}.app-example .column[data-v-5be2a636]{-ms-flex:1;flex:1;background-color:rgba(0,0,0,.06)}.app-example .column+.column[data-v-5be2a636]{margin-left:16px}.app-example .md-list[data-v-5be2a636]{background:none}.app-example .md-subheading[data-v-5be2a636]{padding:16px;display:block}.app-example .item-text[data-v-5be2a636]{-ms-flex:1;flex:1}.app-example .md-checkbox[data-v-5be2a636]{margin-right:16px}.app-example .md-button[data-v-5be2a636]{margin-left:16px}.card-layout[data-v-5be2a636]{margin:16px 15%;display:-ms-flexbox;display:flex}.card-layout .column[data-v-5be2a636]{-ms-flex:1;flex:1}.card-layout .column+.column[data-v-5be2a636]{margin-left:8px}.card-layout .md-card+.md-card[data-v-5be2a636]{margin-top:8px}",""])},370:function(t,a,e){var n,d;e(561);var m=e(495);d=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(d=n=n.default),"function"==typeof d&&(d=d.options),"undefined"==typeof d.name&&(d.name="DynamicThemes"),d.render=m.render,d.staticRenderFns=m.staticRenderFns,d._scopeId="data-v-5be2a636",t.exports=n},495:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("page-content",{attrs:{"page-title":"Themes - Dynamic Themes"}},[e("docs-component",[e("div",{slot:"description"},[e("p",[t._v("Vue Material have a complete theme suite. You can create several themes and apply them on-demand. Like on this documentation website you can set a different theme per-page using the API. But you can have a advanced way to change themes using dynamic themes.")]),t._v(" "),e("p",[t._v("You can apply a theme only in a single area of your application using the "),e("code",[t._v("<md-theme>")]),t._v(". If the theme component have only one child element then the theme definition will be attached to this particular element. In other case the component will wrap all of it's children in a "),e("code",[t._v("<div>")]),t._v(" tag (or you can customize the output tag).")]),t._v(" "),e("p",[t._v("Also every single component in Vue Material suite have a "),e("code",[t._v("md-theme")]),t._v(" attribute to set his theme.")]),t._v(" "),e("p",[t._v("All the components will inherit all theme properties from it's parents. If the direct parent doesn't have a theme definition the theme will be resolved by its closest parent or the current theme of the entire application.")])]),t._v(" "),e("div",{slot:"api"},[e("api-table",{attrs:{name:"md-theme"}},[e("md-table",{slot:"properties"},[e("md-table-header",[e("md-table-row",[e("md-table-head",[t._v("Name")]),t._v(" "),e("md-table-head",[t._v("Type")]),t._v(" "),e("md-table-head",[t._v("Description")])],1)],1),t._v(" "),e("md-table-body",[e("md-table-row",[e("md-table-cell",[t._v("md-name")]),t._v(" "),e("md-table-cell",[e("code",[t._v("String")])]),t._v(" "),e("md-table-cell",[t._v("The name of the theme to be applied.")])],1),t._v(" "),e("md-table-row",[e("md-table-cell",[t._v("md-tag")]),t._v(" "),e("md-table-cell",[e("code",[t._v("String")])]),t._v(" "),e("md-table-cell",[t._v("The tag to be applied to wrap all it's children elements.")])],1)],1)],1)],1)],1),t._v(" "),e("div",{slot:"example"},[e("example-box",{attrs:{"card-title":"Component"}},[e("div",{slot:"demo"},[e("div",{staticClass:"app-example"},[e("md-whiteframe",{attrs:{"md-tag":"md-toolbar","md-elevation":"1"}},[e("span",{staticClass:"md-title"},[t._v("Life Organizer 2.0")])]),t._v(" "),e("div",{staticClass:"page-layout"},[e("md-theme",{attrs:{"md-name":"indigo"}},[e("div",{staticClass:"column"},[e("strong",{staticClass:"md-subheading"},[t._v("Shopping list")]),t._v(" "),e("md-list",[e("md-list-item",[e("md-checkbox",{staticClass:"md-primary md-list-action"}),t._v(" "),e("span",{staticClass:"item-text"},[t._v("French bread")])],1),t._v(" "),e("md-list-item",[e("md-checkbox",{staticClass:"md-primary md-list-action",attrs:{value:!0}}),t._v(" "),e("span",{staticClass:"item-text"},[t._v("Brazilian Cheese Bread")])],1),t._v(" "),e("md-list-item",[e("md-checkbox",{staticClass:"md-primary md-list-action"}),t._v(" "),e("span",{staticClass:"item-text"},[t._v("Italian Bread")])],1)],1)],1)]),t._v(" "),e("md-theme",{attrs:{"md-name":"green"}},[e("div",{staticClass:"column"},[e("strong",{staticClass:"md-subheading"},[t._v("Todo List")]),t._v(" "),e("md-list",[e("md-list-item",[e("md-checkbox",{staticClass:"md-primary md-list-action"}),t._v(" "),e("span",{staticClass:"item-text"},[t._v("Create new components")])],1),t._v(" "),e("md-list-item",[e("md-checkbox",{staticClass:"md-primary md-list-action",attrs:{value:!0}}),t._v(" "),e("span",{staticClass:"item-text"},[t._v("Answer Github issues")])],1)],1)],1)]),t._v(" "),e("md-theme",{attrs:{"md-name":"orange"}},[e("div",{staticClass:"column"},[e("strong",{staticClass:"md-subheading"},[t._v("Notes")]),t._v(" "),e("md-list",[e("md-list-item",[e("span",{staticClass:"item-text"},[t._v("Wake up early")]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action"},[e("md-icon",[t._v("star")])],1)],1),t._v(" "),e("md-list-item",[e("span",{staticClass:"item-text"},[t._v("Have breakfast everyday")]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action"},[e("md-icon",{staticClass:"md-primary"},[t._v("star")])],1)],1),t._v(" "),e("md-list-item",[e("span",{staticClass:"item-text"},[t._v("Contribution")]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action"},[e("md-icon",{staticClass:"md-primary"},[t._v("star")])],1)],1),t._v(" "),e("md-list-item",[e("span",{staticClass:"item-text"},[t._v("Travels")]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action"},[e("md-icon",{staticClass:"md-primary"},[t._v("star")])],1)],1)],1)],1)])],1)],1)]),t._v(" "),e("div",{slot:"code"},[e("code-block",{attrs:{lang:"xml"}},[t._v('\n            <div class="app-example">\n              <md-theme md-name="blue">\n                <md-whiteframe md-tag="md-toolbar" md-elevation="1">\n                  <span class="md-title">Life Organizer 2.0</span>\n                </md-whiteframe>\n              </md-theme>\n\n              <div class="page-layout">\n                <md-theme md-name="indigo">\n                  <div class="column">\n                    <strong class="md-subheading">Shopping list</strong>\n                    <md-list>\n                      <md-list-item>\n                        <md-checkbox class="md-primary md-list-action"></md-checkbox>\n                        <span class="item-text">French bread</span>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <md-checkbox :value="true" class="md-primary md-list-action"></md-checkbox>\n                        <span class="item-text">Brazilian Cheese Bread</span>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <md-checkbox class="md-primary md-list-action"></md-checkbox>\n                        <span class="item-text">Italian Bread</span>\n                      </md-list-item>\n                    </md-list>\n                  </div>\n                </md-theme>\n\n                <md-theme md-name="green">\n                  <div class="column">\n                    <strong class="md-subheading">Todo List</strong>\n                    <md-list>\n                      <md-list-item>\n                        <md-checkbox class="md-primary md-list-action"></md-checkbox>\n                        <span class="item-text">Create new components</span>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <md-checkbox :value="true" class="md-primary md-list-action"></md-checkbox>\n                        <span class="item-text">Answer Github issues</span>\n                      </md-list-item>\n                    </md-list>\n                  </div>\n                </md-theme>\n\n                <md-theme md-name="orange">\n                  <div class="column">\n                    <strong class="md-subheading">Notes</strong>\n                    <md-list>\n                      <md-list-item>\n                        <span class="item-text">Wake up early</span>\n                        <md-button class="md-icon-button md-list-action">\n                          <md-icon>star</md-icon>\n                        </md-button>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <span class="item-text">Have breakfast everyday</span>\n                        <md-button class="md-icon-button md-list-action">\n                          <md-icon class="md-primary">star</md-icon>\n                        </md-button>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <span class="item-text">Contribution</span>\n                        <md-button class="md-icon-button md-list-action">\n                          <md-icon class="md-primary">star</md-icon>\n                        </md-button>\n                      </md-list-item>\n\n                      <md-list-item>\n                        <span class="item-text">Travels</span>\n                        <md-button class="md-icon-button md-list-action">\n                          <md-icon class="md-primary">star</md-icon>\n                        </md-button>\n                      </md-list-item>\n                    </md-list>\n                  </div>\n                </md-theme>\n              </div>\n            </div>\n          ')]),t._v(" "),e("code-block",{attrs:{lang:"sass"}},[t._v("\n            .app-example {\n              .page-layout {\n                display: flex;\n              }\n\n              .column {\n                flex: 1;\n                background-color: rgba(#000, .06);\n\n                + .column {\n                  margin-left: 16px;\n                }\n              }\n\n              .md-list {\n                background: none;\n              }\n\n              .md-subheading {\n                padding: 16px;\n                display: block;\n              }\n\n              .item-text {\n                flex: 1;\n              }\n\n              .md-checkbox {\n                margin-right: 16px;\n              }\n\n              .md-button {\n                margin-left: 16px;\n              }\n            }\n          ")])],1)]),t._v(" "),e("example-box",{attrs:{"card-title":"Attribute"}},[e("div",{slot:"demo"},[e("md-whiteframe",[e("md-toolbar",{attrs:{"md-theme":"blue"}},[e("span",{staticClass:"md-title"},[t._v("My app dashboard")])])],1),t._v(" "),e("div",{staticClass:"card-layout"},[e("div",{staticClass:"column"},[e("md-card",{staticClass:"md-primary",attrs:{"md-theme":"blue","md-with-hover":""}},[e("md-card-media",[e("img",{attrs:{src:"assets/card-image-1.jpg",alt:"People"}})]),t._v(" "),e("md-ink-ripple"),t._v(" "),e("md-card-actions",[e("md-button",{staticClass:"md-icon-button"},[e("md-icon",[t._v("favorite")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button"},[e("md-icon",[t._v("bookmark")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button"},[e("md-icon",[t._v("share")])],1)],1)],1),t._v(" "),e("md-card",{staticClass:"md-primary",attrs:{"md-theme":"green","md-with-hover":""}},[e("md-card-header",[e("div",{staticClass:"md-title"},[t._v("Title goes here")]),t._v(" "),e("div",{staticClass:"md-subhead"},[t._v("Subtitle here")])]),t._v(" "),e("md-card-content",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")]),t._v(" "),e("md-ink-ripple"),t._v(" "),e("md-card-actions",[e("md-button",[t._v("Action")]),t._v(" "),e("md-button",[t._v("Action")])],1)],1)],1),t._v(" "),e("div",{staticClass:"column"},[e("md-card",{staticClass:"md-primary",attrs:{"md-theme":"orange","md-with-hover":""}},[e("md-card-header",[e("md-card-header-text",[e("div",{staticClass:"md-title"},[t._v("Title here")]),t._v(" "),e("div",{staticClass:"md-subhead"},[t._v("Subtitle here")])]),t._v(" "),e("md-card-media",[e("img",{attrs:{src:"assets/avatar-2.jpg",alt:"People"}})])],1),t._v(" "),e("md-card-actions",[e("md-button",[t._v("Action")]),t._v(" "),e("md-button",[t._v("Action")])],1)],1),t._v(" "),e("md-card",{staticClass:"md-primary",attrs:{"md-theme":"blue","md-with-hover":""}},[e("md-card-media",{attrs:{"md-ratio":"16:9"}},[e("img",{attrs:{src:"assets/card-sky.jpg",alt:"People"}})]),t._v(" "),e("md-ink-ripple"),t._v(" "),e("md-card-actions",[e("md-button",{staticClass:"md-icon-button"},[e("md-icon",[t._v("favorite")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button"},[e("md-icon",[t._v("bookmark")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button"},[e("md-icon",[t._v("share")])],1)],1)],1)],1)])],1),t._v(" "),e("div",{slot:"code"},[e("code-block",{attrs:{lang:"xml"}},[t._v('\n            <md-whiteframe>\n              <md-toolbar md-theme="blue">\n                <span class="md-title">My app dashboard</span>\n              </md-toolbar>\n            </md-whiteframe>\n\n            <div class="card-layout">\n              <div class="column">\n                <md-card class="md-primary" md-theme="blue" md-with-hover>\n                  <md-card-media>\n                    <img src="assets/card-image-1.jpg" alt="People">\n                  </md-card-media>\n\n                  <md-ink-ripple></md-ink-ripple>\n\n                  <md-card-actions>\n                    <md-button class="md-icon-button">\n                      <md-icon>favorite</md-icon>\n                    </md-button>\n\n                    <md-button class="md-icon-button">\n                      <md-icon>bookmark</md-icon>\n                    </md-button>\n\n                    <md-button class="md-icon-button">\n                      <md-icon>share</md-icon>\n                    </md-button>\n                  </md-card-actions>\n                </md-card>\n\n                <md-card class="md-primary" md-theme="green" md-with-hover>\n                  <md-card-header>\n                    <div class="md-title">Title goes here</div>\n                    <div class="md-subhead">Subtitle here</div>\n                  </md-card-header>\n\n                  <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</md-card-content>\n\n                  <md-ink-ripple></md-ink-ripple>\n\n                  <md-card-actions>\n                    <md-button>Action</md-button>\n                    <md-button>Action</md-button>\n                  </md-card-actions>\n                </md-card>\n              </div>\n\n              <div class="column">\n                <md-card class="md-primary" md-theme="orange" md-with-hover>\n                  <md-card-header>\n                    <md-card-header-text>\n                      <div class="md-title">Title here</div>\n                      <div class="md-subhead">Subtitle here</div>\n                    </md-card-header-text>\n\n                    <md-card-media>\n                      <img src="assets/avatar-2.jpg" alt="People">\n                    </md-card-media>\n                  </md-card-header>\n\n                  <md-card-actions>\n                    <md-button>Action</md-button>\n                    <md-button>Action</md-button>\n                  </md-card-actions>\n                </md-card>\n\n                <md-card class="md-primary" md-theme="blue" md-with-hover>\n                  <md-card-media md-ratio="16:9">\n                    <img src="assets/card-sky.jpg" alt="People">\n                  </md-card-media>\n\n                  <md-ink-ripple></md-ink-ripple>\n\n                  <md-card-actions>\n                    <md-button class="md-icon-button">\n                      <md-icon>favorite</md-icon>\n                    </md-button>\n\n                    <md-button class="md-icon-button">\n                      <md-icon>bookmark</md-icon>\n                    </md-button>\n\n                    <md-button class="md-icon-button">\n                      <md-icon>share</md-icon>\n                    </md-button>\n                  </md-card-actions>\n                </md-card>\n              </div>\n            </div>\n          ')]),t._v(" "),e("code-block",{attrs:{lang:"sass"}},[t._v("\n            .card-layout {\n              margin: 16px 15%;\n              display: flex;\n\n              .column {\n                flex: 1;\n\n                + .column {\n                  margin-left: 8px;\n                }\n              }\n\n              .md-card + .md-card {\n                margin-top: 8px;\n              }\n            }\n          ")])],1)])],1)])],1)},staticRenderFns:[]}},561:function(t,a,e){var n=e(240);"string"==typeof n&&(n=[[t.id,n,""]]);e(2)(n,{});n.locals&&(t.exports=n.locals)}});