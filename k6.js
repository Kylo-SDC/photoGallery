import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 100,
  rps: 1000,
  duration: '300s',
}



export default function() {
  // const postData = {
  //   restaurantId: 10000001,
  //   id: 150020816,
  //   date: "February 21 2020",
  //   image: "https://dibsondinner.s3-us-east-2.amazonaws.com/dibsondinnerresize/photo-50.jpg",
  // }

  // const postHeaders = {
  //   "Content-Type": "application/x-www-form-urlencoded",
  // }

  http.get("http://127.0.0.1:3009/?id=3");
  http.get("http://127.0.0.1:3009/?id=10000000");
  http.get("http://127.0.0.1:3009/?id=9000000");
  http.get("http://127.0.0.1:3009/?id=9500000");
};