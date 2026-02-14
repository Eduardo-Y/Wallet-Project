import { returnResultsArray } from "./investmentCalculator";
import { Chart } from "chart.js/auto";

document.addEventListener("DOMContentLoaded", () => {
    const $leftButton = document.querySelector("#left-button");
    const $rightButton = document.querySelector("#right-button");
    const $resultSection = document.querySelector("#results-section");

    $leftButton.addEventListener("click", (e) => {
        $resultSection.style.transform = "translateX(0)";
    });

    $rightButton.addEventListener("click", (e) => {
        $resultSection.style.transform = "translateX(-50%)";
    });
});
