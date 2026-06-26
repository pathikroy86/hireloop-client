import { serverFetch } from "@/lib/core/server"

export const getPlanById = async (planId) => {
    return serverFetch(`/api/plans?planId=${planId}`)
}