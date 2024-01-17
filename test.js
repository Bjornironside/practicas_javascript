

// Seleccionamos el botón por su id

var divTest = document.getElementById("myDiv")

var miBoton = document.getElementById("miBoton");

var inputname = document.getElementById('input_name')

var inputpass = document.getElementById('input_pass')



miBoton.addEventListener("click", function () {
    console.log(inputname.value)
    console.log(inputpass.value)

    // console.log(inputvalue.value)
    // divTest.innerHTML = inputValue.value
    // inputValue.type ="password"

    alert(`nombre: ${inputname.value}  pass: ${inputpass.value}`)

});
