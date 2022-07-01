import React from 'react'
import { useState } from "react"

const AdderErr = ( {adderErr} ) => {
  if (adderErr) {
    return <div className="adder-err">{adderErr}</div>
  }
  return <></>
}

export default AdderErr;