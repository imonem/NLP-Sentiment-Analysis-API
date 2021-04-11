function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "imonem"
    ];

    if(names.includes(inputText)) {
        console.log("Welcome, Captain!");
    }
}

export { checkForName };
