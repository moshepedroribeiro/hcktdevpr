import { Controller } from "@hotwired/stimulus"
import ApexCharts from "apexcharts";

export default class extends Controller {
    static targets = ["chart", "time", "temperature"];

    connect() {

        this.renderChart();
    }

    renderChart() {
        const options = {
            chart: {
                type: "line",
                height: 400,
                width: "100%", // Garante que o gráfico expanda conforme necessário
                zoom: {
                    enabled: true // Permite zoom para visualizar melhor os dados
                },
                scrollablePlotArea: {
                    enabled: true, // Habilita rolagem horizontal
                    scrollHorizontal: true
                }
            },
            series: [
                {
                    name: "Horário",
                    data: JSON.parse(this.timeTarget.value)
                },
                {
                    name: 'Temperatura',
                    data: JSON.parse(this.temperatureTarget.value)
                }
            ],
            xaxis: {
                categories: JSON.parse(this.temperatureTarget.value),
                type: 'datetime',
                tickAmount: 24,
                labels: {
                    format: 'HH:mm',
                    rotate: -45
                },
                title: {
                    text: 'Horário'
                }
            },
            yaxis: {
                title: {
                    text: 'Quantidade'
                }
            }
        };

        new ApexCharts(this.chartTarget, options).render();
    }

     generateChartData() {
        let data = [];

        data = JSON.parse(this.jsonTarget.value).map((item) => {
            let hour = item[0].split(":")[0];
            let minute = item[0].split(":")[1];
            let second = item[0].split(":")[2];

            return {
                x: new Date(hour, minute, second, 0),
                y: item.quantity
            }
        });

        return data;
    }
}