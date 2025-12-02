# 🌐 CampusGenie: Browser-Native AI (WebGPU)

> **Zero-Server, 100% Private, Edge-AI Chatbot running directly in your browser.**

This module demonstrates the power of **Edge Computing** by running a **1 Billion Parameter LLM (Llama-3.2-1B)** entirely inside the user's web browser using **WebGPU**. No Python backend or cloud API is required for this version.

---

## ✨ Features

- **🚀 Serverless Architecture:** The model runs inside the browser (Client-side).
- **🔒 100% Privacy:** Your documents and queries never leave your device.
- **⚡ Hardware Accelerated:** Uses **WebGPU** to leverage your local GPU directly via JavaScript.
- **📄 RAG Support:** Upload any text file (`.txt`) and chat with it instantly.
- **💾 Offline Capable:** Once the model caches, it works without internet.

---

## 🛠️ Tech Stack

- **Model:** Llama-3.2-1B-Instruct-q4f16_1 (Quantized for Web)
- **Engine:** [MLC-LLM](https://mlc.ai/mlc-llm/) (Machine Learning Compilation)
- **Interface:** HTML5, CSS3, Vanilla JavaScript
- **Acceleration:** WebGPU API

---

## 🚀 How to Run (Setup Guide)

### Prerequisites
- A modern browser with **WebGPU Support** (Chrome 113+, Edge 113+).
- *Note: Firefox and Safari currently have experimental support only.*

### Steps:
1.  Navigate to the `Frontend` folder.
2.  You cannot open the HTML file directly (due to browser security policies). You need a local server.
3.  **Using VS Code:**
    - Install **"Live Server"** extension.
    - Right-click on `index.html`.
    - Select **"Open with Live Server"**.
4.  **Using Python:**
    ```bash
    python -m http.server 8080
    ```
    Then open `http://localhost:8080` in Chrome.

---

## 📂 File Structure

- **`index.html`**: The landing page with options to choose Basic or RAG mode.
- **`doc_chat.html`**: The main interface for **Document Chat (RAG)**. Allows file upload and context-aware chatting.

---

## ⚠️ Troubleshooting

**1. "WebGPU is not supported" Error:**
- Update your browser (Chrome/Edge) to the latest version.
- Ensure your Graphic Drivers are updated.
- If using Linux, you might need to enable specific flags in `chrome://flags`.

**2. Stuck at "Loading Model":**
- The first run downloads ~800MB of model weights. It depends on your internet speed.
- Open Browser Console (`F12`) to see the download progress percentage.

---

