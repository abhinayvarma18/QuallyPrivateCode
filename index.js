var calculateLength = function(inputString) {
    var totalCount = 0
    var result = 0
    var lastHeadValue = 0
    var lastTailValue = 1
    var headValue = 0
    var tailValue = 1
    var localCopy = inputString
    var abc = function(input) {
        //local instance variable to keep check of last count
        var localCount = 0
        for(var counter = 0; counter < input.length; counter++){
            var chari = input.charAt(counter)
            if(chari=='(') {
                lastHeadValue += +headValue
                lastTailValue = tailValue

                //calculatin a x b
                headValue = ""
                tailValue = ""
                while(true) {
                    counter += 1
                    totalCount += 1
                    if(input.charAt(counter)=="x" || input.charAt(counter)=="X") {
                        break
                    }
                    headValue += input.charAt(counter)
                }
                while(true) {
                    counter += 1
                    totalCount += 1
                    if(input.charAt(counter)==")"){
                        break
                    }
                    tailValue = tailValue + input.charAt(counter)
                }

                //axb => headValue x tailValue

                //if counter is completed manupulating  head and tail
                if(localCount==headValue && lastHeadValue!=0) {
                    lastHeadValue = lastHeadValue - headValue
                    headValue = lastHeadValue
                    tailValue /= tailValue
                }
                counter += 1
                totalCount += 1
                
                tailValue *= lastTailValue
                
                if(localCount==lastHeadValue && localCount > 0) {  
                        return [(localCount * tailValue),localCount,lastTailValue]
                }else{
                    //calling whenever received a bracket as 1st character nd still comes under a of (axb)
                    var value = abc(localCopy.substring(totalCount,localCopy.length))
                    //to return all repeated calls
                    if(value==undefined) {
                        return
                    }
                    //result computation
                    result += value[0]
                    //adjusting counters and multiplier for next strings .
                    counter += value[1] - 1
                    localCount += value[1]
                    tailValue = value[2]
                }
            }else{
                localCount += 1
                totalCount += 1
                if(localCount==headValue) {
                    //returning number of characters repeated .
                    return [(localCount * tailValue),localCount,lastTailValue]
                }else if(localCount > headValue){
                    //result computatiom
                    result += 1
                }
            }
        }
        console.log(result)
    }
    abc(inputString)
}
 //calculateLength("S(7x2)(2x2)THCF")
