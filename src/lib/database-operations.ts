import { COLLECTIONS } from '../config/constants';
// Lista de casos

export async function getCases(db: any) {
    // console.log(await db.collection(COLLECTIONS.CONFIRMED).find().sort({id: 1}).toArray());
    return await db.collection(COLLECTIONS.CONFIRMED).find().sort({id: 1}).toArray();
    // console.log(await db.collection(COLLECTIONS.CONFIRMED).find().count() );
    // return await db.collection(COLLECTIONS.CONFIRMED).find().count();
}

export async function getSospechosos(db: any) {
    return await db.collection(COLLECTIONS.SUSPECT).find().sort({id: 1}).toArray();
}

export async function getMuertos(db: any) {
    return await db.collection(COLLECTIONS.DEATHS).find().sort({id: 1}).toArray();
}