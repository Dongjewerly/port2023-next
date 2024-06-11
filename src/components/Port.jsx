import React from 'react'
import { portText } from '@/constants'
import Image from 'next/image'

const Port = () => {
  return (
    <section id="port">
        <div className="port_inner">
            <div className="port_title">
                portfolio <em>포폴 작업물</em>
            </div>
            <div className="port_wrap">
                {portText.map((port,index)=>(
                  <article className={`port_item p${index}`} key={index}>
                    <span className="num">{port.num}</span>
                    <a href={port.code} target='_blank' className="img">
                      <Image src={port.img} alt={port.name} width={420} height={262} />
                    </a>
                    <h3 className="title">{port.title}</h3>
                    <p className="desc">
                      {port.desc}
                    </p>
                    <a href={port.view} target='_blank' className="site">사이트보기</a>
                  </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Port
