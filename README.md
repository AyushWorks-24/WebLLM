**🌐 WebLLM — Run LLMs Directly in Your Browser with WebGPU**

<p align="center"> <img src="https://img.shields.io/badge/WebGPU-Enabled-blue" /> <img src="https://img.shields.io/badge/AI-Local%20Inference-brightgreen" /> <img src="https://img.shields.io/badge/License-MIT-orange" /> </p>

WebLLM is a lightweight, privacy-focused project that lets you run modern Large Language Models entirely inside your browser — powered by WebGPU.
No backend. No API keys. No server cost.
Everything runs locally on your device. ⚡

🚀 Key Highlights

⚡ 100% Client-Side Inference

🔒 Zero Data Upload — Full Privacy

🧠 Runs LLaMA, Gemma, Mistral, Phi, and more

💻 WebGPU acceleration → Fast inference

📦 Simple API for chat & text generation

🌐 Works on Chrome, Edge, Brave (WebGPU-enabled)

📸 Demo Preview

(Add a screenshot or GIF here for a polished look)
Example:

/public/demo.png

📁 Project Structure
WebLLM/
│── src/
│   ├── components/    # UI components
│   ├── models/        # Model loaders & config
│   └── utils/         # Helper functions
│── public/            # Static assets + model files
│── package.json
│── vite.config.js
└── README.md

⚙️ Installation
Clone the repository
git clone https://github.com/AyushWorks-24/WebLLM
cd WebLLM

Install dependencies
npm install

Start development server
npm run dev


Now open the link shown in the terminal (usually: http://localhost:5173/).

🤖 Using WebLLM in Your Project

Example of loading a model and generating text:

import { CreateWebLLMChat } from "@mlc-ai/web-llm";

async function run() {
  const chat = await CreateWebLLMChat("Llama-3-8B");
  const output = await chat.generate("Hello WebLLM!");
  console.log(output);
}

run();

🌟 Supported Models

WebLLM supports a wide range of models:

LLaMA 3

Mistral

Gemma

Phi-2 / Phi-3

Qwen

And more depending on browser memory limits.

🛠️ Browser Requirements

To run LLMs locally:

✔ Chrome 113+ / Edge 113+

✔ WebGPU enabled

✔ Good GPU recommended (but not mandatory)

Check if WebGPU works:

chrome://flags → search “WebGPU” → Enable

📌 Roadmap

 UI redesign

 Multi-model selector

 Offline model caching

 Voice input (Speech-to-Text)

 Chat history + export

 Dark / Light theme switch

🤝 Contributing

Contributions are welcome!
If you have ideas or improvements, feel free to:

Open an Issue

Create a Pull Request

📄 License

This project is licensed under the MIT License.

👤 Author

AyushWorks-24
GitHub: https://github.com/AyushWorks-24
