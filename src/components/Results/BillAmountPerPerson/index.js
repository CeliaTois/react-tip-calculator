import React, { useEffect, useState } from 'react';

const BillAmountPerPerson = ({ bill, people, tipAmountPerPerson }) => {

    const [billAmount, setBillAmount] = useState(0)

    useEffect(() => {
        if (bill > 0 && people > 0 && tipAmountPerPerson > 0) {
            const billAmountCalcul = (bill/people) + tipAmountPerPerson
            setBillAmount(billAmountCalcul)
    }},[bill, people, tipAmountPerPerson])

    return (
        <div className="calculator__sections">
            <div className="calculator__sections__title">
                    <h2>Total</h2>
                    <p>/ person</p>
                </div>
                <div className="calculator__sections__amount">
                    <p>${billAmount.toFixed(2)}</p>
                </div>
        </div>
    );
};

export default BillAmountPerPerson;