//questions :  Take an array of string containing the name of your friends and return the first name of the friend who have 5 letters in it. Include error handeling
//Error : Show an error msg if : 1) EMplty array is sent 2)all the array element if not string 3)of there are no names carring 5 letters



function findfive_2(arr){
    var res=0
    console.log('First name carring 5 letters : ')
    if(arr.length==0){
        res ='Empty array found . invalid inputs ..'
        return res
    }
    
    for(var i=0 ; i < arr.length; i++){
        if(typeof(arr[i])=='string'){
            res=1
            if(arr[i].length==5){
                res=arr[i]
                return res
            }
        } 
        
    }

    if(res==1){
        res= "SORRY you have no friends ...."
        
    }
    else if (res==0){
        res='Please enter valid string'

    }

    return res
}




var array = ['john', 'alice' ,'bob', 'charlie', 'mike',77,45, 'samantha', 'tina',  'Mishel', 'Tinkerbel', 5]
var a=[5,6,8,9,6,3,2,10,10]
var b = []
result_2=findfive_2(array)
console.log(result_2)
