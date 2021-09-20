import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Section, Space } from "bliss-core";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState(null);

  const queryApi = useCallback(async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    setName(data.name);
  }, []);

  useEffect(() => {
    queryApi();
  }, [queryApi]);
  return (
    <>
      {name && <div>API: {name}</div>}
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
