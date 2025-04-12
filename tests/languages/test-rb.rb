# Arquivo de teste Ruby
# Este é um exemplo de arquivo Ruby com comentários

def hello
  # Comentário dentro do método
  puts "Hello, world!"
  
  # Outro comentário indentado
  return true
end

# Classe de exemplo
class ExampleClass
  def initialize
    # Comentário no inicializador
    @value = 42
  end
  
  # Método com comentário
  def get_value
    # Retorna o valor
    @value
  end
end

# Testando a classe
example = ExampleClass.new

# Imprimindo o valor
puts "Value: #{example.get_value}" 