const Big = require('big.js');

function slope_calc() {
    let A = document.getElementById("A").value;
    let a = new Big(A);
    let B = document.getElementById("B").value;
    let b = new Big(B);
    let soilEffectiveCohesion = document.getElementById("c").value;
    let c = new Big(soilEffectiveCohesion);
    let frictionAngle = document.getElementById("t").value;
    let t = new Big(Math.tan(frictionAngle * Math.PI / 180));
    let height = document.getElementById("h").value;
    let h = new Big(height);
    let soilSpecificUnitWeight = document.getElementById("y").value;
    let y = new Big(soilSpecificUnitWeight);
    let Fs = a.times(t).plus(c.times(b).div(h).div(y)).toFixed(4);

    if (!isNaN(Fs)) {
        document.getElementById("Fs").value = Fs;
    }
    return;
}