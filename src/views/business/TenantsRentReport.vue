<!--
 *Author：xuhbd
 *Contact：xuhb-c@glodon.coms
 *月租金报表
 *
 -->

<template>
  <lb-table
    :column="tableData.column"
    :data="tableData.data"
    style="margin-left: 5px; margin-top: 50px; over-flow: scroll"
    show-summary
    sum-text="合计"
  >
  </lb-table>
</template>

<script>
import LbTable from "../../components/lb-table/lb-table";
export default {
  components: {
    LbTable,
  },
  data() {
    return {
      tableData: {
        column: [
          {
            align: "center",
            label: `吉安市房地产经营管理处 一所202104期租金明细表`,
            // `吉安市房地产经营管理处 ` +
            // this.tableData.data[0].period +
            // `期 ` +
            // this.tableData.data[0].labelTitle +
            // `租金收入月报表`,
            children: [
              {
                prop: "houseTypeName",
                label: "房号",
                fixed: true,
                width: "120",
                renderHeader: (h, scope) => {
                  return (
                    <span>
                      <i class="el-icon-time"></i>
                      {scope.column.label}
                    </span>
                  );
                },
              },
              {
                prop: "houseTypeName",
                label: "承租人",
                fixed: true,
                width: "120",
                renderHeader: (h, scope) => {
                  return (
                    <span>
                      <i class="el-icon-time"></i>
                      {scope.column.label}
                    </span>
                  );
                },
              },
              {
                prop: "receivable",
                label: "应收租金",
                width: "120",
              },
              {
                prop: "preReceivable",
                label: "预收租金",
                width: "120",
              },
              {
                label: "收欠收租金 					",
                align: "center",
                children: [
                  {
                    prop: "receivable",
                    label: "现金",
                    width: "120",
                  },
                  {
                    prop: "preReceivable",
                    label: "银行代扣",
                    width: "120",
                  },
                  {
                    prop: "unPaidRent",
                    label: "微信",
                    width: "120",
                  },
                  {
                    prop: "supplementRent",
                    label: "支付宝",
                    width: "100",
                  },
                  {
                    prop: "ownFee",
                    label: "单位APP",
                    width: "100",
                  },
                  {
                    prop: "ownFee",
                    label: "公众号",
                    width: "100",
                  },
                ],
              },
              {
                prop: "preReceivable",
                label: "冲减预收租金",
                width: "120",
              },
              {
                prop: "preReceivable",
                label: "空租",
                width: "120",
              },
              {
                label: "欠收租金",
                align: "center",
                children: [
                  {
                    prop: "receivable",
                    label: "现金",
                    width: "120",
                  },
                  {
                    prop: "preReceivable",
                    label: "银行代扣",
                    width: "120",
                  },
                  {
                    prop: "unPaidRent",
                    label: "微信",
                    width: "120",
                  },
                  {
                    prop: "supplementRent",
                    label: "支付宝",
                    width: "100",
                  },
                  {
                    prop: "ownFee",
                    label: "单位APP",
                    width: "100",
                  },
                  {
                    prop: "ownFee",
                    label: "公众号",
                    width: "100",
                  },
                ],
              },
              {
                label: "实收租金",
                align: "center",
                children: [
                  {
                    prop: "receivable",
                    label: "现金",
                    width: "120",
                  },
                  {
                    prop: "preReceivable",
                    label: "银行代扣",
                    width: "120",
                  },
                  {
                    prop: "unPaidRent",
                    label: "微信",
                    width: "120",
                  },
                  {
                    prop: "supplementRent",
                    label: "支付宝",
                    width: "100",
                  },
                  {
                    prop: "ownFee",
                    label: "单位APP",
                    width: "100",
                  },
                  {
                    prop: "ownFee",
                    label: "公众号",
                    width: "100",
                  },
                ],
              },
              {
                prop: "realReceieve",
                label: "小计",
                fixed: true,
                width: "120",
                renderHeader: (h, scope) => {
                  return (
                    <span>
                      <i class="el-icon-time"></i>
                      {scope.column.label}
                    </span>
                  );
                },
              },
            ],
          },
        ],
        data: [],
      },
    };
  },
  created() {
    this.http
      .get("api/TenantFeeRecord/getMonthRentReport", {}, "报表加载中...")
      .then((result) => {
        this.tableData.data = result.data;
        //this.$Message.info(result.message);
      });
    // 目前只有现金和银行代扣方式 
    // for (let i = 0; i < 5; i++) {
    //   this.tableData.data.push({
    //     date: `公租房`,
    //     name: `121${i + 1}`,
    //     province: "1000",
    //     city: "2000",
    //     address: `1223`,
    //     zip: 200333,
    //   });
    // }
  },
};
</script>