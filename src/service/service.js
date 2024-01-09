export const downloadService=()=>{
    const downloadInstance = document.createElement("a")

    downloadInstance.href = "https://drive.usercontent.google.com/u/0/uc?id=12KVEchJveVq4tfAe7xeqUaS8K6XNz64K&export=download"
    downloadInstance.target = "_blank"
    downloadInstance.download = "CV - Mariano Arias"

    document.body.appendChild(downloadInstance)
    downloadInstance.click();
    document.body.removeChild(downloadInstance)
}