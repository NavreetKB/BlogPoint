import React from "react";
import  { useState } from 'react';    
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write=()=>{

    const [value, setValue] = useState('');
    console.log(value)
    return(
        <div className="Write-Page">
            <div className="content">
                <input type="text" placeholder="Title" required/>
                <div className="editorContainer">
                 <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="write-menu">

                <div className="item">
                    <h2>Publish</h2>
                    <span><b>Status : </b>Draft</span>
                    <span><b><br/>Visibility: </b>Public</span><br/>
                    <label htmlFor="file"><b>Upload Image</b></label>
                    <input type="file" name="file" />
                    <div className="buttons">
                        <button>Save as draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h2>Category</h2>
                    
                    <input type="radio" name="cat" id="art"/>
                    <label htmlFor="art">Art</label><br/>
                    
                    <input type="radio" name="cat" id="science"/>
                    <label htmlFor="science">Science</label><br/>
                    <input type="radio" name="cat" id="Technology"/>
                    <label htmlFor="Technology">Technology</label><br/>
                    <input type="radio" name="cat" id="Movies"/>
                    <label htmlFor="Movies">Movies</label><br/>
                    <input type="radio" name="cat" id="Design"/>
                    <label htmlFor="Design">Design</label><br/>
                    <input type="radio" name="cat" id="Food"/>
                    <label htmlFor="Food">Food</label><br/>

                </div>
            </div>
        </div>
    )
}
export default Write