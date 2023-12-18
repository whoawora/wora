"use client"

import React,{useState} from 'react'
import Image from 'next/image'
import tawisetimg from '@/image/tawiset-cover.png'
import TawisetDetail from '@/image/tawisetDetail.svg'
import Furcover from '@/image/furniture-cover.png'
// import RedesignFurDetail from '@/image/redesign-funiture.svg'
import { motion } from 'framer-motion';
import { imgSlide } from './anim';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import styles from './style.module.scss'

type Props = {}

export default function Work({}: Props) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [open1, setOpen1] = React.useState<boolean>(false);

  const [numPages, setNumPages] = useState(null)
  const onDocumentSuccess = ({numPages}: {numPages:any}) => {
   setNumPages(numPages)
  }

  return (
    <>
    <div className='bg-black h-full pt-20'>
      <div className='px-6 xl:px-28'>
        <div className="grid grid-cols-1 gap-36">
          <div>
              <div color="neutral" onClick={() => setOpen(true)}>
            <motion.div variants={imgSlide} initial="initial" animate="enter" exit="exit">
              <div className="work-content rounded-3xl w-full h-full" data-aos="fade-up">
                  <Image src={tawisetimg} alt="Picture of the author" className='rounded-3xl' />
              </div> 
              </motion.div> 
            </div>
            <Modal open={open} onClose={() => setOpen(false)} className="modal-work" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',overflow:"hidden"}}>
              <Sheet className="scroll-hide"  sx={{ maxWidth: "100%",  maxHeight: "90vh",  backgroundColor:"#fff", outline:'none', border:"1px solid white", borderRadius: '10px', overflowY:"scroll"}}>
                <ModalClose variant="plain" sx={{ m: 1 , backgroundColor: "#fff", position: "sticky"}} />
                {/* <Typography mb={1}> </Typography> */}
                {/* <Image src={TawisetDetail} alt="Picture of the author"  className='rounded-3xl' /> */}
                <iframe className={styles.figma} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjFi3RCvOrquDHO2oSVQUav%2FSenior-Project%3Fpage-id%3D193%253A2%26type%3Ddesign%26node-id%3D193-381%26viewport%3D813%252C195%252C0.02%26t%3DgYpgC3MALBw2LBLL-1%26scaling%3Dscale-down-width%26mode%3Ddesign" allowFullScreen></iframe>
              </Sheet>
            </Modal>
          </div>
       


        <div color="neutral" onClick={() => setOpen1(true)}>
        <motion.div variants={imgSlide} initial="initial" animate="enter" exit="exit">
          <div className="work-content rounded-3xl bg-neutral-900 w-full h-full" data-aos="fade-up">
              <Image src={Furcover} alt="Picture of the author" className='rounded-3xl' />
          </div> 
          </motion.div> 
        </div>
        <Modal open={open1} onClose={() => setOpen1(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',overflow:"hidden" }}>
        <Sheet className="scroll-hide"  sx={{ maxWidth: "100%",  maxHeight: "90vh",  backgroundColor:"#fff", outline:'none', border:"1px solid white", borderRadius: '10px', overflowY:"scroll"}}>
          <ModalClose variant="plain" sx={{ m: 1 , backgroundColor: "#fff", position: "sticky"}} />
          
          <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FuGj2ALgoY0eRrxx13CUhvB%2Fe-commerce-(Furniture-Store)%3Fpage-id%3D1%253A2%26type%3Ddesign%26node-id%3D1-4%26viewport%3D495%252C416%252C0.31%26t%3DQlqqpT9Gu67XFFjK-1%26scaling%3Dscale-down-width%26mode%3Ddesign" allowFullScreen></iframe>
          </Sheet>
        </Modal>
        </div> 
      </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>

  
    </>
  )
}