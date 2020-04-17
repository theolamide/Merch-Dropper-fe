import React, {useState} from "react"
import { connect } from "react-redux"
import { addProduct } from "../../store/actions"



function AddProductToMerch () {
    const [product, setProduct] = useState({
        productName:"",
        price:"",
        description:""
    });

    const handleChange = (event) => {
        event.preventDefault();
        setProduct({
          ...product,
          [event.target.name]: event.target.value
        })
      }
   

      const handleSubmit = (event) => {
        props.login(credentials);
        setTimeout(() => {
          props.history.push('/dashboard');
        }, 800)
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    className={classes.textField}
                    label="Product Name"
                    name="productName"
                    value={productName}
                    onChange={handleChange}
                />
                <Input
                    className={classes.textField}
                    label="Price"
                    name="price"
                    value={price}
                    onChange={handleChange}
                />
                <Input
                    className={classes.textField}
                    label="Description"
                    name="description"
                    value={description}
                    onChange={handleChange}
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}



const mapStateToProps = (state) => {
    let product = state.ProductReducers;
  
    return {
      isFetching: product.isFetching,
      error: product.error,
    };
  };
  
  export default connect(mapStateToProps, { addProduct })(AddProductToMerch);
  