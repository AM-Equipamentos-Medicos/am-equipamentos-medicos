document.addEventListener("DOMContentLoaded", () => {
  const busca = document.getElementById("busca");
  const seções = {
    mamografia: document.getElementById("mamografia-produtos"),
    biopsia: document.getElementById("biopsia-produtos"),
    radiologia: document.getElementById("radiologia-produtos")
  };

  function renderProdutos(filtro = "") {
    Object.values(seções).forEach(div => div.innerHTML = "");
    produtos
      .filter(p => p.nome.toLowerCase().includes(filtro.toLowerCase()))
      .forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${p.imagem}" alt="${p.nome}">
          <h3>${p.nome}</h3>
          <p>${p.especificacoes}</p>
          <a class="whatsapp" target="_blank"
            href="https://wa.me/5592981770202?text=Olá,%20tenho%20interesse%20no%20produto%20${encodeURIComponent(p.whatsapp)}">
            Falar no WhatsApp
          </a>`;
        seções[p.categoria]?.appendChild(card);
      });
  }

  busca?.addEventListener("input", e => {
    renderProdutos(e.target.value);
  });

  renderProdutos();
});
