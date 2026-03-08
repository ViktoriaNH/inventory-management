import { Header } from "../layouts/Header";
import { LatestInventories } from "../section/LatestInventories";
import { TopInventories } from "../section/TopInventories";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className="container p-1 d-flex justify-content-center gap-2">
        <TopInventories />
        <LatestInventories />
      </main>
    </>
  );
};
