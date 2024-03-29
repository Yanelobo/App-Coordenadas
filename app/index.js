import { View, Text, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Enviardados from '../components/home/enviardados/Enviardados';
import Tirarfoto from '../components/home/tirarfoto/Tirarfoto';



const Home = () => {
    const router = useRouter()
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFC' }}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerTitle: "Coordenadas"
                }}
            />
            <View style={{ flex: 1, padding: 16}}>
                <Tirarfoto/>
                <Enviardados/>
            </View>
        </SafeAreaView>
    )
}

export default Home;