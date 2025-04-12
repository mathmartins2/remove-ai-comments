// Arquivo de teste C
// Este é um exemplo de arquivo C com comentários

#include <stdio.h>
#include <stdlib.h>

// Estrutura de exemplo
typedef struct {
    // Campo com comentário
    int value;
} Example;

// Função para criar um novo exemplo
Example* create_example() {
    // Alocando memória
    Example* example = (Example*) malloc(sizeof(Example));
    
    // Inicializando
    example->value = 42;
    
    // Retornando o ponteiro
    return example;
}

// Função para obter o valor
int get_value(Example* example) {
    // Verificar se é nulo
    if (example == NULL) {
        // Retornar valor padrão
        return 0;
    }
    
    // Retorna o valor
    return example->value;
}

// Função principal
int main() {
    // Criando uma instância
    Example* example = create_example();
    
    // Imprimindo o valor
    printf("Value: %d\n", get_value(example));
    
    // Liberando memória
    free(example);
    
    return 0;
} 