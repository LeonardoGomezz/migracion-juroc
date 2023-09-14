const config = {
  API_URL: process.env.NEXT_PUBLIC_SERVICE_FORM,
  TENANT_MC: process.env.NEXT_PUBLIC_TENANT_MC,
  TENANT: process.env.NEXT_PUBLIC_TENANT as string,
  DOMAIN_URL: process.env.NEXT_PUBLIC_DOMAIN_PROJECT as string,
  SENDER_EMAIL: process.env.NEXT_PUBLIC_MAILER_SENDER,
  EMAIL_PASS: process.env.NEXT_PUBLIC_PASSWORD,
  HOST_EMAIL: process.env.NEXT_PUBLIC_MAILER_HOST,
  API_CITIES: process.env.NEXT_PUBLIC_API_CITIES as string,
  USER_LOGIN: process.env.NEXT_PUBLIC_USER_LOGIN,
  PASS_LOGIN: process.env.NEXT_PUBLIC_PASSWORD_LOGIN,
  ACCESS_TOKEN: process.env.NEXT_PUBLIC_ACCESS_TOKEN
}

export default config
