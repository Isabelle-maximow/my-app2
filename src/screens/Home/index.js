import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"; // Adicione Image

export const Home = () => { // Nome do componente com maiúscula
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/prime_video.png")} style = {styles.primelogoimg}/> 
                <Image source={require("../../assets/amazon_logo.png")} style = {styles.amazonlogoimg} />
            </View>
            <View style = {styles.category}>
                <TouchableOpacity>
                    <Text style = {styles.categoryText}>HOME</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style = {styles.categoryText}>TV SHOWS</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style = {styles.categoryText}>MOVIES</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style = {styles.categoryText}>KIDS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232f3e",
    },
    header: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },
    amazonlogoimg: {
        marginTop: -32,
        marginLeft: 30,
    },
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
    },
    categoryText:{
        fontSize: 14,
        fontWeight: 700,
        color: "#fff"
    }
})