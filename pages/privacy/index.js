import React from "react";
import Navbar from '../../components/Navbar'
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import PrivacyPage from "../../components/Privacy";



const Privacy = (props) => {
    return (
        <>
             <Navbar  />
             <PageTitle  pageTitle={'Privacy Policy'} pagesub={'Privacy Policy'}/>
            <PrivacyPage/>
            <Footer />
            <Scrollbar/>
        </>
    )
}
export default Privacy;