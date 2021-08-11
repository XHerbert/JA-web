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
    style="margin-left: 100px; margin-top: 50px"
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
            label: `吉安市房地产经营管理处 一所202104期租金收入月报表`,
            // `吉安市房地产经营管理处 ` +
            // this.tableData.data[0].period +
            // `期 ` +
            // this.tableData.data[0].labelTitle +
            // `租金收入月报表`,
            children: [
              {
                prop: "houseTypeName",
                label: "项目",
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
                label: "收 方",
                align: "center",
                children: [
                  {
                    prop: "receivable",
                    label: "本月应收数",
                    width: "120",
                  },
                  {
                    prop: "preReceivable",
                    label: "预收租金",
                    width: "120",
                  },
                  {
                    prop: "unPaidRent",
                    label: "收本年欠租",
                    width: "120",
                  },
                  {
                    prop: "supplementRent",
                    label: "补收租金",
                    width: "100",
                  },
                  {
                    prop: "ownFee",
                    label: "收历欠",
                    width: "100",
                  },
                  {
                    prop: "receieveTotal",
                    label: "合计",
                    width: "120",
                    renderHeader: (h, scope) => {
                      return (
                        <span>
                          <i class="el-icon-location-outline"></i>
                          {scope.column.label}
                        </span>
                      );
                    },
                  },
                ],
              },
              {
                label: "付 方",
                align: "center",
                children: [
                  {
                    prop: "monthOwnFee",
                    label: "本月欠租",
                    width: "120",
                  },
                  {
                    prop: "offsetPreReceivable",
                    label: "冲减预收租金",
                    width: "120",
                  },
                  {
                    prop: "emptyHouseFee",
                    label: "本月空租",
                    width: "120",
                  },
                  {
                    prop: "payTotal",
                    label: "合计",
                    width: "120",
                    renderHeader: (h, scope) => {
                      return (
                        <span>
                          <i class="el-icon-location-outline"></i>
                          {scope.column.label}
                        </span>
                      );
                    },
                  },
                ],
              },
              {
                prop: "realReceieve",
                label: "实收金额",
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
        data: [{

        }],
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

    for (let i = 0; i < 5; i++) {
      this.tableData.data.push({
        houseTypeName: `公租房`,
        receivable:10,
        preReceivable:10,
        unPaidRent:10,
        supplementRent:10,
        ownFee:100,
        receieveTotal: 1000,
        monthOwnFee: 200,
        offsetPreReceivable: 20000,
        emptyHouseFee: 1222,
        payTotal: 2003,
        realReceieve:2000
      });
    }
  },
};
</script>