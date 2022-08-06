import { StyleSheet } from 'react-native';

import Colors from '_utils/colors';

export const styles = StyleSheet.create({
  flagContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  container: { flex: 1, backgroundColor: Colors.WHITE },
  textStyle: {
    color: 'white',
    backgroundColor: '#000000c0',
    fontSize: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flex: 1,
  },
  backgroundImage: { height: 200, width: 200, justifyContent: 'flex-end' },
});
