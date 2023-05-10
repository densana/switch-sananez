import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: theme.colors.dark,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.medium,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
