
#include <iostream>
#include <string>

class Example {
private:
    int value;

public:
    Example() {
        this->value = 42;
    }
    
    Example(int value) {
        this->value = value;
    }
    
    int getValue() const {
        return this->value;
    }
    
    void setValue(int value) {
        this->value = value;
    }
};

int main() {
    Example example;
    
    std::cout << "Value: " << example.getValue() << std::endl;
    
    example.setValue(100);
    
    std::cout << "New value: " << example.getValue() << std::endl;
    
    return 0;
} 