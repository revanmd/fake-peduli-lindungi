import Link from "next/link"
import { useEffect, useState } from "react"

export const GetCurrentDate = () => {
    const currentdate = new Date()
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return currentdate.getDate() + " " + monthNames[currentdate.getMonth()] + " " + currentdate.getFullYear()
}

export const GetTimeAMPM = () => {
    const date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

const CheckIn = () => {

    const [Nama, setNama] = useState()
    const [Lokasi, setLokasi] = useState()
    const [Pengunjung, setPengunjung] = useState()
    const [Total, setTotal] = useState()
  
    useEffect(()=>{
      setNama(localStorage.getItem('nama'))
      setLokasi(localStorage.getItem('lokasi'))
      setPengunjung(localStorage.getItem('pengunjung'))
      setTotal(localStorage.getItem('total'))
    },[])


    return (
        <div style={{
            height:'100vh',
            width:'100vw',
            backgroundColor:'#eeeeee'
        }}>
            <div
                style={{
                    position:'relative',
                    top:'10px',
                    marginLeft:'10px'
                }}
            >
                <Link
                    href="/"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#074973" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </Link>
            </div>
            <div
                style={{
                    textAlign:'center',
                    marginTop:'35%'
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#107e42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div
                style={{
                    width:'200px',
                    marginLeft:'auto',
                    marginRight:'auto',
                    textAlign:'center',
                    marginTop:'5px'
                }}
            >
                <span
                    style={{
                        fontSize:'16px', 
                        color:'#0c7f41',
                        fontWeight:600
                    }}
                >
                    Check-In Berhasil
                </span>
            </div>
            <div
                style={{
                    padding:'30px',
                    marginTop:'5px'
                }}
            >
                <div
                    style={{
                        backgroundColor:'#FFFFFF',
                        width:'100%',
                        borderRadius:'15px',
                        padding:'15px 25px',
                        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 10px'
                    }}
                >
                    <button
                        style={{
                            width:'130px',
                            padding:'2px',
                            borderRadius:'10px',
                            border:'solid 1px black',
                            backgroundColor:'#FFFFFF',
                            marginLeft:'auto',
                            marginRight:'auto',
                            display:'block',
                            fontSize:'12px',
                            fontWeight:500,
                            color:'#080808'
                        }}
                    >
                        Check-In Sendiri
                    </button>
                    <div style={{
                        textAlign:'center',
                        margin:'10px 0'
                    }}>
                        <svg 
                            style={{
                                position:'relative',
                                top:'4px',
                                marginRight:'5px'
                            }}
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" classNameName="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span
                            style={{
                                fontSize:'18px',
                                fontWeight:'bold',
                                color:'#080808'
                            }}
                        >
                            {Lokasi}
                        </span>
                    </div>
                    <div style={{
                        textAlign:'center',
                        margin:'5px 0'
                    }}>
                        <span
                            style={{
                                fontSize:'13px',
                                fontWeight:500,
                                color:'#080808'
                            }}
                        >
                            Total Keramaian:
                        </span>
                        <span
                            style={{
                                fontSize:'13px',
                                fontWeight:700,
                                marginLeft:'5px',
                                color:'#080808'
                            }}
                        >
                            {Pengunjung}
                        </span>
                        <span
                            style={{
                                fontSize:'13px',
                                fontWeight:500,
                                color:'#080808'
                            }}
                        >
                            /
                            {Total}
                        </span>
                    </div>
                    <div
                        style={{
                            width:'100%',
                            fontSize:'13px',
                            fontWeight:800
                        }}
                    >
                        <div
                            style={{
                                width:'50%',
                                display:'inline-block',
                                textAlign:'center',
                                color:'#080808'
                            }}
                        >   
                            <svg 
                                style={{
                                    position:'relative',
                                    top:'4px',
                                    marginRight:'3px'
                                }}
                                xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            <span>
                                {GetCurrentDate()}
                            </span>
                        </div>
                        <div
                            style={{
                                width:'50%',
                                display:'inline-block',
                                textAlign:'center',
                                color:'#080808'
                            }}
                        >
                            <svg 
                                style={{
                                    position:'relative',
                                    top:'4px',
                                    marginRight:'3px'
                                }}
                                xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            <span>
                                {GetTimeAMPM()}
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            marginTop:'20px'
                        }}
                    >
                        <button
                            style={{
                                width:'100%',
                                padding:'10px',
                                fontSize:'11px',
                                fontWeight:600,
                                letterSpacing:0,
                                border:"none",
                                borderRadius:'20px',
                                backgroundColor:'#047a40',
                                color:'white'
                            }}
                        >
                            {Nama}
                        </button>        
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default CheckIn