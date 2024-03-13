function togglePasswordVisibility(icon) {
    var input = icon.previousElementSibling;
    if (input.type === "password") {
        input.type = "text";
        icon.querySelector('i').className = "fas fa-eye-slash"; // Atualiza a classe do ícone para ocultar a senha
    } else {
        input.type = "password";
        icon.querySelector('i').className = "fas fa-eye"; // Atualiza a classe do ícone para mostrar a senha
    }
}


$(document).ready(function() {
    $(".fancybox").fancybox({
        loop: true, // Permite a navegação em loop
        transitionEffect: "fade", // Efeito de transição
        buttons: ["zoom", "slideShow", "thumbs", "close"], // Botões disponíveis
        autoFocus: false, // Desativa o foco automático
        afterShow: function(instance, current) {
            $(".fancybox-content").css("display", "flex");
        }
    });
});
