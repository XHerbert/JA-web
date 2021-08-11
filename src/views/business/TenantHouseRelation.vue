<!--
 *Author：xuhbd
 *Contact：xuhbd@foxmail.coms
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/business/TenantHouseRelation.js此处编写
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
    import extend from "@/extension/business/TenantHouseRelation.js";
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
                    cnName: '原始房屋分配',
                    name: 'TenantHouseRelation',
                    url: "/TenantHouseRelation/",
                    sortName: "Id"
                },
                extend: extend,
                editFormFields: {"ActualRentFee":"","EnableFlag":"","HouseId":"","LiveTime":"","TenantId":"","BelongUnit":""},
                editFormOptions: [[{"title":"租金","field":"ActualRentFee","type":"decimal"},
                               {"dataKey":"houseCanRent","data":[],"title":"房屋","required":true,"field":"HouseId","type":"select"},
                               {"title":"入住时间","field":"LiveTime","type":"datetime"},
                               {"dataKey":"Tenants","data":[],"title":"租客","required":true,"field":"TenantId","type":"select"},
                               {"dataKey":"enable","data":[],"title":"有效标识","field":"EnableFlag","type":"select"},
                               {"dataKey":"houseUnit","data":[],"title":"所属单位","field":"BelongUnit","type":"select"}]],
                searchFormFields: {},
                searchFormOptions: [],
                columns: [{field:'ActualRentFee',title:'租金',type:'decimal',width:90,align:'left',sortable:true},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:90,align:'left',sortable:true},
                       {field:'Creator',title:'创建人',type:'string',width:130,require:true,align:'left'},
                       {field:'CreatorID',title:'创建人ID',type:'int',width:90,require:true,align:'left'},
                       {field:'EnableFlag',title:'有效标识',type:'int',bind:{ key:'enable',data:[]},width:90,align:'left'},
                       {field:'HouseId',title:'房屋',type:'int',bind:{ key:'houseCanRent',data:[]},width:90,require:true,align:'left'},
                       {field:'Id',title:'序号',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'LiveTime',title:'入住时间',type:'datetime',width:90,align:'left',sortable:true},
                       {field:'Modifier',title:'修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改时间',type:'datetime',width:90,align:'left',sortable:true},
                       {field:'ModifyID',title:'修改人ID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'TenantId',title:'租客',type:'int',bind:{ key:'Tenants',data:[]},width:90,require:true,align:'left'},
                       {field:'BelongUnit',title:'所属单位',type:'int',bind:{ key:'houseUnit',data:[]},width:120,align:'left'}],
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
