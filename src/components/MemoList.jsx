import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年12月22日 12:23</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('消すよ？'); }}
          style={styles.memoDelete}
        >
          <Feather name="x" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト２２２</Text>
          <Text style={styles.memoListItemDate}>2023年12月22日 12:23</Text>
        </View>
        <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
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
  memoDelete: {
    padding: 8,
  },
});
