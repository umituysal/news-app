
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

async function HomePage() {
  // fetch the new data
  const news: NewsResponse = await fetchNews(categories.join(","));
  // set timeout for 2 second
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
