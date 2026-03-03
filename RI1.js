function criarPersonagem(nome, codinome, dano, forca, velocidade, resistencia) {
    return {
        nome,
        codinome,
        dano,
        forca,
        velocidade,
        resistencia,
        get descricao(){
            return 'Nome: ' + this.nome + '\n'
            + 'Codinome: ' + this.codinome + '\n'
            + 'Tipo de dano: ' + this.dano + '\n'
            + 'Força: ' + this.forca + '\n'
            + 'Velocidade: ' + this.velocidade + '\n'
            + 'Resistência: ' + this.resistencia + '\n'
        },
        get atributos(){
            return this.forca + this.velocidade + this.resistencia
        }
    }       
}

let personagem_00 = criarPersonagem('Steve', 'Capitão', 'Físico', 70, 50, 80)
let personagem_01 = criarPersonagem('Tony', 'Homem de Ferro', 'Físico-Mágico', 80, 70, 50)
let personagem_02 = criarPersonagem('Banner', 'Hulk', 'Físico', 100, 80, 100)

let personagens = [personagem_00, personagem_01, personagem_02]

for (let i = 0; i < personagens.length; i++){
    for (let j = i + 1; j < personagens.length; j++){
        const p1 = personagens[i]
        const p2 = personagens[j]
        // amanita muscaria

        console.log(p1.codinome + ' vs ' + p2.codinome + ':')
        if (p1.atributos > p2.atributos){
            console.log(p1.codinome + ' Vence \n')
        }
        else if (p2.atributos > p1.atributos){
            console.log(p2.codinome + ' Vence \n')
        }
        else{
            console.log('Empate \n')
        }
    }
}