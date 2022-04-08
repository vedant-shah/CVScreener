import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
function Buttongrp(props) {
    return (
        <>
            <button type="button" className="btn btn-light btn-lg mx-2 my-2" onClick={() => props.getSingleData()}  >
                <FaUserAlt /> Fetched User {props.id}
            </button>
        </>
    )
}

export default Buttongrp