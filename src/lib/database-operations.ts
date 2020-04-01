import { COLLECTIONS } from '../config/constants';
// Lista de libros

export async function getCases(db: any) {
    // console.log(await db.collection(COLLECTIONS.CONFIRMED).find().sort({id: 1}).toArray());
    return await db.collection(COLLECTIONS.CONFIRMED).find().sort({id: 1}).toArray();
    // console.log(await db.collection(COLLECTIONS.CONFIRMED).find().count() );
    // return await db.collection(COLLECTIONS.CONFIRMED).find().count();
}