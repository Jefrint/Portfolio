
import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import {  useLocation } from 'react-router-dom';

export default function StairTransition () {
    const location = useLocation();
    return(
        <AnimatePresence mode="wait">
            <div key={location}>
                <div>stair</div>
            </div>
        </AnimatePresence>
    )
 
}