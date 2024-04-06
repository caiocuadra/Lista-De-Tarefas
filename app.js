const tarefaTexto = document.querySelector("#tarefa-txt");
const botaoApagar = document.querySelectorAll("#apaga");

function teste(){
    console.log(tarefaTexto.value);
}

const botaoEnviar = document.getElementById("enviar");
const elemento = document.querySelector("#box-tarefas");

function apagarTarefa(item){
    localStorage.removeItem(""+item);
}


for (let index = 0; index < 100; index++) {
    if(localStorage.getItem("tarefa-"+index)){
        const item = "tarefa-"+index;
        const novaDiv = document.createElement('div');
        novaDiv.setAttribute("class", "box-tarefa-"+index+"");
        novaDiv.setAttribute("id", "box-tarefa")
        novaDiv.innerHTML = '<span class="tarefa-'+index+'">'+localStorage.getItem("tarefa-"+index)+'</span><button class="'+index+'" id="apaga-'+index+'" ><i class="fa-solid fa-trash-can"></i></button>';
        document.querySelector("#box-tarefas").appendChild(novaDiv);
    }
    
}

