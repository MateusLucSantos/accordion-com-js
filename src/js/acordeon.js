const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach(function (item) {
    item.addEventListener("click", function () {
        if (!item.classList.contains("ativo")) {
            const itemAtivoAtual = document.querySelector(".ativo");
            if (itemAtivoAtual) {
                itemAtivoAtual.classList.toggle("ativo");
            }

            item.classList.toggle("ativo");
        } else {
            item.classList.remove("ativo");
        }
    });
});
