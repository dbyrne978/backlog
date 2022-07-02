import React from 'react'

const AdderErr = ( { adderErr } ) => {
  if (adderErr) {
    return <div className='adder-err'>{adderErr}</div>
  }
  return <></>
}

export default AdderErr