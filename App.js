import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import physics from './physics';

export default function App() {
  const [running, setRunning] = useState(false);
  const [currentPoints, setCurrentPoints] = useState(0)
  useEffect(() => {
    setRunning(true);
  },[])
  return (
    <View style={{flex:1}}>
      <GameEngine 
        systems={[physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          switch (e.type) {
            case 'game_over':
              setRunning(false)
              // gameEngine.stop()
              break;
            case 'new_point':
              setCurrentPoints(currentPoints + 1)
              break;
          }
        }}
        >
                <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', margin: 20 }}>{currentPoints}</Text>

        <StatusBar style="auto" hidden/>

      </GameEngine>

      {!running ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ backgroundColor: 'black', paddingHorizontal: 30, paddingVertical: 10 }}
            onPress={() => {
              // setCurrentPoints(0)
              setRunning(true)
              // gameEngine.swap(entities())
            }}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30 }}>
              Continue
            </Text>
          </TouchableOpacity>

        </View> : null}
    </View>
  );
}
