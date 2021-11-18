import { rest } from "msw";
import { createChaosResponse } from "msw-chaos-composition"

const chaosRes = createChaosResponse();

export const response = [
  rest.get("/hoges", (req, res, ctx) => {
    return chaosRes(
      ctx.status(200),
      ctx.json([
        {
          title: "mock title",
          createdAt:  "2021/11/16 15:59",
        }
      ])
    )
  })
]