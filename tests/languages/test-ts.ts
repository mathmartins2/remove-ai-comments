// Arquivo de teste TypeScript
// Este é um exemplo de arquivo TypeScript com comentários

interface Person {
  // Propriedades da interface
  name: string;
  age: number;
}

// Função que usa a interface
function greet(person: Person): string {
  // Comentário dentro da função
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

// Classe de exemplo
class User implements Person {
  // Propriedades privadas
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    // Inicialização no construtor
    this.name = name;
    this.age = age;
  }
  
  // Método da classe
  getInfo(): string {
    // Retorna informações formatadas
    return `${this.name} (${this.age})`;
  }
}

// Exportando a classe
export default User; 