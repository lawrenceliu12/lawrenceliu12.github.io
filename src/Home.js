// import logo from './logo.svg';
import './Home.css';
import TopBar from './TopBar/topbar'
import { Text } from "react-native";

function Home() {
  return (
    <div className="Home">
      <TopBar />
      <div className = "Home-Introduction">
        Hello, my name is
      </div>
      <div className = "Introduction">
        <Text numberOfLines={5}>
          {'Lawrence Liu'}
          {'It is nice to meet you!'}
          </Text>
      </div>
    </div>
  );
}

export default Home;
