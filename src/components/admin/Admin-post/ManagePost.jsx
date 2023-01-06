import React from "react";
import "../adminGeneral.css";

export default function ManagePost(){

    return(
        <>
        <div className="admin-content">
        <div className="button-group">
            <a href="" className="BTN m-5">Add Posts</a>
            <a href="" className="BTN">Manage Posts</a>
        </div>

        <div className="content">
            <h2 className="page-title">Manage Posts</h2>

            <table>
                <thead>
                    <th>SN</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th colSpan={3}>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>This is the first post</td>
                        <td>Ayo</td>
                        <td><a href="#" className="editing edit">edit</a></td>
                        <td><a href="#" className="editing delete">delete</a></td>
                        <td><a href="#" className="editing publish">publish</a></td>
                       
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>This is the second post</td>
                        <td>Ife</td>
                        <td><a href="#" className="editing edit">edit</a></td>
                        <td><a href="#" className="editing delete">delete</a></td>
                        <td><a href="#" className="editing publish">publish</a></td>
                       
                    </tr>
                </tbody>
            </table>
           
        </div>
        </div>
        
        </>
        
    );
};