
import './App.css'
import { Data } from './Data'
import React,{useEffect,useState} from 'react'


function App() {
const [data,setData]=useState([]);

useEffect(()=>{
  setData(Data)
},[]);

const handleEdit=(id)=>{
  //alert(id);
}

const handleDelete=(id)=>{
 // alert(id);
 if(id>0)
 {
  if(window.confirm("are you shure to delete "));
  const dt=data.filter(item=>item.id!==id);
  setData(dt);
 }
}


  return (
    <div className='app'>
      


      <div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>sr.no</td>
            <td>id</td>
            <td>firstname</td>
            <td>lastname</td>
            <td>age</td>
            <td>actions</td>
          </tr>
        </thead>

      
    <tbody>
      {
        data.map((item,index)=>{
          return(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastname}</td>
              <td>{item.age}</td>

              <td>
                <button className='btn btn-primary'  onClick={()=>handleEdit(item.id)}>edit</button>


                <button className='btn btn-danger' onClick={()=>handleDelete(item.id) }>delete</button>
              </td>

            </tr>
          )

        })
      }
    </tbody>
      </table>
      </div>

    </div>
  );
}

export default App;
