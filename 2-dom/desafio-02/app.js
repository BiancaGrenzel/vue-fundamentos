new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(event){
            alert("Voce clicou no botao Exibir Alerta!")
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})