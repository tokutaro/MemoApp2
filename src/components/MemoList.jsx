import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年12月22日 12:23</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト２２２</Text>
          <Text style={styles.memoListItemDate}>2023年12月22日 12:23</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  memoListItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },

});
