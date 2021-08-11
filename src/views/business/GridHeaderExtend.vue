<template>
  <div>
    <!-- <Alert type="error">
      <h5>SellOrder.js文件中的扩展SellOrder表的头部信息,你可以在此处定义需要显示的信息,如果需要获取界面的Vue对象属性,参照此扩展组件GridHeaderExtend.vue的说明</h5>
    </Alert> -->
    <!--点击扩展按钮对应的弹出框-->
    <vol-box :model.sync="model" title="现金缴费" :width="600" :height="350">
      <Alert type="error">
        <h4>默认当前账期</h4>
      </Alert>
      <div>
        <!-- <h6>
          如获取GridView页面的对象：
          this.$emit('parentCall',($vue)=>{//$vue为整View对象})
        </h6> -->
      </div>

    <VolForm
      ref="myform"
      :loadKey="loadKey"
      :formFields="formFields"
      :formRules="formRules"
    ></VolForm>
 
      <div style="padding:30px 0px;">
        <Button type="primary"  @click="loadCrash">加载账期</Button>
        <Button type="primary"  @click="payCrash">现金缴费</Button>
      </div>
      <!-- 添加slot槽覆盖footer的按钮，添加新的按钮 -->
      <div slot="footer">
        <Button type="info" @click="model=false">关闭</Button>
      </div>
    </vol-box>
  </div>
</template>
<script>
export default {
  components: {
    VolBox: () => import("@/components/basic/VolBox.vue"),
    VolForm: () => import("@/components/basic/VolForm.vue")
  },

  data() {
    return {
      model: false,
      loadKey: true,
      formFields: {
        Term: "--",
        Tenant: "--",
        TenantCode:"",
        Fee: 0,
        CustId:0
      },
      formRules: [
        //两列的表单，formRules数据格式为:[[{},{}]]
        [
          {
            title: "租户",
            required: true,
            field: "Tenant",
            type: "text",
            disabled: true,
            colSize: 12, 
          },
          {
            type: "text",
            title: "账期",
            required: true,
            placeholder: " ",
            colSize: 12, 
            disabled: true,
            field: "Term"          
          },
            {
            type: "text",
            title: "租金",
            required: true,
            placeholder: " ",
            readonly: true,
            colSize: 12, 
            field: "RentFee"          
          },
        ],
      ],
    };
  },
  methods: {
    
     formatDate (date, fmt) {
      // 获取年份，替换fmt中的yyyy部分
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, date.getFullYear().toString().substr(4 - RegExp.$1.length))
      }
      let f = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let key in f) {
        if (new RegExp(`(${key})`).test(fmt)) {
          let str = f[key].toString()
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : str.padLeft(2, '0'))
        }
      }
      return fmt
    },
    loadCrash(){
        let $this = this;
        this.$emit("parentCall", $vue => {
            let currentRow = $vue.$refs.table.getSelected()[0];
            $this.formFields.TenantCode = currentRow.TenantCode;
            $this.formFields.Tenant = currentRow.TenantName;
            $this.formFields.RentFee = currentRow.RentFee;
            $this.formFields.Term = $this.formatDate(new Date(), 'yyyy-MM').replace('-','');
      })
    },

    payCrash() {
      let $this = this;    
      if(!$this.formFields.TenantCode || !$this.formFields.Term || $this.formFields.RentFee<=0){
        this.$Message.info("请加载账期后操作！")
        return ;
      }

      let postdata =  JSON.stringify(
        {
          CUST_ID: $this.formFields.TenantCode,
          DL_TERM: $this.formFields.Term,
          TX_AMOUNT:$this.formFields.RentFee
        });
      this.http.post("api/customPay/PayRentFeeFromCash",postdata, "收现金...",true).then(result => 
      { 
        this.$Message.info(result.message) ;
        $this.formFields.TenantCode = '';
        $this.formFields.Tenant = '--';
        $this.formFields.RentFee =0;
        $this.formFields.Term = '--';
      });
    }
  },created(){    
  }
};
</script>
