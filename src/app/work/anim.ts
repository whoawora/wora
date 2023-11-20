export const imgSlide = {
    initial: {x: "calc(-150%)", transition: {opacity: 0}},
    enter: {x: "0", transition: {duration: 2, ease: [0.76, 0, 0.24, 1], opacity: 1}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}
