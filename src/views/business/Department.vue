<!--
 *Author：xuhbd
 *Contact：xuhb-c@glodon.coms
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/business/Department.js此处编写
 -->
<template>
    <div>
        <view-grid ref="grid"
                   :columns="columns"
                   :detail="detail"
                   :editFormFields="editFormFields"
                   :editFormFileds="editFormFields"
                   :editFormOptions="editFormOptions"
                   :searchFormFields="searchFormFields"
                   :searchFormFileds="searchFormFields"
                   :searchFormOptions="searchFormOptions"
                   :table="table"
                   :extend="extend">
        </view-grid>
    </div>
</template>

<script>
    import extend from "@/extension/business/Department.js";
    import ViewGrid from "@/components/basic/ViewGrid.vue";
    var vueParam = {
        components: {
            ViewGrid
        },
        data() {
            return {
                table: {
                    key: 'Id',
                    footer: "Foots",
                    cnName: '单位管理',
                    name: 'Department',
                    url: "/Department/",
                    sortName: "Id"
                },
                extend: extend,
                editFormFields: {"DepartmentName":"","EnableFlag":"","ManagerId":""},
                editFormOptions: [[{"title":"单位名称","field":"DepartmentName","type":"text"},
                               {"dataKey":"enable","data":[],"title":"是否启用","field":"EnableFlag","type":"switch"}],
                              [{"dataKey":"userManage","data":[],"title":"管理员","field":"ManagerId","type":"select"}]],
                searchFormFields: {"DepartmentCode":"","DepartmentName":""},
                searchFormOptions: [[{"title":"单位编码","field":"DepartmentCode","type":"text"},{"title":"单位名称","field":"DepartmentName","type":"text"}]],
                columns: [{field:'Id',title:'序号',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'DepartmentCode',title:'单位编码',type:'string',link:true,width:90,align:'left',sortable:true},
                       {field:'DepartmentName',title:'单位名称',type:'string',width:90,align:'left'},
                       {field:'ManagerId',title:'管理员',type:'int',bind:{ key:'userManage',data:[]},width:90,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,require:true,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:90,align:'left',sortable:true},
                       {field:'EnableFlag',title:'是否启用',type:'int',bind:{ key:'enable',data:[]},width:90,align:'left'}],
                detail: {
                    cnName: "#detailCnName",
                    columns: [],
                    sortName: "",
                    key: ""
                }
            };
        }
    };
    export default vueParam;
</script>
