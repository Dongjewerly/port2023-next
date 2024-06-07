import React from 'react'
import { portText } from '@/constants'
import Image from 'next/image'

const Port = () => {
  return (
    <section id="port">
        <div class="port_inner">
            <div class="port_title">
                portfolio <em>포폴 작업물</em>
            </div>
            <div class="port_wrap">
                {portText.map((port,index)=>(
                  <article class={`port_item p${index}`} key={index}>
                    <span class="num">{port.num}</span>
                    <a href={port.code} target='_blank' class="img">
                      <Image src={port.img} alt={port.name} width={420} height={262} />
                    </a>
                    <h3 class="title">{port.title}</h3>
                    <p class="desc">
                      {port.desc}
                    </p>
                    <a href={port.view} target='_blank' class="site">사이트보기</a>
                  </article>
                ))}
                {/* <article class="port_item p0">
                    <span class="num">00.</span>
                    <a href="https://github.com/Dongjewerly" target="_blank" class="img">
                        <img src="assets/img/port07.jpg" alt="유동석 포트폴리오" />
                    </a>
                    <h3 class="title">웹표준을 맞춘 웹사이트</h3>
                    <p class="desc">
                        웹표준, 웹접근성의 초점을 둔 웹사이트 예시입니다.
                    </p>
                    <a href="https://wondrous-starburst-dbbf77.netlify.app/" target="_blank" class="site">사이트보기</a>
                </article> */}
            </div>
        </div>
    </section>
  )
}

export default Port
