//import Image from "next/imag

import Banner from "@/components/shared/Banner";
import NewCard from '@/components/shared/NewCard'
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";
const Home = async()=> {
  const data = await fetch('http://localhost:3000/data.json')
  const news = await data.json();  
  console.log("news",news);
  return (
    <div className="py-12">
        <Banner></Banner>
        <div className="my-12">
            <h2 className="text-2xl font-bold mb-8">Latest News</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {
                 news.slice(4,8).map((item:NewsItem)=>(
                  <NewCard key={item?._id} item={item}/>
                 ))
               }
           </div>
        </div>
        <NewsLetter></NewsLetter>
    </div>
  );
}
export default Home