"use strict";

let cursor = $("<div></div>").css({
    width: "10px",
    height: "10px",
    backgroundColor: "#fcecf2",
    position: "absolute",
    top: "0",
    left: "0",
    borderRadius: "50%",
    opacity: 0,
    transition: "opacity .25s",
});

$(document.body).append(cursor);

const CURSOR_FRICTION = 0.05;
let cursorPos = {
    x: 0,
    y: 0,
};
let mousePos = {
    x: 0,
    y: 0,
};

$(document)
    .ready(
        setInterval(() => {
            cursorPos.x += (mousePos.x - cursorPos.x) * CURSOR_FRICTION;
            if (cursorPos.x > window.innerWidth - 10)
                cursorPos.x = window.innerWidth - 10;

            cursorPos.y += (mousePos.y - cursorPos.y) * CURSOR_FRICTION;
            if (cursorPos.y > window.innerHeight - 10)
                cursorPos.y = window.innerHeight - 10;
            cursor.css(
                "transform",
                `translate(${cursorPos.x}px, ${cursorPos.y}px)`
            );
        }, 1)
    )
    .on({
        mousemove: (e) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
        },
        mouseenter: (e) => {
            cursor.css({
                transform: `translate(${e.clientX}px, ${e.clientY}px)`,
                opacity: "1",
            });
        },
        mouseleave: () => {
            cursor.css({
                opacity: "0",
            });
        },
    });
