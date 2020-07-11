import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import WhiskyListItem from './WhiskyListItem';
import { RootState } from '../../store/rootReducer';
import { loadWhiskys } from './WhiskyListReducer';
import './WhiskyList.css';

export default function WhiskyList() {
  const dispatch = useDispatch();
  const whiskys = useSelector(
    (state: RootState) => state.whiskyList
  );

  React.useEffect(() => {
    if (!whiskys.length) {
      dispatch(loadWhiskys());
    }
  });

  return (
    <ul className="whisky-list">
      {whiskys.map(whisky => (
        <WhiskyListItem key={whisky.id} name={whisky.name} image={whisky.image} proof={whisky.proof} type={whisky.type} />
      ))}
    </ul>
  );
}