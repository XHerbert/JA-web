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
    style="margin-left: 10px; margin-right: 10px; margin-top: 50px"
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
            label: `直管公房租金收入明细账`,
            // `吉安市房地产经营管理处 ` +
            // this.tableData.data[0].period +
            // `期 ` +
            // this.tableData.data[0].labelTitle +
            // `租金收入月报表`,
            children: [
              {
                prop: "houseTypeName",
                label: "时间",
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
                label: "摘要",
                align: "center",
              },
              {
                label: "借方",
                align: "center",
              },
              {
                prop: "realReceieve",
                label: "贷方",
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
                label: "借或贷",
                align: "center",
              },
              {
                label: "余额",
                align: "center",
              },
              {
                label: "一所",
                align: "center",
              },
              {
                label: "二所",
                align: "center",
              },
              {
                label: "三所",
                align: "center",
              },
              {
                label: "企业所",
                align: "center",
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