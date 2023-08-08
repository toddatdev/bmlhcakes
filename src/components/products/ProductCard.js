import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {useEffect, useState} from "react";
import {deleteDoc, doc, getDoc, getFirestore, updateDoc} from "firebase/firestore";
import firebaseApp from "../../firebase";

import {getAuth, onAuthStateChanged} from "firebase/auth";

const auth = getAuth(firebaseApp);

const ProductCard = ({product}) => {

    const db = getFirestore(firebaseApp);
    const [isAdmin, setIsAdmin] = useState(0);
    const [currentUser, setCurrentUser] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);

    const [products, setProducts] = useState([]);
    const [refreshProducts, setRefreshProducts] = useState(0);

    // Create Product
    const storage = getStorage();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [is_collection, setIsCollection] = useState(null);
    const [is_top_rated, setIsTopRated] = useState(null);
    const [is_latest_items, setIsLatestItems] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
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
        });
    }, [])


    const submitProductToFirebase = (productID, url, productName, productPrice, productDescription, is_product_collection, isTopRated, isLatestItem, dateTime) => {
        try {
            const docRef = doc(db, "products", productID);
            updateDoc(docRef, {
                image: url,
                name: name ? name : productName,
                price: price ? price : productPrice,
                description: description ? description : productDescription,
                is_collection: is_collection !== null ? is_collection : is_product_collection,
                is_top_rated: is_top_rated !== null ? is_top_rated : isTopRated,
                is_latest_items: is_latest_items !== null ? is_latest_items : isLatestItem,
                datetime: dateTime ?? dateTime,
            });

            var hideModal = window.bootstrap.Modal.getOrCreateInstance(document.getElementById("updateProduct" + productID + "Modal"));
            hideModal.hide()

            document.dispatchEvent(new CustomEvent("onProductChange", { detail: null }));
            // setRefreshProducts(Math.random)
            setIsLoading(false);

        } catch (error) {
            console.log(error)
        }
    }

    const updateProduct = (e, productID, productImage, productName, productPrice, productDescription, is_product_collection, isTopRated, isLatestItem, dateTime) => {
        e.preventDefault();
        const storageRef = ref(storage, 'images/bmlh_' + Math.random() + '_product');
        setIsLoading(true);

        if (image) {
            uploadBytes(storageRef, image).then((snapshot) => {
                getDownloadURL(storageRef)
                    .then((url) => {
                        submitProductToFirebase(productID, url)
                    })
            });
        } else {
            submitProductToFirebase(productID, productImage, productName, productPrice, productDescription, is_product_collection, isTopRated, isLatestItem, dateTime)
        }
    };

    // Delete Product
    const deleteProduct = async (productID) => {

        setIsLoading(true);
        await deleteDoc(doc(db, "products", productID));
        var deleteModal = window.bootstrap.Modal.getOrCreateInstance(document.getElementById("deleteConfirmation" + productID + "Modal"));
        deleteModal.hide()
        document.dispatchEvent(new CustomEvent("onProductChange", { detail: null }));
        // setRefreshProducts(Math.random)
        setIsLoading(false);
    }



    return (
        <div className="col-12 col-md-6 col-lg-3 mb-3" key={product.id}>
            <div className="card text-center position-relative">
                {isAdmin !== 0 && (
                    <div className="position-absolute end-0 p-2">
                        <div className="">
                            <a href="#!"
                                // onClick={()=> deleteProduct(product.id)}
                               data-bs-toggle="modal"
                               data-bs-target={"#updateProduct" + product.id + "Modal"}
                               className="bg-success shadow-lg p-2 rounded-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     fill="currentColor"
                                     className="bi bi-pencil-square text-white fw-bold"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd"
                                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            </a>
                            <a href="#!"
                                // onClick={()=> deleteProduct(product.id)}
                               data-bs-toggle="modal"
                               data-bs-target={"#deleteConfirmation" + product.id + "Modal"}
                               className="bg-danger shadow-lg ms-2 p-2 rounded-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     fill="currentColor"
                                     className="bi bi-trash text-white fw-bold"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                )
                }

                <button type="button"
                        className="border-0"
                        data-bs-toggle="modal"
                        data-bs-target={"#showProductImage" + product.id + "Modal"}>
                    <img src={product.image}
                         className="rounded-top img-fluid h-card-img" alt="A image title"
                         placeholder="blurred"/>
                </button>
                {/*<img src="../../images/home/collection/collection_img1.png"*/}
                {/*             className="rounded-top img-fluid" alt="A image title"*/}
                {/*             placeholder="blurred"/>*/}
                <div className="card-body">
                    <p className="mb-0">{product.name}</p>

                    <p className="p-site ">{product.description ?? ''}</p>

                    <p className="fs-12 text-light-gray-400">Starting: <span
                        className="text-primary fs-16 fw-bold ms-1"> ${product.price}</span></p>
                    <div className="row mt-3">
                        <div className="col-9 pe-0">
                            <a href="#!" className="btn btn-primary-light w-100 rounded-1">Add
                                to Cart</a>
                        </div>
                        <div className="col-3 ps-0 text-end">
                            <a href="#!" className="btn border rounded-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                     fill="currentColor" className="bi bi-suit-heart"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Show Image Modal*/}

            <div className="modal fade" id={"showProductImage" + product.id + "Modal"}
                 data-bs-keyboard="false" tabIndex="-1"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <img src={product.image}
                             className="img-fluid rounded max-hw-400"
                             alt="A image title"
                             placeholder="blurred"/>
                    </div>
                </div>
            </div>

            {/*Edit Modal*/}

            <div className="modal fade" id={"updateProduct" + product.id + "Modal"}
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
                            id="staticBackdropLabel">Update <span
                            className="text-primary">{product.name} </span> Product
                        </h2>
                        <div className="modal-body">
                            <form className="row" id="updateProduct"
                                  onSubmit={(e) => updateProduct(e, product.id, product.image, product.name, product.price, product.description, product.is_collection, product.is_top_rated, product.is_latest_items, product.datetime)}
                            >
                                {/*<input type="text" className="form-control mb-3" name="pId"*/}
                                {/*       onChange={(e) => setPId(e.target.value)}*/}
                                {/*       value={product.id}*/}
                                {/*/>*/}

                                <div className="form-group col-12 col-lg-8 mb-3">
                                    <label className="form-label fs-13 fw-500">Product
                                        Image:</label>
                                    <input type="file" name="image"
                                           onChange={(e) => setImage(e.target.files[0])}
                                           className="form-control"/>
                                </div>

                                <div
                                    className="form-group col-12 col-lg-4 text-lg-end mb-3 align-self-center">
                                    <img src={product.image}
                                         className="img-fluid" width="100" height="80"
                                         alt="A image title"
                                         placeholder="blurred"/>
                                </div>

                                <div className="form-group col-12 mb-3">
                                    <label className="form-label fs-13 fw-500">Product
                                        Name:</label>
                                    <input type="text" name="name" placeholder="Name" required
                                           disabled={isLoading}
                                           defaultValue={product.name}
                                           onChange={(e) => setName(e.target.value)}
                                           className="form-control"/>
                                </div>

                                <div className="form-group col-12 mb-3">
                                    <label className="form-label fs-13 fw-500">Product
                                        Price:</label>
                                    <input type="number" name="price" placeholder="Price"
                                           required
                                           step="any"
                                           disabled={isLoading}
                                           defaultValue={product.price}
                                           onChange={(e) => setPrice(e.target.value)}
                                           className="form-control"/>
                                </div>

                                <div className="form-group col-12 mb-3">
                                    <label className="form-label fs-13 fw-500">Product
                                        Description:</label>
                                    <textarea name="description" placeholder="Description"
                                              required rows="4"
                                              defaultValue={product.description}
                                              disabled={isLoading}
                                              onChange={(e) => setDescription(e.target.value)}
                                              className="form-control"></textarea>
                                </div>


                                <div className="form-group col-12 mb-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               name="is_collection"
                                               value="1"
                                               disabled={isLoading}
                                               onChange={(e) => setIsCollection(e.target.checked)}
                                               id="is_collection"
                                            // checked={product.is_collection == 1}
                                               defaultChecked={product.is_collection}
                                        />
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
                                            // checked={product.is_top_rated == 1}
                                               defaultChecked={product.is_top_rated}
                                        />
                                        <label className="form-check-label fs-13 fw-500"
                                               htmlFor="is_top_rated">
                                            Our Top Rated Products
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group col-12 mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               name="is_latest_items"
                                               value="1"
                                               disabled={isLoading}
                                               onChange={(e) => setIsLatestItems(e.target.checked)}
                                               id="is_latest_items"
                                            // checked={product.is_latest_items == 1}
                                               defaultChecked={product.is_latest_items}
                                        />
                                        <label className="form-check-label fs-13 fw-500"
                                               htmlFor="is_latest_items">
                                            Our Latest Items
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <button type="submit"
                                        // onClick={()=> updateProduct(product.id)}
                                            disabled={isLoading}
                                            className="btn btn-primary w-100">Update
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>


            {/*Delete Modal*/}
            <div className="modal fade deleteModal"
                 id={"deleteConfirmation" + product.id + "Modal"} tabIndex="-1"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-0">
                            <button type="button" className="btn-close fs-12 outline-none"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"></button>

                        </div>
                        <h2 className="modal-title font-family-rancho text-center"
                            id="staticBackdropLabel">Delete <span
                            className="text-primary">{product.name}</span>
                        </h2>
                        <div className="modal-body text-center">
                            <div>

                            </div>

                            <h5 className="fw-600 text-center my-2">Are you sure?</h5>
                            <p className="fw-400 text-light-gray-400 fs-15">You would not be
                                able to recover this!</p>
                            <div className="btn-group gap-3 my-2 pb-3">
                                <button type="button"
                                        className="btn btn-dark fw-400 text-uppercase fs-13 mb-2 mb-lg-0 rounded py-2 px-4"
                                        data-bs-dismiss="modal">Cancel
                                </button>
                                <button type="button"
                                        onClick={() => deleteProduct(product.id)}
                                        className="btn btn-primary fw-400 text-uppercase
                                                                 fs-13 mb-2 mb-lg-0 rounded py-2 px-4"
                                        disabled={isLoading}
                                >Delete
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard