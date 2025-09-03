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
          <Text style={styles.categoryText}>TV SHOWS</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>MOVIES</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>KIDS</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* THUMBNAILS */}
        {/* 01 */}
        <TouchableOpacity style={styles.MovieImageThumbnail}>
          <Image source={MovieTheWheel}></Image>
        </TouchableOpacity>

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

        {/* THUMBNAILS */}
        {/* 02 */}
        <Text style={styles.movieText}>Recomendados</Text>
        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />

        {/* THUMBNAILS */}
        {/* 03 */}
        <Text style={styles.movieText}>Crimes e Guerra</Text>
        <FlatList
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />
      </ScrollView>
    </View>
  );
};
