import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, isValidAdminSessionCookieValue } from "@/lib/admin-auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Admin Protection Logic
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const cookie = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (!(await isValidAdminSessionCookieValue(cookie))) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // 2. Global Password Protection for the rest of the site (bypasses static files & APIs)
  if (
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/_next") &&
    !pathname.includes(".") // skips files like favicon.ico
  ) {
    const basicAuth = request.headers.get("authorization");

    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [, pwd] = Buffer.from(authValue, "base64").toString().split(":");

      // Change "yourpassword" to your preferred password
      if (pwd === "Stake-Crypto") {
        return NextResponse.next();
      }
    }

    return new NextResponse("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
