import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import NavigationProvider from "./src/navigation/NavigationProvider";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Urbanist-Black": require("./assets/fonts/Urbanist-Black.ttf"),
        "Urbanist-ExtraBold": require("./assets/fonts/Urbanist-ExtraBold.ttf"),
        "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
        "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
        "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
        "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
        "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
        "Urbanist-ExtraLight": require("./assets/fonts/Urbanist-ExtraLight.ttf"),
        "Urbanist-Thin": require("./assets/fonts/Urbanist-Thin.ttf"),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NativeBaseProvider>
            <StatusBar style="light" />
            <NavigationProvider />
        </NativeBaseProvider>
    );
}
