import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import {StaticImage} from "gatsby-plugin-image";
import firebaseApp from "../firebase";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {
    collection,
    getFirestore,
    getDocs,
    getDoc,
    doc,
    orderBy,
    query,
} from 'firebase/firestore';

import {getDatabase, ref as dbRef, set as dbSet} from "firebase/database";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import ProductCard from "../components/products/ProductCard";

const auth = getAuth(firebaseApp);

const Products = () => {

    const db = getFirestore(firebaseApp);
    const [isAdmin, setIsAdmin] = useState(0);
    const [currentUser, setCurrentUser] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);

    const [products, setProducts] = useState([]);
    const [refreshProducts, setRefreshProducts] = useState(0);


    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docSnap = await getDoc(doc(db, "users", user.uid));
                if (docSnap.exists()) {
                    // Convert to City object
                    const userProfile = docSnap.data();
                    setIsAdmin(userProfile.is_admin);
                } else {
                    console.log("No such document!");
                }
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                const uid = user.uid;
                setLoggedUser(user)
                setCurrentUser(true);

            } else {
                // User is signed out
                setCurrentUser(false);
            }
        });
    }, [])



// Retrieve Products Data
    useEffect(() => {

        getDocs(query(collection(db, "products"), orderBy("datetime", "desc")))
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach((doc) => {
                    arr.push({...doc.data(), id: doc.id})
                });
                setProducts(arr);
            });

    }, [refreshProducts])

    useEffect(() => {
        document.addEventListener("onProductChange", (e) => {setRefreshProducts(Math.random)});

    },[])

    return (
        <Layout>
            <HeroBanner>
                <h1 className="font-family-rancho fw-500 fs-70 text-primary">Products</h1>
                <p className="p-site">
                    A cake is the important sweet dish that gives a sweet touch to <br/> your celebration.
                </p>
            </HeroBanner>
            <div className="container-fluid bg-white section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 align-self-center">
                            <h1 className="font-family-rancho fw-500">All <span
                                className="text-primary">Products</span></h1>
                            <p className="p-site">A cake is the important sweet dish that gives a sweet touch
                                to <br/> your
                                celebration. It has become a compulsory part.</p>
                        </div>
                        <div className="col-12 col-md-4 col-lg-6 align-self-center text-lg-end">

                            {isAdmin !== 0 && (
                                <a href="#!" className="btn btn-primary btn-site fs-14"
                                   data-bs-toggle="modal" data-bs-target="#createNewProduct"
                                >Add New Product</a>
                            )
                            }
                        </div>

                    </div>

                    <div className="row my-4">
                        {products.map((product) => {
                            return (
                                <ProductCard product={product} key={product.id}/>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Products
export const Head = () => <title>BMLHCakes | Products</title>
