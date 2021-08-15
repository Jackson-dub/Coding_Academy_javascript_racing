document.addEventListener('DOMContentLoaded', (event) => {

    

    class Calculator{
        constructor(displayResult){
            this.displayResult = displayResult;
            this.clear();
        }

        clear(){
            this.result = "";
            this.currentOperand = "";
            this.operation = undefined;
        }
        
        delete(){
            this.currentOperand = this.currentOperand.toString().slice(0, -1)
        }

        appendNumber(number){
            if(number === '.' && this.currentOperand.includes('.')) return
            this.currentOperand = this.currentOperand.toString() + number.toString();

        }

        chooseOperation(operation){
            if(this.currentOperand === "")return
            if(this.previousOperand !==""){
                this.compute();
            }
            this.operation = operation;
            this.previousOperand = this.currentOperand;
            this.currentOperand = '';

        }

        compute(){

            let computation;
            const prev = parseFloat(this.previousOperand)
            const current = parseFloat(this.currentOperand)
            if(isNaN(prev)|- isNaN(current))return
            switch(this.operation){
                case '+':
                    computation = prev + current
                    break
                case '-':
                    computation = prev - current
                    break
                case 'x':
                    computation = prev * current
                    break
                case '/':
                    computation = prev / current
                    break
                case '%':
                    computation = prev % current
                    break
                default:
                    return
            }
            this.currentOperand = computation;
            this.operation = undefined;
            this.previousOperand = '';
        }

        updateDisplay(){
            this.displayResult.innerText = this.currentOperand;

        }
    }

    const numberButtons = document.querySelectorAll('[data-number]')
    const operationButtons = document.querySelectorAll('[data-operation]')
    const equalsButton = document.querySelector('.equal')
    const deleteButton = document.querySelector('#back')
    const allClearButton = document.querySelector('#clear')
    const displayResult = document.querySelector('.result')

    const calculator = new Calculator(displayResult)

    numberButtons.forEach(button=>{
        button.addEventListener('click',()=>{
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay();
        })
    })

    operationButtons.forEach(button=>{
        button.addEventListener('click',()=>{
            calculator.chooseOperation(button.innerText)
            calculator.updateDisplay();
        })
    })

    equalsButton.addEventListener('click', button=>{
        calculator.compute()
        calculator.updateDisplay()
    })

    allClearButton.addEventListener('click', button=>{
        calculator.clear()
        calculator.updateDisplay()
    })

    deleteButton.addEventListener('click', button=>{
        calculator.delete()
        calculator.updateDisplay()
    })

});