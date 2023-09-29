import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memp Appp!!</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>

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
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2023年12月22日 12:23</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>＋</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
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
  circleButton: {
    backgroundColor: '#467FD3', // お好きな背景色に変えてもいいにゃ
    width: 64,
    height: 64,
    borderRadius: 32, // widthとheightの半分の値を指定して、完全な円にするにゃ
    justifyContent: 'center', // テキストを垂直方向の中央に配置するためにゃ
    alignItems: 'center', // テキストを水平方向の中央に配置するためにゃ
    overflow: 'hidden', // 念のため、ボタンの境界を超えて内容が表示されないようにするにゃ
    position: 'absolute',
    right: 40,
    bottom: 40,

    // iOSの影のスタイルにゃ
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4, // 影の縦の位置を指定にゃ
    },
    shadowOpacity: 0.3, // 影の不透明度にゃ
    shadowRadius: 4.65, // 影のぼかしにゃ

    // Androidの影のスタイルにゃ
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#FFFFFF',
    fontSize: 30,
  },
});
