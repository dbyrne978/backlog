import React from 'react'

const BacklogItemAdderErr = ( { backlogItemAdderErr } ) => {
  if (backlogItemAdderErr) {
    return <div className='backlog-item-adder-err'>{backlogItemAdderErr}</div>
  }
  return <></>
}

export default BacklogItemAdderErr