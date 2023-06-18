import { useRouteError } from "react-router-dom";

export default function NoMatch() {
  let error = useRouteError() as Error;
  return (
    <>
      <h1>Error 404</h1>
      <p>{error?.message}</p>
    </>
  );
}
