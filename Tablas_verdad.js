function truthTable() {
    let A = false, B = false
    
    console.log("| A | B | A AND B |")
    console.log("|-------|-------|---------|")

    // Combinación de A = false,  y de B = false
    let AND1 = A && B
    console.log(`| ${A} | ${B} | ${AND1} |`)

    // Combinación de A = false, y de B = true
    B = true
    let AND2 = A && B
    console.log(`| ${A} | ${B} | ${AND2} |`)

    // Combinación de A = true, y de B = false
    A = true
    B = false
    let AND3 = A && B
    console.log(`| ${A} | ${B} | ${AND3} |`)

    // Combinamos la A = true, y la B = true
    B = true
    let AND4 = A && B
    console.log(`| ${A} | ${B} | ${AND4} |`)
}

truthTable()