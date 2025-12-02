async function startEngine() {
    const statusText = document.getElementById('status');
    
   
    if (!navigator.gpu) { statusText.innerText = "❌ No WebGPU"; return; }
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter.requestDevice();
    
    statusText.innerHTML = `✅ System Active (${adapter.info.vendor})<br>⏳ Downloading Model Weights...`;

   
    const modelSize = 1000; 
    const modelWeights = new Float32Array(modelSize);
    
    
    for (let i = 0; i < modelSize; i++) {
        modelWeights[i] = Math.random(); 
    }

    console.log(`📦 Downloaded "Model" Size: ${modelWeights.byteLength} bytes`);

    
    
    statusText.innerHTML += `<br>⏳ Moving Weights to GPU VRAM...`;

    
    const weightBuffer = device.createBuffer({
        size: modelWeights.byteLength, 
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });

    
    device.queue.writeBuffer(weightBuffer, 0, modelWeights);

   
    const readBuffer = device.createBuffer({
        size: 4, 
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
    });

    
    const commandEncoder = device.createCommandEncoder();
    commandEncoder.copyBufferToBuffer(weightBuffer, 0, readBuffer, 0, 4);
    device.queue.submit([commandEncoder.finish()]);

    await readBuffer.mapAsync(GPUMapMode.READ);
    const resultData = new Float32Array(readBuffer.getMappedRange());
    const prediction = resultData[0];

    statusText.innerHTML = `
        ✅ <b>WebLLM Engine Ready!</b><br>
        ---------------------------------<br>
        🖥️ <b>GPU:</b> ${adapter.info.vendor}<br>
        📦 <b>Model Loaded:</b> ${modelSize} Parameters (Simulated)<br>
        🚀 <b>First Weight (Prediction):</b> ${prediction.toFixed(4)}
    `;
    
    console.log("Model successfully loaded into VRAM!");
}

startEngine();