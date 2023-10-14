import { NextResponse } from 'next/server'
import { prompt, system } from '../../../lib/prompt.js'
import OpenAI from 'openai'
const openai = new OpenAI()

const resume = async () => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // 'gpt-4',
      messages: [
        {role: 'system', content: system},
        {role: 'user', content: prompt}
      ]
    })

    console.log(response)
    return NextResponse.json({resume: response.choices[0].message.content})
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: e.message })
  }
}

export const GET = resume
