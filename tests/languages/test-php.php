<?php
// Arquivo de teste PHP
// Este é um exemplo de arquivo PHP com comentários

# Também suporta comentários estilo shell
# PHP permite ambos os estilos de comentários

function hello() {
    // Comentário dentro da função
    echo "Hello, world!";
    
    # Outro comentário indentado (estilo shell)
    return true;
}

// Classe de exemplo
class ExampleClass {
    private $value;
    
    public function __construct() {
        // Comentário no construtor
        $this->value = 42;
    }
    
    // Método com comentário
    public function getValue() {
        # Retorna o valor (estilo shell)
        return $this->value;
    }
}

// Testando a classe
$example = new ExampleClass();

// Imprimindo o valor
echo "Value: " . $example->getValue();
?> 