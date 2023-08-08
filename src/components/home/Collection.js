import * as React from "react";
import {StaticImage} from "gatsby-plugin-image"
import {Link} from "gatsby";
import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {collection, doc, getDoc, getDocs, getFirestore, orderBy, limit, query, where} from "firebase/firestore";
import firebaseApp from "../../firebase";
import ProductCard from "../products/ProductCard";

const Collection = () => {

    const auth = getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);
    const [products, setProducts] = useState([]);

    const [isAdmin, setIsAdmin] = useState(0);
    const [currentUser, setCurrentUser] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);

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




    useEffect(() => {

        getDocs(query(collection(db, "products"), orderBy("datetime", "desc"), limit(5)))
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
        <div className="container-fluid bg-white section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 align-self-center text-center text-md-start">
                        <h1 className="font-family-rancho fw-500">Our Trending <span
                            className="text-primary">Collection</span></h1>
                        <p className="p-site">A cake is the important sweet dish that gives a sweet touch to <br/> your
                            celebration. It has become a compulsory part.</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-6 align-self-center text-center text-lg-end">
                        <div className="btn-group gap-3">
                            {isAdmin !== 0 && (

                                <a href="#!" className="btn btn-primary btn-site fs-14 rounded-1"
                                   data-bs-toggle="modal" data-bs-target="#createNewProduct"
                                >Add New Product</a>

                            )
                            }

                            <Link to="/products" className="btn btn-primary btn-site fs-14 rounded-1">See All Collection</Link>
                        </div>
                    </div>
                </div>

                <div className="row my-4">
                    {products.map((product) => {
                        if (product.is_collection == 1)
                            return (
                                <ProductCard product={product} key={product.id}/>
                            )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Collection