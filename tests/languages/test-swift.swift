
import Foundation

protocol ExampleProtocol {
    var value: Int { get set }
    
    func displayValue()
}

class Example: ExampleProtocol {
    var value: Int
    
    var doubledValue: Int {
        return value * 2
    }
    
    init() {
        self.value = 42
    }
    
    init(value: Int) {
        self.value = value
    }
    
    func displayValue() {
        print("Value: \(value)")
    }
    
    func updateValue(newValue: Int) {
        self.value = newValue
    }
}

let example = Example()

example.displayValue()

example.updateValue(newValue: 100)

example.displayValue()

print("Doubled value: \(example.doubledValue)") 