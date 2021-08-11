<!--
 *Author：xuhbd
 *Contact：xuhbd@foxmail.coms
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/business/Vtenanthouserelation.js此处编写
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
    import extend from "@/extension/business/Vtenanthouserelation.js";
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
                    cnName: '房屋分配',
                    name: 'Vtenanthouserelation',
                    url: "/Vtenanthouserelation/",
                    sortName: "Id"
                },
                extend: extend,
                editFormFields: {"HouseCode":"","TenantId":"","ActualRentFee":"","LiveTime":""},
                editFormOptions: [[{"dataKey":"tenants","data":[],"title":"租客","required":true,"field":"TenantId","type":"select"},
                               {"dataKey":"houseCanRent","data":[],"title":"房屋编码","required":true,"field":"HouseCode","type":"select"}],
                              [{"title":"实际租金","field":"ActualRentFee","type":"decimal"},
                               {"title":"入住时间","field":"LiveTime","type":"datetime"}]],
                searchFormFields: {},
                searchFormOptions: [],
                columns: [{field:'Id',title:'序号',type:'int',width:120,require:true,align:'left',sortable:true},
                       {field:'HouseNumber',title:'房号',type:'string',width:120,require:true,align:'left'},
                       {field:'TenantCode',title:'租客编码',type:'string',link:true,width:90,require:true,align:'left'},
                       {field:'HouseStatus',title:'房屋状态',type:'int',bind:{ key:'houseStatus',data:[]},width:90,require:true,align:'left'},
                       {field:'TenantName',title:'租客名称',type:'string',bind:{ key:'Tenants',data:[]},width:90,require:true,align:'left'},
                       {field:'HouseCode',title:'房屋编码',type:'string',bind:{ key:'houseCanRent',data:[]},width:90,require:true,align:'left'},
                       {field:'Gender',title:'性别',type:'int',bind:{ key:'gender',data:[]},width:90,align:'left'},
                       {field:'HouseType',title:'房屋类型',type:'int',bind:{ key:'houseType',data:[]},width:90,align:'left'},
                       {field:'IdCard',title:'身份证',type:'string',width:90,align:'left'},
                       {field:'Mobile',title:'手机号',type:'string',width:90,align:'left'},
                       {field:'RentFee',title:'房屋租金',type:'decimal',width:90,require:true,align:'left'},
                       {field:'ActualRentFee',title:'实际租金',type:'decimal',width:120,align:'left'},
                       {field:'LiveTime',title:'入住时间',type:'datetime',width:120,align:'left',sortable:true}],
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
