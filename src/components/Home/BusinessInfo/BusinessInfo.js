import React from 'react';
import { faCompass, faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        title: '+889999999999',
        description: 'Mon-Fri 9am-6pm',
        icon: faPhoneSquareAlt,
        background: 'primary'
    },
    {
        title: 'info@fixkar.com',
        description: 'online support',
        icon: faEnvelope,
        background: 'dark'
    },
    {
        title: 'Melbourne, Australia',
        description: '795 South Park Avenue',
        icon: faCompass,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;