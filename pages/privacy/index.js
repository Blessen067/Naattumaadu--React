import React from "react";
import Navbar from '../../components/Navbar'
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import PrivacyPage from "../../components/Privacy";



const Privacy = (props) => {
    return (
        <>
             <Navbar  />
            <PrivacyPage/>
            <Footer />
            <Scrollbar/>
        </>
    )
}
export default Privacy;