//Representa os pesos de cada questão
export class Weight {
    constructor(public points: number[]) {}
  }
  
  // Representa a resposta de um aluno (nome + respostas)
  export class Answer {
    constructor(public name: string, public responses: string[]) {}
  }
  
  // Representa um registro de respostas adicionadas ao exame com a nota calculada
  type AnswerEntry = {
    answer: Answer;
    grade: number;
  };
  
  // Representa o exame, com gabarito oficial, pesos e respostas dos alunos
  export class Exam {
    private weights: Weight;
    private officialAnswer: Answer;
    private answers: AnswerEntry[] = [];
  
    constructor(officialAnswer: Answer, weights: Weight) {
      this.officialAnswer = officialAnswer;
      this.weights = weights;
    }
  
    add(studentAnswer: Answer): void {
      const grade = studentAnswer.responses.reduce((total, response, index) => {
        return total + (response === this.officialAnswer.responses[index] ? this.weights.points[index] : 0);
      }, 0);
  
      this.answers.push({ answer: studentAnswer, grade });
    }
  
    avg(): number {
      const total = this.answers.reduce((sum, entry) => sum + entry.grade, 0);
      return this.answers.length ? total / this.answers.length : 0;
    }
  
    min(count: number = 1): number[] {
      return this.getSortedGrades().slice(0, count);
    }
  
    max(count: number = 1): number[] {
      return this.getSortedGrades().slice(-count);
    }
  
    lt(limit: number): number[] {
      return this.getSortedGrades().filter(grade => grade < limit).sort((a, b) => b - a);
    }
  
    gt(limit: number): number[] {
      return this.getSortedGrades().filter(grade => grade > limit).sort((a, b) => b - a);
    }
  
    private getSortedGrades(): number[] {
      return this.answers.map(entry => entry.grade).sort((a, b) => a - b);
    }
  }
