import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ // exportação 
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
    },
    MovieImageThumbnail:{
        width: "100%",
        alignItems: "center"
    },
    contentList: {
        paddingLeft: 18,
        paddingTop: 10,        
    },
    movieText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "700",
        padding: 15,

    }
})