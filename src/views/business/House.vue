<!--
 *Author：xuhbd
 *Contact：xuhbd@foxmail.coms
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/business/House.js此处编写
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
    import extend from "@/extension/business/House.js";
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
                    cnName: '房屋管理',
                    name: 'House',
                    url: "/House/",
                    sortName: "Id"
                },
                extend: extend,
                editFormFields: {"HouseNumber":"","Area":"","BelongUnit":"","HouseAddress":"","HouseStatus":"","RentFee":"","HouseType":"","EnableFlag":"","District":"","Township":"","Village":"","BuildingNumber":"","UnitNumber":""},
                editFormOptions: [[{"title":"房号","field":"HouseNumber","type":"text"}],
                              [{"title":"房屋面积","field":"Area","type":"decimal"}],
                              [{"dataKey":"houseUnit","data":[],"title":"所属单位","field":"BelongUnit","type":"select"}],
                              [{"title":"地址","field":"HouseAddress","type":"textarea"}],
                              [{"dataKey":"houseStatus","data":[],"title":"房屋状态","field":"HouseStatus","type":"select"}],
                              [{"title":"房屋租金","field":"RentFee","type":"decimal"}],
                              [{"dataKey":"houseType","data":[],"title":"房屋类别","field":"HouseType","type":"select"}],
                              [{"dataKey":"enable","data":[],"title":"是否启用","field":"EnableFlag","type":"select"}],
                              [{"title":"县区","field":"District","type":"text"}],
                              [{"title":"乡镇（街道）","field":"Township","type":"text"}],
                              [{"title":"社区（村委会）","field":"Village","type":"text"}],
                              [{"title":"楼栋号","field":"BuildingNumber","type":"text"}],
                              [{"title":"单元号","field":"UnitNumber","type":"text"}]],
                searchFormFields: {},
                searchFormOptions: [],
                columns: [{field:'Id',title:'序号',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'HouseCode',title:'房屋编码',type:'string',link:true,width:90,align:'left',sortable:true},
                       {field:'Area',title:'房屋面积',type:'decimal',width:90,align:'left'},
                       {field:'District',title:'县区',type:'string',width:120,align:'left'},
                       {field:'Township',title:'乡镇（街道）',type:'string',width:120,align:'left'},
                       {field:'Village',title:'社区（村委会）',type:'string',width:120,align:'left'},
                       {field:'Group',title:'小区',type:'string',width:120,align:'left'},
                       {field:'BuildingNumber',title:'楼栋号',type:'string',width:120,align:'left'},
                       {field:'UnitNumber',title:'单元号',type:'string',width:120,align:'left'},
                       {field:'HouseNumber',title:'房号',type:'string',width:120,align:'left'},
                       {field:'HouseType',title:'房屋类别',type:'int',bind:{ key:'houseType',data:[]},width:120,align:'left'},
                       {field:'HouseStatus',title:'房屋状态',type:'int',bind:{ key:'houseStatus',data:[]},width:90,align:'left'},
                       {field:'RentFee',title:'房屋租金',type:'decimal',width:90,align:'left'},
                       {field:'RentStatus',title:'租赁状态',type:'int',bind:{ key:'rentStatus',data:[]},width:120,align:'left'}],
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
