import React from "react";
import "./adminGeneral.css"
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  const activeLink = "activeText"
  const normalLink = "text"

  const SidebarData =[
    {
        title: "Manage Post",
        path: "/",
        
    },
    {
        title: "Manage Users",
        path: "/manageuser",

    },
    // {
    //     title: "Manage Topics",
    //     path: "/managetopic",

    // }
]

    return(
        // < >
         <React.Fragment>
            <section className="Adminwrapper">
                <div className='text-white side-bar container-fluid'>
                   {
                        SidebarData.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <ul>
                                        <li>

                                            <Link 
                                            to={item.path}
                                            
                                            style={{paddingLeft:"10px", color:"white", fontSize:"18px"}}
                                            className={({isActive})=>
                                            isActive ? activeLink : normalLink
                                            }>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                   }
                </div>
            </section>
        </React.Fragment>

      
    )
}

// import React from "react";
// import { Link } from "react-router-dom";

// export default function AdminSidebar() {
    
//     const Admin = [
//         {
//           title: "Manage Posts",
//           path: "/",
//         //   icon: <AiIcons.AiFillHome/>,
//           className: "link"
//         },
      
      
//         {
//           title: "Manage Users",
//           path: "/addUser",
//         //   icon: <CgIcons.CgProfile/>,
//           className: "link"
//         },
      
//         {
//           title: "Manage Topics",
//           path: "/addTopic",
//         //   icon: < FaIcons.FaSignInAlt/>,
//           className: "link"
//         },
//       ];

//     return(
//         < >
//         <div className="Adminwrapper">
//         <div className="side-bar container-fluid">

//           <ul>
//             <li>
//                 <Link onClick={Admin} className="link" to="#" >Manage Posts</Link>
//             </li>
//             <li>
//                 <Link onClick={Admin} className="link" >Manage Users</Link>
//             </li>
//             <li>
//                 <Link onClick={Admin} className="link"  >Manage Topics</Link>
//             </li>
//         </ul>
//         </div>
//         </div>
//         </>
//     )
// }