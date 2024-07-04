export function isWithinLimitMaxSpace(string, limit) {
    return countWords(string) <= limit;
}

export function isWithinLimitMinSpace(string, limit) {
    return string.length >= limit;
}

export function countWords (text) {
    const words = text.trim().split(/\s+/);
    return words.length;
}

export function isValidName(value) {
    const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1áéíóúüÁÉÍÓÚÜÑñ\s]+$/;
    const regexSpaces = / {2,}/;
    if (
        (!regex.test(value) && value !== '') ||
        regexSpaces.test(value) ||
        (value.length === 1 && value === ' ')
    ) {
        return false;
    }
    return true;
}

export function isValidEmail(value) {
    const regexMayus = /[A-ZÑ]/;
    const regexAt = /@/g;
    const regexSpace = / /;
    if (
        regexMayus.test(value) || 
        regexSpace.test(value) || 
        (value.match(regexAt) && value.match(regexAt).length > 1)
        ) {
        return false;
    }
    return true;
}

export function isCorrectEmail(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(value);
}

export function isValidMessage(value) {
    const regex = /^(?!.* {2})[\s\S]*$/;
    return regex.test(value);
}