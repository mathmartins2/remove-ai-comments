
package com.example.test;

import java.util.ArrayList;
import java.util.List;

public class TestJava {
    private int value;
    
    public TestJava() {
        this.value = 42;
    }
    
    public TestJava(int value) {
        this.value = value;
    }
    
    public int getValue() {
        return this.value;
    }
    
    public void setValue(int value) {
        this.value = value;
    }
    
    public static void main(String[] args) {
        TestJava test = new TestJava();
        
        System.out.println("Value: " + test.getValue());
        
        test.setValue(100);
        
        System.out.println("New value: " + test.getValue());
    }
} 