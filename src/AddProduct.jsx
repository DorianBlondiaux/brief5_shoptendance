import React, { useRef } from "react";
import { useDispatch} from "react-redux";
import { addProduct, getProducts } from "./actions/product.action";

function AddProduct(props) {

    const form = useRef();
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const categoriesRef = useRef(null);
    const basePriceRef = useRef(null);
    const salePriceRef = useRef(null);
    const imageRef = useRef(null);

    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();

        const product = {
            "title": titleRef.current.value,
            "description": descriptionRef.current.value,
            "categories": categoriesRef.current.value,
            "basePrice": Number(basePriceRef.current.value),
            "salePrice": Number(salePriceRef.current.value),
            "imageUrl": imageRef.current.value
        };

        await dispatch(addProduct(product));
        dispatch(getProducts());
        form.current.reset();

        // axios.post('http://localhost:3000/products/', product)
        //     .then();

    }

    return (
        <div className="container">
            <form ref={form} onSubmit={(event) => handleSubmit(event)}>

                <div className="form-row">
                    <label htmlFor="title">Titre:</label>

                    <div className="input-data">
                        <input ref={titleRef} type="text" id="title" name="title"/>
                    </div>
                </div>

                <div className="form-row">

                    <label htmlFor="description">Description:</label>
                    <div className="input-data">
                        <input ref={descriptionRef} type="text" id="description" name="description" />
                    </div>
                </div>

                <div className="form-row">
                    <label htmlFor="categories">Categories:</label>
                    <div className="input-data">
                        <input ref={categoriesRef} type="text" id="categories" name="catgories" />
                    </div>
                </div>

                <div className="form-row">
                    <label htmlFor="basePrice">Prix de base:</label>
                    <div className="input-data">
                        <input ref={basePriceRef} type="text" id="basePrice" name="basePrice" />
                    </div>
                </div>

                <div className="form-row">
                    <label htmlFor="salePrice">Prix réduit:</label>
                    <div className="input-data">
                        <input ref={salePriceRef} type="text" id="salePrice" name="salePrice" />
                    </div>
                </div>

                <div className="form-row">
                    <label htmlFor="image">Image:</label>
                    <div className="input-data">
                        <input ref={imageRef} type="text" id="image" name="image" />
                    </div>
                </div>


                        <button className="addProduct" type="submit">Ajouter le produit</button>
            </form>
        </div>

    );

}


export default AddProduct;