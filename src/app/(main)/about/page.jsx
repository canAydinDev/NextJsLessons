import PageHeader from '@/components/common/page-header'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  
  return (
    <div>
      <PageHeader title="About"/>
      <Image src="https://d4.alternativeto.net/dLRLkuGcmFrVsSCCa_au2qYaxgcHkrz5vS_dQwdPjUM/rs:fill:1520:760:0/g:ce:0:0/YWJzOi8vZGlzdC9jb250ZW50LzE3MDc5MjY2NDUzODYucG5n.png?width=1520"
       width={1000} height={700} alt="lorem"/>
    </div>
  )
}

export default AboutPage