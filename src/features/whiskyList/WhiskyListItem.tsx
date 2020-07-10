import React from 'react'

interface WhiskyProps {
    name: string,
}

export default function TodoListItem({ name }: WhiskyProps) {
    return (
        <li>
            {name}
        </li>
    );
}