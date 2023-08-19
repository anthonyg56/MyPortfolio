import { TypeProjectSkeleton } from '@/@types/contentfull/TypeProject'
import * as Contentful from 'contentful'
import RichText from './components/richText'
import { IAsset } from '@/@types/contentfull/Asset'
import Link from 'next/link'

const token = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN || ''
const spaceId = process.env.CONTENTFUl_SPACE_ID || ''

const client = Contentful.createClient({
  space: spaceId,
  accessToken: token as string
})

const getProject = async (slug: string) => {
  const projects = await client.getEntries<TypeProjectSkeleton>({ content_type: 'project', "fields.slug": slug })
    .then((content) => {
      const items = content.items[0]
      return items
    })
    .catch(err => console.log(err))

    return projects
}

interface Props {
  params: {
    slug: string;
  };
  searchParams: {}
}

export default async function Page(props: Props) {
  const { slug } = props.params

  const project = await getProject(slug)

  if (!project) return

  const {
    category,
    coverPhoto,
    githubRepo,
    liveUrl,
    overview,
    title,
    body,
  } = project.fields

  const bgImg = coverPhoto as IAsset

  return (
    <div>
      <div className='min-h-[50vh] bg-[50%] bg-repeat bg-cover bg-scroll items-center flex overflow-visible py-[60px] relative' style={{ backgroundImage: `url(https:${bgImg.fields.file.url})`}}>
        <div className='bg-project-overlay absolute opacity-100 h-full w-full z-[1]'></div>
        <div className='z-[100] absolute top-5'>
          <Link href="/" className='text-white z-[100] pl-[20px]'>Go Back</Link>
        </div>
        <div className='z-100 max-w-[770px] text-center flex-col items-center mb-30px mx-auto flex relative'>
          <h2 className='text-white mt-[20px] mb-[40px] z-[100]'>{title}</h2>
          <h4 className='text-white text-2xl'>{category[0]}</h4>
        </div>
      </div>

      <div className='bg-white pb-[80px] pt-[60px] relative overflow-hidden'>
        <div className='max-w-[820px] w-full mx-auto px-[15px]'>
          <div className='my-[20px]'>
            <div className='uppercase mb-[6px] z-[100] relative leading-[26px]' style={{ color: "#4f1fff" }}>Overview</div>
            <h3 className='mt-[10px] font-medium'>About the Project</h3>
          </div>
          <div className='w-full gap-x-[30px] gap-y-5 grid-rows-[auto auto auto auto] grid-cols-[1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr] auto-cols-[1fr] grid'>
            <p>{overview}</p>
            <div>
              <div>Live Website</div>
              <a href={liveUrl} className='rich-text-a'>{liveUrl}</a>
            </div>
            <div>
              <div>Github</div>
              <a href={githubRepo} className='rich-text-a'>{githubRepo}</a>
            </div>
          </div>
        </div>
      </div>

      <div className='pb-[60px] relative overflow-hidden'>
        <div className='max-w-[820px] w-full mx-auto px-[15px]'>
          <RichText description={body} />
        </div>
      </div>
    </div>
  )
}

/**
 * Generate all the static paths for projects
 * 
 * @returns 
 */
export async function generateStaticParams() {
  const listItems = await client.getEntries<TypeProjectSkeleton>({ content_type: 'project' })
  .then((contentType) => {
    const items = contentType.items
    return items
  })
  .catch(console.error)

  const data = listItems ? listItems.map(({ fields }) => ({ slug: fields.slug })) : []
  return data
}