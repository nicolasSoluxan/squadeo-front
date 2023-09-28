import { Pie } from "react-chartjs-2"
import { Chart, ChartData, ChartDataset } from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"


Chart.register(ChartDataLabels)

Chart.defaults.set("plugins.datalabels", {
  color: "#FE777B",
  backgroundColor: "#ffffff",
  borderRadius: 20,
  align: "end",
  offset: 10
})

interface PieChartData {
  labels?: string[];
  datasets?: ChartDataset<"pie", number[]>[];
}

interface PieChartProps {
  chartData: PieChartData;
  className?: string
}

export const PieChart: React.FC<PieChartProps> = ({ chartData }) => {
  return (
    <div style={{ width: "100%", height: "20vw", marginTop: "5vw" }}>
      <Pie
        data={chartData as ChartData<"pie">}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Répartition de votre chiffre d'affaire"
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  )
}
