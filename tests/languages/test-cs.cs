
using System;
using System.Collections.Generic;

namespace Example
{
    public class TestCs
    {
        private int _value;
        
        public int Value 
        {
            get 
            { 
                return _value; 
            }
            set 
            { 
                _value = value; 
            }
        }
        
        public TestCs()
        {
            _value = 42;
        }
        
        public TestCs(int value)
        {
            _value = value;
        }
        
        public void DisplayValue()
        {
            Console.WriteLine($"Value: {_value}");
        }
        
        public static void Main(string[] args)
        {
            var test = new TestCs();
            
            test.DisplayValue();
            
            test.Value = 100;
            
            test.DisplayValue();
        }
    }
} 