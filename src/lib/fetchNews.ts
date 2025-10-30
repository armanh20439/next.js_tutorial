import { NewsItem } from "@/types/news";

export const fetchNews = async (category: string, search: string) => {
  try {
    const response = await fetch("http://localhost:3000/data.json", {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("HTTP error");
    }

    const data = await response.json();

    // Filter data locally
    const filtered = data.filter((item: NewsItem) => {
      const matchesCategory =
        category === "all" || item.categories.includes(category);
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.snippet.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    return filtered;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
