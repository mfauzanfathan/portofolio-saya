import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relatuve min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mc-auto text-center z-10">
                <div className="space-y-6">
                    {/* FOTO PROFIL */}
                    <div className="flex justify-center">
                        <img
                            src="/images/foto-saya.png"
                            alt="Profile Photo"
                            className="w-40 h-40 rounded-full object-cover opacity-0 animate-fade-in"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {""}
                            Muhammad Fauzan
                        </span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
                            {""}
                            Fathan
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am a Web Developer who is driven by growth and continuous learning. I stay adaptable to the ever-evolving digital landscape and am now exploring the field of digital advertising to enhance my capabilities in delivering modern, effective digital solutions.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-1">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}