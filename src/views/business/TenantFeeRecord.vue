<!--
 *Author：xuhbd
 *Contact：xuhbd@foxmail.coms
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/business/TenantFeeRecord.js此处编写
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
    import extend from "@/extension/business/TenantFeeRecord.js";
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
                    cnName: '收租记录',
                    name: 'TenantFeeRecord',
                    url: "/TenantFeeRecord/",
                    sortName: "Id"
                },
                extend: extend,
                editFormFields: {"Code":"","HouseCode":"","TenantName":"","HouseNumber":"","Receivable":"","PayStatus":""},
                editFormOptions: [[{"title":"流水编码","field":"Code","type":"text"},
                               {"title":"房屋编码","field":"HouseCode","type":"text"}],
                              [{"title":"房号","field":"HouseNumber","type":"text"},
                               {"title":"名称","field":"TenantName","type":"text"}],
                              [{"title":"应收租金","required":true,"field":"Receivable","type":"decimal"},
                               {"dataKey":"payStatus","data":[],"title":"缴费状态","field":"PayStatus","type":"switch"}]],
                searchFormFields: {},
                searchFormOptions: [],
                columns: [{field:'Code',title:'流水编码',type:'string',link:true,width:120,align:'left',sortable:true},
                       {field:'TenantName',title:'名称',type:'string',width:90,align:'left'},
                       {field:'HouseCode',title:'房屋编码',type:'string',width:90,align:'left'},
                       {field:'HouseNumber',title:'房号',type:'string',width:90,align:'left'},
                       {field:'Receivable',title:'应收租金',type:'decimal',width:90,require:true,align:'left'},
                       {field:'PreReceivable',title:'预收租金',type:'decimal',width:90,align:'left'},
                       {field:'OffsetPreReceivable',title:'冲减预收租金',type:'decimal',width:90,align:'left'},
                       {field:'UnPaidRent',title:'收欠收租金',type:'decimal',width:90,align:'left'},
                       {field:'ActualPaidRent',title:'实收租金',type:'decimal',width:90,align:'left'},
                       {field:'PayStatus',title:'缴费状态',type:'int',bind:{ key:'payStatus',data:[]},width:90,align:'left'},
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
