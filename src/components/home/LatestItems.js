import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

import {Link} from "gatsby";
import firebaseApp from "../../firebase";
import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query} from "firebase/firestore";
import ProductCard from "../products/ProductCard";


const LatestItems = () => {

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

        getDocs(query(collection(db, "products"), orderBy("datetime", "desc"), limit(8)))
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
        <div className="container-fluid bg-light-gray section-padding">
            <div className="container">
                <div className="text-center">
                    <h1 className="font-family-rancho fw-500">Our Latest
                        <span className="text-primary ms-1"> Items</span></h1>

                    <p className="p-site w-lg-75">For more than 25 years, our team have been making favorite
                        baked <br/> goods the
                        old-fashioned way: from scratch, in small batches.</p>

                    {isAdmin !== 0 && (
                        <div className="text-end mb-3">
                            <a href="#!" className="btn btn-primary btn-site fs-14"
                               data-bs-toggle="modal" data-bs-target="#createNewProduct"
                            >Add New Product</a>
                        </div>
                    )
                    }

                    <ul className="nav justify-content-center latest-items-nav mt-4 mb-5">
                        <li className="nav-item mb-2">
                            <a className="nav-link active mb-0" aria-current="page" href="#">Butter Cake</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link mb-0" href="#">Buttermilk Cake</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link mb-0" href="#">Chiffon Cake</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link mb-0" href="#">Angel Food Cake</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link mb-0" href="#">Chiffon Cake</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link mb-0" href="#">Genoise Cake</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link mb-0" href="#">Baked Flour Cake</a>
                        </li>
                    </ul>

                </div>

                <div className="row my-4">

                    {products.map((product) => {
                        if (product.is_latest_items == 1)
                            return (
                                <ProductCard product={product} key={product.id}/>
                            )
                    })
                    }
                </div>

                <div className="text-center">
                    <Link to="/products" className="btn btn-primary btn-site">See All Items</Link>
                </div>

            </div>
        </div>
    )
}

export default LatestItems