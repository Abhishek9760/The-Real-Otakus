import React from 'react';
import {useSelector} from 'react-redux';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ShimmerVideoQuality = () => {
  const theme = useSelector(state => state.appTheme.theme);
  return (
    <SkeletonPlaceholder
      animation="shimmer"
      borderRadius={5}
      backgroundColor={theme.shimmer.BG_COLOR}
      highlightColor={theme.shimmer.HIGHLIGHT_COLOR}>
      <SkeletonPlaceholder.Item flexDirection="column" margin={8}>
        <SkeletonPlaceholder.Item height={50} marginVertical={10} />
        <SkeletonPlaceholder.Item height={150} marginBottom={5} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default ShimmerVideoQuality;
