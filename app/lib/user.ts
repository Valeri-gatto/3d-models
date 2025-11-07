import { headers } from "next/headers";

export async function getUserId() {
    const headersList = await headers();
    const user_id = headersList.get('x-user-id');
    if (!user_id) {
        throw new Error('User_id not found');
    }
    return user_id;
}