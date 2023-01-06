import React from "react";
import { Route, Routes } from 'react-router';
import Profile from "../profile/profile";
import AddPost from './Admin-post/AddPost';
import ManageTopic from './Admin-Topic/ManageTopic';
import ManageUser from './Admin-User/ManageUser';

function AdminSidepage() {
    return (
        <React.Fragment>
            <section>
            <Routes>
                    <Route path='/' element={<AddPost />} />
                </Routes>
                <Routes>
                    <Route path='/manageuser' element={<Profile />} />
                </Routes>
                {/* <Routes>
                    <Route path='/managetopic' element={<ManageTopic />} />
                </Routes> */}
            </section>
        </React.Fragment>
      );
}

export default AdminSidepage;