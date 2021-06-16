export function calculateBMI(m, h) {
    if(h === 0) {
        throw new Error("Height must be different from zero");
    }
    if(h < 0 || m < 0) {
        throw new Error("Height and Mass must be positive"); 
    }
    return Number((m / h**2).toFixed(2));
}