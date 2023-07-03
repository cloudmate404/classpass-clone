import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { createClient, OAuthStrategy } from "@wix/api-client";
// services are the bookings you filled on wix site
import { services } from "@wix/bookings";
import Cookies from "js-cookie";

const myWixClient = createClient({
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
  return <>Search</>;
};

export default Search;

// Install the wix api client and wix bookings and js cookies"npm i @wix/api-client @wix/bookings js-cookie"
