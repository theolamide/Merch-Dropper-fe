// import React, {useState} from "react"
// import { connect } from "react-redux"
// import { addProduct } from "../../store/actions"



// function AddProductToMerch () {
//     const [product, setProduct] = useState({
//         productName:"",
//         price: 0,
//         description:""
//     });
//     const handleChange = (event) => {
//         event.preventDefault();
//         setProduct({
//           ...product,
//           [event.target.name]: event.target.value
//         })
//       }
    
   

//     return (
//         <div>
//             <form onSubmit={callSignUp}>
//                 <input
//                     type="text"
//                     placeholder="Product Name"
//                     name="productName"
//                     value={productName}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="decimal"
//                     placeholder="Price"
//                     name="price"
//                     value={price}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Description"
//                     name="description"
//                     value={description}
//                     onChange={handleChange}
//                 />
//                 <button type="submit">Add Product</button>
//             </form>
//         </div>
//     )
// }



// const mapStateToProps = (state) => {
//     let product = state.ProductReducers;
  
//     return {
//       isFetching: product.isFetching,
//       error: product.error,
//     };
//   };
  
//   export default connect(mapStateToProps, { addProduct })(AddProductToMerch);
  