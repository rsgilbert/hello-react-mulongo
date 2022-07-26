import React from "react";
import './Mgt.css'

export const SchoolManagement = () => {

    return (
        <div className="school">
            <h1 className="title">School Management</h1>
            <ul>
                <SchoolClass 
                    cls="S.1"
                    description="Here we learn about gulliver travels"
                     />
                <SchoolClass 
                    cls="S.2"
                    description="In Senior two we ask students to pick optional subjects"
                     />
                <SchoolClass 
                    cls="S.3"
                    description="We help students get to know the other gender"
                     />
                <SchoolClass 
                    cls="S.4"
                    description="Now students sit for UCE"
                     />
                    <SchoolClass 
                    cls="S.5"
                    description="Welcome to A-Level"
                     />
                <SchoolClass 
                    cls="S.6"
                    description="Students fill in PUJAB forms"
                     />
            </ul>
        </div>
    )
}

const SchoolClass = ({ cls,description }) => (
    <li className="cls-info">
        <h2>{cls}</h2>
        <p>{description}</p>
    </li>
)