
import React, { createContext, useReducer, useEffect, useState } from "react";
import { favouriteReducer } from "./Reducer";
import { doc, setDoc, addDoc, collection, query, where, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "./FireBaseConfig";

export const favouriteContext = createContext();
const FavouriteContextProvider = ({ children }) => {
    const [favMovies, setfavMovies] = useState([]);
    useEffect(() => {
        getAll();
    }, [])

    const add = async (m) => {
        try {
            await setDoc(doc(db, "Movies", m.title), { ...m, originTitle: m.title });
        } catch (e) { console.error(e) }
        setfavMovies(prev => [...prev, { ...m, originTitle: m.title }])
    }

    const deleteId = async (movie) => {
        try {
            await deleteDoc(doc(db, "Movies", movie.originTitle));
            setfavMovies(prev => prev.filter(m => m.originTitle === movie.originTitle ? null : m))
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    }

    const deleteAll = async () => {
        favMovies.forEach(async (movie) => {
            try {
                await deleteDoc(doc(db, "Movies", movie.originTitle));
            } catch (error) {
                console.error('Error deleting document:', error);
            }
            setfavMovies([]);
        })
    }

    const updateMovieName = async (prop) => {
        const { movie, newTitle } = prop;
        console.log(prop)
        console.log(newTitle)
        const movieRef = doc(db, 'Movies', movie.title);
        try {
            await updateDoc(movieRef, {
                title: newTitle
            });
        } catch (error) {
            console.error(error);
        }

    }

    const isFavourite = async (i) => {
        try {
            // Query to find documents where "id" field matches the provided value
            const q = query(collection(db, "Movies"), where("originTitle", "==", i));

            // Execute the query
            const querySnapshot = await getDocs(q);

            // Check if documents were found
            if (!querySnapshot.empty) {

                return true;
            } else {

                return false; // Document does not exist
            }
        } catch (error) {
            console.error("Error checking if document is a favourite:", error);
            return false; // Handle error and assume document does not exist
        }
    };


    const getAll = async () => {
        const data = [];
        const q = await getDocs(collection(db, "Movies"));
        q.forEach(doc => {
            data.push(doc.data());
        });
        return setfavMovies(data);
    }
    return (
        <favouriteContext.Provider value={{ favMovies, add, deleteId, deleteAll, updateMovieName, isFavourite }}>
            {children}
        </favouriteContext.Provider>)
};

export default FavouriteContextProvider;