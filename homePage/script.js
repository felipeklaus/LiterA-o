// Adiciona um ouvinte de evento para o envio do formulário de doação
document.getElementById('donationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const contato = document.getElementById('contato').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
  
    // Verifica se os campos obrigatórios foram preenchidos
    if (nome && contato) {
      // Exibe mensagem de agradecimento personalizada
      alert(`Obrigado pela sua doação, ${nome}! Entraremos em contato em breve.`);
      this.reset(); // Limpa o formulário
    } else {
      // Alerta caso campos obrigatórios não estejam preenchidos
      alert('Por favor, preencha os campos obrigatórios.');
    }
  });
