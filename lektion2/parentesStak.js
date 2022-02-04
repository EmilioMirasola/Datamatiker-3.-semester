const parenteser = "{[()]}"
const parenteser2 = "{(}"

function analyserParenteser(parenteser) {
    const stak = [];

    const mapping = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    for (const parentes of parenteser) {
        if (parentes in mapping) {
            stak.push(parentes);
        } else {
            if (mapping[stak.pop()] !== parentes) {
                return false;
            }
        }
    }
    return true;

}

const erBalanceret = analyserParenteser(parenteser);
const erBalanceret2 = analyserParenteser(parenteser2);

console.log(erBalanceret)
console.log(erBalanceret2)