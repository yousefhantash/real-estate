    import React from 'react';
import "./propertieslist.css"
    const PropertyList = () => {
    const properties = [
        { city: 'Ramallah', color: '#e5a0fd' },
        { city: 'Jenin', color: '#61a3e7' },
        { city: 'Tulkarm', color: '#ce22f6' },
        { city: 'Bethlehem', color: '#acb7ca' },
        { city: 'Nablus', color: '#c1baf6' },
        { city: 'Qalgilya', color: '#cd4655' },
        { city: 'Jericho', color: '#f986d5' },
        { city: 'Tubas', color: '#f91b16' },
        { city: 'Gaza Strip', color: '#d2a3f4' },
        { city: 'Hebron', color: '#65c2e5' },
        { city: 'Salfit', color: '#e120a9' },
        { city: 'Jerusalem', color: '#68E568' },
    ];

    return (
        <div className="property-list">
        <h2>Real Estate Properties by City</h2>
        <ul>
            {properties.map((property, index) => (
            <li key={index} >
                <span className="dot" style={{ backgroundColor: property.color }}></span>
                {property.city} Real Estate
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default PropertyList;
