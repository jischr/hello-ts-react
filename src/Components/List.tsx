import React from 'react';

const List: React.FC = () => {

    let fruit : string[] = [];
    return (
    <ul>
        {
            fruit.length != 0 && fruit.map((item: string) => <li>{item}</li>)
        }
    </ul>
  );
}

export default List;
