import { initBotId } from "botid/client/core";

// Basic BotID is an invisible, no-cost integrity check on Vercel. Keeping the
// level explicit here and in the route prevents a dashboard setting from
// silently opting this low-volume contact form into paid Deep Analysis.
initBotId({
  protect: [
    {
      path: "/api/contact",
      method: "POST",
      advancedOptions: { checkLevel: "basic" },
    },
  ],
});
