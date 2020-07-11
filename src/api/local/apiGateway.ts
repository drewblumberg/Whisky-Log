import axios from 'axios'
import Whisky from '../../models/whisky';

const baseUrl = 'https://nop6udtzm2.execute-api.us-east-1.amazonaws.com/v1/';
interface GetWhiskysResponse {
    records: Whisky[]
}

export async function readWhiskys(): Promise<Whisky[]> {
    const response = await axios.get<GetWhiskysResponse>(baseUrl + 'whiskyList');

    return response.data.records;
}