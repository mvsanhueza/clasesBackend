import bcrypt from 'bcrypt';

export const hashData = async (data) => {
    return bcrypt(data, 10);
}

export const compareHashData = async (data, hashData) => {
    return bcrypt.compare(data, hashData);
}