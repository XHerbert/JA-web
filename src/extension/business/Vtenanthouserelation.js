/*
 * Author：xuhbd
 * Contact：xuhb-c@glodon.com
 * 此处是对表单的方法，组件，权限操作按钮等进行任意扩展(方法扩展可参照SellOrder.js)
 */

let extension = {
    components: {//动态扩充组件或组件路径
        //表单header、content、footer对应位置扩充的组件
        gridHeader:'',//{ template: "<div>扩展组xx件</div>" },
        gridBody: '',
        gridFooter: '',
        //弹出框(修改、编辑、查看)header、content、footer对应位置扩充的组件
        modelHeader: '',
        modelBody: '',
        modelFooter: ''
    },
    buttons: {view: [], box:[],  detail:[]},//扩展的按钮
    methods: {//事件扩展
       onInit() {
        this.editFormOptions.forEach(x => {
            x.forEach(item => {
              if (item.field == 'TenantId') {//指定City为远程搜索
                //代码生成器中页面配置编辑类型必须是select，并指定数据源字典编号
                //数据源必须是自定义sql
                item.remote = true;
                //如果代码生成器中选择的编辑类型是select，可以不用下面的配置
                //item.bind = { key: 'roles', data: [] }
                item.extra = { //添加一个额外提示信息(可以忽然此配置)
                  //icon: "md-sad",//显示图标
                  text: "输入搜索" //显示文本
                  //触发事件 click: item => {}
                }
              }
            })
          })
       }
    }
};
export default extension;