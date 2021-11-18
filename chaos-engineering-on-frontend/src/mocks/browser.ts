import { setupWorker } from "msw";
import { response } from "./response";

export const worker = setupWorker(...response);