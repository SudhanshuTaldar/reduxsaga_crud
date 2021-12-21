import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import { addData,deleteData ,updateData} from '../Action/Action';
import {useSelector,useDispatch} from "react-redux"; 

const Home = () => {

    const [showmodal,setShowmodal] = useState(false)
    const [isUpdate,setIsUpdate] = useState(false)
    const [inputData,setInputData] = useState([])

    const dispatch = useDispatch();

    let userData = useSelector((state) => state.data);

    const inputEvent = (e) =>{

        const {name,value} = e.target;
        setInputData((prevData)=>{
             return {
                 ...prevData,
                 [name] : value,
             }
        })
    }

    const submithandler = (e) =>{
        e.preventDefault()

        if(isUpdate){
            dispatch(updateData(inputData))
            setIsUpdate(false)
        }else{
            inputData.id = new Date().getTime().toString()
            dispatch(addData(inputData))
        }
        setShowmodal(false)
        setInputData('')
    }

    const deleteuser = (id) =>{
        dispatch(deleteData(id))
    }

    const edituser = (data) => {
        setShowmodal(true)
        setInputData(data)
        setIsUpdate(true)
    }

    return (
        <div>
           <nav className="navbar navbar-dark bg-dark mb-4">
                <button className="btn btn-outline-success my-2 my-sm-0 fl float-left" onClick={()=>setShowmodal(true)}>Add Data</button>
            </nav>

            <Modal show={showmodal}>
                <Modal.Header>Data Form</Modal.Header>
                <Modal.Body>
        
                    <form className="mb-5" onSubmit={submithandler}>
                        <div>
                            <h4>Name</h4>
                            <input type="text" className="form-control"  name="name" value={inputData.name} placeholder="Enter Name" onChange={inputEvent} required />
                        </div>
                        <div>
                            <h4>Email</h4>
                            <input type="email" className="form-control" name="email" value={inputData.email} placeholder="Enter Email" onChange={inputEvent} required />
                        </div>
                        <div>
                            <h4>Password</h4>
                            <input type="password" className="form-control" name="password"  value={inputData.password} placeholder="Enter password" onChange={inputEvent} required readOnly={isUpdate} />
                        </div>

                        {
                            isUpdate
                            ?
                                <input type="submit" className="btn btn-success mt-3" name="Add" value="Update" />
                            :
                                <input type="submit" className="btn btn-success mt-3" name="Add" value="Add" />
                        }
                    </form>
                </Modal.Body>
            </Modal>

            <table className="table">
                <thead className="thead-dark">
                <tr>
                <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Edit</th>
                </tr>
                </thead>
                <tbody>
                {
                    userData.map((elem,index)=>{
                    return (
                        <>
                        <tr>
                            <th scope="row"  key={elem} >{index+1}</th>
                            <td>{elem.name}</td>
                            <td>{elem.email}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>deleteuser(elem.id)}>Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-warning" onClick={()=>edituser(elem)}>Edit</button>
                            </td>
                        </tr>
                        </>
                    )
                    })
                }
                </tbody>
          </table>

        </div>
    )
}

export default Home