export function RepositoryItem(props) {
  return (
    <ul>
      <li>
        <strong>{props.repository_name?.name ?? "default"}</strong>
        <p>{props.repository_name?.description ?? "default"}</p>
        <a href="">{props.repository_name?.name ?? "default"}</a>
      </li>
      <li>
        <strong>{props.repository_name?.name ?? "default"}</strong>
        <p>{props.repository_name?.name ?? "default"}</p>
        <a href="">{props.repository_name?.link ?? "default"}</a>
      </li>
    </ul>
  );
}
