//Problem02  hotel_booking

function hotel_discount(days){
    var price = 1500
    
    //first test case : if user input is nevative or zero
    if(days==0 || days<0 || days % 1 !== 0){
        return 'Please inser a valid date number'
    }
    else{
    
        if(days >=1 &&  days<=2){
            
            return price*days
        }

        else if(days>=3 && days<=5){
                
                var discount = 500
                var bill = (days*price) - ((days-2)*500)
                return bill
        }

        else if(days>5){
                
                var discount=1000
                var newDay = (days-5)
                var fare = (5*price)-((5-2)*500)
                var newfare =(newDay*price) - (newDay*1000)
                var result = fare + newfare
                return result
                
        }


        
    
    }
    
}





console.log(hotel_discount(7))

