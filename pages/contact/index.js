import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const GalleryPage = (props) => {

    return (
        <div>
            <Navbar  />
            <PageTitle pageTitle={'QUILL & PLATTER'} pagesub={'QUILL & PLATTER'}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default GalleryPage;


