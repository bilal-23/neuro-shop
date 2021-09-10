import { hash, compare } from 'bcryptjs';

export async function hashPassword(password) {
    const encryptedPassword = await hash(password, 12);
    return encryptedPassword;
}

export async function verifyPassword(password, hashedPassword) {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}