var num1 = parseInt(prompt( 'Enter first number::') ) 
var num2 = parseInt(prompt( 'Enter second number:')) 
var opr = prompt('Enter operator from the list below: -, +, *, %:')

if(opr == '+')
{
    alert(num1 + num2)
} else if(opr =='-')
{
    alert(num1 -num2)
}else if (opr =='*')
{
    alert(num1 * num2)
}else if(opr == '/')
{
    alert(num1 / num2)
}else if (opr == '%')
{
    alert(num1 % num2)
}

