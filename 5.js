  "use strict"
 
        const result = (num1, num2) => {
            return num1 + num2;
            
        }
               
        const result2 = (num1, num2) => {
            return num1 - num2;
        }
                
        const result3 = (num1, num2) => {
            return num1 * num2;
        }
        
        const result4 = (num1, num2) => {
            return num1 / num2;
        }
        
        function mathOperation(arg1, arg2, operation) {
            switch (operation)  {
                case "+": 
                    return result(arg1, arg2);
                case "-": 
                    return result2(arg1, arg2);
                case "*": 
                    return result3(arg1, arg2);
                 case "/": 
                    return result4(arg1, arg2);
            }
        }

        console.log(mathOperation(4, 10, "+"));
        console.log(mathOperation(4, 10, "-"));
        console.log(mathOperation(4, 10, "*"));
        console.log(mathOperation(4, 10, "/"));