import About from "./componets/About";
import Atricle1Card from "./componets/Atricle1Card";
import Articles from "./componets/Cards";
import ExploreArticles from "./componets/ExploreArticles";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import Navs from "./componets/nav";
import Nav from "./componets/nav"
import ProfetionalExprience from "./componets/ProfetionalExprience";
import RecentlyPubArticle from "./componets/RecentlyPubArticle";
import Subscribe from "./componets/Subscribe";

export default function Home() {
  return (

    <div >


    <div
      style={{
        backgroundImage: `url('/heroo.jpg')`, // Make sure this path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: '100vw',
        height: '100vh', // Ensure the div has height to display the background
      }}
      >
<Navs />   

<Hero/>
      </div>
   
<ProfetionalExprience/>
<RecentlyPubArticle/>
<About/>
<ExploreArticles/>
<Subscribe/>



 </div>
  );
}
