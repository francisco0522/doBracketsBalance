const doBracketsBalance = (value) => {
  if(typeof(value) != 'string'){
    return 'Its not a String'
  }else if(value.length == 0){
        return 'String is empty'
  }else{
    var count1 = 0 //For []
    var count2 = 0 //For {}
    var count3 = 0 //For ()
    
    count1 = value.split('[').length-1
    count1 = count1 - (value.split(']').length-1)
    
    count2 = value.split('{').length-1
    count2 = count2 - (value.split('}').length-1)
    
    count3 = value.split('(').length-1
    count3 = count3 - (value.split(')').length-1)
    
    if(count1 - count2 - count3 == 0){
      return true
    }else{
      return false
    }
  }

  return value
}


const TestCases = () => {
  var result = 0
  var response = []
  
//Case 1 - The String is empty
if(doBracketsBalance('') == true || doBracketsBalance('') == false){
  result = result + 1
  response.push('The String is empty')
}

//Case 2 - Is not a String
if(doBracketsBalance() == true || doBracketsBalance() == false || doBracketsBalance(123) == false ||
doBracketsBalance(0) == false ||
doBracketsBalance(true) == false ||
doBracketsBalance(null) == false ||
doBracketsBalance(undefined) == false ||
doBracketsBalance(NaN) == false) {
  result = result + 1
  response.push('Is not a String')
}

//Case 3 - The String is balanced
if(doBracketsBalance('{[(ash[a{s[a((sadj]}]))as)as}]') != true){
  result = result + 1
  response.push('The String is balanced')
}

//Case 4 - The String is not balanced
if(doBracketsBalance('{[(ash[a{sj]}]))as)as}]') != false){
  result = result + 1
  response.push('The String is not balanced')
}



console.log('Result - ' + result )
console.log(response)
}

TestCases()