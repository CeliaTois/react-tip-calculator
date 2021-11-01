import React, { useState } from 'react';
import BillAmountPerPerson from './BillAmountPerPerson';
import TipAmountPerPerson from './TipAmountPerPerson';

const Results = ({ bill, tip, people }) => {

    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0)

    const handleChange = (tipAmount) => {
        setTipAmountPerPerson(tipAmount)
    }    

    return (
        <div id="calculator__total" className="calculator">
            <TipAmountPerPerson bill={bill} tip={tip} people={people} onChange={handleChange} />
            <BillAmountPerPerson bill={bill} people={people} tipAmountPerPerson={tipAmountPerPerson} />
            <button id="reset-btn" type="reset">RESET</button>
        </div>
    );
};

export default Results;