import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useSelector} from 'react-redux';

const ShimmerAnimeDetail = () => {
  const theme = useSelector(state => state.appTheme.theme);
  return (
    <SkeletonPlaceholder
      animation="shimmer"
      borderRadius={5}
      backgroundColor={theme.shimmer.BG_COLOR}
      highlightColor={theme.shimmer.HIGHLIGHT_COLOR}>
      <SkeletonPlaceholder.Item flexDirection="column" padding={10}>
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item width="50%" marginEnd={10} height={280} />
          <SkeletonPlaceholder.Item width="50%" height={280} />
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item flexDirection="column" marginVertical={5}>
          <SkeletonPlaceholder.Item width="100%" height={50} />
          <SkeletonPlaceholder.Item flexDirection="row" marginVertical={5}>
            <SkeletonPlaceholder.Item width="50%" marginEnd={10} height={50} />
            <SkeletonPlaceholder.Item width="50%" height={50} />
            <SkeletonPlaceholder.Item />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection="column" marginVertical={10}>
          <SkeletonPlaceholder.Item
            width="100%"
            height={50}
            marginVertical={5}
          />
          <SkeletonPlaceholder.Item width="100%" height={150} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default ShimmerAnimeDetail;
