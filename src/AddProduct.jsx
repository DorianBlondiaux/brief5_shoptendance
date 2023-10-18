import React, { useRef } from "react";
import { useDispatch} from "react-redux";
import { addProduct, getProducts } from "./actions/product.action";
import { useForm, FormProvider, useFormContext } from "react-hook-form"

function AddProduct(props) {

    const form = useRef();
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const categoriesRef = useRef(null);
    const basePriceRef = useRef(null);
    const salePriceRef = useRef(null);
    const imageRef = useRef(null);

    const { register } = useFormContext()
    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();

        const product = {
            "id": props.productsNumber + 1,
            "title": titleRef.current.value,
            "description": descriptionRef.current.value,
            "categories": categoriesRef.current.value,
            "basePrice": basePriceRef.current.value,
            "salePrice": salePriceRef.current.value,
            "imageUrl": imageRef.current.value
        };

        await dispatch(addProduct(product));
        dispatch(getProducts());
        form.current.reset();

        // axios.post('http://localhost:3000/products/', product)
        //     .then();

    }

    return (
        <div class="container">
            <form ref={form} onSubmit={(event) => handleSubmit(event)}>

                <div class="form-row">
                    <label for="title">Titre:</label>

                    <div class="input-data">
                        <input ref={titleRef} type="text" id="title" name="title" 
                            
                        />
                    </div>
                </div>

                <div class="form-row">

                    <label for="description">Description:</label>
                    <div class="input-data">
                        <input ref={descriptionRef} type="text" id="description" name="description" />
                    </div>
                </div>

                <div class="form-row">
                    <label for="categories">Categories:</label>
                    <div class="input-data">
                        <input ref={categoriesRef} type="text" id="categories" name="catgories" />
                    </div>
                </div>

                <div class="form-row">
                    <label for="basePrice">Prix de base:</label>
                    <div class="input-data">
                        <input ref={basePriceRef} type="text" id="basePrice" name="basePrice" />
                    </div>
                </div>

                <div class="form-row">
                    <label for="salePrice">Prix réduit:</label>
                    <div class="input-data">
                        <input ref={salePriceRef} type="text" id="salePrice" name="salePrice" />
                    </div>
                </div>

                <div class="form-row">
                    <label for="image">Image:</label>
                    <div class="input-data">
                        <input ref={imageRef} type="text" id="image" name="image" />
                    </div>
                </div>


                        <button type="submit">Ajouter le produit</button>
            </form>
        </div>

    );

}


export default AddProduct;