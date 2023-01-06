import React from "react";
import "../adminGeneral.css";

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import "../manage-post/admin.css"

export default function AddTopic (){

    // ClassicEditor
    // .create( document.querySelector( '#body' ), {
    //     toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
    //     heading: {
    //         options: [
    //             { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
    //             { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
    //             { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
    //         ]
    //     }
    // } )
    // .catch( error => {
    //     console.log( error );
    // } );

    return(
        <>
        <div className="admin-content">
       
        <div className="button-group">
            
            <a href="" className="BTN">Add Topic</a>
            <a href="" className="BTN m-5">Manage Topic</a>
        </div>
        <main>
              
        <img  className="card" src="card1.jpg" alt="" />
        <div className="content">
            <h2 className="page-title">Manage Topic</h2>

            <div className="write">
                <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" >
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" className="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                     placeholder="Tell your story ..." 
                    type="text" 
                    className="writeInput writeText"
                    ></textarea>
                </div>
                {/* <div className="topic">
                    <label htmlFor="">Topic</label>
                    <select name="" id="" >
                        <option value="">Tech</option>
                        <option value="">Entertainment</option>
                        <option value="">Sport</option>
                        <option value="">Nature</option>
                    </select>
                </div> */}
                <button className="writeSubmit">Add Topic</button>
               
            {/* <div>
                <label htmlFor="">Title</label>
                <input type="text" name="title" className="text-input" />
            </div>
            <div>
                <label htmlFor="">Body</label>
                <textarea name="body" id="body"></textarea>
            </div> */}
            </form> 
            </div>
        </div>

        </main>
       
        </div>
        
        </>
        
    );
}