import {createClient} from "next-sanity";

class SanityClient {
    constructor() {
        if (!this.client) {
            this.client = createClient({
                projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
                dataset: process.env.NEXT_PUBLIC_DATASET,
                apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
                useCdn: true,
            });
        }
        return this.client;
    }
}

export default function getClient() {
    return new SanityClient();
}