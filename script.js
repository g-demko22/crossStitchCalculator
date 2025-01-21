const button1 = document.getElementsByClassName('button1')
const button2 = document.getElementsByClassName('button2')
const button3 = document.getElementsByClassName('button3')
const buttons = [button1, button2, button3]

const calculateStitchesByFabricCount = event => {
    const direction = event.srcElement.parentElement.className
    const fabricCount = document.getElementById(`${direction}-fabric-count`).value
    const inches = document.getElementById(`${direction}-inches`).value
    const stiches = fabricCount / 2 * inches
    document.getElementById(`${direction}-output1`).innerText = `Stitches ${direction} = ${stiches}`
}
const calculateDesignRepeats = event => {
    const direction = event.srcElement.parentElement.className
    const stitchesAvailable = document.getElementById(`${direction}-stitches-available`).value
    const stitchesInDesign = document.getElementById(`${direction}-stitches-in-design`).value
    const designRepeats = stitchesAvailable / stitchesInDesign
    document.getElementById(`${direction}-output2`).innerText = `Design repeats ${direction} = ${designRepeats}`
}
const calculateInchesNeeded = event => {
    const direction = event.srcElement.parentElement.className
    const stitchesInRepeat = document.getElementById(`${direction}-stitches-in-repeat`).value
    const repeats = document.getElementById(`${direction}-repeats`).value
    const fabricCount2 = document.getElementById(`${direction}-fabric-count2`).value
    const totalStitches = stitchesInRepeat * repeats
    const inches = totalStitches / (fabricCount2 / 2)
    document.getElementById(`${direction}-output3`).innerText = `Inches ${direction} = ${inches.toFixed(2)}`
}

button1.handler = calculateStitchesByFabricCount
button2.handler = calculateDesignRepeats
button3.handler = calculateInchesNeeded

buttons.forEach(btnObj => {
    try {
        for(const btn in btnObj) {
            btnObj[btn].addEventListener('click', btnObj.handler)
        }
    } catch(err) {
        console.log(err)
    }
})
