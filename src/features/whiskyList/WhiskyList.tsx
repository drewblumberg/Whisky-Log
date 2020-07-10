import React from 'react'
import WhiskyListItem from './WhiskyListItem';
import { RootState } from '../../store/rootReducer';
import { useSelector } from 'react-redux';

export default function WhiskyList() {
  const whiskys = useSelector(
      (state: RootState) => state.whiskyList
  );

  return (
    <ul>
      {whiskys.map(whisky => (
        <WhiskyListItem name={whisky.name} />
      ))}
    </ul>
  );
}