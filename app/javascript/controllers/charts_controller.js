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
                    data: [10, 20, 30, 40, 50, 60, 70, 80] // Substitua pelos seus dados
                },
                {
                    name: 'Temperatura',
                    data: [20, 22, 24, 26, 28, 30, 32, 34]
                }
            ],
            xaxis: {
                categories: [
                    "00:00",
                    "01:00",
                    "02:00",
                    "03:00",
                    "04:00",
                    "05:00",
                    "06:00",
                    "07:00",
                    "08:00",
                    "09:00",
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00",
                    "19:00",
                    "20:00",
                    "21:00",
                    "22:00",
                    "23:00"],
                tick_amount: 24,
                forceNiceScale: true,
                labels: {
                    rotate: -45, // Rotaciona os rótulos para melhor leitura
                    // hideOverlappingLabels: false,
                    trim: false,
                    show: true
                }
            },
            legend: {
                show: true,
                fontSize: "16px",  // Aumenta o tamanho do texto
                fontWeight: "bold", // Deixa o texto mais destacado
                labels: {
                    colors: "#000",  // Define a cor da legenda
                    useSeriesColors: false // Impede que use a cor da série
                }
            }
        };

        new ApexCharts(this.chartTarget, options).render();
    }
}