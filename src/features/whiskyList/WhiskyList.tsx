import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import WhiskyListItem from './WhiskyListItem';
import { RootState } from '../../store/rootReducer';
import { loadWhiskys } from './WhiskyListReducer';

export default function WhiskyList() {
  const dispatch = useDispatch();
  const whiskys = useSelector(
      (state: RootState) => state.whiskyList
  );

  React.useEffect(() => {
    dispatch(loadWhiskys());
  });

  return (
    <ul>
      {whiskys.map(whisky => (
        <WhiskyListItem name={whisky.name} />
      ))}
    </ul>
  );
}