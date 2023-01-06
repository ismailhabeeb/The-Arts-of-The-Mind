import React from "react";
import "../adminGeneral.css";

export default function ManageUser(){

    return(
        <>
        <div className="admin-content">
        <div className="button-group">
            <a href="" className="BTN m-5">Add User</a>
            <a href="" className="BTN">Manage User</a>
        </div>

        <div className="content">
            <h2 className="page-title">Manage User</h2>

            <table>
                <thead>
                    <th>SN</th>
                    <th>Name</th>   
                    <th>Role</th>
                    <th colSpan={2}>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Adeniyi</td>
                        <td>Admin</td>
                        <td><a href="#" className="editing edit">edit</a></td>
                        <td><a href="#" className="editing delete">delete</a></td>
                       
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Martins</td>
                        <td>Author</td>
                        <td><a href="#" className="editing edit">edit</a></td>
                        <td><a href="#" className="editing delete">delete</a></td>
                       
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Raymond</td>
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