import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Section, Space } from "bliss-core";

export default function Home() {
  return (
    <>
      <Space>
        <Button onClick={() => alert("HELLO WORLD!")} pill>
          HELLO WORLD!
        </Button>
      </Space>
      <Space>
        <Section>HELLO WORLD!</Section>
      </Space>
    </>
  );
}
