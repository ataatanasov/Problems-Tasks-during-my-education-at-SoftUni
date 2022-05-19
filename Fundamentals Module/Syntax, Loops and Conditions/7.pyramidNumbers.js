function pyramid(n) {
    n = Number(n);
    
    for (let i = 1; i <= n; i++) {
        let line = '';    
        for (let j = 1; j <= i; j++) {
            line += i;
            if (j !== i) {
                line += ' '; // toest tuk dobavqme interval  i stava '2 ' i sled tova vliza oshte edno chislo
                
            }
        }
        console.log(line)
    }
}
pyramid(3)