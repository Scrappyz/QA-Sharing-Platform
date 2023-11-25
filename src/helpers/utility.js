export function shortenNumber(n) {
    if(typeof n === "number") {
        if(n >= 1000) {
            return (Math.floor(n / 100) / 10).toString() + "k"; 
        }
        return n;
    }

    return "unknown";
}