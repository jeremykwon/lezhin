import { rest } from "msw";
import { page1, page2, page3, page4, page5 } from "Resource/Json";

const url = "http://0.0.0.0:5000";

export const handlers = [
  rest.get(`${url}/api/comics/romance`, (req, res, ctx) => {
    const jsonDatas = [page1, page2, page3, page4, page5];
    const pageId = Number(req.url.searchParams.get("page"));

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(jsonDatas[pageId - 1])
    );
  }),
];
