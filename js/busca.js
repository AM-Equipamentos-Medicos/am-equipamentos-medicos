
document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("produtos");
    const busca = document.getElementById("busca");

    function renderProdutos(filtro = "") {
        main.innerHTML = "";
        produtos.filter(p => p.nome.toLowerCase().includes(filtro.toLowerCase()))
            .forEach(p => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                    <img src="\${p.imagem}" alt="\${p.nome}">
                    <h3>\${p.nome}</h3>
                    <p>\${p.especificacoes}</p>
                    <a class="whatsapp" target="_blank" href="https://wa.me/5592981770202?text=Olá,%20tenho%20interesse%20no%20produto%20\${encodeURIComponent(p.whatsapp)}">Falar no WhatsApp</a>
                `;
                main.appendChild(card);
            });
    }

    busca?.addEventListener("input", e => {
        renderProdutos(e.target.value);
    });

    renderProdutos();
});
