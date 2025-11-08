import { NextRequest, NextResponse, ProxyConfig } from "next/server";
import { getDB } from "@/app/lib/db";
import { Sessions } from "@/app/types";
import { randomBytes } from "crypto";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const CookieParams: Partial<ResponseCookie> = {
    path: "/",
    maxAge: 365 * 24 * 60 * 60,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
};

export async function proxy(request: NextRequest): Promise<NextResponse> {
    const sessionIdFromCookies = request.cookies.get("session_token")?.value;
    const db = getDB();

    if (sessionIdFromCookies) {
        const findSessionFromDB = db.prepare<Buffer<ArrayBuffer>, Sessions>('SELECT * FROM sessions WHERE session_token=?').get(
            Buffer.from(sessionIdFromCookies, 'hex')
        );
        if (findSessionFromDB) {
            const newRequestHeaders = new Headers(request.headers);
            newRequestHeaders.set('x-user-id', findSessionFromDB.id.toString())
            return NextResponse.next({
                request: {
                    headers: newRequestHeaders,
                }
            });
        }
    }

    const newCookie = randomBytes(16);
    const newCookieString = Buffer.from(newCookie).toString('hex');;
    const newUserId = db.prepare<Buffer, Sessions>('INSERT INTO sessions (session_token) VALUES (?);').run(newCookie).lastInsertRowid;

    const newRequestHeaders = new Headers(request.headers);
    newRequestHeaders.set('x-user-id', newUserId.toString())
    const resp = NextResponse.next({
        request: {
            headers: newRequestHeaders,
        }
    });
    resp.cookies.set("session_token", newCookieString, CookieParams);
    return resp;
}

export const config: ProxyConfig = {
    matcher: ["/((?!images|static).*)", "/"]
};
