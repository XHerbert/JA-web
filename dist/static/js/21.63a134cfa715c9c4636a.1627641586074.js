webpackJsonp([21],{Ae3P:function(e,t){},CChK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={props:{onChange:{type:Function,default:function(e){}}},data:function(){return{selectId:-1,checked:!1,openKeys:[],data:[],tree:[]}},created:function(){this.load()},methods:{load:function(){var e=this;this.http.post("/api/role/getUserChildRoles",{},!0).then(function(t){if(!t.status)return e.$message.error(t.message);e.data.splice(0),e.data=t.data,e.data.forEach(function(t){0==t.parentId&&(t.lv=1,t.children=[],e.tree.push(t),e.getTree(t.id,t))}),e.openKeys.push(e.tree[0].id),e.selectId=e.openKeys[0]})},getTree:function(e,t){var n=this;this.data.forEach(function(a){a.parentId==e&&(a.lv=t.lv+1,t.children||(t.children=[]),t.children.push(a),n.getTree(a.id,a))})},nodeClick:function(e,t){this.selectId=e.id,this.onChange(e)}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"com-el-tree"},[n("div",{staticClass:"role-list"},[n("icon",{attrs:{type:"ios-people"}}),e._v("角色列表\n  ")],1),e._v(" "),n("el-scrollbar",{staticClass:"el-role-tree",staticStyle:{height:"100%",width:"180px"}},[n("el-tree",{staticStyle:{padding:"5px 0","margin-right":"2px"},attrs:{data:e.tree,"node-key":"id","default-expanded-keys":e.openKeys,"expand-on-click-node":!1},on:{"node-click":e.nodeClick},scopedSlots:e._u([{key:"default",fn:function(t){t.node;var a=t.data;return n("div",{staticClass:"action-group"},[n("div",{staticClass:"action-text",class:{actived:a.id==e.selectId,"node-text":0!==a.parentId},style:{width:18*(4-a.lv)+150+"px"}},[0!==a.parentId?n("Icon",{attrs:{type:a.id==e.selectId?"ios-paper":"ios-paper-outline"}}):e._e(),e._v("\n          "+e._s(a.roleName)+"\n        ")],1)])}}])})],1)],1)},staticRenderFns:[]};var s={components:{RoleTree:n("VU/8")(a,i,!1,function(e){n("jiw6"),n("pX29")},"data-v-357410b8",null).exports},data:function(){return{selectIndex:-1,checked:!1,roles:[],data:[],tree:[]}},created:function(){this.load()},methods:{load:function(){var e=this;this.http.post("/api/role/getCurrentTreePermission",{},!0).then(function(t){if(!t.status)return e.$message.error(t.message);e.data.splice(0),e.roles.splice(0),e.data=t.data.tree,e.roles=t.data.roles,e.data.forEach(function(t){0==t.pid&&(t.lv=1,t.children=[],e.tree.push(t),e.getTree(t.id,t))})})},getUserRole:function(e,t){var n=this;this.selectIndex=e.id,this.data.forEach(function(e){e.actions.forEach(function(e){n.$set(e,"checked",!1)})}),this.http.post("/api/role/getUserTreePermission?roleId="+e.id,{},!0).then(function(e){if(!e.status)return n.$message.error(e.message);e.data.forEach(function(e){if(0!=e.actions.length){var t=n.data.find(function(t){return t.id==e.id});t&&e.actions.forEach(function(e){t.actions.forEach(function(t){t.value==e.value&&n.$set(t,"checked",!0)})})}})})},save:function(){var e=this;if(-1==this.selectIndex)return this.$message.error("请选择角色!");var t=[];this.data.forEach(function(e){var n=e.actions.filter(function(e){return e.checked});if(n.length>0){var a=n.map(function(e){return{text:e.text,value:e.value}});t.push({id:e.id,actions:a})}}),this.http.post("/api/role/SavePermission?roleId="+this.selectIndex,t,!0).then(function(t){e.$Message[t.status?"info":"error"](t.message)})},getTree:function(e,t){var n=this;this.data.forEach(function(a){a.pid==e&&(a.lv=t.lv+1,t.children||(t.children=[]),t.children.push(a),n.getTree(a.id,a))})},leftCheckChange:function(e,t){var n=this;e.actions.forEach(function(e,a){n.$set(e,"checked",t)})}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"t-tree"},[n("div",{staticClass:"role-list"},[n("role-tree",{attrs:{onChange:e.getUserRole}})],1),e._v(" "),n("div",{staticClass:"action-container"},[n("div",{staticClass:"block"},[n("div",{staticClass:"head"},[n("div",{staticClass:"text"},[n("icon",{attrs:{type:"md-contact"}}),e._v("角色权限分配\n        ")],1),e._v(" "),n("div",[n("Button",{attrs:{type:"info",icon:"md-checkmark-circle"},on:{click:e.save}},[e._v("保存")])],1)]),e._v(" "),n("el-tree",{attrs:{data:e.tree,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},on:{"check-change":e.leftCheckChange},scopedSlots:e._u([{key:"default",fn:function(t){t.node;var a=t.data;return n("div",{staticClass:"action-group"},[n("div",{staticClass:"action-text",style:{width:18*(4-a.lv)+150+"px"}},[e._v(e._s(a.text))]),e._v(" "),n("div",{staticClass:"action-item"},e._l(a.actions,function(t,a){return n("el-checkbox",{key:a,on:{change:function(){}},model:{value:t.checked,callback:function(n){e.$set(t,"checked",n)},expression:"item.checked"}},[e._v(e._s(t.text))])}),1)])}}])})],1)])])},staticRenderFns:[]};var r=n("VU/8")(s,c,!1,function(e){n("Ae3P")},"data-v-5b319c90",null);t.default=r.exports},jiw6:function(e,t){},pX29:function(e,t){}});