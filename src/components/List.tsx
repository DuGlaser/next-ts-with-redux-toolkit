import ListItem from '@/components/ListItem';
import { User } from '@/interfaces';
import * as React from 'react';

type Props = {
  items: User[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
