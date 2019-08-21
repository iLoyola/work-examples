import DeviceDetector from "device-detector-js"
import Glide from "@glidejs/glide"

const viewportWidth = window.innerWidth

const deviceDetector = new DeviceDetector()
const userAgent = deviceDetector.parse(navigator.userAgent)
const device = userAgent.device.type

const work1 = new Glide(".glide-1", { startAt: 1 }).mount()
const work2 = new Glide(".glide-2", { startAt: 1 }).mount()
const work3 = new Glide(".glide-3", { startAt: 1 }).mount()

if (device === 'smartphone') {
  document.body.classList.add("smartphone")
}

if (viewportWidth > 720 || device !== 'smartphone') {
  work1.destroy()
  work2.destroy()
  work3.destroy()
}
