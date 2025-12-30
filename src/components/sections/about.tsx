import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import img from '../../assets/about.png'

export default function AboutSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="about" className="py-12 xs:py-16 md:py-24 bg-card overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative flex justify-center lg:col-span-2">
            <div className="absolute inset-0 bg-primary/10 rounded-full -translate-x-4 -translate-y-4 sm:-translate-x-8 sm:-translate-y-8 scale-105 sm:scale-110 blur-2xl"></div>
            <div className="relative w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto lg:aspect-square">
              {profileImage && (
                <div className="animated-border">
                  <Image
                    src={img}
                    alt={profileImage.description}
                    width={450}
                    height={450}
                    className="rounded-full object-cover w-[190px] h-[190px] xs:w-[250px] xs:h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] border-4 border-transparent"
                    data-ai-hint={profileImage.imageHint}
                    priority
                  />
                </div>
              )}
            </div>
          </div>
          <div className="text-center lg:text-left lg:col-span-3 space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <div className="text-muted-foreground max-w-2xl mx-auto lg:mx-0 space-y-4 text-sm xs:text-base md:text-lg leading-relaxed">
              <p>
                I am a Frontend developer with 6+ years of experience in building scalable, user-friendly web applications and UI/Frontend in a startup environment. My expertise spans HTML, CSS, SASS, JavaScript, and React.js, with a strong focus on delivering seamless user experiences.
              </p>
              <p>
                Beyond frontend, I specialize in automation and AI-driven development, leveraging tools like n8n for workflow automation and Gemini AI for building intelligent, efficient, and modern applications. I also have hands-on knowledge in AWS deployment and cloud setup, enabling end-to-end development and deployment.
              </p>
              <p>
                I am passionate about scalable UI solutions, automation, and AI integration, and thrive in dynamic environments where innovation and problem-solving drive business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
