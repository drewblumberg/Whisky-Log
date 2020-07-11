import React from 'react';
import './WhiskyList.css';

interface WhiskyProps {
    name: string,
    image: string,
    type: string,
    proof: number
}

export default function TodoListItem({ name, image, proof, type }: WhiskyProps) {
    return (
        <li className='whisky-item'>
            <div className='whisky-item-image-container'>
                <img alt={name + 'bottle picture'} className='whisky-item-image' src={image} />
            </div>
            <div className='whisky-item-info'>
                <span className='whisky-item-name'>{name}</span>
                <span className='whisky-item-other'>{type}</span>
                <span className='whisky-item-other'>{proof} Proof</span>
            </div>
        </li>
    );
}