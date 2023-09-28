import React from "react"
import ReactApexChart from "react-apexcharts"
import ApexCharts from "apexcharts"

type ChartProps = {
    series: number[];
  };

type ChartState = {
  options: ApexCharts.ApexOptions;
};


class ApexChart extends React.Component<ChartProps, ChartState> {
  constructor(props: ChartProps) {
    super(props)

    this.state = {
      options: {
        chart: {
          width: 380,
          type: "pie",
          background: "#B1DDF1",
        },
        legend: {
            position: "right",
            horizontalAlign: "center",
          },
        labels: ["Revenu net optimisé", "Cotisations patronales / Convention collective / Statutaire", "Cotisations salariales", "Frais de gestion" ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    }
  }

  

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.props.series}
          type="pie"
        />
      </div>
    )
  }
}

export default ApexChart
