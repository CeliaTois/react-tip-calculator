import React, { useEffect, useState } from 'react';

const TipAmountPerPerson = ({ bill, tip, people, onChange }) => {

    const [tipAmount, setTipAmount] = useState(0)

    useEffect(() => {
        if (bill > 0 && tip > 0 && people > 0) {
            const tipAmountCalcul = (bill/people) * (tip / 100)
            setTipAmount(tipAmountCalcul)
        }
        onChange(tipAmount)
    },[bill, tip, people, onChange, tipAmount])

    
    

    return (
        <div className="calculator__sections">
            <div className="calculator__sections__title">
                    <h2>Tip Amount</h2>
                    <p>/ person</p>
                </div>
                <div className="calculator__sections__amount">
                    <p>${tipAmount.toFixed(2)}</p>
                </div>
        </div>
    );
};

export default TipAmountPerPerson;