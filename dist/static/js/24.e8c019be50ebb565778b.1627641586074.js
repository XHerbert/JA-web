webpackJsonp([24],{"+lGw":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l={components:{LbTable:t("KtpS").a},data:function(){this.$createElement;return{tableData:{column:[{align:"center",label:"直管公房租金收入明细账",children:[{prop:"houseTypeName",label:"时间",fixed:!0,width:"120",renderHeader:function(e,n){return e("span",[e("i",{class:"el-icon-time"}),n.column.label])}},{label:"摘要",align:"center"},{label:"借方",align:"center"},{prop:"realReceieve",label:"贷方",fixed:!0,width:"120",renderHeader:function(e,n){return e("span",[e("i",{class:"el-icon-time"}),n.column.label])}},{label:"借或贷",align:"center"},{label:"余额",align:"center"},{label:"一所",align:"center"},{label:"二所",align:"center"},{label:"三所",align:"center"},{label:"企业所",align:"center"}]}],data:[]}}},created:function(){var e=this;this.http.get("api/TenantFeeRecord/getMonthRentReport",{},"报表加载中...").then(function(n){e.tableData.data=n.data})}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("lb-table",{staticStyle:{"margin-left":"10px","margin-right":"10px","margin-top":"50px"},attrs:{column:this.tableData.column,data:this.tableData.data,"show-summary":"","sum-text":"合计"}})},staticRenderFns:[]},a=t("VU/8")(l,r,!1,null,null,null);n.default=a.exports},KtpS:function(e,n,t){"use strict";var l={name:"LbRender",functional:!0,props:{scope:Object,render:Function},render:function(e,n){return n.props.render?n.props.render(e,n.props.scope):""}},r=t("VU/8")(l,null,!1,null,null,null).exports,a={selection:{renderHeader:function(e,n){var t=n.store;return console.log(t),e("el-checkbox",{attrs:{disabled:t.states.data&&0===t.states.data.length,indeterminate:t.states.selection.length>0&&!t.states.isAllSelected,value:t.states.isAllSelected},nativeOn:{click:t.toggleAllSelection}})},renderCell:function(e,n){var t=n.row,l=n.column,r=n.store,a=n.$index;return e("el-checkbox",{nativeOn:{click:function(e){return e.stopPropagation()}},attrs:{value:r.isSelected(t),disabled:!!l.selectable&&!l.selectable.call(null,t,a)},on:{input:function(){r.commit("rowSelectedChanged",t)}}})},sortable:!1,resizable:!1},index:{renderHeader:function(e,n){return e("span",[n.column.label||"#"])},renderCell:function(e,n){var t=n.$index,l=t+1,r=n.column.index;return"number"==typeof r?l=t+r:"function"==typeof r&&(l=r(t)),e("div",[l])},sortable:!1},expand:{renderHeader:function(e,n){return e("span",[n.column.label||""])},renderCell:function(e,n,t){var l=n.row;return e("div",{class:"el-table__expand-icon "+(n.store.states.expandRows.indexOf(l)>-1?"el-table__expand-icon--expanded":""),on:{click:function(e){return t.handleExpandClick(l,e)}}},[e("i",{class:"el-icon el-icon-arrow-right"})])},sortable:!1,resizable:!1,className:"el-table__expand-column"}},o={name:"LbColumn",props:{column:Object,headerAlign:String,align:String},components:{LbRender:r},methods:{setColumn:function(){this.$createElement;this.column.type&&(this.column.renderHeader=a[this.column.type].renderHeader,this.column.render=this.column.render||a[this.column.type].renderCell),this.column.formatter&&(this.column.render=function(e,n){return e("span",[n.column.formatter(n.row,n.column,n.row,n.$index)])}),this.column.render||(this.column.render=function(e,n){return e("span",[n.row[n.column.property]])})}},watch:{column:{handler:function(){this.setColumn()},immediate:!0}}},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-table-column",e._g(e._b({attrs:{prop:e.column.prop,label:e.column.label,type:e.column.type,index:e.column.index,"column-key":e.column.columnKey,width:e.column.width,"min-width":e.column.minWidth,fixed:e.column.fixed,"render-header":e.column.renderHeader,sortable:e.column.sortable||!1,"sort-method":e.column.sortMethod,"sort-by":e.column.sortBy,"sort-orders":e.column.sortOrders,resizable:e.column.resizable||!0,formatter:e.column.formatter,"show-overflow-tooltip":e.column.showOverflowTooltip||!1,align:e.column.align||e.align||"left","header-align":e.column.headerAlign||e.headerAlign||e.column.align||e.align||"left","class-name":e.column.className,"label-class-name":e.column.labelClassName,selectable:e.column.selectable,"reserve-selection":e.column.reserveSelection||!1,filters:e.column.filters,"filter-placement":e.column.filterPlacement,"filter-multiple":e.column.filterMultiple,"filter-method":e.column.filterMethod,"filtered-value":e.column.filteredValue},scopedSlots:e._u([{key:"header",fn:function(n){return[e.column.renderHeader?t("lb-render",{attrs:{scope:n,render:e.column.renderHeader}}):t("span",[e._v(e._s(n.column.label))])]}},{key:"default",fn:function(n){return[t("lb-render",{attrs:{scope:n,render:e.column.render}})]}}])},"el-table-column",e.$attrs,!1),e.$listeners),[e.column.children?e._l(e.column.children,function(e,n){return t("lb-column",{key:n,attrs:{column:e}})}):e._e()],2)},staticRenderFns:[]},c=t("VU/8")(o,i,!1,null,null,null).exports,s={props:{column:Array,data:Array,spanMethod:Function,pagination:{type:Boolean,default:!1},paginationTop:{type:String,default:"15px"},paginationAlign:{type:String,default:"right"},merge:Array},components:{LbColumn:c},data:function(){return{mergeLine:{},mergeIndex:{}}},created:function(){this.getMergeArr(this.data,this.merge)},computed:{dataLength:function(){return this.data.length}},methods:{clearSelection:function(){this.$refs.elTable.clearSelection()},toggleRowSelection:function(e,n){this.$refs.elTable.toggleRowSelection(e,n)},toggleAllSelection:function(){this.$refs.elTable.toggleAllSelection()},toggleRowExpansion:function(e,n){this.$refs.elTable.toggleRowExpansion(e,n)},setCurrentRow:function(e){this.$refs.elTable.setCurrentRow(e)},clearSort:function(){this.$refs.elTable.clearSort()},clearFilter:function(e){this.$refs.elTable.clearFilter(e)},doLayout:function(){this.$refs.elTable.doLayout()},sort:function(e,n){this.$refs.elTable.sort(e,n)},paginationCurrentChange:function(e){this.$emit("p-current-change",e)},getMergeArr:function(e,n){var t=this;n&&(this.mergeLine={},this.mergeIndex={},n.forEach(function(n,l){e.forEach(function(l,r){0===r?(t.mergeIndex[n]=t.mergeIndex[n]||[],t.mergeIndex[n].push(1),t.mergeLine[n]=0):l[n]===e[r-1][n]?(t.mergeIndex[n][t.mergeLine[n]]+=1,t.mergeIndex[n].push(0)):(t.mergeIndex[n].push(1),t.mergeLine[n]=r)})}))},mergeMethod:function(e){e.row;var n=e.column,t=e.rowIndex,l=(e.columnIndex,this.merge.indexOf(n.property));if(l>-1){var r=this.mergeIndex[this.merge[l]][t];return{rowspan:r,colspan:r>0?1:0}}}},watch:{merge:function(){this.getMergeArr(this.data,this.merge)},dataLength:function(){this.getMergeArr(this.data,this.merge)}}},u={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"lb-table"},[t("el-table",e._g(e._b({ref:"elTable",attrs:{data:e.data,"span-method":this.merge?this.mergeMethod:this.spanMethod}},"el-table",e.$attrs,!1),e.$listeners),e._l(e.column,function(n,l){return t("lb-column",e._b({key:l,attrs:{column:n}},"lb-column",e.$attrs,!1))}),1),e._v(" "),e.pagination?t("el-pagination",e._g(e._b({staticClass:"lb-table-pagination",style:{"margin-top":e.paginationTop,"text-align":e.paginationAlign},on:{"current-change":e.paginationCurrentChange}},"el-pagination",e.$attrs,!1),e.$listeners)):e._e()],1)},staticRenderFns:[]},d=t("VU/8")(s,u,!1,null,null,null);n.a=d.exports}});