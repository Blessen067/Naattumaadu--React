import React from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import GalleryPage from '../../components/gallery/gallery';

const Gallery = (props) => {

    return (
        <div>
            <Navbar />
            <PageTitle pageTitle={'A VISUAL ODE'} pagesub={' A VISUAL ODE'}/> 
            <GalleryPage/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default Gallery;


