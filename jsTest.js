

var findDisappearedNumbers = function(nums) {
    const nonDuplicate= new Set(nums)
    const result = []
    
    for(let i=0; i<nums.length;i++){
        if( nonDuplicate.has(i+1)){


        }else{
     
     console.log(i+1,"here we are")
            result.push(i+1)
        }
    }
    return result
    
};

 findDisappearedNumbers([4,3,2,7,8,2,3,1])