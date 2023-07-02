// from wix, import wixclient
import { createClient, OAuthStrategy } from "@wix.api-client";
import { NextResponse } from "next/server";

export async function middleware(request) {
  // this is to check that we are not logged in, and if we are not, we create a session for the user
  if (!request.cookies.get("session")) {
    const response = NextResponse.next();
    const myWixClient = createClient({
      auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID }),
    });
    response.cookies.set(
      "session",
      JSON.stringify(await myWixClient.auth.generateVisitorTokens())
    );
  }

  return response;
}
