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

    $('#apaga').on("click", function(){
        alert("oi");
    });

    $('#enviar').on("click", function(){
        for (let index = 0; index < 100; index++) {
            if(localStorage.getItem("tarefa-"+index)){
                continue;
            }else{
                localStorage.setItem("tarefa-"+index, tarefaTexto.value);
                location.reload();
                break;
            }
        }
    });
})