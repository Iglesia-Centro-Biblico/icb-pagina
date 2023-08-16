export function useId(size = 3): string {
    let randomId = '';
    const DICTIONARY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < size; i++) {
        randomId += DICTIONARY.charAt(Math.floor(Math.random() * DICTIONARY.length));
    }

    return randomId;
}