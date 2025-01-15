const button1 = document.getElementsByClassName('button1')
const button2 = document.getElementsByClassName('button2')
const button3 = document.getElementsByClassName('button3')
const buttons = [button1, button2, button3]

const calculateStitchesBySpi = event => {
    const direction = event.srcElement.parentElement.className
    const spi = document.getElementById(`${direction}-spi`).value
    const inches = document.getElementById(`${direction}-inches`).value
    const stiches = spi * inches
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
    const spi2 = document.getElementById(`${direction}-spi2`).value
    const totalStitches = stitchesInRepeat * repeats
    const inches = totalStitches / spi2
    document.getElementById(`${direction}-output3`).innerText = `Inches ${direction} = ${inches.toFixed(2)}`
}

button1.handler = calculateStitchesBySpi
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
