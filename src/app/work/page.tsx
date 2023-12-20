"use client"

import React,{useState} from 'react'
import Image from 'next/image'
import tawisetimg from '@/image/tawiset-cover.png'
import TawisetDetail from '@/image/tawiset-more.jpeg'
import Furcover from '@/image/furniture-cover.png'
import Furdetail from '@/image/fur-detail.jpg'
import Tcdccover from '@/image/tcdc-cover.jpg'
import TcdcDetail from '@/image/tcdc.jpeg'
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
  const [open2, setOpen2] = React.useState<boolean>(false);

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
              <Sheet className="scroll-hide"  sx={{ maxWidth: "80%",  maxHeight: "90vh",  backgroundColor:"#17132D", outline:'none', border:"1px solid white", borderRadius: '10px', overflowY:"scroll"}}>
                <ModalClose variant="plain" sx={{ m: 1 , backgroundColor: "#fff", position: "sticky"}} />
                <Image src={TawisetDetail} alt="Picture of the author"  className='rounded-3xl' />
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
        <Sheet className="scroll-hide"  sx={{ maxWidth: "80%",  maxHeight: "90vh",  backgroundColor:"#fff", outline:'none', border:"1px solid white", borderRadius: '10px', overflowY:"scroll"}}>
          <ModalClose variant="plain" sx={{ m: 1 , backgroundColor: "#fff", position: "sticky"}} />
          <Image src={Furdetail} alt="Picture of the author" />
          </Sheet>
        </Modal>


        <div color="neutral" onClick={() => setOpen2(true)}>
        <motion.div variants={imgSlide} initial="initial" animate="enter" exit="exit">
          <div className="work-content rounded-3xl bg-neutral-900 w-full h-full" data-aos="fade-up">
              <Image src={Tcdccover} alt="Picture of the author" className='rounded-3xl' />
          </div> 
          </motion.div> 
        </div>
        <Modal open={open2} onClose={() => setOpen2(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',overflow:"hidden" }}>
        <Sheet className="scroll-hide"  sx={{ maxWidth: "80%",  maxHeight: "90vh",  backgroundColor:"#fff", outline:'none', border:"1px solid white", borderRadius: '10px', overflowY:"scroll"}}>
          <ModalClose variant="plain" sx={{ m: 1 , backgroundColor: "#fff", position: "sticky"}} />
          <Image src={TcdcDetail} alt="Picture of the author" />
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