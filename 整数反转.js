// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 注意:
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
// 请根据这个假设，如果反转后整数溢出那么就返回 0。


var reverse = function (x) {
    var a = 0;
    var abs = Math.abs(x);
    while (abs != 0) {

        t = abs % 10;
        a += t.toString();
        abs = parseInt(abs / 10);

    }
    if (x >= 0 && a <= Math.pow(2, 31) - 1 && a >= -Math.pow(2, 31)) {
        return parseInt(a);
    }
    else if (x < 0 && a <= Math.pow(2, 31) - 1 && a >= -Math.pow(2, 31)) {
        return parseInt(-a);
    }
    else {
        return 0;
    }

};

var re=reverse(123);
console.log(re)