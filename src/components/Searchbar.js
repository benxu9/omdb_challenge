import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import RowRadioButtonsGroup from './RowRadioButtonsGroup';
import RangeSlider from './RangeSlider';

const Searchbar = (props) => {
    return(
        <>
        <nav>
            <ul className="searchbar">
                <FontAwesomeIcon id="searchicon" icon={faMagnifyingGlass} color="white"/>
                <input type="search"
                    placeholder="Search"
                    value = {props.value}
                    onChange = {(event) => props.setSearchval(event.target.value)}
                ></input>
            </ul>
            <ul id="yearslider">
                Year
                <RangeSlider />
            </ul>
            <ul id="typesel">
                <RowRadioButtonsGroup color="white" />
            </ul>
        </nav>
        </>
    )
}

export default Searchbar;