import React, {useState, useEffect} from "react";
import {StaticImage} from "gatsby-plugin-image"
import firebaseApp from "../firebase";
import {Link} from "gatsby";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";
import {doc, getFirestore, collection, setDoc, getDoc, addDoc} from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";


// import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";


const auth = getAuth(firebaseApp);

const Header = (props) => {

    const db = getFirestore(firebaseApp);
    const [isAdmin, setIsAdmin] = useState(0);
    const [currentUser, setCurrentUser] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // const [products, setProducts] = useState([]);

    // const [refreshProducts, setRefreshProducts] = useState(0);

    // Create Product
    const storage = getStorage();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [is_collection, setIsCollection] = useState(null);
    const [is_top_rated, setIsTopRated] = useState(null);
    const [is_latest_items, setIsLatestItems] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState();
    // const [pId, setPId] = useState();

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
            setLoading(false)
        });


    }, [])

    const createProduct = (e) => {
        e.preventDefault();
        const storageRef = ref(storage, 'images/bmlh_' + Math.random() + '_product');
        // 'file' comes from the Blob or File API

        setIsLoading(true);

        uploadBytes(storageRef, image).then((snapshot) => {
            getDownloadURL(storageRef)
                .then((url) => {
                    try {
                        addDoc(collection(db, "products"), {
                            image: url,
                            name: name,
                            price: price,
                            description: description,
                            is_collection,
                            is_top_rated,
                            is_latest_items,
                            datetime: new Date().getTime(),
                        });

                        var modal = window.bootstrap.Modal.getOrCreateInstance(document.getElementById('createNewProduct'));
                        modal.hide()

                        document.dispatchEvent(new CustomEvent("onProductChange", {detail: null}));
                        // setRefreshProducts(Math.random)

                        e.target["image"].value = [];
                        setName('');
                        setPrice('');
                        setDescription('');
                        setIsCollection(null);
                        setIsLatestItems(null);
                        setIsTopRated(null);
                        setIsLoading(false);


                    } catch (error) {
                        console.log(error)
                    }
                })
        });
    };


    const handleRegister = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const {email, password} = e.target.elements;
        try {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    await setDoc(doc(db, "users", user.uid), {
                        email: user.email,
                        is_admin: 0,
                    });
                    window.location.reload();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // console.log("register error")
                    // console.log(errorCode)
                    // console.log(errorMessage)
                    document.getElementById('registerAccount').append("This email is already in use.")

                    setIsLoading(false);
                    // ..
                });
        } catch (error) {
            console.log(error)
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        try {
            signInWithEmailAndPassword(auth, email.value, password.value)

                .then(async (userCredential) => {
                    window.location.reload();
                    const user = userCredential.user;
                })
                .catch((error) => {
                    console.log(error)
                    document.getElementById('credentialNotMatch').append("Your email or password does not match our records")
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });

        } catch (error) {
            console.log(error)
        }
    };

    const [email, setEmail] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleForgotPassword = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const auth = getAuth();

        try {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    document.getElementById('emailSentVerification').append("Reset password email Sent to your email")
                    setEmail('');

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    console.log(error)
                    document.getElementById('emailNotExits').append("Email does not exist");
                    setIsLoading(false);
                    setEmail('');
                });
        } catch (error) {
            console.log(error)
        }
    };

    const handleLogout = (e) => {
        e.preventDefault();

        const auth = getAuth();

        try {
            signOut(auth).then(() => {
                window.location.reload();
            }).catch((error) => {
                // An error happened.
            });

        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div className="container-fluid bg-white shadow-sm py-1">
            <nav className="navbar navbar-expand-lg container">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <StaticImage src="../images/home/logo.svg"
                                     className="logo-size img-fluid" alt="Logo"/>
                    </Link>
                    <button className="navbar-toggler outline-none border-0" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto site-navbar">
                            <li className="nav-item mx-2">
                                <Link className="nav-link fw-500"
                                      activeClassName="active"
                                      aria-current="page"
                                      to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link fw-500"
                                      activeClassName="active"
                                      to="/about">About</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link fw-500"
                                      activeClassName="active"
                                      to="/work">Work</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link fw-500"
                                      activeClassName="active"
                                      to="/community">Community</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link fw-500"
                                      activeClassName="active"
                                      to="/contact">Contact</Link>
                            </li>

                        </ul>
                        {loading ? (
                            <>
                                Loading... <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            </>
                        ) : (
                            <>
                                {!currentUser && (
                                    <div className="d-flex">
                                        <button className="btn btn-primary me-2 px-4" type="submit"
                                                data-bs-toggle="modal" data-bs-target="#userLoginAccountModal"
                                        >Login
                                        </button>
                                        <button className="btn px-4 text-primary fw-400"
                                                data-bs-toggle="modal" data-bs-target="#userRegisterAccountModal"
                                                type="submit">User Register
                                        </button>
                                    </div>
                                )}

                                {currentUser && (
                                    <div className="dropdown">
                                        <a className="btn btn-outline-primary dropdown-toggle" href="#" role="button"
                                           id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            User Account
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-start"
                                            aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item" href="#!"
                                            >{loggedUser.email}</a>
                                            </li>
                                            <form className="row" onSubmit={handleLogout}>
                                                <li>
                                                    <button type="submit" className="dropdown-item"
                                                        // onClick={() => auth.signOut()}
                                                    >
                                                        Logout
                                                    </button>
                                                </li>
                                            </form>

                                        </ul>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/*Register Modal*/}

                    <div className="modal fade" id="userRegisterAccountModal"
                         data-bs-keyboard="false" tabIndex="-1"
                         aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header border-0 pb-0">
                                    <button type="button" className="btn-close fs-12 outline-none"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>

                                </div>
                                <h2 className="modal-title font-family-rancho text-center text-primary"
                                    id="staticBackdropLabel">Register</h2>
                                <div className="modal-body">
                                    <form className="row" onSubmit={handleRegister}>

                                        <p className="text-center text-danger" id="registerAccount"></p>


                                        <div className="form-group col-12 mb-3">
                                            <label className="form-label">User Email:</label>
                                            <input type="text" name="email"
                                                   disabled={isLoading}
                                                   placeholder="Email" required
                                                   className="form-control"/>
                                        </div>

                                        <div className="form-group col-12 mb-3">
                                            <label className="form-label">User Password:</label>
                                            <input type="password"
                                                   disabled={isLoading}
                                                   name="password" placeholder="Password" required
                                                   className="form-control"/>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <button type="submit"
                                                    disabled={isLoading}
                                                    className="btn btn-primary w-100">Register
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*Login Modal*/}

                    <div className="modal fade" id="userLoginAccountModal"
                         data-bs-keyboard="false" tabIndex="-1"
                         aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header border-0 pb-0">
                                    <button type="button" className="btn-close fs-12 outline-none"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>

                                </div>
                                <h2 className="modal-title font-family-rancho text-center text-primary"
                                    id="staticBackdropLabel">Login</h2>
                                <div className="modal-body">

                                    <form className="row" onSubmit={handleLogin}>
                                        <div className="form-group col-12 mb-2 text-start">
                                            <label className="form-label">User Email:</label>
                                            <input type="text" name="email" placeholder="Email" required
                                                   className="form-control mb-1"/>
                                            <p className="text-center text-danger p-text-start fs-12 mb-0"
                                               id="credentialNotMatch"></p>
                                        </div>

                                        <div className="form-group col-12 mb-3">
                                            <label className="form-label">User Password:</label>
                                            <input type="password" name="password" placeholder="Password" required
                                                   className="form-control"/>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <button type="submit" className="btn btn-primary w-100">Login</button>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <button type="button"
                                                    data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"
                                                    className="btn btn-link w-100">Forgot your password?
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*Forgot password modal*/}

                    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true"
                         aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header border-0 pb-0">
                                    <button type="button" className="btn-close fs-12 outline-none"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>

                                </div>
                                <h2 className="modal-title font-family-rancho text-center text-primary"
                                    id="staticBackdropLabel">Password Reset</h2>
                                <div className="modal-body">

                                    <p className="text-center text-success" id="emailSentVerification"></p>
                                    <form className="row" onSubmit={handleForgotPassword}>
                                        <div className="form-group col-12 mb-3">
                                            <label className="form-label">Enter your email:</label>
                                            <input type="text" name="email" placeholder="Email" required
                                                   value={email}
                                                   disabled={isLoading}
                                                   onChange={(e) => setEmail(e.target.value)}
                                                   className="form-control"/>
                                            <p className="text-center text-danger fs-13 p-text-start mt-1"
                                               id="emailNotExits"></p>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <button type="submit"
                                                    disabled={isLoading}
                                                    className="btn btn-primary w-100">Reset Password
                                            </button>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <button type="button"
                                                    data-bs-target="#userLoginAccountModal" data-bs-toggle="modal"
                                                    className="btn btn-link w-100">Back to login
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/*Create New product Modal*/}

                    <div className="modal fade" id="createNewProduct"
                         data-bs-keyboard="false" tabIndex="-1"
                         aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header border-0 pb-0">
                                    <button type="button" className="btn-close fs-12 outline-none"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>

                                </div>
                                <h2 className="modal-title font-family-rancho text-center"
                                    id="staticBackdropLabel">Add New <span className="text-primary">Product</span>
                                </h2>
                                <div className="modal-body">
                                    <form className="row" id="createProduct" onSubmit={createProduct}>
                                        <div className="form-group col-12 mb-3">
                                            <label className="form-label fs-13 fw-500">Product Image:</label>
                                            <input type="file" name="image"
                                                   required
                                                   onChange={(e) => setImage(e.target.files[0])}
                                                   className="form-control"/>
                                        </div>

                                        <div className="form-group col-12 mb-3">
                                            <label className="form-label fs-13 fw-500">Product Name:</label>
                                            <input type="text" name="name" placeholder="Name" required
                                                   value={name}
                                                   disabled={isLoading}
                                                   onChange={(e) => setName(e.target.value)}
                                                   className="form-control"/>
                                        </div>

                                        <div className="form-group col-12 mb-3">
                                            <label className="form-label fs-13 fw-500">Product Price:</label>
                                            <input type="number" name="price" placeholder="Price" required
                                                   value={price}
                                                   disabled={isLoading}
                                                   onChange={(e) => setPrice(e.target.value)}
                                                   className="form-control"/>
                                        </div>

                                        <div className="form-group col-12 mb-3">
                                            <label className="form-label fs-13 fw-500">Product Description:</label>
                                            <textarea name="description" placeholder="Description" required rows="4"
                                                      value={description}
                                                      disabled={isLoading}
                                                      onChange={(e) => setDescription(e.target.value)}
                                                      className="form-control"/>
                                        </div>

                                        <div className="form-group col-12 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"
                                                       name="is_collection"
                                                       value="1"
                                                       disabled={isLoading}
                                                       onChange={(e) => setIsCollection(e.target.checked)}
                                                       id="is_collection"/>
                                                <label className="form-check-label fs-13 fw-500"
                                                       htmlFor="is_collection">
                                                    Our Trending Collection
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group col-12 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"
                                                       name="is_top_rated"
                                                       value="1"
                                                       disabled={isLoading}
                                                       onChange={(e) => setIsTopRated(e.target.checked)}
                                                       id="is_top_rated"
                                                />
                                                <label className="form-check-label fs-13 fw-500"
                                                       htmlFor="is_top_rated">
                                                    Our Top Rated Products
                                                </label>
                                            </div>
                                        </div>


                                        <div className="form-group col-12 mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"
                                                       name="is_latest_items"
                                                       value="1"
                                                       disabled={isLoading}
                                                       onChange={(e) => setIsLatestItems(e.target.checked)}
                                                       id="is_latest_items"
                                                />
                                                <label className="form-check-label fs-13 fw-500"
                                                       htmlFor="is_latest_items">
                                                    Our Latest Items
                                                </label>
                                            </div>
                                        </div>


                                        <div className="col-12 mb-3">
                                            <button type="submit" className="btn btn-primary w-100"
                                                    disabled={isLoading}
                                            >Save
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header