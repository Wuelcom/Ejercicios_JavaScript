function truthTable() {
    let X = false, Y = false;

    // Tabla de verdad para la Conjunción (AND)
    console.log("Tabla de verdad para Conjunción (AND):");
    console.log("| X     | Y     | X AND Y |");
    console.log("|-------|-------|---------|");

    // Conjunción (X AND Y)
    for (let i = 0; i < 4; i++) {
        let AND = X && Y;
        console.log(| ${X} | ${Y}  |  ${AND}  |);
        
        // Alternar valores de X y Y
        if (Y === false) {
            Y = true;
        } else {
            Y = false;
            X = !X;
        }
    }

    // Tabla de verdad para Disyunción (OR)
    X = false, Y = false;
    console.log("\nTabla de verdad para Disyunción (OR):");
    console.log("| X     | Y     | X OR Y  |");
    console.log("|-------|-------|---------|");

    // Disyunción (X OR Y)
    for (let i = 0; i < 4; i++) {
        let OR = X || Y;
        console.log(| ${X} | ${Y}  |  ${OR}   |);
        
        // Alternar valores de X y Y
        if (Y === false) {
            Y = true;
        } else {
            Y = false;
            X = !X;
        }
    }

    // Tabla de verdad para Negación (NOT)
    X = false;
    console.log("\nTabla de verdad para Negación (NOT):");
    console.log("| X     | NOT X  |");
    console.log("|-------|--------|");

    // Negación (NOT X)
    for (let i = 0; i < 2; i++) {
        let NOT_X = !X;
        console.log(| ${X} |   ${NOT_X}  |);
        X = !X;
    }

    // Tabla de verdad para Implicación (X → Y)
    X = false, Y = false;
    console.log("\nTabla de verdad para Implicación (X → Y):");
    console.log("| X     | Y     | X → Y   |");
    console.log("|-------|-------|---------|");

    // Implicación (X → Y)
    for (let i = 0; i < 4; i++) {
        let implication = !X || Y;
        console.log(| ${X} | ${Y}  |   ${implication}   |);
        
        // Alternar valores de X y Y
        if (Y === false) {
            Y = true;
        } else {
            Y = false;
            X = !X;
        }
    }

    // Tabla de verdad para Doble Implicación (X ↔ Y)
    X = false, Y = false;
    console.log("\nTabla de verdad para Doble Implicación (X ↔ Y):");
    console.log("| X     | Y     | X ↔ Y   |");
    console.log("|-------|-------|---------|");

    // Doble Implicación (X ↔ Y)
    for (let i = 0; i < 4; i++) {
        let doubleImplication = (X === Y);
        console.log(| ${X} | ${Y}  |   ${doubleImplication}   |);
        
        // Alternar valores de X y Y
        if (Y === false) {
            Y = true;
        } else {
            Y = false;
            X = !X;
        }
    }
}

truthTable();