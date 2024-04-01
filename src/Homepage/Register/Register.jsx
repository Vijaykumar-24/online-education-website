import React, { useState } from 'react';
import '../Register/Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar'

function Register() {
  const [Id, setId] = useState('');
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [Description, setDesc] = useState('');
  const [Image, setImage] = useState('');

  const navigate = useNavigate();

  const onChangeFile = (e) => {
    setImage(e.target.files[0])
  }
  const resetFields = () => {
    setId('');
    setName('');
    setPrice('');
    setDesc('');
    setImage(null);
    document.getElementById('form4Example2').value = '';
  };
 
  const handlesubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(formData,"****");
    formData.append("Id", Id);
    formData.append("Name", Name);
    formData.append("Price", Price);
    formData.append("Description", Description);
    formData.append("Image", Image);
    
    // await axios.update("http://localhost:6001/product/update/", formData,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   }
    // })
    // .then((response) => {
    //   console.log(response.data, "Posted data");
    //   navigate("/admin")
    // })
    // .catch((data) => {
    //   console.log(data.response.data)
    // });

    
    await axios.post("http://localhost:6001/product/create", formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      .then((response) => {
        console.log(response.data, "Posted data");
        navigate("/admin")
      })
      .catch((data) => {
        console.log(data.response.data)
      });
      
  }

 

  // useEffect(() => {

  //   setId(localStorage.getItem('Id'));
  //   // setUID(localStorage.getItem('_id'));
  //   setName(localStorage.getItem('Name'));
  //   setPrice(localStorage.getItem('Price'));
  //   setDesc(localStorage.getItem('Description'));
  //   setImage(localStorage.getItem('Image'))
  // }, [])

  return (
    <div className="Container-fluid Mainform">
    <div className="container bg">
      <h2>Details....</h2>
      <form onSubmit={handlesubmit } encType='multipart/form-data'>
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
                <input filename="Image" onChange={onChangeFile}  type="file" accept=".png, .jpg, .jpeg" id="form4Example2" className="form-control " />
              </div>
              <div className='d-flex justify-content-center'>
              <button type="submit"  className="btn npm12 add me-3">Save</button>
              <button onClick={() => { resetFields(); }} type="button" className="btn npm12 btn-secondary">Reset</button>
              {/* <button type="button" onClick={() => { resetFields(); navigate(); }} className="btn btn-secondary">Cancel</button> */}

              </div>
      </form>
      {/* <div className="submit-message ultra-animation">Form submitted successfully!</div> */}
    </div>
    </div>
    
  );
}

export default Register;
