import { Client, Databases } from 'appwrite';

export const PROJECT_ID = '665c907c002edf8c66d3'
export const DATABASE_ID = '665c9175002edb203698'
export const COLLECTION_ID_MESSAGES = '665c918100182266cc85'

const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('665c907c002edf8c66d3');

export const databases = new Databases(client);

export default client;