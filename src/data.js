import ariesImg from "./assets/aries.png";
import taurus from "./assets/taurus.png";
import gemini from "./assets/gemini.png";
import cancer from "./assets/cancer.png";
import leo from "./assets/leo.png";
import virgo from "./assets/virgo.png";
import libra from "./assets/libra.png";
import scorpius from "./assets/scorpius.png";
import sagittarius from "./assets/sagittarius.png";
import capricornus from "./assets/capricornus.png";
import aquarius from "./assets/aquarius.png";
import pisces from "./assets/pisces.png";

export function getData() {
  return [
    { title: "Aries", date: "March 21–April 19", image: ariesImg },
    { title: "Taurus", date: "April 20–May 20", image: taurus },
    { title: "Gemini", date: "May 21–June 21", image: gemini },
    { title: "Cancer", date: "June 22–July 22", image: cancer },
    { title: "Leo", date: "July 23–August 22", image: leo },
    { title: "Virgo", date: "August 23–September 22", image: virgo },
    { title: "Libra", date: "September 23–October 23", image: libra },
    { title: "Scorpio", date: "October 24–November 21", image: scorpius },
    {
      title: "Sagittarius",
      date: "November 22–December 21",
      image: sagittarius,
    },
    {
      title: "Capricorn",
      date: "December 22–January 19",
      image: capricornus,
    },
    { title: "Aquarius", date: "January 20–February 18", image: aquarius },
    { title: "Pisces", date: "February 19–March 20", image: pisces },
  ];
}
