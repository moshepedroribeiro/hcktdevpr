import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["chart"];

    connect() {
        this.renderChart();
    }

    renderChart() {
        const options = {
            chart: {
                type: "line",
                height: 350
            },
            series: [
                {
                    name: "Vendas",
                    data: [10, 20, 30, 40, 50, 60, 70] // Substitua pelos seus dados
                }
            ],
            xaxis: {
                categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"]
            }
        };

        new ApexCharts(this.chartTarget, options).render();
    }
}