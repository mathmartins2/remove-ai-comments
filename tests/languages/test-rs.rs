// Arquivo de teste Rust
// Este é um exemplo de arquivo Rust com comentários

// Função simples
fn hello() -> bool {
    // Comentário dentro da função
    println!("Hello, world!");
    
    // Outro comentário indentado
    true
}

// Estrutura de exemplo
struct ExampleStruct {
    // Campo com comentário
    value: i32,
}

// Implementação para a estrutura
impl ExampleStruct {
    // Método construtor
    fn new() -> Self {
        // Inicializar a estrutura
        ExampleStruct {
            // Valor padrão
            value: 42,
        }
    }
    
    // Método para obter o valor
    fn get_value(&self) -> i32 {
        // Retorna o valor
        self.value
    }
}

// Função principal
fn main() {
    // Criando uma instância
    let example = ExampleStruct::new();
    
    // Imprimindo o valor
    println!("Value: {}", example.get_value());
} 