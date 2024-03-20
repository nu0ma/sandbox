import pino from "pino";

export const logger = pino({
  level: "info",
  timestamp: () => `,"time":"${new Date().toISOString()}"`,
});
