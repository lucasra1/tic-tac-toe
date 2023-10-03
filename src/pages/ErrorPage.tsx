import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError() as any;
  console.log(error);


  return (
    <div className="flex flex-col justify-center">
      <h2>Oops!</h2>
      <p>Sorry something went wrong</p>

      <p className="text-red-500">
        {error?.statusText || error?.message}
      </p>

    </div>
  );
}
