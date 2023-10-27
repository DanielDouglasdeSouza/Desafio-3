class heroi{
    nome;
    idade;
    tipo;
    
    constructor(nome, idade, tipo ){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo  
    }
    
    atacar(){   
      switch(true){
        case this.tipo === "mago": 
          console.log(`O ${this.tipo} atacou usando magia`)
          break;
        case this.tipo === "guerreiro":
          console.log(`O ${this.tipo} atacou usando espada`)
          break;
        case this.tipo === "monge": 
          console.log(`O ${this.tipo} atacou usando artes marciais`)
          break;
        case this.tipo === "ninja":
          console.log(`O ${this.tipo} atacou usando shuriken`)
          break;        
      }      
    }        
  }
       
  const heroi1 = new heroi("Piter ", "100 anos " , "mago")
  heroi1.atacar()