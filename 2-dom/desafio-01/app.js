new Vue ({
    el:'#desafio',
    data:{
        nome: 'Bianca Grenzel Severo',
        link:'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'
    },
    methods:{
        idade: function(){
            this.idade=18
            return this.idade
        },
        idadeTres:function(){
            this.idadeTres=this.idade*3
            return this.idadeTres
        },
        randomNumb:function(){
            randomNumb=Math.random()
            return randomNumb
        }
    }
})