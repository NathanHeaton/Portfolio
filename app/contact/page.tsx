import Image from "next/image"

export default function Page(){
    return  (<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div >
                <section id="contact-text">
                           
                    <h1>Contact</h1>

                    
                    
                    <p>Feel free to contact me either by phone or email if you have any question about my past work or if you think my work 
                        could suit one of your projects.</p>
                    <button >
                        <a id="btn-link" href = "mailto:nathanmheaton@gmail.com?subject = Feedback&body = Message">
                        Write to me
                        </a>
                    </button>
                
                </section>
                <section id="contact-details">
                    <h2>Phone: </h2>
                    <p>+353 085 158 3350</p>
                    
                    <h2>Email:</h2>
                    <p>NathanmHeaton@gmail.com</p>
                    <section >
                        <div id="social" >
                            <a href="https://www.linkedin.com/in/nathan-heaton-478541300/" target="_blank">
                                <Image
                                 src="icons/Linkin_icon.svg" alt="linkedIn Logo"width={100} height={100}>
                                    </Image>
                            </a>
                        </div>
                        <div id="social" >
                        <a href="https://www.linkedin.com/in/nathan-heaton-478541300/" target="_blank">
                                <Image
                                 src="icons/8725846_github_alt_icon.svg" alt="linkedIn Logo"width={100} height={100}>
                                    </Image>
                            </a>
                        </div>
                    </section>        
                </section>
            </div>
    </main>

  </div>)
}