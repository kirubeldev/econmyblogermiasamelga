import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Articles from "./Cards";

const RecentlyPubArticle = () => (
  <div className="max-w-6xl mx-auto ">
    <div className="max-w-6xl mx-auto mt-[100px] flex justify-between items-center">
      <p className="text-[40px] font-semibold"> Recently Published Articles </p>

      <button className="flex items-center border gap-6 bg-white backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px]">
        See More <MdOutlineArrowOutward className="text-[20px]" />
      </button>
    </div>

    <div className="flex flex-col justify-center md:justify-between md:flex-row">
    <Articles
        dates={"mon 19th june , 2024"}
        img={"./art1.png"}
        title={"The Power of Innovation: Driving Business Success in a Dynamic World"}
        desc={
          "In today&#39;s fast-paced business landscape, innovation is the key to staying competitive and relevant. This article explores how companies can harness creativity and technology to drive growth, enhance customer experience"
        }
        type={"Business & Innovation "}
      />

      <Articles
        dates={"mon 19th june , 2024"}
        img={"./art2.png"}
        title={"አዲሱን ኢኮኖሚ መሻገር: ለተስተናጋጅ እድገት ዘዴዎች"}
        desc={
          "ዓለም አቀፉ ኢኮኖሚው በፍጥነት እያሻሻለ እንዲሁም ችግሮችንና እድሎችን እየቀረበ ነው። ይህ ጽሑፍ ንግዶችና መንግስታት በተስተናጋጅ እድገት ላይ የሚያመለክቱትን ዘዴዎች፣ ለገቢ ሁኔታዎች መስተካከል እንዴት እንደሚቻል ያተኩራል።"
        }
        type={"Economy"}
      />

      <Articles
        dates={"mon 19th june , 2024"}
        img={"./art3.png"}
        title={"Pathways to Health: How We Can Improve Wellness Sustainably"}
        desc={
          "Worem ipsum dolor sit amet sur, consectet    adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet ur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        }
        type={"Health"}
      />
    </div>
  </div>
);

export default RecentlyPubArticle;
