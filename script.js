document.getElementById('donationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const contato = document.getElementById('contato').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
  
    if (nome && contato) {
      alert(`Obrigado pela sua doação, ${nome}! Entraremos em contato em breve.`);
      this.reset();
    } else {
      alert('Por favor, preencha os campos obrigatórios.');
    }
  });
  