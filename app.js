//HW-12

//1
function myParseInt(str, base) {
    base = base || 10;
    let res = 0;
    let negative = false;
    let i = 0;
    if (str[0] === '-') {
        negative = true;
        i = 1;
    }
    for (i; i < str.length; i++) {
        res = res * base + getCode(str[i]);
    }
    if (negative) {
        return Math.trunc(-res);
    }
    else {
        return Math.trunc(res);
    }
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
console.log((parseInt("-123")));
console.log((parseInt("123")));
console.log((parseInt("123.35")));

//2
function myToString(number, base) {
    base = base || 10;
    let negative = false;
    if (number < 0) {
        negative = true;
        number = -number;
    }
    let intPart = Math.trunc(number);
    let FracPart = number - intPart;
    let res = '';
    do {
        const digit = intPart % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        intPart = Math.trunc(intPart / base);
    }
    while (intPart);
    if (FracPart) {
        fixed = FracPart.toFixed(2);
        slice = fixed.slice(2);
        res = res + '.' + slice;
    }
    if (negative) {
        return '-' + res;
    }
    else {
        return res;
    }
}
function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol;
    if (digit < 10) {
        symbol = "" + digit;
    } else {
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }
    return symbol;
}
console.log(myToString(123))
console.log(myToString(123.45))
console.log(myToString(-123))


