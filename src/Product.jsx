import { useState, useRef, React } from "react";
import { useDispatch } from "react-redux";
import { editProduct, getProducts, deleteProduct } from "./actions/product.action";

function Product(props) {

  const [isEdit, setisEdit] = useState(false);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoriesRef = useRef(null);
  const basePriceRef = useRef(null);
  const salePriceRef = useRef(null);
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  async function toggleEdit() {
    //Save 
    if (isEdit) {
      const product = {
        "_id": props._id,
        "title": titleRef.current.value,
        "description": descriptionRef.current.value,
        "categories": categoriesRef.current.value,
        "basePrice": Number(basePriceRef.current.value),
        "salePrice": Number(salePriceRef.current.value),
        "imageUrl": imageRef.current.value
      }
      await dispatch(editProduct(product));
      dispatch(getProducts());
    };

    const isEdit2 = !isEdit;
    setisEdit(isEdit2)
  }

  async function deleteProd(){
    await dispatch(deleteProduct(props._id));
      dispatch(getProducts());
  }

  return (
    <article>
      <div className="article-wrapper">
        <figure>
        <img src={props.imageUrl} alt="" />
        </figure>
        <div className="article-body">
          <div>
          {isEdit ? <div className="card-content">Titre:<input ref={titleRef} defaultValue={props.title}></input></div> : <h4 className="card-content">{props.title}</h4>}
          </div>
          <div>
          {isEdit ? <div className="card-content">Description: <input ref={descriptionRef} defaultValue={props.description}></input></div> : props.description}
          </div>
          <div className="card-content">Catégorie: {isEdit ? <input ref={categoriesRef} defaultValue={props.categories}></input> : props.categories}</div>
          <div className="card-content">Prix: {isEdit ? <input ref={basePriceRef} defaultValue={props.basePrice}></input> : props.basePrice}</div>
          <div className="card-content">Prix réduit: {isEdit ? <input ref={salePriceRef} defaultValue={props.salePrice}></input> : props.salePrice}</div>
          <div>
          {isEdit ? <div className="card-content">Url Image: <input ref={imageRef} defaultValue={props.imageUrl}></input></div> : "" }
          </div>
          <div className="buttons"><button className="edit" onClick={() => toggleEdit()}>Editer</button><button className="delete" onClick={() => deleteProd()}>Supprimer</button></div>
        </div>
      </div>
    </article>
  );

}


export default Product;