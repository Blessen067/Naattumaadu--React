import React from 'react';
import Navbar from '../../components/Navbar'
import About from '../../components/about'
import Category2 from '../../components/Category2'
import TeamSection from '../../components/team'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const AboutPage = (props) => {

    return (
        <div>
            <Navbar />
            <PageTitle pageTitle={' TASTE AND TRADITION'} pagesub={' TASTE AND TRADITION'}/> 
            <About/>
            <Category2 StyleClass={'style-2'}/>
            <TeamSection/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default AboutPage;


