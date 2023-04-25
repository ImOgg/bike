import React from 'react'

const Item = ({sarea,sna,tot,sbi}) => {
    return (
        <div className='bikefather'>
            <ul className='bikeItem'>
                <li>台北市</li>
                <li>{sarea}</li>
                <li>{sna}</li>
                <li>{tot}</li>
                <li>{sbi}</li>
            </ul>
        </div>
    )
}

export default Item