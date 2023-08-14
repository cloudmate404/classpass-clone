import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { createClient, OAuthStrategy } from "@wix/api-client";
// services are the bookings you filled on wix site
import { services } from "@wix/bookings";
import Cookies from "js-cookie";
import Card from "@/components/Card";

const myWixClient = createClient({
  // the "services" is what i want to get back, hence why it is in "modules"
  modules: { services },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    // to check if i'm logged in
    tokens: JSON.parse(Cookies.get("session") || null),
  }),
});

const Search = () => {
  const [serviceList, setServiceList] = useState([]);

  const fetchServices = async () => {
    // All in the WIX documentation
    const serviceList = await myWixClient.services.queryServices().find();
    setServiceList(serviceList.items);
  }; 

  useEffect(() => {
    fetchServices();
  }, []);
  console.log(serviceList);
  return 
  <div className="search-container">
    <div className="results-container">
      <h2> Choose Class: </h2>
      <ul>
        <li>
        <Link href="/">
          <Card />
        </Link>
           
        </li>
      </ul>
    </div>
  </div>
  ;
};

export default Search;

// Install the wix api client and wix bookings and js cookies"npm i @wix/api-client @wix/bookings js-cookie"
