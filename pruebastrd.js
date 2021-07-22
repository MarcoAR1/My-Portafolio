const isPrime = (n) => {
    if (n != +n) return 'not a number\n'
    for (let x = 2; x < n; x += 1) {
        if (n % x === 0) {
            return `${n} not is a prime number\n`;
        }
    }

    return `${n} is a prime number\n`
}

process.stdin.setEncoding('utf8')
process.stdin.on('data', (data) => {
    data = data.trim()
    if (data !== null) {
        if (data === 'exit') {
            process.exit(0)
        }
        process.stdout.write(isPrime(data))
    }
})

