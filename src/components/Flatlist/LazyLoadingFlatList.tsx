/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import FlatList from '_components/FlatList/Flatlist';
import Loader from '_components/Loader/Loader';
import Text from '_components/Text/Text';

//import TouchableOpacity from '_components/TouchableOpacity';
import Colors from '_utils/Colors';
import Metrics from '_utils/Metrics';

import { strings } from '_i18n';

const FOOTER_HEIGHT = 40;
type LazyLoadingFlatlistType = {
  withBottomSpace?: boolean;
  paddingHorizontal?: number;
  paddingVertical?: number;
  numberPerPage: number;
  onEndReachedThreshold: number;
  isRefreshing: boolean;
  isLoadingMore: boolean;
  isLoadingMoreError: boolean;
  hasLoadedAll: boolean;
  loadedAllText: string;
  data: Array<any>;
  onLoadMore: () => void;
  onRefresh?: () => void;
  onScrolling?: (_e: any) => void;
};
const LazyLoadingFlatList = (props: LazyLoadingFlatlistType) => {
  const {
    numberPerPage,
    onEndReachedThreshold,
    loadedAllText,

    isRefreshing,
    isLoadingMore,
    isLoadingMoreError,
    hasLoadedAll,

    onLoadMore,
    onRefresh,

    onScrolling,
    ...otherProps
  } = props;
  const { data } = otherProps;

  const [flatListReady, setFlatListReady] = useState(false);

  const hasEnoughMessages = data !== undefined && data.length >= numberPerPage;

  const refreshControl = onRefresh && (
    <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
  );

  const onScroll = useCallback(
    e => {
      if (onScrolling) onScrolling(e);
      if (!flatListReady) setFlatListReady(true);
    },
    [flatListReady],
  );

  const loadMore = useCallback(() => {
    if (!isLoadingMore) onLoadMore();
  }, [isLoadingMore, onLoadMore]);

  const renderLoadMoreIndicator = useCallback(() => {
    return (
      <View style={styles.footer}>
        {hasLoadedAll && (
          <Text
            align="center"
            size="s"
            useDefaultLineHeight
            color={Colors.HEATHER_GREY}>
            {loadedAllText}
          </Text>
        )}
        {isLoadingMore && <Loader />}
        {!isLoadingMore && isLoadingMoreError ? (
          <TouchableOpacity onPress={loadMore} hitSlop={Metrics.HIT_SLOP}>
            <Text
              align="center"
              weight="bold"
              useDefaultLineHeight
              color={Colors.PRIMARY}>
              + {strings('load_more').toUpperCase()}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }, [
    hasLoadedAll,
    loadedAllText,
    isLoadingMore,
    isLoadingMoreError,
    loadMore,
  ]);

  return (
    <FlatList
      {...otherProps}
      onScroll={onScroll}
      onEndReached={
        flatListReady &&
        !isRefreshing &&
        !isLoadingMore &&
        !hasLoadedAll &&
        !isLoadingMoreError &&
        hasEnoughMessages &&
        loadMore
      }
      onEndReachedThreshold={onEndReachedThreshold}
      ListFooterComponent={hasEnoughMessages && renderLoadMoreIndicator}
      refreshControl={refreshControl}
    />
  );
};

LazyLoadingFlatList.propTypes = {
  withBottomSpace: PropTypes.bool,
  paddingHorizontal: PropTypes.number,
  paddingVertical: PropTypes.number,
  numberPerPage: PropTypes.number.isRequired,
  onEndReachedThreshold: PropTypes.number.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  isLoadingMore: PropTypes.bool.isRequired,
  isLoadingMoreError: PropTypes.bool.isRequired,
  hasLoadedAll: PropTypes.bool.isRequired,
  loadedAllText: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onRefresh: PropTypes.func,
};

LazyLoadingFlatList.defaultProps = {
  onEndReachedThreshold: 0.3,
  isRefreshing: false,
  isLoadingMore: false,
  isLoadingMoreError: false,
  hasLoadedAll: false,
};

const styles = StyleSheet.create({
  footer: {
    height: FOOTER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default React.memo(LazyLoadingFlatList);
