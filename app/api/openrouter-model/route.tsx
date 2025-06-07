import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  const { provider, userInput } = await req.json();

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: provider,
        messages: [
          { role: "user", content: userInput },
        ],
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "localhost:3000",
        },
      }
    );

    const answer = response.data.choices[0].message;

    return NextResponse.json({
      role: answer.role,
      content: answer.content,
    });
  } catch (error) {
    console.error("OpenRouter Error:", error);
    return NextResponse.json({
      role: "assistant",
      content: "Terjadi kesalahan saat mengambil jawaban dari model.",
      
    }, { status: 500 });
  }
}

