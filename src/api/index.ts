import { Client, Account, ID } from 'appwrite';
import { API_ENDPOINT, PROJECT_ID } from '../../config.ts';

const client = new Client()
  .setEndpoint(API_ENDPOINT) // Your API Endpoint
  .setProject(PROJECT_ID); // Your project ID

const account = new Account(client);

export { client, account, ID };
