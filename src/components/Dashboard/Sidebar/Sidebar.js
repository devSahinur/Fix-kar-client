import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [Admins, setAdmins] = useState([])
    const admin = Admins.find(pd=> pd.email === loggedInUser.email);
    // setIsAdmin(admin.email)
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin')
        .then(res => res.json()) 
        .then(data => setAdmins(data))
    },[])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                    <li>
                        <Link to="AddReview" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Review Post</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="allOrder" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>All Orders List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="makeAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="addServices" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Add Services</span>
                        </Link>
                    </li>
                
                {/* {isAdmin && <div>
                    <li>
                        <Link to="/allPatients" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/patient" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDoctor" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                </div>} */}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Back Home</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;