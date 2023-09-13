function Aluno(nome) {
    this.nome = nome;
    this.notas = [];
  }

  Aluno.prototype.incluirNota = function (nota) {
    this.notas.push(nota);
  };
  
  Aluno.prototype.calcularMedia = function () {
    if (this.notas.length === 0) {
      return 0;
    }
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    return soma / this.notas.length;
  };

  Aluno.prototype.verificarAprovacao = function (callback) {
    const media = this.calcularMedia();
    if (media >= 7) {
      callback(`${this.nome} foi APROVADO com média ${media.toFixed(2)}`);
    } else {
      callback(`${this.nome} foi REPROVADO com média ${media.toFixed(2)}`);
    }
  };

  function imprimirResultado(resultado) {
    console.log(resultado);
  }
  
  const aluno1 = new Aluno('João');
  aluno1.incluirNota(8);
  aluno1.incluirNota(7);
  aluno1.incluirNota(6);
  aluno1.verificarAprovacao(imprimirResultado);
  
  const aluno2 = new Aluno('Maria');
  aluno2.incluirNota(5);
  aluno2.incluirNota(6);
  aluno2.incluirNota(7);
  aluno2.verificarAprovacao(imprimirResultado);
  