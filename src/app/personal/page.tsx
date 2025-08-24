import ArrowBtn from '../arrow-btn'
import TravelPicture from '../../../public/travel.jpg'
import T1Picture from '../../../public/t1.jpg'
import FerrariPicture from '../../../public/ferrari.jpg'
import PhotoPicture from '../../../public/photo.jpg'
import { CameraIcon, PlaneIcon, SwordsIcon, WrenchIcon } from 'lucide-react'
import InterestCard from './interest-card'

const interests = [
  {
    title: 'Travel',
    description:
      "I travel quite a bit! You'll find me most often either in my home of Atlanta, my hometown of Boston, or where I have lots of friends like NYC or Vancouver.",
    fav: 'Airports: SIN and ATL',
    icon: <PlaneIcon />,
    picture: TravelPicture,
    colour: 'bg-[#8197B7]',
  },
  {
    title: 'Esports',
    description:
      "I've been watching esports since 2014 with Call of Duty Advanced Warfare, eventually moving to CS:GO and then League of Legends. I've attended the ELEAGUE Boston Major, LoL Worlds 2023, and LoL MSI 2025!",
    fav: 'Teams: #T1WIN and 100 Thieves',
    icon: <SwordsIcon />,
    picture: T1Picture,
    colour: 'bg-[#FF2E28]',
  },
  {
    title: 'Formula 1',
    description:
      "Like many others, I started getting into the sport through Drive to Survive in 2018, but I'm not just a DTS fan I promise! I've watched the sport closely since 2022 and I love the combination of engineering skill and driver skill unique to F1! (and of course the drama heh)",
    fav: 'Drivers: YT22, AA23, MV1, LH44, SV5',
    icon: <WrenchIcon />,
    picture: FerrariPicture,
    colour: 'bg-[#5631A0]',
  },
  {
    title: 'Photography',
    description:
      "I've loved taking photos on DSLRs since my parents got one when I was five years old. I've also loved editing and colour correcting pictures since I got my own computer. More recently, I've been trying my hand at film photography!",
    fav: 'Subjects: Friends and sunsets',
    icon: <CameraIcon />,
    picture: PhotoPicture,
    colour: 'bg-[#373833]',
  },
]

export default async function PersonalPage() {
  return (
    <div className='px-6 py-2 lg:p-8 bg-grain-mobile xl:bg-grain flex flex-col text-primary'>
      <header className='space-y-8 pb-8 intersect-once intersect:motion-preset-slide-down-lg'>
        <nav className=' w-full flex justify-between'>
          <ArrowBtn href='/'>Home</ArrowBtn>
          <ArrowBtn href='/experience'>Experience</ArrowBtn>
          <ArrowBtn href='/projects'>Projects</ArrowBtn>
        </nav>
        <section className='space-y-8'>
          <h1 className='text-8xl font-semibold hidden lg:block intersect-once intersect:motion-preset-slide-up-lg'>
            nice to meet you :)
          </h1>
          <p className='font-medium text-xl lg:w-1/2'>
            I'm a full-time computer science student at Georgia State University
            while also working as a software engineer at HotSauce Technologies,
            a restaurant Point-of-Sale solutions provider. Outside of code, I
            have several interests:
          </p>
        </section>
      </header>
      <section className='w-full grid lg:grid-cols-2 gap-6'>
        {interests.map((interest) => (
          <InterestCard {...interest} key={interest.title} />
        ))}
      </section>
    </div>
  )
}
