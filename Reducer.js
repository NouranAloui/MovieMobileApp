import { doc, setDoc, addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./FireBaseConfig";


const add = async (m) => {
    const docRef = await addDoc(collection(db, "Movies"),
        m.movie
    );
    // return getAll();
}

const deleteId = async (i) => {
    const q = query(collection(db, "Movies"), where("id", "==", i));
}

const isFavourite = async (i) => {
    try {
        // Query to find documents where "id" field matches the provided value
        const q = query(collection(db, "Movies"), where("id", "==", i));

        // Execute the query
        const querySnapshot = await getDocs(q);

        // Check if documents were found
        if (!querySnapshot.empty) {
            console.log("Documents found:", querySnapshot.docs);

            // Process documents if needed
            const documentData = querySnapshot.docs.map(doc => doc.data());
            console.log("Document data:", documentData);

            return true; // Document exists
        } else {
            console.log("No documents found.");
            return false; // Document does not exist
        }
    } catch (error) {
        console.error("Error checking if document is a favourite:", error);
        return false; // Handle error and assume document does not exist
    }
};


export const getAll = async () => {
    const data = [];
    const q = await getDocs(collection(db, "Movies"));
    q.forEach(doc => {
        data.push(doc.data());
        // console.log('docdata')
        // console.log(doc.data())
        // console.log(doc.id, " => ", doc.data())
        // console.log(data)
    });
    return data;
}

export const favouriteReducer = async (state, action) => {
    switch (action.type) {
        // case "CLEAR":
        //     return [];
        // case "ADD_ALL_USERS":
        //     return action.payload;
        case "ADD_ALL":
        case "ADD":
            const res = await add(action.payload);
            return res;
        case 'DELETE_ID':
            return deleteId(action.payload);
        case 'IS_FAVOURITE':
            return isFavourite(action.payload.movie.id);
        case 'GET_ALL':
            return getAll();
        default:
            return state;
    }
};