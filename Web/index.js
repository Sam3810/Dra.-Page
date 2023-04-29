let botonreservar = document.getElementById('reservarbutton')

botonreservar.addEventListener('click', consulta)


function consulta (){
    window.open("https://api.whatsapp.com/send?phone=573219009697&text=Buenas,%20quiero%20reservar%20una%20cita%20con%20la%20doctora%20Oriana")
}



