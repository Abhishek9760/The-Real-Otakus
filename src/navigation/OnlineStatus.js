import React, {useEffect, useState} from 'react';
import {socket} from '../socket';
import {Badge} from 'react-native-paper';

export default function OnlineStatus() {
  const [online, setOnline] = useState(1);
  useEffect(() => {
    socket.on('connected', () => {
      socket.emit('join-room', 'global');
      socket.emit('get-users-count');
      socket.on('updated-users-count', num => {
        console.log('online', num);
        setOnline(num);
      });
    });
  }, []);
  return <Badge style={{backgroundColor: 'lime'}}>{online}</Badge>;
}
