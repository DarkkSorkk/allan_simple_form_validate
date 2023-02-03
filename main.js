$(document).ready(function() {
    $("#cpf").mask("999.999.999-99");
    $("#cep").mask("99999-999");
  
    $("#form").submit(function(event) {
      event.preventDefault();
  
      var nome = $("#nome").val();
      var endereco = $("#endereco").val();
  
      if (!nome || nome.split(" ").length < 2) {
        alert("Por favor, preencha o nome completo com pelo menos duas palavras.");
        return;
      }
  
      if (!endereco || endereco.split(" ").length < 3) {
        alert("Por favor, preencha o endereço completo com pelo menos três palavras.");
        return;
      }
  
      alert("Dados enviados com sucesso!");
      $("#form").trigger("reset");
    });
  });
  