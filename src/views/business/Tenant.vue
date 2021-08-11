<!--
 *Author：xuhbd
 *Contact：xuhbd@foxmail.coms
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/business/Tenant.js此处编写
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
    import extend from "@/extension/business/Tenant.js";
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
                    cnName: '租客管理',
                    name: 'Tenant',
                    url: "/Tenant/",
                    sortName: "Id"
                },
                extend: extend,
                editFormFields: {"TenantCode":"","TenantName":"","Gender":"","BelongUnit":"","Mobile":"","IdCard":"","EnableFlag":"","Address":"","BankCard":"","AccountName":"","Bank":""},
                editFormOptions: [[{"title":"编号","field":"TenantCode","type":"text"},
                               {"title":"户主姓名","field":"TenantName","type":"text"},
                               {"dataKey":"gender","data":[],"title":"性别","field":"Gender","colSize":3,"type":"select"},
                               {"dataKey":"houseUnit","data":[],"title":"所属单位","field":"BelongUnit","type":"select"}],
                              [{"title":"手机电话","field":"Mobile","type":"text"},
                               {"title":"身份证号","field":"IdCard","type":"text"},
                               {"dataKey":"enable","data":[],"title":"是否有效","field":"EnableFlag","colSize":3,"type":"switch"}],
                              [{"title":"详细地址","field":"Address","colSize":6,"type":"textarea"}],
                              [{"title":"户名","field":"AccountName","type":"text"},
                               {"title":"缴款账号","field":"BankCard","type":"text"},
                               {"title":"开户行","field":"Bank","type":"text"}]],
                searchFormFields: {"TenantCode":"","TenantName":"","IdCard":"","BankCard":""},
                searchFormOptions: [[{"title":"编号","field":"TenantCode","type":"like"},{"title":"户主姓名","field":"TenantName","type":"like"},{"title":"身份证号","field":"IdCard","type":"like"},{"title":"缴款账号","field":"BankCard","type":"like"}]],
                columns: [{field:'Id',title:'序号',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'TenantCode',title:'编号',type:'string',link:true,width:90,align:'left',sortable:true},
                       {field:'TenantName',title:'户主姓名',type:'string',width:90,align:'left'},
                       {field:'Gender',title:'性别',type:'int',bind:{ key:'gender',data:[]},width:90,align:'left'},
                       {field:'Mobile',title:'手机电话',type:'string',width:90,align:'left'},
                       {field:'IdCard',title:'身份证号',type:'string',width:90,align:'left'},
                       {field:'Address',title:'详细地址',type:'string',width:220,align:'left'},
                       {field:'RentFee',title:'租金',type:'decimal',width:120,align:'left'},
                       {field:'BankCard',title:'缴款账号',type:'string',width:120,align:'left'},
                       {field:'AccountName',title:'户名',type:'string',width:120,align:'left'},
                       {field:'Bank',title:'开户行',type:'string',width:120,align:'left'}],
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
