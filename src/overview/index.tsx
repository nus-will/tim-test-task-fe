import { useDemoQuery } from "../hooks/demo-query";

export default function Overview() {
  const { isLoading, data } = useDemoQuery();
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <h1>"Loading..."</h1>
      ) : (
        <div>
          <h1>Overview</h1>
          <h1>{data?.name}</h1>
          <p>{data?.description}</p>
        </div>
      )}
    </div>
  );
}
