import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const MailchimpKey = process.env.MAILCHIMP_API_KEY
    const MailchimpServer = process.env.MAILCHIMP_API_SERVER
    const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID

    if (!MailchimpKey) {
      console.error('MAILCHIMP_API_KEY is missing')
    }
    if (!MailchimpServer) {
      console.error('MAILCHIMP_API_SERVER is missing')
    }
    if (!MailchimpAudience) {
      console.error('MAILCHIMP_AUDIENCE_ID is missing')
    }

    const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`

    const response = await fetch(customUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MailchimpKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json({ error: errorData.detail }, { status: response.status })
    }

    const received = await response.json()
    return NextResponse.json(received, { status: 201 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
