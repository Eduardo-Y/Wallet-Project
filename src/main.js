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
        new Chart($doughnutChart, {
            type: "doughnut",
            data: {
                labels: ["Red", "Blue", "Yellow"],
                datasets: [
                    {
                        label: "Resultado final",
                        data: [300, 50, 100],
                        backgroundColor: [
                            "rgb(255, 99, 132)",
                            "rgb(54, 162, 235)",
                            "rgb(255, 205, 86)",
                        ],
                        hoverOffset: 4,
                    },
                ],
            },
        });

        new Chart($lineChart, {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                ],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: true,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.4,
                    },
                ],
            },
        });
    });
});
