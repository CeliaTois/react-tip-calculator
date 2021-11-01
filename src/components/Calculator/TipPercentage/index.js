import React, { useEffect, useState } from 'react';

const TipPercentage = ({ onTipPercentageChange }) => {

    const [tipPercentage, setTipPercentage] = useState(0)
    const [inputFocus, setInputFocus] = useState(false)

    const onSelect = (e) => {
        setTipPercentage(e.target.id)
    }

    const onCustomSelect = (e) => {
        setTipPercentage(e.target.value)
        
    }

    useEffect(() => {
        onTipPercentageChange(tipPercentage)
    },[onTipPercentageChange, tipPercentage])

    const isChecked = () => {

    }

    return (
        <div>
            <h2 id="title-tip">Select Tip %</h2>
            <div id="tip-percentage">

                <input type="radio" name="tip-percentage" onClick={onSelect} id="5" />
                <label htmlFor="5" className="tip tip-percent">5%</label>

                <input type="radio" name="tip-percentage" onClick={onSelect} id="10" />
                <label htmlFor="10" className="tip tip-percent">10%</label>
                
                <input type="radio" name="tip-percentage" onClick={onSelect} id="15" />
                <label htmlFor="15" className="tip tip-percent">15%</label>
               
                <input type="radio" name="tip-percentage" onClick={onSelect} id="25" />
                <label htmlFor="25" className="tip tip-percent">25%</label>
                
                <input type="radio" name="tip-percentage" onClick={onSelect} id="50" />
                <label htmlFor="50" className="tip tip-percent">50%</label>
                    
                
                <input type="radio" name="tip-percentage" id="custom" />
                <label htmlFor="custom" className="tip" id="custom-input">
                    <input onChange={onCustomSelect} onClick={onCustomSelect} type="number" name="tip-percentage" min="1" placeholder="Custom" id="input-tip-percentage" />
                </label> 
                
            </div>
        </div>
    );
};

export default TipPercentage;