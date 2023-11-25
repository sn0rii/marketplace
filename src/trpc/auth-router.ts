import { publicProcedure, router } from "./trpc";

export const authRouter = router({
  createPayloadUser: publicProcedure.input(),
});
