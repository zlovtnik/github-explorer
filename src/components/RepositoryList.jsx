import { RepositoryItem } from "./RepositoryItem";

const repository_name = {
    name: 'RCS',
    description: 'Forms in React',
    link: 'https://github.com/rcs'
}
export function RepositoryList() {
  return (
    <section>
      <h1>Lista os repositórios</h1>
      <ul>
        <RepositoryItem repository_name = {repository_name} />
        <RepositoryItem repository_name = {repository_name} />
        <RepositoryItem repository_name = {repository_name}/>
        <RepositoryItem repository_name = {repository_name} />
        <RepositoryItem repository_name = {repository_name} />

      </ul>
    </section>
  );
}

