import { returnResultsArray } from "./investmentCalculator";
import { Chart } from "chart.js/auto";

document.addEventListener("DOMContentLoaded", () => {
    const $leftButton = document.querySelector("#left-button");
    const $rightButton = document.querySelector("#right-button");
    const $resultSection = document.querySelector("#results-section");

    const $calculateButton = document.querySelector("#calculate-button");
    const $doughnutChart = document.querySelector("#doughnut-chart");
    const $lineChart = document.querySelector("#line-chart");

    $leftButton.addEventListener("click", (e) => {
        $resultSection.style.transform = "translateX(0)";
    });

    $rightButton.addEventListener("click", (e) => {
        $resultSection.style.transform = "translateX(-50%)";
    });

    $calculateButton.addEventListener("click", (e) => {
        const results = returnResultsArray(1000, 100, 12, 1, 10, "monthly", 5);
        const totalEnvested = results[0].reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        );
        const totalReturned = results[1].reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        );
        const profit = (totalEnvested + totalReturned) * 0.1;

        console.log(totalEnvested, totalReturned);

        new Chart($doughnutChart, {
            type: "doughnut",
            data: {
                labels: ["Total investido", "retorno", "imposto"],
                datasets: [
                    {
                        data: [totalEnvested, totalReturned, profit],
                        backgroundColor: [
                            "rgb(255, 205, 86)",
                            "rgb(54, 162, 235)",
                            "rgb(255, 99, 132)",
                        ],
                        hoverOffset: 4,
                    },
                ],
            },
        });

        new Chart($lineChart, {
            type: "bar",
            data: {
                labels: [
                    "Jan",
                    "Fev",
                    "Mar",
                    "Abr",
                    "Mai",
                    "Jun",
                    "Jul",
                    "Ago",
                    "Set",
                    "Out",
                    "Nov",
                    "Dez",
                ],
                datasets: [
                    {
                        stack: 0,
                        label: "Total investido",
                        data: results[0],
                        backgroundColor: "rgba(54, 162, 235)",
                    },
                    {
                        stack: 0,
                        label: "Retorno",
                        data: results[1],
                        backgroundColor: "rgba(255, 99, 132)",
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        stack: true,
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    });
});
