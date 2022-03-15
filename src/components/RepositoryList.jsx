import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositoty.scss";
import { useState, useEffect } from "react";

//https://api.github.com/users/zlovtnik/repos

export function RepositoryList() {
  const [repository, set_reposytory] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/zlovtnik/repos")
      .then((response) => response.json())
      .then((data) => set_reposytory(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista os repositórios</h1>
      <ul>
        {repository.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />;
        })}
      </ul>
    </section>
  );
}