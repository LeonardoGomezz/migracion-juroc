export const getGoogleUrl = (from: string, client_id: string, redirect:string) => {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'

  const options = {
    redirect_uri: redirect,
    client_id: client_id,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/calendar'
    ].join(' '),
    state: from,
  }

  const qs = new URLSearchParams(options)

  return `${rootUrl}?${qs.toString()}`
}
