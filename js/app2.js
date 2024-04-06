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
})