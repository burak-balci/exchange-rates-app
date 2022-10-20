import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import styles from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState("");
  const [text, setText] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  const fetchData = async () => {
    await axios
      .get("http://localhost:3001/api/exchangerates")
      .then((item) => setData(item));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
          placeholder="Döviz ara..."
        />
        <button
          className={styles.button}
          onClick={() => setIsSorted(!isSorted)}
        >
          {isSorted ? "↑ Sırala" : "↓ Sırala"}
        </button>
      </div>
      <div>{data && <Table data={data} text={text} isSorted={isSorted} />}</div>
    </div>
  );
};

export default Home;
