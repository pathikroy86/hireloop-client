'use server';

import { serverMutation } from "@/lib/core/server";


export const createSubscription = async (subInfo) => {
    return serverMutation('/api/subscriptions', subInfo);
}