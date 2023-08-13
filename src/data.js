import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "Home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const iconLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 2,
    href: "https://www.facebook.com",
    icon: "fab fa-facebook",
  },
  {
    id: 3,
    href: "https://www.squarespace.com/",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    title: "Saving Money",
    icon: "fas fa-wallet fa-fw",
    text: "We provide additional coupons and high concession on different offers",
  },
  {
    id: 2,
    title: "Endless Hiking",
    icon: "fas fa-tree fa-fw",
    text: "Explore the world, be a step ahead and make a difference",
  },
  {
    id: 3,
    title: "Amazing Comfort",
    icon: "fas fa-socks fa-fw",
    text: "We make sure comfort is not compromised while hiking",
  },
];

export const tours = [
  {
    id: 1,
    title: "Tibet Adventure",
    date: "August 26th, 2023",
    text: "We provide additional coupons and high concession on different offers",
    days: 6,
    price: 2100,
    country: "China",
    img: tour1,
  },
  {
    id: 2,
    title: "Best of Java",
    date: "October 11th, 2023",
    text: "Explore the world, be a step ahead and make a difference",
    days: 11,
    price: 1400,
    country: "Indonesia",
    img: tour2,
  },
  {
    id: 3,
    title: "Explore Hong Kong",
    date: "September 15th, 2023",
    text: "We make sure comfort is not compromised while hiking",
    days: 8,
    price: 50000,
    country: "Hong Kong",
    img: tour3,
  },
  {
    id: 4,
    title: "Kenya Highlights",
    date: "September 15th, 2023",
    text: "We make sure comfort is not compromised while hiking",
    days: 20,
    price: 4300,
    country: "Kenya",
    img: tour4,
  },
];
