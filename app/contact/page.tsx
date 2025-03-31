import Image from "next/image"

export default function Page(){
    return  (

    <main  className="flex flex-col flex-wrap items-center justify-items-center min-h-screen md:p-8 pb-20 gap-5 ">
            <div className="mt-50 px-8 " >
                <section className="max-w-175">
                    <h1>Contact</h1>
                    <p>Feel free to contact me either by phone or email if you have any question about my past work or if you think my work 
                        could suit one of your projects.</p>
                    <button >
                        <a className="px-9 py-3 my-5 rounded-2xl flex w-fit bg-darkgreen hover:bg-energygreen hover:text-highlightblue hover:px-12 transition-all duration-1000"
                         href = "mailto:nathanmheaton@gmail.com?subject = Feedback&body = Message">
                        Write to me
                        </a>
                    </button>
                </section>
                <section className="md:flex-row flex-col flex gap-5 ">
                    <section>
                        <h2>Phone: </h2>
                        <p>+353 085 158 3350</p>
                        
                        <h2>Email:</h2>
                        <p>NathanmHeaton@gmail.com</p>
                    </section>
                    <div className="" >
                        <a className="w-[70px]" href="https://www.linkedin.com/in/nathan-heaton-478541300/" target="_blank">
                            <Image
                                src="/icons/5296501_linkedin_network_linkedin logo_icon.png" alt="linkedIn Logo"width={70} height={70}>
                                </Image>
                        </a>
                    </div>
                    <div className="" >
                    <a  className="w-[70px]" href="https://github.com/NathanHeaton" target="_blank">
                            <Image
                                src="icons/8725846_github_alt_icon.svg" alt="github logo"width={70} height={70}>
                                </Image>
                        </a>
                    </div>
            
                </section>
            </div>
    </main>
)
}