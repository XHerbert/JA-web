/*
 * Author：xuhbd
 * Contact：xuhbd@foxmail.com
 * 此处是对表单的方法，组件，权限操作按钮等进行任意扩展(方法扩展可参照SellOrder.js)
 */

let extension = {
    components: {//动态扩充组件或组件路径
        //表单header、content、footer对应位置扩充的组件
        gridHeader: '',//{ template: "<div>扩展组xx件</div>" },
        gridBody: '',
        gridFooter: '',
        //弹出框(修改、编辑、查看)header、content、footer对应位置扩充的组件
        modelHeader: '',
        modelBody: '',
        modelFooter: ''
    },
    buttons: { view: [], box: [], detail: [] },//扩展的按钮
    methods: {//事件扩展
        onInit() {
            //在第二个按钮后添加一个新的按钮
            this.buttons.splice(1, 0, {
                name: "生成本月预收",
                icon: 'md-list-box',
                type: 'primary',
                onClick: function () {
                    //TODO:调用接口创建本月预收记录
                    //TODO:手动调用刷新接口
                    this.http.get("api/TenantFeeRecord/generatePeriodRentRecord", {}, "预收记录生成中...").then(result => { this.$Message.info(result.message) });
                }
            })
        }
    }
};
export default extension;