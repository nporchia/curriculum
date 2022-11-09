$(document).ready(function(){
    $("#tecnologias").hide();
    $("#mostrartecnologias").click(function(){
        $("#textofondo").hide();
        $("#tecnologias").show(700);
        $("#contacto").hide();

    })
    $("#mostrardescripcion").click(function(){
        $("#textofondo").show(700);
        $("#tecnologias").hide();
        $("#contacto").hide();

    })
    $("#mostrarcontacto").click(function(){
        $("#textofondo").hide();
        $("#tecnologias").hide();
        $("#contacto").show(700);
        

    })
})