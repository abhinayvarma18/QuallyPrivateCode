var input = function(a) {
    var error = false
    var startIndex = 0
    var signMultiplier = 1.0
    var result = 0
    var dotFound = false
    var floatDivider = 10

    //console.log("Char code at index [0]: " + a.charCodeAt(0))
    if(a.charCodeAt(0) == 45 || a.charCodeAt(0) == 47){
    startIndex = 1
    if(a.charCodeAt(0) == 45)	
        signMultiplier = -1.0
    }
    //console.log("signMultiplier: " + signMultiplier)

    //console.log('startIndex = ' + startIndex)
    for(var i = startIndex; i < a.length; i++){
    var chari = a.charAt(i) - "0".charAt(0)

    //console.log("charcode[number] : " + a.charAt(i)+"["+chari+"]")

    // Sanity check
    if(!( (chari >= 0 && chari <= 9) || a.charAt(i) == '.') ){
        console.log("Invalid char found")
        error = true
        break
    }
    
    // -2 => '.'
    if(a.charAt(i) == '.'){
        if(dotFound){
            console.log("Dot found again!!")
            error = true
            break
        }
        dotFound = true
        //console.log("First dot found!")
    }else{
        if(!dotFound){
            result = result * 10 + chari
        }else{
            result = result + chari / floatDivider
            floatDivider *= 10
        }
    }
    
     //console.log(a.charCodeAt(i) - 48)
    }

    if(!error){
    // Add sign to result
       result *= signMultiplier
       console.log(result)
    }else{
       console.log('error')
    }
}
//input("2.345")
