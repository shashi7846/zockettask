import React,{useState,useEffect} from "react";
import "./Mainpage.css";
import Pic from "./imgaes/zocketpic.jpeg";
import { SemipolarLoading } from 'react-loadingg';
import { LoopCircleLoading } from "react-loadingg";

function Mainpage(props) {
     let [load, setLoad] = useState(false);
  console.log(props);
  useEffect(async () => {
 
    setLoad(true);
  },[]);

  return (
    <>
     {
         load ?(
            <div className="mainpage">
            <h3>Hello</h3>
           <div className="main_banner">
           <div className="table ">
              <table>
                <thead>
                  <tr>
                    <th>Email</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td>{props.match.params.id}</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="image">
              <img src={`${Pic}`} />
            </div>
           </div>
          </div>
         ):
         (
            <LoopCircleLoading />
          )}
     
    </>
  );
}

export default Mainpage;
