import { NextResponse } from 'next/server'
import { prompt, system, skills as skillsData, positions } from '../../../lib/prompt.js'
import { connectToDatabase } from '../../../lib/db'
import OpenAI from 'openai'

const openai = new OpenAI()

const generateResume = async () => {
  const res = await req.json()
  const { position, skills } = res

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // 'gpt-4',
      messages: [
        {role: 'system', content: system({ position, skills })},
        {role: 'user', content: prompt({ position, skills })}
      ]
    })

    const { db } = await connectToDatabase()
    await db.collection('resumes').insertOne({
      positionText: positions[position],
      skillsText: skills.map((skill, i) => skillsData[i]),
      position: parseInt(position),
      skills: skills.map((skill) => parseInt(skill)),
      markdown
    })
    const markdown = response.choices[0].message.content

    console.log(response)
    return NextResponse.json({resume: markdown})
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: e.message })
  }
}

const randomResume = async () => {
  try {
    const { db } = await connectToDatabase()
    const resume = await db.collection('resumes').findOne({
    })
    console.log(resume)
    return NextResponse.json({resume})
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: e.message })
  }
}

export const POST = generateResume
export const GET = randomResume

