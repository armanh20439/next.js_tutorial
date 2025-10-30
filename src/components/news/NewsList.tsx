"use client";
import NewCard from '@/components/shared/NewCard'
import { fetchNews } from "@/lib/fetchNews";
import { NewsItem } from "@/types/news";
import React, { useEffect, useState } from "react";

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };
    getNews();
  }, [category, search]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">News List</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="sports">Sports</option>
          <option value="finance">Finance</option>
        </select>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {
        news.map((item:NewsItem)=>(
                  <NewCard key={item?._id} item={item}/>
                 ))
      }
      </div>
    </div>
  );
};

export default NewsList;
