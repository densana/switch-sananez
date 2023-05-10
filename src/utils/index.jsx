
import { View} from 'react-native';
import { Header} from '../components';
import { Start, List} from '../screens';
import { styles } from './styles';
import { useState } from 'react';



export default function App() {

    const [userList, setUserList] = useState(null);

  const onStartList = (text) => {
    setUserList(text);
  };

  const headerTitle = userList ? 'List' : 'Welcome';

  const Content = () => (userList ? <List /> : <Start onStartList={onStartList} />);
    
  return (
    <View style={styles.container}>
        <Header title={headerTitle} />
        <Content/>
    </View>
  );
}