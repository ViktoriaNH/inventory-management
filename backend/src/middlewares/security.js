export const csp = (req, res, next) => {
  res.setHeader("Content-Security-Policy", [
 "default-src 'self'",
      "script-src 'self' https://*.clerk.com https://*.clerk.accounts.dev",
      "frame-src https://*.clerk.com https://*.clerk.accounts.dev",
      "connect-src 'self' http://localhost:3000 https://inventory-management-6e51.onrender.com https://inventory-management-dgxh.onrender.com https://*.clerk.com https://*.clerk.accounts.dev",
      "img-src 'self' data: https://*.clerk.com https://*.clerk.accounts.dev",
      "style-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
  ].join("; "));
  next();
};

export const logger = (req, res, next) => {
  console.log("➡️ BACKEND GOT:", req.method, req.url);
  next();
};