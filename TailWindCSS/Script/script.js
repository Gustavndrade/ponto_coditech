    IMask(document.getElementById('CPF'), { mask: '000.000.000-00' });
    IMask(document.getElementById('RG'), { mask: '0000000' });
    IMask(document.getElementById('telefone'), { mask: '(00) 00000-0000' });

    var passoatual = 0;
    const container = document.getElementById("container");
    const passo = container.children

    function proximo_passo() {
        const tamanho = passo[0].offsetWidth;
        container.style.transform = `translateX(-${passoatual * tamanho}px)`;
    }

    document.querySelector("#proximo").addEventListener("click", () => {
        if (passoatual < passo.length -1){
            passoatual++;
            proximo_passo();
            document.getElementById('proximo').innerHTML = 'CADASTRAR'
        }
    })

    document.querySelector("#voltar").addEventListener("click", () => {
        if (passoatual > 0){
            passoatual--;
            proximo_passo();document.getElementById('proximo').innerHTML = 'PRÓXIMO'
        }
    })
  
