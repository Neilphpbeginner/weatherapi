import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Button variant="danger" onClick={() => console.log("Danger")}>
        Danger
      </Button>
    </div>
  );
}
