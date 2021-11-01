import React from 'react';
import BillAmount from './BillAmount';
import NumberOfPeople from './NumberOfPeople';
import TipPercentage from './TipPercentage';

const Calculator = ({
    handleBillAmountChange,
    handleTipPercentageChange,
    handleNumberOfPeopleChange }) => {   

    return (
        <div id="calculator__form" className="calculator">
            <BillAmount onBillAmountChange={handleBillAmountChange} />
            <TipPercentage onTipPercentageChange={handleTipPercentageChange} />
            <NumberOfPeople onNumberOfPeopleChange={handleNumberOfPeopleChange} />
        </div> 
    );
};

export default Calculator;