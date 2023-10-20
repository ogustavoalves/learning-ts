let saldo: number = 3000;

//pegando o elemento relacionado ao saldo e atribuindo um valor diferente a ele
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", {currency:"BRL", style:"currency"});
}


const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date(); 
    elementoDataAcesso.textContent = dataAcesso.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })
}