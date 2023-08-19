import Link from 'next/link'
import Image from 'next/image'
import { IAsset } from '@/@types/contentfull/Asset';

interface Props {
  slug: string;
  name: string;
  img: IAsset;
  type: ("App Development" | "Front-End Development" | "Template")[];
}

export default function ProjectItem(props: Props) {
  const { name, slug, type, img } = props
  return (
    <div className='w-full'>
      <Link href={`/${slug}`} className='w-full min-h-[300px] text-center bg-white rounded-[20px] flex-col justify-center items-center px-[30px] py-[14px] decoration-[none] flex relative overflow-hidden min-w-full md:w-auto'>
        <div className='bg-project-overlay absolute h-full w-full z-[1] hover:opacity-100 justify-center items-center md:justify-normal md:items-[initial]'></div>
        <img src={"https:" + img.fields.file.url} alt={img.fields.description} loading="lazy" width={0} height={0} className='w-full h-full object-cover absolute'/>
        <h4 className='text-white text-[22px]'>{name}</h4>
        <p className='z-[100] text-sm relative mt-2 uppercase text-white mb-[10px]'>{type}</p>
        <div className='mt-[14px] z-[100] border-solid border-[1px] border-primary-purple rounded-[500px] justify-center items-center py-[10px] px-[24px] text-sm leading-5 flex relative hover:bg-primary-purple'>
          <div className='text-white'>
            See Project
          </div>
        </div>
      </Link>
    </div>
  )
}
