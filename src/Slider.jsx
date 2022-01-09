import { useRef } from 'react'
import { sliderData } from './data.js'
import './Slider.css'

let curIndex = 0
let curTranslateX = -58
/* 
  @TODO: 무한 슬라이더
  @TODO: 일정 주기 반복 슬라이더
*/
export function Slider () {
  const slider = useRef(null)
  const newSliderData = [...sliderData]
  console.log('시작 인덱스', curIndex)

  if (curIndex === 0) {
    newSliderData.unshift({ ...sliderData[sliderData.length - 1], id: -1 })
  }

  console.log('sliderIndex', newSliderData)

  function onClickLeft () {
    curIndex = curIndex - 1
    curTranslateX = curTranslateX + 70
    slider.current.style.transform = `translateX(${curTranslateX}vw)`
    console.log('시작 인덱스', curIndex)
    console.log(`translateX(${curTranslateX}vw)`)
  }
  function onClickRight () {
    curIndex = curIndex + 1
    curTranslateX = curTranslateX - 70
    slider.current.style.transform = `translateX(${curTranslateX}vw)`
    console.log('시작 인덱스', curIndex)
    console.log(`translateX(${curTranslateX}vw)`)
  }
  if (slider.current) {
    slider.current.style.transform = 'translateX(55vw)'
  }

  return (
    <>
      <button onClick={onClickLeft} className='btn left'>
        왼쪽
      </button>
      <button onClick={onClickRight} className='btn right'>
        오른쪽
      </button>
      <div className='wrap-slider'>
        <div className='wrap-box' ref={slider}>
          {newSliderData.map((slider, idx) => {
            return (
              <div className='img-box' key={slider.id} id={slider.id}>
                <img src={slider.img} width='100%' height='100%' />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Slider
