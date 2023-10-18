import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProducts } from "./actions/product.action";

function AddProduct(props) {

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const categoriesRef = useRef(null);
    const basePriceRef = useRef(null);
    const salePriceRef = useRef(null);
    const imageRef = useRef(null);

    const product = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();

    async function handleSubmit(event) {
        const product = { "id": props.productsNumber+1,
        "title": titleRef.current.value,
        "description": descriptionRef.current.value,
        "categories": categoriesRef.current.value,
        "basePrice": basePriceRef.current.value,
        "salePrice": salePriceRef.current.value,
        "imageUrl": imageRef.current.value };

        await dispatch(addProduct(product));
        dispatch(getProducts());

    // axios.post('http://localhost:3000/products/', product)
    //     .then();
    
        event.preventDefault();
      }

    return (
        <form onSubmit={handleSubmit}>
            <label for="title">Titre:</label>
            <input ref={titleRef} type="text" id="title" name="title" />
            <label for="description">Description:</label>
            <input ref={descriptionRef} type="text" id="description" name="description" />
            <label for="categories">Categories:</label>
            <input ref={categoriesRef} type="text" id="categories" name="catgories" />
            <label for="basePrice">Prix de base:</label>
            <input ref={basePriceRef} type="text" id="basePrice" name="basePrice" />
            <label for="salePrice">¨Prix réduit:</label>
            <input ref={salePriceRef} type="text" id="salePrice" name="salePrice" />
            <label for="image">Image:</label>
            <input ref={imageRef} type="text" id="image" name="image" />
            <button type="submit">Ajouter le produit</button>
        </form>

    );

}


export default AddProduct;