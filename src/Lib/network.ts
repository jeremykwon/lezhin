import Axios, { AxiosInstance } from "axios";

const lezhinAxios: AxiosInstance = Axios.create({
  baseURL: "http://0.0.0.0:5000",
  headers: { "Cache-Control": "no-cache" },
});

type Props = {
  url: string;
  method?: string;
  options?: any;
};

export default async function sendAPI({
  url,
  method = "get",
  options = {},
}: Props) {
  try {
    const res = await lezhinAxios({
      url,
      method,
      ...options,
    });

    return res;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}
