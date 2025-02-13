import { Controller } from "@hotwired/stimulus"
import ApexCharts from "apexcharts";

export default class extends Controller {
    static targets = ["chart"];

    connect() {
        this.renderChart();
    }

    renderChart() {
        const options = {
            chart: {
                type: "line",
                height: 350,
                scrollablePlotArea: {
                    enabled: true,
                    scrollHorizontal: true
                }
            },
            series: [
                {
                    name: "Vendas",
                    data: [10, 20, 30, 40, 50, 60, 70] // Substitua pelos seus dados
                }
            ],
            xaxis: {
                categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
                // time: [
                //     "00:00",
                //     "01:00",
                //     "02:00",
                    // "03:00",
                    // "04:00",
                    // "05:00",
                    // "06:00",
                    // "07:00",
                    // "08:00",
                    // "09:00",
                    // "10:00",
                    // "11:00",
                    // "12:00",
                    // "13:00",
                    // "14:00",
                    // "15:00",
                    // "16:00",
                    // "17:00",
                    // "18:00",
                    // "19:00",
                    // "20:00",
                    // "21:00",
                    // "22:00",
                    // "23:00"],
            }
        };

        new ApexCharts(this.chartTarget, options).render();
    }
}