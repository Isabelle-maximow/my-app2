import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native"; // Adicione Image
import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png";
import { styles } from "./style";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import { MOVIESCRIME } from "../../utils/moviesWatch";
import { MOVIESCARDS } from "../../utils/moviescards";
import { MOVIERECOMENDADOS } from "../../utils/moviesrecomendado";
import Icon from "react-native-vector-icons/Ionicons";

export const Home = () => {
  // Nome do componente com maiúscula
  return (
    // LOGOTIPO
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/prime_video.png")}
          style={styles.primelogoimg}
        />
        <Image
          source={require("../../assets/amazon_logo.png")}
          style={styles.amazonlogoimg}
        />
      </View>
      {/* NAVEGAÇÃO */}
      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>HOME</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>SERIES</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>FILMES</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>INFANTIL</Text>
        </TouchableOpacity>
      </View>
 
      <ScrollView shows VerticalScrollIndicator={false}> 
        {/* THUMBNAIL */}
      <Text style={styles.movieText}>Acabaram de chegar</Text>
      <FlatList
        data={MOVIESCARDS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        showsHorizontal ScrollIndicator={false}
        style={styles.chegou}
      />

        {/* THUMBNAILS */}
        {/* 01 */}
        {/* puxar os filmes automaticamente pelo id */}
        <Text style={styles.movieText}>Continue assistindo...</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />

        <Text style={styles.movieText}>Recomendados</Text>
        <FlatList
          data={MOVIERECOMENDADOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />

        {/* THUMBNAILS */}
        {/* 02 */}
        <Text style={styles.movieText}>Lançamento</Text>
        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />

      </ScrollView>
      <View style = {styles.footer}>
        <TouchableOpacity style = {styles.button}>
          <Icon name = "home" size = {25} color = {"#fff"}> </Icon>
          <Text style = {styles.label}>
            Inicio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
          <Icon name = "cloud-download" size = {25} color = {"#fff"}> </Icon>
          <Text style = {styles.label}>
            Downloads
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
          <Icon name = "settings-sharp" size = {25} color = {"#fff"}> </Icon>
          <Text style = {styles.label}>
            Config
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
