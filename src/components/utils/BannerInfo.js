import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {Banner} from 'react-native-paper';
import {getBannerShow, getData, storeBannerShow} from '../../utils';

function BannerInfo() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getData().then(data => {
      if (data) {
        getBannerShow().then(val => {
          if (val === 'true') {
            setVisible(true);
          }
        });
        setMessage(data.message);
      }
    });
  }, []);
  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'OK',
          onPress: () => {
            setVisible(false);
            storeBannerShow('false');
          },
        },
      ]}
      icon={({size}) => (
        <Image
          source={require('../../../assets/images/alert.png')}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      {message}
    </Banner>
  );
}

export default BannerInfo;
