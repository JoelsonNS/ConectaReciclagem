document.addEventListener('DOMContentLoaded', function() {
    
    const botao_aceitar = document.getElementById("botao_aceitar_coleta");
    botao_aceitar.addEventListener('click',function(){
        const nome_do_reciclador = document.getElementById("nome_reciclador_input").value;
        localStorage.setItem("Nome_Reciclador",nome_do_reciclador);
        window.location.href = "parabens_reciclador.html";
    })
      const botao_mapa = document.getElementById("botao_mapa");
    botao_mapa.addEventListener('click',function(){
        window.location.href = "mapa.html";
    })

})

  
    
    