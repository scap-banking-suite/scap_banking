import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  try {
    const authenticated = request.cookies.get("accessToken");
    const pathname = request.nextUrl.pathname;

    if (
      !authenticated &&
      pathname !== "/auth/login" &&
      pathname !== "/auth/resetpassword"
    ) {
      // If not logged in and not on the allowed pages, redirect to the login page
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (authenticated && (pathname === "/auth/login" || pathname === "/")) {
      return NextResponse.redirect(new URL("/dashboard/overview", request.url));
    }
    // Allow the user to continue to the requested page
    return NextResponse.next();
  } catch (error: any) {
    console.error("Error:", error?.message);
  }
};

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
