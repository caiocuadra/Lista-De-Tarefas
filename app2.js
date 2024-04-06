$(function(){
    function apagar(int){
        localStorage.removeItem("tarefa-"+int);
    }

    for (let index = 0; index < 100; index++) {
        $('#apaga-'+index).on("click", function(){
            localStorage.removeItem("tarefa-"+index);
            location.reload();
        });
        
    }

    $('#enviar').on("click", function(){
        for (let index = 0; index < 100; index++) {
            if(localStorage.getItem("tarefa-"+index)){
                continue;
            }else{
                var valor = $('#tarefa-txt')
                localStorage.setItem("tarefa-"+index, valor.val());
                location.reload();
                break;
            }
        }
    });
})