import React, { useEffect, useState } from 'react';
import personIcon from "../../../assets/images/icon-person.svg"

const NumberOfPeople = ({ onNumberOfPeopleChange }) => {

    const [numberOfPeople, setNumberOfPeople] = useState(0)

    const onChange = (e) => {
        setNumberOfPeople(e.target.value)
    }

    useEffect(() => {
        onNumberOfPeopleChange(numberOfPeople)
    },[onNumberOfPeopleChange, numberOfPeople])
    
    return (
        <div>
            <h2>Number of People</h2>
            <img className="icon" src={personIcon} alt="Icon person" />
            <input onChange={onChange} id="inputPeople" className="input" type="number" min="1" maxLength="4" placeholder="0" />
            <span>Can't be zero</span>
        </div>
    );
};

export default NumberOfPeople;