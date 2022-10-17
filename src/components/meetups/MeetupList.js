import React from 'react';
import MeetupItem from './MeetupItem';

function MeetupList({ list }) {
  console.log(list);
  if(!list) return null;
	const jsxListItems = list.map((data) => <MeetupItem key={data.id} data={data} />);

	return <ul>{jsxListItems}</ul>;
}

export default MeetupList;
