import React, { useEffect, useState } from 'react'
import '../Adminpage/Admin.css'
// import register from '../Register/Register'
import { Link } from 'react-router-dom';
import axios from 'axios'
import logo1 from '../Adminpage/logo23.png'
// import ph1 from '../Adminpage/memo2.png'

function Admin() {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        axios.get(' http://localhost:6001/product/get')
            .then(res => setdata(res.data.data))

            .then(err => console.log(err));
    };

    const handleDelete = (_id) => {
        console.log(_id, "Product Code")
        axios.delete(`http://localhost:6001/product/deleted/${_id}`)
            .then((response) => {
                console.log(response.data.message);
                fetchData();
            })
            .catch((error) => {
                console.log(error)
            });


    }

    const setDataToStore = (Id, Name, Price, Description, Image) => {
        localStorage.setItem("Id", Id);
        localStorage.setItem("Name", Name);
        localStorage.setItem("Price", Price);
        localStorage.setItem("Description", Description);
        localStorage.setItem("Image", Image);
    }




    return (
        <div className='container-fluid'>
            <div className="row ttr">
                <div className="col-2 p-0">


                    <div class="sidebar">
                        <div className="div">
                            <img className='pic' src={logo1} alt="" /><h5 className='mert'>Kevell Guru</h5></div>

                        <i class="fa-solid mmm fa-users"></i>
                        <h5>Admin Page</h5>
                        <div class="menu-item eee">Dashboard</div>
                        <div class="menu-item">Page</div>
                        <div class="menu-item">Login</div>
                        <div class="menu-item">Library</div>
                        <div class="menu-item">User Details</div>
                        <Link to='/home'><button class="bty">Logout</button></Link>

                    </div>
                </div>
                <div className="col-10 p-0">

                    <nav class="navbar navbar-expand-sm navi">
                        <div class="container-fluid mmy1">

                            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button> */}
                            <div class="collapse navbar-collapse" id="mynavbar">
                                <ul class="navbar-nav me-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)">Dash Board</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link " href="javascript:void(0)">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link " href="javascript:void(0)">Details</a>
                                    </li>
                                </ul>
                                <div class="mmy">
                                    <input class="form-control nmn me-2" type="text" placeholder="Search" />
                                    <button class="btn1 btn-primary" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                
                    <div className="container">
                        <h5 className='mert1'>Dash Board....</h5><br />
                        <table id="storeList1" className='store table-light '>
                            <thead>
                                <tr className='border '>
                                    <th className='tdr'>ID</th>
                                    <th>Name</th>
                                    <th>Mobile Number</th>
                                    <th>Course Details</th>
                                    <th>photo</th>
                                    <th className='tdr1'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((user, index) => {
                                        console.log(user._id)
                                        return <tr key={index}>
<td>{user.Id}</td>
                                            <td>{user.Name}</td>
                                            
                                            <td>{user.Price}</td>
                                            <td>{user.Description}</td>
                                            <td>
                                                <img src={user.Image} alt={user.Name} style={{ width: '70px', height: '70px' }} />
                                            </td>
                                            <td className='d-flex justify-content-center align-items-center w-100 ' style={{ height: '120px' }} >
                                                {/* <i class="fa-solid fa-trash"></i>
                                <i class="fa-regular fa-pen-to-square"></i> */}
                                                <Link to={`/addproduct/${user._id}`}>

                                                    <button onClick={() => setDataToStore(user.Id, user.Name, user.Price, user.Description, user.Image)} type="submit" style={{ width: "50px", height: "40px" }} className="btn3 npm1 add me-3"><i className="fa-solid fa-pen"></i></button>
                                                </Link>
                                                <button onClick={() => { if (window.confirm("Are you sure to delete?")) { handleDelete(user._id) } }} type="submit" style={{ width: "50px", height: "40px" }} className="btn2 btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                                            </td>

                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Admin