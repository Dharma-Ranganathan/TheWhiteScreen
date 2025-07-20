import { addDoc, collection, getDocs } from "firebase/firestore";
import { fdb } from "../config/firebaseConfig";

export const useFirestoreCustomFunctions = () => {
  // database collection ref for "favourites"
  const collectionRef = collection(fdb, "favourites");

  // Get all movies from favourites

  async function getAllFavourites() {
    const moviesDoc = await getDocs(collectionRef);
    const favouriteMovies = [];
    moviesDoc.forEach((doc) => {
      favouriteMovies.push({ docId: doc.id, ...doc.data() });
    });

    return favouriteMovies;
  }

  // Add Movie to Favourite Page
  async function addToFavourite(movie) {
    // console.log("favourite:", movie);

    try {
      // database document ref for movie

      return await addDoc(collectionRef, movie);
    } catch (error) {
      // consoling the error if arises from adding doc to db

      console.log(error);
    }
  }

  return { addToFavourite, getAllFavourites };
};
