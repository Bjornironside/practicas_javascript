

// Seleccionamos el botón por su id

var divTest = document.getElementById("myDiv")

var miBoton = document.getElementById("miBoton");

var inputname = document.getElementById('input_name')

var inputpass = document.getElementById('input_pass')



var lista = ['martin', 'tomy', 'belu']

const login = () => {
    console.log(inputname.value)
    console.log(inputpass.value)
    console.log(lista)
}


miBoton.addEventListener("click", function () {

    login()


    // console.log(inputvalue.value)
    // divTest.innerHTML = inputValue.value
    // inputValue.type ="password"

    // alert(`nombre: ${inputname.value}  pass: ${inputpass.value}`)
    alert('Usuario logeado  o usuario no logeado')
});





