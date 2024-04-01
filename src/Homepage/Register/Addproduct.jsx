import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import './Dashboard.css'
import '../Register/Register.css'
function AddProduct() {

  const [Id, setId] = useState('');
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [Description, setDesc] = useState('');
  const [Image, setImage] = useState('');
  const [imageis, setimageis] = useState("true")

  const _id = useParams();
  // console.log(_id, "******")
  const uID = _id._id;
  console.log(uID, "Unique ID");

  const navigate = useNavigate();

  const onChangeFile = (e) => {
    setImage(e.target.files[0])
    setimageis("false")
  }

  useEffect(() => {
    setId(localStorage.getItem('Id'));
    // setUID(localStorage.getItem('_id'));
    setName(localStorage.getItem('Name'));
    setPrice(localStorage.getItem('Price'));
    setDesc(localStorage.getItem('Description'));
    setImage(localStorage.getItem('Image'))
  }, [])

  const handleUpdate = async (event) => {
    event.preventDefault();

    // const formData = new FormData();
    // formData.append("Id", Id);
    // formData.append("_id", _id);
    // formData.append("Name", Name);
    // formData.append("Price", Price);
    // formData.append("Description", Description);
    // formData.append("Image", Image);
    console.log(localStorage.getItem('Image'), Image, "allllllllllllllllllllllllllll")
    if (localStorage.getItem('Image') === Image) {
      // console.log("one")
      var a = "true"
      await axios.put(`http://localhost:6001/product/update/`, {
        uID,
        Id,
        Name,
        Price,
        Description,
        a
      },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
        .then((response) => {
          console.log(response.data, "Updated data");
          navigate('/admin')
        })
        .catch((data) => {
          console.log(data.response.data)
        });
    }
    else {
      // console.log("two")
      var a = "false"
      await axios.put(`http://localhost:6001/product/update/`, {
        uID,
        Id,
        Name,
        Price,
        Description,
        Image,
        a
      },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
        .then((response) => {
          console.log(response.data, "Updated data");
          navigate("/admin")
        })
        .catch((data) => {
          console.log(data.response.data)
        });
    }
  }

  return (
    <div className="container-fluid Mainform1">
    <div className='back'>
     
      
      <div className='container  bg1'>
        <h1 className='subhead'>Update Form</h1>
        
            <form onSubmit={handleUpdate} encType='multipart/form-data'>
              
 <label htmlFor="productId">ID :</label>
        <input type="text" id="productId" name="productId" value={Id} onChange={(e) => setId(e.target.value)} required />

        <label htmlFor="productName">Name :</label>
        <input type="text" id="productName" name="productName" value={Name} onChange={(e) => setName(e.target.value)} required />
       
        <label htmlFor="productPrice">Phone Number :</label>
        <input type="text" id="productPrice" name="productPrice" value={Price} onChange={(e) => setPrice(e.target.value)} required />
        <label htmlFor="description">Cource Deteils :</label>
        <textarea id="description" name="description" value={Description} onChange={(e) => setDesc(e.target.value)} rows="4" required></textarea>
        <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example2">Image</label>
                <input filename="Image" onChange={onChangeFile}  type="file" accept=".png, .jpg, .jpeg" id="form4Example2" className="form-control" />
              </div>
<div className='d-flex justify-content-center'>
              <button type="submit" className="btn npm add me-3">update</button>
              <button onClick={() => navigate(-1)} type="button" className="btn npm btn-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
   
  )
}

export default AddProduct



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import '../Register/Register.css'

// function AddProduct() {
//   const [Id, setId] = useState('');
//   const [Name, setName] = useState('');
//   const [Price, setPrice] = useState('');
//   const [Description, setDesc] = useState('');
//   const [Image, setImage] = useState('');
//   const [imageis, setimageis] = useState(true); // Changed "true" to true

//   const { _id } = useParams();
//   const uID = _id._id;
//   const navigate = useNavigate();

//   useEffect(() => {
//     setId(localStorage.getItem('Id'));
//     setName(localStorage.getItem('Name'));
//     setPrice(localStorage.getItem('Price'));
//     setDesc(localStorage.getItem('Description'));
//     setImage(localStorage.getItem('Image'));
//   }, []);

//   const onChangeFile = (e) => {
//     setImage(e.target.files[0]);
//     setimageis(false); 
//   };

//   const handleUpdate = async (event) => {
//     event.preventDefault();

//     try {
//       if (localStorage.getItem('Image') === Image) {
//         await axios.put(`http://localhost:6001/product/update/`, {
//           uID,
//           Id,
//           Name,
//           Price,
//           Description,
//           a: "true"
//         });
//       } else {
//         const formData = new FormData();
//         formData.append("uID", uID);
//         formData.append("Id", Id);
//         formData.append("Name", Name);
//         formData.append("Price", Price);
//         formData.append("Description", Description);
//         formData.append("Image", Image);


//         await axios.put(`http://localhost:6001/product/update/`, formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           }
//         });
//       }
      
//       navigate('/admin');
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   return (
//     <div className='back'>
//       <div className='container'>
//         <h1 className='subhead'>Product Form</h1>
//         <div className='row'>
//           <div className='col-lg-6 mx-auto main-div'>
//             <form onSubmit={handleUpdate} encType='multipart/form-data'>
//               <div className="mb-3">
//                 <label className="form-label" htmlFor="form4Example1">Product ID</label>
//                 <input value={Id} onChange={(e) => setId(e.target.value)} type="text" id="form4Example1" className="form-control" />
//               </div>

//               <div className="form-outline mb-4">
//                 <label className="form-label" htmlFor="form4Example2">Product Name</label>
//                 <input value={Name} onChange={(e) => setName(e.target.value)} type="text" id="form4Example2" className="form-control" />
//               </div>

//               <div className="form-outline mb-4">
//                 <label className="form-label" htmlFor="form4Example2">Product Price</label>
//                 <input value={Price} onChange={(e) => setPrice(e.target.value)} type="text" id="form4Example2" className="form-control" />
//               </div>

//               <div className="form-outline mb-4">
//                 <label className="form-label" htmlFor="form4Example2">Product Description</label>
//                 <textarea value={Description} onChange={(e) => setDesc(e.target.value)} className="form-control" id="form4Example3" rows="4"></textarea>
//               </div>

//               <div className="form-outline mb-4">
//                 <label className="form-label" htmlFor="form4Example2">Product Image</label>
//                 <input filename="Image" onChange={onChangeFile} type="file" accept=".png, .jpg, .jpeg" id="form4Example2" className="form-control" />

//                 {imageis ? <img src={`${Image}`} alt='Product_Image' className='img-responsive' style={{ width: "100px", height: "100px", marginTop: "10px" }} />
//                   : null /* changed "" to null */}
//               </div>

//               <button type="submit" className="btn npm add me-3">Update</button>
//               <button onClick={() => navigate(-1)} type="button" className="btn btn-secondary">Cancel</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddProduct;





