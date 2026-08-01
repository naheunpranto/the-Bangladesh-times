import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  console.log(request, "request");

  const session = await auth.api.getSession({
        headers: await headers()
    })

  const isLoggedIn = false;

  if (isLoggedIn) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/career"],
};
