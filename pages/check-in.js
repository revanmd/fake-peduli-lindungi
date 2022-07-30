const CheckIn = () => {
    return (
        <div style={{
            height:'100vh',
            width:'100vw',
            backgroundColor:'#eeeeee'
        }}>
            <div>Close Button</div>
            <div
                style={{
                    width:'150px',
                    marginLeft:'auto',
                    marginRight:'auto',
                    textAlign:'center'
                }}
            >
                Check-In Gagal
            </div>
            <div
                style={{
                    padding:'30px',
                    marginTop:'50%'
                }}
            >
                <div
                    style={{
                        backgroundColor:'#FFFFFF',
                        width:'100%',
                        borderRadius:'15px',
                        padding:'15px 40px',
                        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 10px'
                    }}
                >
                    <button
                        style={{
                            width:'130px',
                            padding:'3px',
                            borderRadius:'10px',
                            border:'solid 1px black',
                            backgroundColor:'#FFFFFF',
                            marginLeft:'auto',
                            marginRight:'auto',
                            display:'block',
                            fontSize:'12px',
                            fontWeight:500
                        }}
                    >
                        Check-In Sendiri
                    </button>
                    <div style={{
                        textAlign:'center',
                        margin:'10px 0'
                    }}>
                        <span
                            style={{
                                fontSize:'18px',
                                fontWeight:'bold',
                            }}
                        >
                            Mall Lippo Cikarang
                        </span>
                    </div>
                    <div style={{
                        textAlign:'center',
                        margin:'10px 0'
                    }}>
                        <span
                            style={{
                                fontSize:'13px',
                                fontWeight:500,
                            }}
                        >
                            Total Keramaian:
                        </span>
                        <span
                            style={{
                                fontSize:'13px',
                                fontWeight:700,
                                marginLeft:'5px'
                            }}
                        >
                            2124
                        </span>
                        <span
                            style={{
                                fontSize:'13px',
                                fontWeight:500,
                            }}
                        >
                            /45000
                        </span>
                    </div>
                    <div
                        style={{
                            width:'100%',
                            fontSize:'13px',
                            fontWeight:600
                        }}
                    >
                        <div
                            style={{
                                width:'50%',
                                display:'inline-block',
                                textAlign:'center'
                            }}
                        >
                            <span>
                                24 Jul 2022
                            </span>
                        </div>
                        <div
                            style={{
                                width:'50%',
                                display:'inline-block',
                                textAlign:'center'
                            }}
                        >
                            <span>
                                07:14 PM
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            marginTop:'10px'
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
                                backgroundColor:'#ffc044'
                            }}
                        >
                            Revan Muhammad Dafa
                        </button>        
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default CheckIn