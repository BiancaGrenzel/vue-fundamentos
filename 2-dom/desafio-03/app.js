new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            return this.valor === 37 ?
            'Valor igual' : 'Valor diferente'
        }
    },
    watch:{
        resultado(novo, antigo){
            console.log('Novo: ', novo, ' Antigo: ', antigo)
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }

    },
    methods:{
        aumentar1(){
            this.valor ++

        },
        aumentar5(soma, e){
            console.log(soma, e)
            this.valor += soma
        },

    }
});