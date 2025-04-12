# Arquivo de teste Python
# Este é um exemplo de arquivo Python com comentários

def hello():
    # Comentário dentro da função
    print("Hello, world!")
    
    # Outro comentário indentado
    return True

# Classe de exemplo
class ExampleClass:
    def __init__(self):
        # Comentário no inicializador
        self.value = 42
    
    # Método com comentário
    def get_value(self):
        # Retorna o valor
        return self.value

# Testando a classe
if __name__ == "__main__":
    # Criando uma instância
    example = ExampleClass()
    
    # Imprimindo o valor
    print(f"Value: {example.get_value()}") 