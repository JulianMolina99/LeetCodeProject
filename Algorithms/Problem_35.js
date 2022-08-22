let searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let m = Math.floor((l + r)/2);
    while(l <= r){
        debugger;
        let variable = nums[m];
        if(target === variable){
            return m;
        }
        if (target < variable){
            r = m - 1;
            m = Math.floor((l + r)/2);
        }else{
            l = m + 1;
            m = Math.floor((l + r)/2);
        }
    }
    return l;
};
