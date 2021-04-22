import React from 'react';
import './TeamMembar.css'

const TeamMembar = ({team}) => {
    return (
        <div className='team-card card' style={{width: '18rem'}}>
            <div className='geeks'>
                <img src={team.img} alt=""/>
            </div>
            <div className="card-body">
                <h5>{team.title}</h5>
                <h2>{team.name}</h2>
            </div>
        </div>
    );
};

export default TeamMembar;