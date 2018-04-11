<template>
  <!--此处的id用变量，方便同一页面引用多次相同的组件-->
  <div :id="id"></div>
</template>

<script>
  import G2 from 'g2';

  G2.Global.setTheme('dark');
  export default {
    data() {
      return {
        chart: null
      };
    },
    props: {
      charData: {
        type: Array,
        default: function () {
          return {
            data: [
              {'day': '2018-02-11', 'value': 5},
              {'day': '2018-02-12', 'value': 7},
              {'day': '2018-02-13', 'value': 9},
              ]
          };
        }
      },
      id: String
    },
    mounted: function () {
      this.drawChart(this.$props.charData);
    },
    beforeUpdate: function () {
//      this.drawChart();
    },
    watch: {
      charData: function (val, oldVal) {
        this.drawChart(val);
      }
    },
    methods: {
      drawChart: function (datas) {
        var _self = this;
        this.chart && this.chart.destroy();
        let data = datas;
        this.chart = new G2.Chart({
          id: this.id,
          height: 245,
          forceFit: true,
          background: {
            fill: "#17202e",
            fillOpacity: 1,
            stroke: "",
            strokeOpacity: 1,
            opacity: 1,
            lineWidth: 1,
            radius: 0
          }
          , padding: [ 90, 20, 95, 80 ]
        });
        this.chart.source(data, {

          value: {
            range: [0, 1],
            alias: _self.$t("notice.transCount")
          },
          day: {
            type: 'timeCat',
            range: [0, 1],
            alias: _self.$t("notice.transDate"),
            formatter: val => {
              var valueDate=new Date(val);
              return (valueDate.getFullYear()+"-"+(parseInt(valueDate.getMonth())+1)+"-"+valueDate.getDay());
            },
            nice: false
          }
        });
        this.chart.line().position('day*value').color("#5e84b8").size(1);
        this.chart.point().position('day*value').color('#5e84b8')
          .shape('circle')
          .label('value', {offset: 10, label: {fill: '#fff'}});
        this.chart.render();
      }
    }
  }
</script>

<style>

</style>
