const rndString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

export function generateID() {
    let id = ''
    let counter = 0;
    const charactersLength = rndString.length;
     while (counter < 6) {
        id += rndString.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }

    return id
}