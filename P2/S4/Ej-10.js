console.log("Ejecutando js...")
const test = document.getElementById('test');

test.onclick = () => {
    console.log("click!");

    if (test.style.backgroundColor == "") {
        test.style.backgroundColor = "red";
    }

    else {
        test.style.backgroundColor = "";
    }
}