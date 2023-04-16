import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const ShimmerList = ({title, itemsNum}) => {
  const theme = useSelector(state => state.appTheme.theme);
  return (
    <SkeletonContainer>
      <FlatList
        data={Array(itemsNum).fill('_')}
        ListHeaderComponent={title ? <ListTitle>{title}</ListTitle> : null}
        renderItem={({_, index}) => {
          return (
            <SkeletonPlaceholder
              key={index}
              animation="shimmer"
              borderRadius={5}
              backgroundColor={theme.shimmer.BG_COLOR}
              highlightColor={theme.shimmer.HIGHLIGHT_COLOR}>
              <SkeletonPlaceholder.Item
                flexDirection="column"
                marginVertical={10}
                marginHorizontal={5}>
                <SkeletonPlaceholder.Item width={110} height={110} />
                <SkeletonPlaceholder.Item marginTop={5} height={40} />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          );
        }}
        numColumns={3}
        contentContainerStyle={FlatListStyles.container}
        columnWrapperStyle={FlatListStyles.column}
      />
    </SkeletonContainer>
  );
};

const FlatListStyles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  column: {
    flex: 1,
  },
  footer: {
    alignSelf: 'center',
  },
});

export default ShimmerList;

const SkeletonContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ListTitle = styled.Text`
  font-size: 30px;
  margin-left: 10px;
  padding: 10px 0;
  font-family: 'Paladise Script';
  letter-spacing: 2px;
  color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`;
