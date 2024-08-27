'use client';

import classes from "../css/UI-css/accordion.module.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { AccordionProps } from "@/util/types";

export default function Accordion ({ 
    headerTitle, 
    firstStanza,
    secondStanza = '',
    thirdStanza = '',
    fourthStanza = ''
}: AccordionProps){
    const [expanded, setExpanded ] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    } 

    return (
        <div 
            className={classes.accordionFrame}
        >
            <div className={classes.accordionHeader}>
                <h4 className={classes.accordionHeaderTitle}>{headerTitle}</h4> 
                <div className={classes.headerRight} onClick={handleClick}>
                    {expanded ? <FaChevronUp /> : <FaChevronDown /> }
                </div>
            </div>
            {expanded && 
                <ul className={classes.detailFrame}>
                    <li>{firstStanza}</li>
                    {secondStanza.length !== 0 && <li className={classes.detailAccordionItem}>{secondStanza}</li>}
                    {thirdStanza.length !== 0 && <li className={classes.detailAccordionItem}>{thirdStanza}</li>}
                    {fourthStanza.length !== 0 && <li className={classes.detailAccordionItem}>{fourthStanza}</li>}
                </ul>
            }
        </div>
    )
}
    