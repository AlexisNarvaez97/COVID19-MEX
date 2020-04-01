import enviroments from './environment';


if (process.env.NODE_ENV !== 'production') {
    const enviroment = enviroments;
}

export const SECRET_KEY = process.env.SECRET || 'alexis';


export const COLLECTIONS = {
    CONFIRMED: 'confirmed'
};