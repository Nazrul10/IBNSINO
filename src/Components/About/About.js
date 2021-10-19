import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './About.css'
const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="about-us">
                About Us
            </div>
           <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-10 p-5">
            <div>
            NewYork-Presbyterian is one of the nation’s most comprehensive, integrated academic health care delivery systems, dedicated to providing the highest quality, most compassionate care and service to patients in the New York metropolitan area, nationally, and throughout the globe. In collaboration with two renowned medical schools, Weill Cornell Medicine and Columbia University Vagelos College of Physicians and Surgeons, NewYork-Presbyterian is consistently recognized as a leader in medical education, groundbreaking research, and innovative, patient-centered clinical care.
            </div>
            <div>
            <h1>NewYork-Presbyterian Hospital</h1>
                NewYork-Presbyterian Hospital is a world-class academic medical center committed to excellence in patient care, research, education and community service.  Based in New York City, it is one of the nation’s largest and most comprehensive hospitals and a leading provider of inpatient, ambulatory, and preventive care in all areas of medicine. With some 2,600 beds and more than 6,500 affiliated physicians and 20,000 employees, NewYork-Presbyterian sees more than 2 million visits annually, including close to 15,000 infant deliveries and more than 310,000 emergency department visits.  NewYork-Presbyterian Hospital is ranked #1 in the New York metropolitan area by U.S. News and World Report and repeatedly named to the Honor Roll of “America’s Best Hospitals.”  NewYork-Presbyterian is comprised of seven campuses as follows:
            </div>
               </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default About;