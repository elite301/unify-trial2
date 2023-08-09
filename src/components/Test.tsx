import useUsers from "hooks/useUsers"

export const Test = () => {
  const users = useUsers();

  console.log(users);

  return <div>sdf</div>;
}
