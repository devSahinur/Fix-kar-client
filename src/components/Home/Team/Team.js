import React from 'react';
import team1 from '../../../images/team1.jpg';
import team2 from '../../../images/team2.jpg';
import team3 from '../../../images/team3.jpg';
import TeamMembar from '../TeamMembar/TeamMembar';
import './Team.css'

const teamData =[
    {
        title: 'ARCHITECT',
        name: 'Philip Larson',
        img: team1
    },
    {
        title: 'ARCHITECT',
        name: 'Minni Thomarc',
        img: team2
    },
    {
        title: 'ARCHITECT',
        name: 'Lee Lorance',
        img: team3
    }
]

const Team = () => {
    return (
        <section>
            <div className="pt-5 p-5 text-center">
                <h1>Expert Team Services</h1>
                <p>We do fast phone repair. In most cases,</p>
            </div>
            <div className="row d-flex justify-content-around">
                {
                    teamData.map(team => <TeamMembar team={team}></TeamMembar>)
                }
            </div>
        </section>
    );
};

export default Team;