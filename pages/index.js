import styles from "../styles/Home.module.css";
import WeatherAPI from "./WeatherAPI";

export default function Home() {
  return (
    <div className={styles.container}>
      <WeatherAPI />
    </div>
  );
}
