import { addDoc, collection, getDocs } from "firebase/firestore";
import { fdb } from "../config/firebaseConfig";

export const useFirestoreCustomFunctions = () => {
  // database collection ref for "favourites"
  const collectionRef = collection(fdb, "favourites");

  // Get all movies from favourites

  async function getAllFavourites() {
    const favouriteMovies = [];

    try {
      const moviesDoc = await getDocs(collectionRef);
      moviesDoc.forEach((doc) => {
        favouriteMovies.push({ docId: doc.id, ...doc.data() });
      });
      return favouriteMovies;
    } catch (error) {
      console.log(error);
    }
  }

  // Add Movie to Favourite Page
  async function addToFavourite(movie) {
    try {
      return await addDoc(collectionRef, movie);
    } catch (error) {
      console.log(error);
    }
  }

  return { addToFavourite, getAllFavourites };
};
