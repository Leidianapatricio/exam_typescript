import { Exam, Answer, Weight } from './exam';

const weights = new Weight([2, 1, 3, 2]); // peso das 4 questões
const gabarito = new Answer("Gabarito Oficial", ["A", "B", "C", "D"]);

const exame = new Exam(gabarito, weights);

// Respostas de alunos
const aluno1 = new Answer("Ana", ["A", "B", "C", "D"]); // 100%
const aluno2 = new Answer("Bruno", ["A", "C", "C", "D"]); // errou 2ª => perde 1 ponto
const aluno3 = new Answer("Carlos", ["A", "C", "B", "D"]); // errou 2ª e 3ª => perde 4 pontos
const aluno4 = new Answer("Diana", ["B", "B", "C", "C"]); // errou 1ª e 4ª => perde 4 pontos
const aluno5 = new Answer("Eduardo", ["C", "A", "B", "D"]); // errou 1ª, 2ª e 3ª => perde 6 pontos

// Adicionando as respostas ao exame
exame.add(aluno1);
exame.add(aluno2);
exame.add(aluno3);
exame.add(aluno4);
exame.add(aluno5);

// Saída de dados
console.log("Média das notas:", exame.avg());               // média geral
console.log("Nota(s) mais alta(s):", exame.max());          // maior nota
console.log("Nota(s) mais baixa(s):", exame.min());         // menor nota
console.log("Notas maiores que 5:", exame.gt(5));           // maiores que 5
console.log("Notas menores que 5:", exame.lt(5));           // menores que 5
