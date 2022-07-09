import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {Banner} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {hideBanner} from '../../actions/appInfoAction';

function BannerInfo() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const appInfo = useSelector(state => state.appInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    setMessage(appInfo.message);
    if (appInfo.show === 1) {
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'OK',
          onPress: () => {
            setVisible(false);
            dispatch(hideBanner());
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
