import Glide from "@glidejs/glide"

const viewportWidth = window.innerWidth

const work1 = new Glide(".js-glide-1", { startAt: 1 }).mount()
const work2 = new Glide(".js-glide-2", { startAt: 1 }).mount()
const work3 = new Glide(".js-glide-3", { startAt: 1 }).mount()

if (viewportWidth > 720) {
  work1.destroy()
  work2.destroy()
  work3.destroy()
}
