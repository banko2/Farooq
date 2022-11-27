function fac(input) {
    let n = input[0];

    let f = 1;
    for (let i = 1; i <= n; i++) {

        f *= i;
    }
    console.log('Fac is ' + f);
}
fac([5]);