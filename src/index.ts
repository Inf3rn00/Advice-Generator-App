
    const adviceNum = document.getElementById("advice-number")!;
    const adviceText = document.getElementById("advice-text")!;
    const btn = document.getElementById("btn")!;

    async function fetchAdvice() {
        try{
            const response= await fetch("https://api.adviceslip.com/advice")
            const data: any = await response.json()
            console.log(data)
        adviceNum.innerText = `ADVICE # ${data.slip.id}`
        adviceText.innerText = `${data.slip.advice}`
        
        }
        catch(error){
            console.log(error)
        }
      }
      


    document.addEventListener("DOMContentLoaded", fetchAdvice);
    btn?.addEventListener("click", fetchAdvice);


