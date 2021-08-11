<!--
 *Author：xuhbd
 *Contact：xuhb-c@glodon.coms
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/business/TenantFee.js此处编写
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
    import extend from "@/extension/business/TenantFee.js";
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
                    cnName: '房租收取',
                    name: 'TenantFee',
                    url: "/TenantFee/",
                    sortName: "Id"
                },
                extend: extend,
                editFormFields: {},
                editFormOptions: [],
                searchFormFields: {},
                searchFormOptions: [],
                columns: [{field:'Id',title:'序号',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'Code',title:'流水编码',type:'string',link:true,width:120,align:'left',sortable:true},
                       {field:'TenantId',title:'租客标识',type:'string',width:90,require:true,align:'left'},
                       {field:'HouseId',title:'房屋标识',type:'string',width:90,require:true,align:'left'},
                       {field:'Receivable',title:'应收租金',type:'decimal',width:90,require:true,align:'left'},
                       {field:'PreReceivable',title:'预收租金',type:'decimal',width:90,align:'left'},
                       {field:'OffsetPreReceivable',title:'冲减预收租金',type:'decimal',width:90,align:'left'},
                       {field:'UnPaidRent',title:'收欠收租金',type:'decimal',width:90,align:'left'},
                       {field:'ActualPaidRent',title:'实收租金',type:'decimal',width:90,align:'left'},
                       {field:'PayStatus',title:'缴费状态',type:'int',width:90,align:'left'},
                       {field:'Crash',title:'收现金',type:'decimal',width:90,align:'left'},
                       {field:'Period',title:'期数',type:'string',width:90,align:'left'},
                       {field:'FeeFromBank',title:'银行托收',type:'decimal',width:90,align:'left'},
                       {field:'NoFeeToBank',title:'银行未托',type:'decimal',width:90,align:'left'},
                       {field:'Creator',title:'创建人',type:'string',width:130,require:true,align:'left'},
                       {field:'CreateDate',title:'创建时间',type:'datetime',width:90,align:'left',sortable:true}],
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
