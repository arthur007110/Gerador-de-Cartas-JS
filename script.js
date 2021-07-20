// Função executada quando a página html é totalmente carregada
$(document).ready(function(){
    //Adicionando uma função ao botão de download
    $("#download-button").click(function(){
        //Passando o elemento com id = "carta" para o metodo que transforma o mesmo em imagem
        domtoimage.toBlob(document.getElementById("carta"))
        .then(function(blob){
            //Fazer download da imagem com extenção ".png"
            window.saveAs(blob, "carta.png");
        });
    });
    //Definindo um padrão de cores na carta mais agradável para o usuário
    //#region Padrão da Carta Inicial
    $("#carta").css('border', '2px solid #000');
    $("#imagem-carta-container").css('border', '2px solid #000');
    $("#descricao-carta").css('border', '2px solid #000');
    $("#custo-mana-carta").css('background-color', "#000");
    $("#cor-texto-carta-input").val("#ffffff");
    //#endregion
});
//#region Inputs
//Mudando nome da carta a cada input do usuário
$("#nome-carta-input").on("input", function(){
    $("#nome-carta").html($(this).val());
});
//Mudando custo de mana da carta a cada input do usuário
$("#custo-mana-carta-input").on("input", function(){
    if($(this).val() < 100 && $(this).val() > 0){
        $("#custo-mana-carta").html($(this).val());
    }else if($(this).val() >= 100){
        $(this).val(99);
        $("#custo-mana-carta").html("99");
    }else{
        $(this).val(0);
        $("#custo-mana-carta").html("0");
    }
});
//Mudando imagem da carta somente quando o usuário desfoca o input
$("#imagem-url-carta-input").blur(function(){
    $("#imagem-carta").attr("src", $(this).val());
});
//Mudando descrição da carta a cada input do usuário
$("#descricao-carta-input").on("input", function(){
    $("#descricao-carta").html($(this).val());
});
//Mudando os atributos da carta a cada input do usuário
$("#atributos-carta-input").on("input", function(){
    $("#atributos-carta").html($(this).val());
});
//Aplicando textura a carta
$("#textura-carta-input").on('change', function() {
    if(this.value == "texura-cor"){
        $("#cor-fundo-carta-input").show();
    }else{
        $("#cor-fundo-carta-input").hide();
    }

    if(this.value == "texura-gradiente"){
        $("#gradiente-container").show();
    }else{
        $("#gradiente-container").hide();
        $("#carta").css("background", "");
    }

    $("#carta").removeClass();
    $("#carta").addClass("carta "+this.value);
});
$("#cor-carta-input").change(function(){
    $("#carta").css('border', '2px solid '+$(this).val());
    $("#imagem-carta-container").css('border', '2px solid '+$(this).val());
    $("#descricao-carta").css('border', '2px solid '+$(this).val());
    $("#custo-mana-carta").css('background-color', $(this).val());
});
$("#cor-texto-carta-input").change(function(){
    $("#nome-carta").css('color', $(this).val());
    $("#custo-mana-carta").css('color', $(this).val());
    $("#descricao-carta").css('color', $(this).val());
    $("#atributos-carta").css('color', $(this).val());
});
$("#cor-fundo-carta-input").change(function(){
    $("#carta").css('background-color', $(this).val());
});
//#endregion Inputs

$(document).on("click", ".add", function(){
    $("#cursor-add-cor").before("<input type='color' class='gradient-picker'/>"); 

    console.log($(".gradient-picker").length);
    if($(".gradient-picker").length >= 8){
        $(".add").hide();
        $("#reset-gradient-button").show();
    }
});

$("#reset-gradient-button").click(function(){
    pickers = $(".gradient-picker").toArray();

    pickers.forEach(element => {
        $(element).remove();
    });

    $("#cursor-add-cor").before("<input type='color' class='gradient-picker' id='gradient-picker'/>");
    $("#cursor-add-cor").before("<input type='color' class='gradient-picker' id='gradient-picker'/>");

    $(".add").show();
    $("#reset-gradient-button").hide();

});

$("#gradient-button").click(function(){
    pickers = $(".gradient-picker").toArray();
    
    let colors = "";

    pickers.forEach(element => {
        colors += ", " + $(element).val();
    });

    let query = "";

    if($("#tipo-gradiente-input").val() == "linear"){
        query += "linear-gradient(to right" + colors + ")";
    }else if($("#tipo-gradiente-input").val() == "radial"){
        query += "radial-gradient(circle" + colors + ")";
    }

    $("#carta").css("background-image", query);

});

$("#upload-image-button").click(function(){
    $("#selecao-arquivo").trigger('click');
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagem-carta')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}