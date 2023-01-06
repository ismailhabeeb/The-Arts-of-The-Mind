import React from 'react';
import { Route, Routes } from 'react-router';
import AddPost from './Admin-post/AddPost';
import ManageTopic from './Admin-Topic/ManageTopic';
import ManageUser from './Admin-User/ManageUser';

function AdminSecondSidebar() {
    return ( 
        <React.Fragment>
            <section>
            
                <Routes>
                    <Route exact path='/' element={<AddPost />} />
                </Routes>
                <Routes>
                    <Route path='/' element={<ManageUser />} />
                </Routes>
                <Routes>
                    <Route path='/managetopic' element={<ManageTopic />} />
                </Routes>
            
            </section>
        </React.Fragment>
     );
}

export default AdminSecondSidebar;