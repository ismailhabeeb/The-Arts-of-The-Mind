import React from "react";
import "../adminGeneral.css";

export default function ManageTopic(){

    return(
        <>
        <div className="admin-content">
        <div className="button-group">
            <a href="" className="BTN m-5">Add Topics</a>
            <a href="" className="BTN">Manage Topics</a>
        </div>

        <div className="content">
            <h2 className="page-title">Manage Posts</h2>

            <table>
                <thead>
                    <th>SN</th>
                    <th>Name</th>   
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sport</td>
                        <td><a href="#" className="editing edit">edit</a></td>
                        <td><a href="#" className="editing delete">delete</a></td>
                       
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Entertainment</td>
                        <td><a href="#" className="editing edit">edit</a></td>
                        <td><a href="#" className="editing delete">delete</a></td>
                       
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tech</td>
                        <td><a href="#" className="editing edit">edit</a></td>
                        <td><a href="#" className="editing delete">delete</a></td>
                       
                    </tr>
                </tbody>
            </table>
           
        </div>
        </div>
        
        </>
        
    );
}