"use strict";

let RNG_POSSIBLE_COLORS = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2"];

$(".rng-color").css(
    "color",
    RNG_POSSIBLE_COLORS[Math.floor(Math.random() * RNG_POSSIBLE_COLORS.length)]
);

$("#moon").on("click", () => {
    $(this).css({});
});
