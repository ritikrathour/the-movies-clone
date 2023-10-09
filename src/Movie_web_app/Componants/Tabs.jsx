import { useState } from "react"

const Tabs = ({data,title,onTabChange}) => {
    const [selectedTab,setSelectedTab] = useState(0);
    const [left,setLeft] = useState(0);
    const activeTab = (tab,index)=>{
        setLeft(index * 110);
        setTimeout(() => {
            setSelectedTab(index) 
        }, 300);
        onTabChange(tab,index)
    }
    return (

        <>
        <div className="tab__header">
            <h2 className="title">{title}</h2>
            <ul className="tabs">
                {
                    data?.map((tab,index)=>{
                        return(
                            <li className={`tab ${selectedTab === index?"active" : ""}`} key={index}
                            onClick={()=> activeTab(tab,index)}>{tab}</li>
                        )
                    })
                }
                <div className="bgSlide" style={{left:left}}/>
            </ul>
        </div>
           
        </>
    )
}
export default Tabs;