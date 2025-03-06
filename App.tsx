import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

interface Personagem  {
  nome: string
  vida: number
  arma ?: string
}
  

let sage  : Personagem = { nome: "Sage", vida: 1900}

let arana : Personagem =  {nome: "Arana", vida: 1000, arma: "AK47"}

let listaPersonagem: Personagem[]

listaPersonagem = [sage, arana, {nome: "pimenta", vida: 85} ]

listaPersonagem.push({nome: "Leon kennedy", vida: 87, arma: "Pistolinha"})
console.log(listaPersonagem);



export default function App() {
  return (
    <View >
    <Image style={{width: 100, height: 100}} source={{uri:"https://images.app.goo.gl/Lg2LS5AXxUixN33dA"}}> </Image>
    {listaPersonagem.map(Personagem => <text>nome: { Personagem.nome}</text>)}
    </View>
  );
}

