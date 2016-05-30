type Timing = "ease" | "linear" | "ease-in-out";

function animate(timing: Timing) {
    console.log(timing);
}

animate("ease");
animate("linear");
animate("ease-inout");