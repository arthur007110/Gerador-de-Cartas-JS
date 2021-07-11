$(document).ready(function(){
    $("#button").click(function(){
        domtoimage.toBlob(document.getElementById("carta"))
        .then(function(blob){
            window.saveAs(blob, "carta.png");
        })
    })
})