

//first 
var twoSum1 = function (nums, target) {
    // var arr = {};
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] == (target - nums[i])) {
                return [i, j];
            }
        }


    }
}


nums = [-2, 6, 1, 7, 15];
target = -9;

var ts = twoSum1(nums, target)
console.log(ts)

//second

var twoSum2 = function(nums, target) {
    var arr = {};
    for (var i = 0; i < nums.length; i++) {
        if (typeof(arr[nums[i]]) !== "undefined"){
            return [arr[nums[i]], i];                        
        }                         
        arr[target - nums[i]] = i;
    }
};


nums = [2, 6, 1, 7, 15];
target = 9;

var ts2 = twoSum2(nums, target)
console.log(ts2)


//暴力搜索

var twoSum = function(nums, target) {
    var result = [];
    for(var i = 0;i<nums.length;i++) {
        for(var j = i+1;j<nums.length;j++) {
            var num2 = target-nums[i]
            if(num2 === nums[j]) {
                result[0] = i;
                result[1] = j;
                break;
            }
        }
            
    }
    return result;
};

// 使用Object（键值对）
var twoSum = function(nums, target) {
    var newNums = {};
    var result =[];
    for(var i = 0;i<nums.length;i++) {
        newNums[nums[i]] = i;
    }
    for(var i = 0;i<nums.length;i++) {
        
        var num2 = target-nums[i];
        if(typeof newNums[num2] !== "undefined" && newNums[num2]!==i) {
            result[0] = i;
            result[1] = newNums[num2];
            break;
        }
    }
    return result;
};


//一遍Object

var twoSum = function(nums, target) {
    var newNums = {};
    var result =[];
​
    for(var i = 0;i<nums.length;i++) {
        
        var num2 = target-nums[i];
        if(typeof newNums[num2]!=="undefined") {
            result[0] = newNums[num2];
            result[1] = i;
            break;
        }
        else {
            newNums[nums[i]] = i;
        }
    }
    return result;
};

//Map方法

var twoSum = function(nums, target) {
    var newNums = new Map();
    var result =[];
​
    for(var i = 0;i<nums.length;i++) {
        
        var num2 = target-nums[i];
        if(newNums.has(num2)) {
            result[0] = newNums.get(num2);
            result[1] = i;
            return result;
        }
        else {
            newNums.set(nums[i],i);
        }
    }
};
