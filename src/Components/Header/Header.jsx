import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Header.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

const Header = ({type}) => {

    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOption, setOpenOption] = useState(false)
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOption((prev) => {
            return {
                ...prev, [name]: operation === "i" ? option[name] + 1 : option[name] - 1
            }
        })
    }

    return (
        <div className="header">
            <div className={type === 'list' ? "headerContainer listMood" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListIte active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListIte">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListIte">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListIte">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListIte">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>

                { type !== "list" &&
                    <div>
                    <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                    <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free booker account</p>
                    <button className="headerBtn">Sign in / Register</button>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input type="text" placeholder='Where are you going ?' className='headerSearchInput' />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText"> {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`} </span>
    
                            {
                                openDate &&
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                />
                            }
    
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                            <span onClick={() => setOpenOption(!openOption)} className="headerSearchText" >{`${option.adult} adult ${option.children} . children ${option.room} . room`}</span>
                            {
                                openOption &&
                                <div className="ontions">
                                    <div className="ontionItems">
                                        <span className="ontionText">Adult</span>
                                        <div className="ontionCounter">
    
                                            <button className="optionCounterBtn" disabled={option.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                            <span className="optionCounterNumber">{option.adult}</span>
                                            <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="ontionItems">
                                        <span className="ontionText">Children</span>
                                        <div className="ontionCounter">
    
                                            <button className="optionCounterBtn" disabled={option.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                            <span className="optionCounterNumber">{option.children}</span>
                                            <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="ontionItems">
                                        <span className="ontionText">Room</span>
                                        <div className="ontionCounter">
    
                                            <button className="optionCounterBtn" disabled={option.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                                            <span className="optionCounterNumber">{option.room}</span>
                                            <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="headerSearchItem">
                            <button className="headerBtn">Search</button>
                        </div>
                    </div>
                    </div>
               }
            </div>
        </div>
    );
}

export default Header;
