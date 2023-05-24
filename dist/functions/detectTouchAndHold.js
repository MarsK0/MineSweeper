let touchHoldDuration = 200;
let date;
export function touchStart(e) {
    date = Date.now();
}
export function touchEnd() {
    if (date) {
        return (Date.now() - date >= touchHoldDuration);
    }
    return false;
}
