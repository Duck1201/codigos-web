// Atribuição simples
let a = 5 + 3
let b = a % 5
let c = 5 * b ** 2
let d = 10 - a / 2
let e = 6 * 2 / d
let f = b % e + 4 / e

document.writeln(`A: ${a} | B: ${b} | C: ${c} | D: ${d} | E: ${e} | F: ${f}`)

// Auto-Atribuição

let n = 3 // 3   | 3
n = n + 4 // 7   | n+=4
n = n - 5 // 2   | n-=5
n = n * 4 // 8   | n*=4
n = n / 2 // 4   | n/=2
n = n ** 2 // 16 | n**=2
n = n % 5 // 1   | n%=5