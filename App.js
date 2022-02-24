import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import physics from './physics';

export default function App() {
  const [running, setRunning] = useState(false);
  useEffect(() => {
    setRunning(true);
  },[])
  return (
    <View style={{flex:1}}>
      <GameEngine 
        systems={[physics]}
        entities={entities()}
        running={running}
        >
        <StatusBar style="auto" hidden/>

      </GameEngine>
    </View>
  );
}
