import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import GalleryPage from '../../components/gallery/gallery';
import { gallery } from '../../utils/api';
import Project from '../../components/ProjectSection';

const Gallery = (props) => {
    const [galleryImages, setGalleryImage] = useState("");

    const galleryImage = async () => {
      const data = await gallery();
      setGalleryImage(data);
    };
  
    useEffect(() => {
      galleryImage();
    }, []); 

    return (
        <div>
            <Navbar />
            <PageTitle pageTitle={'A VISUAL ODE'} pagesub={' A VISUAL ODE'}/> 
            {/* <GalleryPage images={galleryImages}/> */}
            <Project images={galleryImages}/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default Gallery;


